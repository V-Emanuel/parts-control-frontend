import { SideBarStyles } from './SideBarStyles';
import peugeot from '../../assets/imgs/peugeot_icon.svg';

export default function SideBar() {
  return (
    <SideBarStyles>
      <div className="box-title">
        <img className="peugeot-icon" src={peugeot} />
        <p>{`Controle de Peças - Peugeot`}</p>
      </div>
    </SideBarStyles>
  );
}
