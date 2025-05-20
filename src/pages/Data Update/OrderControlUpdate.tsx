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

export default function StockControlUpdate() {
  const [nf, setNf] = useState('');
  const [nf_date, setNfDate] = useState('');
  const [accuracy_date, setAccuracy_date] = useState('');
  const [entry_date, setEntry_date] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { orderid } = useParams();
  const parsedOrderid = orderid ? parseInt(orderid) : null;
  const { token } = useContext(UserContext);
  const { mergedData } = useContext(DataContext);

  useEffect(() => {
    if (!parsedOrderid || !mergedData) return;

    const order = mergedData.find((item) => item.id === parsedOrderid);
    const stock = order?.stockControl;

    if (stock) {
      setNf(stock.nf || '');
      setNfDate(stock.nfDate?.slice(0, 10) || '');
      setAccuracy_date(stock.accuracyDate?.slice(0, 10) || '');
      setEntry_date(stock.entryDate?.slice(0, 10) || '');
    }
  }, [parsedOrderid, mergedData]);

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  function postOrder() {
    setIsSubmitting(true);

    const body = {
      nf,
      nf_date,
      accuracy_date,
      entry_date,
      order_data_id: parsedOrderid,
    };

    axios
      .post(`${api_url}/stockcontrol/${orderid}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setShowModal(false);
        alert('Controle de Estoque atualizado com Sucesso!');
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setShowModal(false);
        alert('Erro ao atualizar Controle de Estoque');
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
        <h1>Atualizar Controle de Entrada Estoque</h1>
        <form className="order-form" onSubmit={handleOrder}>
          <div className="type-date input-container">
            <label>
              NF: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="número"
              value={nf}
              onChange={(e) => setNf(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Data da NF: <strong>*</strong>
            </label>
            <input
              type="date"
              value={nf_date}
              onChange={(e) => setNfDate(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Previsão: <strong>*</strong>
            </label>
            <input
              type="date"
              value={accuracy_date}
              onChange={(e) => setAccuracy_date(e.target.value)}
              required
            />
          </div>

          <div className="type-date input-container">
            <label>
              Data de Entrada: <strong>*</strong>
            </label>
            <input
              type="date"
              value={entry_date}
              onChange={(e) => setEntry_date(e.target.value)}
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
                  <strong>NF:</strong> {nf}
                </li>
                <li>
                  <strong>Data da NF:</strong> {formatDate(nf_date)}
                </li>
                <li>
                  <strong>Previsão:</strong> {formatDate(accuracy_date)}
                </li>
                <li>
                  <strong>Data de entrada:</strong> {formatDate(entry_date)}
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
