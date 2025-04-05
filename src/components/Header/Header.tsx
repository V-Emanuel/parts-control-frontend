import { Link } from 'react-router-dom';
import { HeaderStyles } from './HeaderStyles';
import { FaSquarePlus } from 'react-icons/fa6';

export default function Header() {
  return (
    <HeaderStyles>
      <p>{`Controle de Peças`}</p>
      <Link to="/novo-registro">
        <FaSquarePlus />
      </Link>
    </HeaderStyles>
  );
}
