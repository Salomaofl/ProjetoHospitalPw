import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const Home = () => {
    let navigate = useNavigate()
    return (
        <div>
            Home
            <Button onClick={()=>navigate('/form')}></Button>
        </div>
    );
};

export default Home;
