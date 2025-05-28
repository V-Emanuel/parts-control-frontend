import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import { UserStyles } from '../../styles/UsersStyles';
import { HomeStyles } from '../../styles/HomeStyles';
import { useContext } from 'react';
import DataContext from '../../Contexts/DataContext';
import { Link } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';

export default function Users() {
  const { users } = useContext(DataContext);
  const { userId } = useContext(UserContext);

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
          {users
            .filter((user) => user.id === Number(userId))
            .map((user) => (
              <Link
                to={`/usuarios/${user.id}`}
                key={user.id}
                className={`user-div ${!user.active ? 'inactive' : ''}`}
              >
                <h1 className="user-name">
                  {user.fullName}
                  <strong>{`(você)`}</strong>
                </h1>
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
                        {user.categories
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name),
                          )
                          .map((cat: any) => (
                            <span className="tag" key={cat.id}>
                              {cat.name}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="info-block">
                      <h3>🏢 Empresas</h3>
                      <div className="tag-list">
                        {user.companies
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name),
                          )
                          .map((com: any) => (
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

          {users
            .filter(
              (user) =>
                user.id !== Number(userId) && Boolean(user.active) === true,
            )
            .sort((a, b) => a.fullName.localeCompare(b.fullName))
            .map((user) => (
              <Link
                to={`/usuarios/${user.id}`}
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
                        {user.categories
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name),
                          )
                          .map((cat: any) => (
                            <span className="tag" key={cat.id}>
                              {cat.name}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="info-block">
                      <h3>🏢 Empresas</h3>
                      <div className="tag-list">
                        {user.companies
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name),
                          )
                          .map((com: any) => (
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
          {users
            .filter(
              (user) =>
                user.id !== Number(userId) && Boolean(user.active) !== true,
            )
            .sort((a, b) => a.fullName.localeCompare(b.fullName))
            .map((user) => (
              <Link
                to={`/usuarios/${user.id}`}
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
                        {user.categories
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name),
                          )
                          .map((cat: any) => (
                            <span className="tag" key={cat.id}>
                              {cat.name}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="info-block">
                      <h3>🏢 Empresas</h3>
                      <div className="tag-list">
                        {user.companies
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name),
                          )
                          .map((com: any) => (
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
