import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { OrderStyles } from '../styles/OrderStyles';
import { useContext, useEffect, useState } from 'react';
import { UserStyles } from '../styles/UserStyles';
import UserContext from '../Contexts/UserContext';
import { api_url } from '../assets/consts/url';
import axios from 'axios';
import {
  ModalBackdrop,
  ModalContainer,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalSelect,
  ModalButtonGroup,
  ModalButton,
} from '../styles/ModalStyles';
import DataContext from '../Contexts/DataContext';

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    fullName: '',
    email: '',
    password: '',
    admin: false,
    active: true,
    companyIds: [] as number[],
    categoryIds: [] as number[],
  });

  const { token, categories } = useContext(UserContext);
  const { companies } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${api_url}/users/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(url, config)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert('Usuário não encontrado');
        navigate('/usuarios');
        console.error(err);
      });
  }, [id, token, navigate]);

  useEffect(() => {
    if (user) {
      setUpdatedUser({
        fullName: user.fullName || '',
        email: user.email || '',
        password: '',
        admin: user.admin || false,
        active: user.active ?? true,
        companyIds: user.companies?.map((c: any) => c.id) || [],
        categoryIds: user.categories?.map((c: any) => c.id) || [],
      });
    }
  }, [user]);

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    axios
      .put(`${api_url}/users/${id}`, updatedUser, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert('Usuário atualizado com sucesso!');
        setUser(res.data);
        setShowModal(false);
        navigate(`/usuarios`);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao atualizar usuário');
        window.location.reload();
      });
  }

  return (
    <OrderStyles>
      <SideBar />
      {!user ? (
        <p>Carregando...</p>
      ) : (
        <UserStyles>
          <div className="user-card">
            <p>
              <strong>Usuário:</strong> {user.fullName}
            </p>
            <h6>{user.email}</h6>

            {user.admin ? (
              <h1>Administrador</h1>
            ) : (
              <>
                <h1>Empresas:</h1>
                <ul>
                  {user.companies.map((c: any) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
                </ul>
                <h1>Categorias:</h1>
                <ul>
                  {user.categories.map((c: any) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <ModalButton
            style={{ backgroundColor: '#5ab98d' }}
            onClick={() => setShowModal(true)}
          >
            Atualizar
          </ModalButton>
          {showModal && (
            <ModalBackdrop>
              <ModalContainer>
                <ModalTitle>Atualizar Usuário</ModalTitle>
                <ModalForm onSubmit={handleUpdate}>
                  <ModalLabel>Nome Completo:</ModalLabel>
                  <ModalInput
                    value={updatedUser.fullName}
                    onChange={(e) =>
                      setUpdatedUser({
                        ...updatedUser,
                        fullName: e.target.value,
                      })
                    }
                  />

                  <ModalLabel>Email:</ModalLabel>
                  <ModalInput
                    type="email"
                    value={updatedUser.email}
                    onChange={(e) =>
                      setUpdatedUser({ ...updatedUser, email: e.target.value })
                    }
                  />

                  <ModalLabel>Senha:</ModalLabel>
                  <ModalInput
                    type="password"
                    value={updatedUser.password}
                    onChange={(e) =>
                      setUpdatedUser({
                        ...updatedUser,
                        password: e.target.value,
                      })
                    }
                  />

                  <ModalLabel>Admin:</ModalLabel>
                  <ModalSelect
                    value={updatedUser.admin ? 'true' : 'false'}
                    onChange={(e) =>
                      setUpdatedUser({
                        ...updatedUser,
                        admin: e.target.value === 'true',
                      })
                    }
                  >
                    <option value="false">Usuário comum</option>
                    <option value="true">Administrador</option>
                  </ModalSelect>

                  <ModalLabel>Empresas:</ModalLabel>
                  <div>
                    {companies.map((company: any) => (
                      <label
                        key={company.id}
                        style={{
                          display: 'block',
                          marginBottom: '4px',
                          opacity: updatedUser.admin ? 0.5 : 1,
                        }}
                      >
                        <input
                          type="checkbox"
                          value={company.id}
                          checked={updatedUser.companyIds.includes(company.id)}
                          disabled={updatedUser.admin}
                          onChange={(e) => {
                            const id = Number(e.target.value);
                            const isChecked = e.target.checked;
                            setUpdatedUser((prev) => ({
                              ...prev,
                              companyIds: isChecked
                                ? [...prev.companyIds, id]
                                : prev.companyIds.filter((cid) => cid !== id),
                            }));
                          }}
                        />
                        {company.name}
                      </label>
                    ))}
                  </div>

                  <ModalLabel>Categorias:</ModalLabel>
                  <div>
                    {categories.map((category: any) => (
                      <label
                        key={category.id}
                        style={{
                          display: 'block',
                          marginBottom: '4px',
                          opacity: updatedUser.admin ? 0.5 : 1,
                        }}
                      >
                        <input
                          type="checkbox"
                          value={category.id}
                          checked={updatedUser.categoryIds.includes(
                            category.id,
                          )}
                          disabled={updatedUser.admin}
                          onChange={(e) => {
                            const id = Number(e.target.value);
                            const isChecked = e.target.checked;
                            setUpdatedUser((prev) => ({
                              ...prev,
                              categoryIds: isChecked
                                ? [...prev.categoryIds, id]
                                : prev.categoryIds.filter((cid) => cid !== id),
                            }));
                          }}
                        />
                        {category.name}
                      </label>
                    ))}
                  </div>
                  <ModalLabel>Usuário Ativo:</ModalLabel>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={updatedUser.active}
                      onChange={(e) =>
                        setUpdatedUser({
                          ...updatedUser,
                          active: e.target.checked,
                        })
                      }
                    />
                    {updatedUser.active ? 'Ativo' : 'Desativado'}
                  </label>

                  <ModalButtonGroup>
                    <ModalButton
                      type="button"
                      variant="cancel"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </ModalButton>
                    <ModalButton type="submit" variant="submit">
                      Salvar
                    </ModalButton>
                  </ModalButtonGroup>
                </ModalForm>
              </ModalContainer>
            </ModalBackdrop>
          )}
        </UserStyles>
      )}
      <Header />
    </OrderStyles>
  );
}
