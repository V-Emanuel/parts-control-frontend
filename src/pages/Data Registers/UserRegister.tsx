import { useContext, useState } from 'react';
import axios from 'axios';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import UserContext from '../../Contexts/UserContext';
import DataContext from '../../Contexts/DataContext';
import { UserRegisterStyles } from '../../styles/UserRegisterStyles';
import { api_url } from '../../assets/consts/url';

export default function UserRegister() {
  const { token, categories } = useContext(UserContext);
  const { companies } = useContext(DataContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [admin, setAdmin] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleCompany(id: number) {
    if (selectedCompanies.includes(id)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== id));
    } else {
      setSelectedCompanies([...selectedCompanies, id]);
    }
  }

  function toggleCategory(id: number) {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  async function postUser() {
    setIsSubmitting(true);

    const body = {
      name,
      email,
      password,
      admin,
      companies: selectedCompanies,
      categories: selectedCategories,
    };

    try {
      await axios.post(`${api_url}/users`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Usuário registrado com sucesso!');
      setShowModal(false);

      setName('');
      setEmail('');
      setPassword('');
      setAdmin(false);
      setSelectedCompanies([]);
      setSelectedCategories([]);
    } catch (err) {
      console.error(err);
      alert('Erro ao registrar usuário');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <UserRegisterStyles>
      <SideBar />
      <Header />
      <div className="form-content">
        <h1>Registrar Novo Usuário</h1>
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              Nome: <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          <div className="input-container">
            <label>
              Email: <strong>*</strong>
            </label>
            <input
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          <div className="input-container">
            <label>
              Senha: <strong>*</strong>
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <div className="checkbox-single input-container">
            <label>
              <input
                type="checkbox"
                checked={admin}
                onChange={() => setAdmin(!admin)}
              />
              Administrador
            </label>
          </div>

          <div className="checkbox-group input-container">
            <label className="label-title">Empresas:</label>
            {companies.map((company) => (
              <label className="label-option" key={company.id}>
                <input
                  type="checkbox"
                  disabled={admin}
                  checked={selectedCompanies.includes(company.id)}
                  onChange={() => toggleCompany(company.id)}
                />
                {company.name}
              </label>
            ))}
          </div>

          <div className="checkbox-group input-container">
            <label className="label-title">Categorias:</label>
            {categories.map((category: any) => (
              <label className="label-option" key={category.id}>
                <input
                  type="checkbox"
                  disabled={admin}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>

          <div className="btn-container">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Registrar'}
            </button>
          </div>
        </form>

        {/* Modal de confirmação */}
        {showModal && (
          <div className="modal-display">
            <div className="modal-content">
              <p>Confira os dados antes de confirmar:</p>
              <ul>
                <li>
                  <strong>Nome:</strong> {name}
                </li>
                <li>
                  <strong>Email:</strong> {email}
                </li>
                <li>
                  <strong>Administrador:</strong> {admin ? 'Sim' : 'Não'}
                </li>
                <li>
                  <strong>Empresas:</strong>{' '}
                  {admin
                    ? '—'
                    : selectedCompanies
                        .map(
                          (id) =>
                            companies.find((c) => c.id === id)?.name ?? '',
                        )
                        .join(', ') || 'Nenhuma'}
                </li>
                <li>
                  <strong>Categorias:</strong>{' '}
                  {admin
                    ? '—'
                    : selectedCategories
                        .map(
                          (id) =>
                            categories.find((c: any) => c.id === id)?.name ??
                            '',
                        )
                        .join(', ') || 'Nenhuma'}
                </li>
              </ul>
              <div className="options-btns">
                <button
                  style={{ backgroundColor: '#5ab98d' }}
                  onClick={postUser}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar'}
                </button>
                <button
                  style={{ backgroundColor: '#fe5455' }}
                  onClick={() => setShowModal(false)}
                  disabled={isSubmitting}
                >
                  Corrigir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserRegisterStyles>
  );
}
