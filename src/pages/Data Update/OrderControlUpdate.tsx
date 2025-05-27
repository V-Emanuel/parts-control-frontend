import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import { OrderRegisterStyles } from '../../styles/OrderRegisterStyles';
import { useParams } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import DataContext from '../../Contexts/DataContext';
import { formatDate } from '../../assets/functions/formatData';
import { api_url } from '../../assets/consts/url';

export default function OrderControlUpdate() {
  const { orderid } = useParams();
  const parsedOrderid = orderid ? parseInt(orderid) : null;
  const [orderControlId, setOrderControlId] = useState('');
  const [shipping_date, setShippingDate] = useState('');
  const [num, setNum] = useState('');
  const [type_id, setTypeId] = useState('');
  const [branch_order, setBranchOrder] = useState('');
  const [guarantee, setGuarantee] = useState('');
  const [status_id, setStatusId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { types, statuses, mergedData } = useContext(DataContext);
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (parsedOrderid && mergedData) {
      const item = mergedData.find((data) => data.id === parsedOrderid);
      if (item && item.orderControl) {
        const oc = item.orderControl;
        setShippingDate(oc.shippingDate || '');
        setNum(oc.num ? oc.num.toString() : '');
        setTypeId(oc.typeId ? oc.typeId.toString() : '');
        setBranchOrder(oc.branchOrder || '');
        setGuarantee(oc.guarantee || '');
        setStatusId(oc.statusId ? oc.statusId.toString() : '');
        setOrderControlId(oc.id);
      }
    }
  }, [parsedOrderid, mergedData]);

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function updateOrder() {
    setIsSubmitting(true);

    const body = {
      shipping_date,
      num: num !== '' ? Number(num) : null,
      type_id: Number(type_id),
      branch_order: branch_order || null,
      guarantee,
      status_id: status_id !== '' ? Number(status_id) : null,
      order_data_id: parsedOrderid,
    };

    axios
      .put(`${api_url}/ordercontrol/${orderControlId}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setShowModal(false);
        alert('Controle de Pedido atualizado com sucesso!');
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setShowModal(false);
        alert('Erro ao atualizar o pedido');
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <OrderRegisterStyles>
      <SideBar />
      <Header />
      <div className="form-content">
        <h1>Atualizar Controle de Pedido</h1>
        <form className="order-form" onSubmit={handleOrder}>
          <div className="type-date input-container">
            <label>Data de Envio:</label>
            <input
              type="date"
              value={shipping_date}
              onChange={(e) => setShippingDate(e.target.value)}
            />
          </div>

          <div className="type-date input-container">
            <label>Nº: *</label>
            <input
              type="number"
              placeholder="número"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </div>

          <div className="type-date input-container">
            <label>Tipo: *</label>
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
            <label>Pedido Filial:</label>
            <input
              type="text"
              placeholder="filial"
              value={branch_order}
              onChange={(e) => setBranchOrder(e.target.value)}
            />
          </div>

          <div className="type-date input-container">
            <label>Garantia: *</label>
            <select
              value={guarantee}
              onChange={(e) => setGuarantee(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="SIM">SIM</option>
              <option value="NÃO">NÃO</option>
            </select>
          </div>

          <div className="type-date input-container">
            <label>Status:</label>
            <select
              value={status_id}
              onChange={(e) => setStatusId(e.target.value)}
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
            <button type="submit">ATUALIZAR</button>
          </div>
        </form>

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
                  <strong>Tipo:</strong>{' '}
                  {types.find((i) => i.id === parseInt(type_id))?.name}
                </li>
                <li>
                  <strong>Pedido Filial:</strong> {branch_order}
                </li>
                <li>
                  <strong>Garantia:</strong> {guarantee}
                </li>
                <li>
                  <strong>Status:</strong>{' '}
                  {statuses.find((i) => i.id === parseInt(status_id))?.name}
                </li>
              </ul>
              <div className="options-btns">
                <button
                  onClick={updateOrder}
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#5ab98d' }}
                >
                  {isSubmitting ? 'Atualizando...' : 'Confirmar'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ backgroundColor: '#fe5455' }}
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
