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
        <div style={{padding: '0%'}} className='content'>
            <MainButtons />
            {/* <div className='content'>
                <div className='row'>
                    <div className='column'>
                        <Students />
                        <Events />
                    </div>
                    <div className='column'>
                        <Faculty />
                        <Publications />
                    </div>
                </div>
                <div style={{textAlign: 'center'}}><Link to='/about'><Button className='button' style={{fontSize: "48px", backgroundColor: '#1f497d', width: '100%'}} variant='contained' fontSize='inherit'>ABOUT US</Button></Link></div>
                <News />
                <DepartmentNews />
                <Videos />
                <h1>Scan for lab contact information</h1>
                <img className='qrcode' src={QRCode} alt='QRCode' />    
            </div> */}
        </div>
    )
}

export default Home
