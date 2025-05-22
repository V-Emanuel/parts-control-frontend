import { Link, useLocation } from 'react-router-dom';
import { HeaderStyles } from './HeaderStyles';
import { FaSquarePlus } from 'react-icons/fa6';
import { useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
import DataContext from '../../Contexts/DataContext';

export default function Header() {
  const { companySelect, setCompanySelectLS, categories } =
    useContext(UserContext);
  const { companies } = useContext(DataContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCompany = companies.find(
      (el) => el.id === parseInt(e.target.value),
    );

    setCompanySelectLS(selectedCompany);
  };
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <HeaderStyles>
      <p>{`Controle de Peças`}</p>
      {isDashboard && (
        <select className="company-select" onChange={handleChange}>
          <option selected value="">
            {companySelect?.name || 'Selecione'}
          </option>
          {companies
            .filter((company) => company.id !== companySelect?.id)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
        </select>
      )}
      {Array.isArray(categories) &&
        categories.some(
          (category) => category.name === 'Consultor Técnico',
        ) && (
          <Link className="new-register" to="/novo-registro">
            <FaSquarePlus />
          </Link>
        )}
    </HeaderStyles>
  );
}
