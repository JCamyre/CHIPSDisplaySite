import React from 'react';
import Events from '../../Events/Events';
import Publications from '../../Publications/Publications';
import Students from '../../Students/Students';
import Faculty from '../../Faculty/Faculty';
import './Home.css';
import QRCode from '../../../images/QRCode.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import News from '../../EngineeringNews/News';
import DepartmentNews from '../../DepartmentNews/DepartmentNews';
import MainButtons from '../../MainButtons/MainButtons';

function Home() {
    return (
        <div className='content'>
            <MainButtons />
        </div>
    )
}

export default Home;