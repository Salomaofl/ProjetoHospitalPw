import { Link } from 'react-router-dom';
import './style.css'; 
function Header(){
    return(
        <>
            <header>
            <img src="Holhos.jpeg"></img>
                <h1>
                   H olhos
                </h1>
            
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/contato'>Contato</Link>
            <br/>
            <Link to='/sobre'>Sobre Nós</Link>
            </header>
        </>
    )
}
export default Header;