import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { UserStyles } from '../../styles/UsersStyles';
import { HomeStyles } from '../../styles/HomeStyles';
import { useContext } from 'react';
import DataContext from '../../Contexts/DataContext';
import { Link } from 'react-router-dom';

export default function Users() {
  const { users } = useContext(DataContext);

  return (
    <HomeStyles>
      <SideBar />
      <Header />
      <UserStyles>
        <div className="users-title">
          <p>Usuários</p>
          <div className="underline"></div>
        </div>
        <ul className="users-list">
          {users.map((user) => (
            <Link
              to="/"
              key={user.id}
              className={`user-div ${!user.active ? 'inactive' : ''}`}
            >
              <h1 className="user-name">{user.fullName}</h1>
              <h2 className="user-email">{user.email}</h2>

              {Boolean(user.admin) ? (
                <div className="user-admin">
                  <span>⭐</span> Administrador
                </div>
              ) : (
                <>
                  <div className="info-block">
                    <h3>📂 Categorias</h3>
                    <div className="tag-list">
                      {user.categories.map((cat: any) => (
                        <span className="tag" key={cat.id}>
                          {cat.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="info-block">
                    <h3>🏢 Empresas</h3>
                    <div className="tag-list">
                      {user.companies.map((com: any) => (
                        <span className="tag" key={com.id}>
                          {com.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Link>
          ))}
        </ul>
      </UserStyles>
    </HomeStyles>
  );
}
