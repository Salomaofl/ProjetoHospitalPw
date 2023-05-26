import { BrowserRouter, Routes, Route }
from 'react-router-dom';


import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import Erro from './pages/PaginaErro';

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
<Route path="/" element={<Home/>} />
<Route path="/sobre" element={<SobreNos />} /> 
<Route path="/contato" element={<Contato />} />
<Route path="/PaginaErro" element={<Erro />} />

</Routes>
        </BrowserRouter>
    )
}
export default RouterApp;