import { useContext, useState } from 'react';
import axios from 'axios';
import SideBar from '../components/SideBar/SideBar';
import { OrderRegisterStyles } from '../styles/OrderRegisterStyles';
import Header from '../components/Header/Header';
import UserContext from '../Contexts/UserContext';
import { formatDate } from '../assets/functions/formatData';
import { api_url } from '../assets/consts/url';
import DataContext from '../Contexts/DataContext';

export default function OrderControlRegister() {
  const [shipping_date, setShippingDate] = useState('');
  const [num, setNum] = useState('');
  const [type_id, setTypeId] = useState('');
  const [branch_order, setBranchOrder] = useState('');
  const [guarantee, setGuarantee] = useState('');
  const [status_id, setStatusId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { types, statuses } = useContext(DataContext);
  const { userId, token } = useContext(UserContext);
  const parsedUserId = userId ? parseInt(userId) : null;

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function postOrder() {
    setIsSubmitting(true);

    const body = {
      num,
      type_id,
      branch_order,
      guarantee,
      status_id,
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
        <h1>Cadastrar Novo Controle de Pedido</h1>
        <form className="order-form" onSubmit={handleOrder}>
          <div className="type-date input-container">
            <label>
              Data de Envio: <strong>*</strong>
            </label>
            <input
              type="date"
              value={shipping_date}
              onChange={(e) => setShippingDate(e.target.value)}
              required
            />
          </div>

          <div className="type-date input-container">
            <label>
              Nº: <strong>*</strong>
            </label>
            <input
              type="number"
              placeholder="os-orc"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </div>

          <div className="type-date input-container">
            <label>
              Tipo: <strong>*</strong>
            </label>
            <select
              value={type_id}
              onChange={(e) => setTypeId(e.target.value)}
              required
            >
              <option value="">Selecione um tipo</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="type-date input-container">
            <label>
              Pedido Filial: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="modelo"
              value={branch_order}
              onChange={(e) => setBranchOrder(e.target.value)}
              required
            />
          </div>

          <div className="type-date input-container">
            <label>
              Garantia: <strong>*</strong>
            </label>
            <select
              value={guarantee}
              onChange={(e) => setGuarantee(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>

          <div className="type-date input-container">
            <label>
              Status: <strong>*</strong>
            </label>
            <select
              value={status_id}
              onChange={(e) => setStatusId(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              {statuses.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
          <div className="btn-container">
            <button type="submit">Adicionar</button>
          </div>
        </form>

        {/* Modal de Confirmação */}
        {showModal && (
          <div className="modal-display">
            <div className="modal-content">
              <p>VERIFIQUE OS DADOS ANTES DE CONFIRMAR:</p>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <strong>Data de Envio:</strong> {formatDate(shipping_date)}
                </li>
                <li>
                  <strong>Número:</strong> {num}
                </li>
                <li>
                  <strong>Tipo</strong>{' '}
                  {types.find((i) => i.id === type_id)?.name}
                </li>
                <li>
                  <strong>Pedido Filial:</strong> {branch_order}
                </li>
                <li>
                  <strong>Garantia:</strong> {guarantee}
                </li>
                <li>
                  <strong>Status do Pedido:</strong>{' '}
                  {statuses.find((i) => i.id === status_id)?.name}
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
