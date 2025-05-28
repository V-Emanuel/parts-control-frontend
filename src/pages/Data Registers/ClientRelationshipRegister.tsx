import { useContext, useState } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import { OrderRegisterStyles } from '../../styles/OrderRegisterStyles';
import Header from '../../components/Header/Header';
import UserContext from '../../Contexts/UserContext';
import { formatDate } from '../../assets/functions/formatData';
import { api_url } from '../../assets/consts/url';
import { useParams } from 'react-router-dom';

export default function ClientRelationshipRegister() {
  const [first_contact, setFirst_contact] = useState('');
  const [second_contact, setSecond_contact] = useState<any>(null);
  const [third_contact, setThird_contact] = useState<any>(null);
  const [agenda_date, setAgenda_date] = useState<any>(null);
  const [application_date, setApplication_date] = useState<any>(null);
  const [observations, setObservations] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { orderid } = useParams();
  const parsedOrderid = orderid ? parseInt(orderid) : null;
  const { token } = useContext(UserContext);

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function postOrder() {
    setIsSubmitting(true);

    const body = {
      first_contact,
      second_contact,
      third_contact,
      agenda_date,
      application_date,
      observations,
      order_data_id: parsedOrderid,
    };

    axios
      .post(`${api_url}/clientrelationship`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setShowModal(false);
        alert('Registro de Atendimento adicionado com Sucesso!');
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setShowModal(false);
        alert('Erro ao Adicionar Registro de Atendimento');
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
        <h1>Registro de Atendimento com Cliente</h1>
        <form className="order-form" onSubmit={handleOrder}>
          <div className="type-date input-container">
            <label>
              Primeiro Contato: <strong>*</strong>
            </label>
            <input
              type="date"
              value={first_contact}
              onChange={(e) => setFirst_contact(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Segundo Contato: <strong></strong>
            </label>
            <input
              type="date"
              value={second_contact}
              onChange={(e) => setSecond_contact(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>
              Terceiro Contato: <strong></strong>
            </label>
            <input
              type="date"
              value={third_contact}
              onChange={(e) => setThird_contact(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>
              Data Agenda: <strong></strong>
            </label>
            <input
              type="date"
              value={agenda_date}
              onChange={(e) => setAgenda_date(e.target.value)}
            />
          </div>

          <div className="type-date input-container">
            <label>
              Data de Aplicação: <strong></strong>
            </label>
            <input
              type="date"
              value={application_date}
              onChange={(e) => setApplication_date(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>
              Observações: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="texto"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <button type="submit">ADICIONAR</button>
          </div>
        </form>

        {/* Modal de Confirmação */}
        {showModal && (
          <div className="modal-display">
            <div className="modal-content">
              <p>VERIFIQUE OS DADOS ANTES DE CONFIRMAR:</p>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <strong>Primeiro Contato:</strong> {formatDate(first_contact)}
                </li>
                <li>
                  <strong>Segundo Contato:</strong> {formatDate(second_contact)}
                </li>
                <li>
                  <strong>Terceiro Contato:</strong> {formatDate(third_contact)}
                </li>
                <li>
                  <strong>Data Agenda:</strong> {formatDate(agenda_date)}
                </li>
                <li>
                  <strong>Data Aplicação:</strong>{' '}
                  {formatDate(application_date)}
                </li>
                <li>
                  <strong>Observações:</strong> {observations}
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
