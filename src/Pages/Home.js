import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { Outlet, Link } from "react-router-dom";




const Home = () => {
    let navigate = useNavigate()
    return (
        <div>
            Home
            <Button onClick={()=>navigate('/form')}>Form</Button>
            <Outlet />
        </div>
    );
};

export default Home;
