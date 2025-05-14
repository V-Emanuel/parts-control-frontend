import { Link } from 'react-router-dom';
import { HeaderStyles } from './HeaderStyles';
import { FaSquarePlus } from 'react-icons/fa6';
import { useContext, useEffect } from 'react';
import UserContext from '../../Contexts/UserContext';
import DataContext from '../../Contexts/DataContext';

export default function Header() {
  const { companySelect, setCompanySelectLS } = useContext(UserContext);
  const { companies } = useContext(DataContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCompany = companies.find(
      (el) => el.id === parseInt(e.target.value),
    );

    setCompanySelectLS(selectedCompany);
  };

  useEffect(() => {
    console.log('empresa selef', companySelect);
  }, [companySelect]);

  return (
    <HeaderStyles>
      <p>{`Controle de Peças`}</p>
      <select className="company-select" onChange={handleChange}>
        <option selected value="">
          {companySelect?.name || 'Selecione'}
        </option>
        {companies
          .filter((company) => company.id != companySelect?.id)
          .map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
      </select>
      <Link className="new-register" to="/novo-registro">
        <FaSquarePlus />
      </Link>
    </HeaderStyles>
  );
}
