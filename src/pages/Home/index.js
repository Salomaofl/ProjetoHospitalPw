
import './estilo.css';
import Header from '../../Componentes/Header';

function Home() {

    return (

        <>
            <Header />

            <div className='card2'>
                <h3>Central de Laudos</h3>
                <li>Laudos</li>
                <li>Imagens</li>
                <li>Exames</li>
                <button className='btn1'>Solicitar</button>

            </div>


            <div className='card2'>
                <h3>Ambulatório</h3>
                <li>Laudos</li>
                <li>Imagens</li>
                <li>Exames</li>
                <button className='btn1'>Solicitar</button>

            </div>

            <div className='card2'>
                <h3>Financeiro</h3>
                <li>Laudos</li>
                <li>Imagens</li>
                <li>Exames</li>
                <button className='btn1'>Solicitar</button>

            </div>

        </>



    );
}
export default Home;