import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { OrderStyles } from '../styles/OrderStyles';
import { useContext, useEffect, useState } from 'react';
import { UserStyles } from '../styles/UserStyles';
import UserContext from '../Contexts/UserContext';
import { api_url } from '../assets/consts/url';
import axios from 'axios';

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState<any>([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${api_url}/users/${id}`;
    const connfig = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const promise = axios.get(url, connfig);
    promise.then((res) => {
      setUser(res.data);
    });
    promise.catch((err) => {
      alert('Usuário não encontrado');
      navigate('/usuarios');
      console.log(err);
    });
  }, [id]);

  console.log('usuario aq po', user);

  return (
    <OrderStyles>
      <SideBar />
      <UserStyles>
        <p>Usuário: {user.fullName}</p>
      </UserStyles>
      <Header />
    </OrderStyles>
  );
}
