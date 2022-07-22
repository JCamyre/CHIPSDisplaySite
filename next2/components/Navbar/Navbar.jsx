import React from 'react';
// import logo from '/images/CHIPS-logo.png';
import './Navbar.css';
import { Box, Flex, Link, Image, Spacer } from '@chakra-ui/react'

function Navbar() {
    return (
        <Flex bg='#1f497d' h='10%' paddingX='0%' alignItems='center'>
            <Link to='/'>
                <Image id='CHIPS-logo' src={'/images/CHIPS-logo.png'} alt='CHIPS logo' />
            </Link>
            <Spacer />
            <Spacer />
            <Spacer />
            <Box>
                <span style={{color: "white", fontSize: 48}}>TOUCH ME!</span>
            </Box>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
        </Flex>
    )
}

export default Navbar