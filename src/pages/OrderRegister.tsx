import { useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import { OrderRegisterStyles } from '../styles/OrderRegisterStyles';
import { companies, types, statuses } from '../assets/consts/data_test';

export default function OrderRegister() {
  const [companyId, setCompanyId] = useState('');
  const [osOrc, setOsOrc] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [userId, setUserId] = useState('');
  const [client, setClient] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shippingDate, setShippingDate] = useState('');
  const [num, setNum] = useState('');
  const [typeId, setTypeId] = useState('');
  const [branchOrder, setBranchOrder] = useState('');
  const [guarantee, setGuarantee] = useState('');
  const [pendingDays, setPendingDays] = useState('');
  const [statusId, setStatusId] = useState('');
  const [nf, setNf] = useState('');
  const [nfDate, setNfDate] = useState('');
  const [accuracyDate, setAccuracyDate] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [daysTt, setDaysTt] = useState('');
  const [daysStock, setDaysStock] = useState('');
  const [firstContact, setFirstContact] = useState('');
  const [secondContact, setSecondContact] = useState('');
  const [thirdContact, setThirdContact] = useState('');
  const [agendaDate, setAgendaDate] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [observations, setObservations] = useState('');

  function handleOrder(e: React.FormEvent) {
    e.preventDefault();
    console.log('foi');
  }

  return (
    <OrderRegisterStyles>
      <SideBar />
      <div className="form-content">
        <h1>Cadastrar Novo Pedido</h1>
        <form className="order-form" onSubmit={handleOrder}>
          <div className="type-date input-container">
            <label>
              Empresa: <strong>*</strong>
            </label>
            <select
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.code}
                </option>
              ))}
            </select>
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
          <div className="type-date input-container">
            <label>
              Data do Pedido: <strong>*</strong>
            </label>
            <input
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Data de Envio: <strong>*</strong>
            </label>
            <input
              type="date"
              value={shippingDate}
              onChange={(e) => setShippingDate(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Número: <strong>*</strong>
            </label>
            <input
              type="number"
              placeholder="número"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Tipo: <strong>*</strong>
            </label>
            <select
              value={typeId}
              onChange={(e) => setTypeId(e.target.value)}
              required
            >
              <option value="">Selecione</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <label>
              Pedido Filial: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="filial"
              value={branchOrder}
              onChange={(e) => setBranchOrder(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Garantia: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="garantia"
              value={guarantee}
              onChange={(e) => setGuarantee(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Dias Pendentes: <strong>*</strong>
            </label>
            <input
              type="number"
              value={pendingDays}
              onChange={(e) => setPendingDays(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Status: <strong>*</strong>
            </label>
            <select
              value={statusId}
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
          <div className="input-container">
            <label>
              NF: <strong>*</strong>
            </label>
            <input
              type="text"
              value={nf}
              onChange={(e) => setNf(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Data NF: <strong>*</strong>
            </label>
            <input
              type="date"
              value={nfDate}
              onChange={(e) => setNfDate(e.target.value)}
              required
            />
          </div>
          <div className="type-date  input-container">
            <label>
              Previsão: <strong>*</strong>
            </label>
            <input
              type="date"
              value={accuracyDate}
              onChange={(e) => setAccuracyDate(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Data de Entrada: <strong>*</strong>
            </label>
            <input
              type="date"
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
              required
            />
          </div>
          <div className="type-date input-container">
            <label>
              Dias TT: <strong>*</strong>
            </label>
            <input
              type="number"
              value={daysTt}
              onChange={(e) => setDaysTt(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Dias Estoque: <strong>*</strong>
            </label>
            <input
              type="number"
              value={daysStock}
              onChange={(e) => setDaysStock(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Primeiro Contato: <strong>*</strong>
            </label>
            <input
              type="date"
              value={firstContact}
              onChange={(e) => setFirstContact(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Segundo Contato: <strong>*</strong>
            </label>
            <input
              type="date"
              value={secondContact}
              onChange={(e) => setSecondContact(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Terceiro Contato: <strong>*</strong>
            </label>
            <input
              type="date"
              value={thirdContact}
              onChange={(e) => setThirdContact(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Data Agenda: <strong>*</strong>
            </label>
            <input
              type="date"
              value={agendaDate}
              onChange={(e) => setAgendaDate(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Data da Aplicação: <strong>*</strong>
            </label>
            <input
              type="date"
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>
              Observações: <strong>*</strong>
            </label>
            <input
              type="number"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              required
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </OrderRegisterStyles>
  );
}
