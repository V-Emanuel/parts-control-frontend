import { useContext, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar/SideBar';
import { OrderRegisterStyles } from '../styles/OrderRegisterStyles';
import Header from '../components/Header/Header';
import UserContext from '../Contexts/UserContext';
import { formatDate } from '../assets/functions/formatData';
import { api_url } from '../assets/consts/url';

export default function OrderRegister() {
  const [os_orc, setOs_orc] = useState('');
  const [order_date, setorder_date] = useState('');
  const [client, setClient] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { companySelect, userId, token } = useContext(UserContext);
  const parsedUserId = userId ? parseInt(userId) : null;

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function postOrder() {
    setIsSubmitting(true);

    const body = {
      os_orc,
      order_date,
      client,
      model,
      description,
      quantity,
      company_id: companySelect?.id,
      user_id: parsedUserId,
    };

    axios
      .post(`${api_url}/orderdata`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert('Pedido Cadastrado com Sucesso!');
        setShowModal(false);
      })
      .catch((err) => {
        console.error(err);
        setShowModal(false);
        alert('Erro ao cadastrar pedido');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
              disabled
              className="company-input"
            />
          </div>

          <div className="type-date input-container">
            <label>
              os_orc: <strong>*</strong>
            </label>
            <input
              type="number"
              placeholder="os-orc"
              value={os_orc}
              onChange={(e) => setOs_orc(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label>
              Cliente: <strong>*</strong>
            </label>
            <input
              type="text"
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
              type="text"
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

          <div className="type-date input-container">
            <label>
              Data do Pedido: <strong>*</strong>
            </label>
            <input
              type="date"
              value={order_date}
              onChange={(e) => setorder_date(e.target.value)}
              required
            />
          </div>

          <div className="btn-container">
            <button type="submit">CADASTRAR</button>
          </div>
        </form>

        {/* Modal de Confirmação */}
        {showModal && (
          <div className="modal-display">
            <div className="modal-content">
              <p>VERIFIQUE OS DADOS ANTES DE CONFIRMAR:</p>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <strong>Empresa:</strong> {companySelect?.name}
                </li>
                <li>
                  <strong>os_orc:</strong> {os_orc}
                </li>
                <li>
                  <strong>Cliente:</strong> {client}
                </li>
                <li>
                  <strong>Modelo:</strong> {model}
                </li>
                <li>
                  <strong>Quantidade:</strong> {quantity}
                </li>
                <li>
                  <strong>Descrição:</strong> {description}
                </li>
                <li>
                  <strong>Data:</strong> {formatDate(order_date)}
                </li>
              </ul>
              <div className="options-btns">
                <button
                  style={{ backgroundColor: '#5ab98d' }}
                  onClick={postOrder}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar'}
                </button>
                <button
                  style={{ backgroundColor: '#fe5455' }}
                  onClick={() => setShowModal(false)}
                >
                  Corrigir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </OrderRegisterStyles>
  );
}
