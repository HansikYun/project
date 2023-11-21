import './Header.css';
import logoimage from '../../assets/images/logo.jpg';

function Header() {
  return (
    <div id="middleset">
    <div id="imagemv">
            <img src={logoimage} width="230px"  align="right"/> 
    </div>
    </div>
  );
}

export default Header;