import { useContext, useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import { OrderRegisterStyles } from '../styles/OrderRegisterStyles';
import Header from '../components/Header/Header';
import UserContext from '../Contexts/UserContext';

export default function OrderRegister() {
  const [osOrc, setOsOrc] = useState('');
  // const [orderDate, setOrderDate] = useState('');
  // const [userId, setUserId] = useState('');
  const [client, setClient] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const { companySelect } = useContext(UserContext);

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    console.log('foi');
  }

  return (
    <OrderRegisterStyles>
      <SideBar />
      <Header />
      <div className="form-content">
        <h1>Cadastrar Novo Pedido</h1>
        <form className="order-form" onSubmit={handleOrder}>
          <div className="type-date input-container">
            <label>
              Empresa: <strong>*</strong>
            </label>
            <input
              type="text"
              value={companySelect?.name}
              required
              disabled={true}
            />
          </div>
          <div className="type-date input-container">
            <label>
              OsOrc: <strong>*</strong>
            </label>
            <input
              type="number"
              placeholder="os-orc"
              value={osOrc}
              onChange={(e) => setOsOrc(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Cliente: <strong>*</strong>
            </label>
            <input
              type="string"
              placeholder="cliente"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Modelo: <strong>*</strong>
            </label>
            <input
              type="number"
              placeholder="modelo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Quantidade: <strong>*</strong>
            </label>
            <input
              type="number"
              placeholder="quantidade"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Descrição: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </OrderRegisterStyles>
  );
}
