import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import { OrderRegisterStyles } from '../../styles/OrderRegisterStyles';
import Header from '../../components/Header/Header';
import UserContext from '../../Contexts/UserContext';
import DataContext from '../../Contexts/DataContext';
import { formatDate } from '../../assets/functions/formatData';
import { api_url } from '../../assets/consts/url';
import { useParams } from 'react-router-dom';

export default function ClientRelationshipUpdate() {
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
  const [clientRelationshipId, setClientRelationshipId] = useState('');
  const { token } = useContext(UserContext);
  const { mergedData } = useContext(DataContext);

  useEffect(() => {
    if (!parsedOrderid || !mergedData) return;

    const order = mergedData.find((item) => item.id === parsedOrderid);
    const relationship = order?.clientRelationship;

    if (relationship) {
      setClientRelationshipId(relationship.id);
      setFirst_contact(relationship.firstContact?.slice(0, 10) || '');
      setSecond_contact(relationship.secondContact?.slice(0, 10) || '');
      setThird_contact(relationship.thirdContact?.slice(0, 10) || '');
      setAgenda_date(relationship.agendaDate?.slice(0, 10) || '');
      setApplication_date(relationship.applicationDate?.slice(0, 10) || '');
      setObservations(relationship.observations || '');
    }
  }, [parsedOrderid, mergedData]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function updateRelationship() {
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
      .put(`${api_url}/clientrelationship/${clientRelationshipId}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setShowModal(false);
        alert('Registro de Atendimento atualizado com Sucesso!');
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setShowModal(false);
        alert('Erro ao atualizar Registro de Atendimento');
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
        <h1>Atualizar Registro de Atendimento</h1>
        <form className="order-form" onSubmit={handleSubmit}>
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
            <label>Segundo Contato:</label>
            <input
              type="date"
              value={second_contact || ''}
              onChange={(e) => setSecond_contact(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>Terceiro Contato:</label>
            <input
              type="date"
              value={third_contact || ''}
              onChange={(e) => setThird_contact(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>Data da Agenda:</label>
            <input
              type="date"
              value={agenda_date || ''}
              onChange={(e) => setAgenda_date(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>Data da Aplicação:</label>
            <input
              type="date"
              value={application_date || ''}
              onChange={(e) => setApplication_date(e.target.value)}
            />
          </div>
          <div className="type-date input-container">
            <label>
              Observações: <strong>*</strong>
            </label>
            <input
              type="text"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              required
            />
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
                  <strong>Primeiro Contato:</strong> {formatDate(first_contact)}
                </li>
                <li>
                  <strong>Segundo Contato:</strong> {formatDate(second_contact)}
                </li>
                <li>
                  <strong>Terceiro Contato:</strong> {formatDate(third_contact)}
                </li>
                <li>
                  <strong>Data da Agenda:</strong> {formatDate(agenda_date)}
                </li>
                <li>
                  <strong>Data da Aplicação:</strong>{' '}
                  {formatDate(application_date)}
                </li>
                <li>
                  <strong>Observações:</strong> {observations}
                </li>
              </ul>
              <div className="options-btns">
                <button
                  style={{ backgroundColor: '#5ab98d' }}
                  onClick={updateRelationship}
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
