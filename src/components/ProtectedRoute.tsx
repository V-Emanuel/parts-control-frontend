import { useContext, useEffect } from 'react';
import UserContext from '../Contexts/UserContext';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { api_url } from '../assets/consts/url';

export default function ProtectedRoute() {
  const { token, setTokenLS, setNameLS } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function validateToken() {
      if (!token) {
        return;
      }

      try {
        const res = await axios.get(`${api_url}/validate-token`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNameLS(res.data.fullName);
      } catch (err) {
        localStorage.removeItem('token');
        setTokenLS('');
      }
    }

    validateToken();
  }, [token, setTokenLS, setNameLS]);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, setTokenLS, setNameLS]);

  return <Outlet />;
}
