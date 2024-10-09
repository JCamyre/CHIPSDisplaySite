import React from 'react';
import './Navbar.module.css';
import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import Link from 'next/link'

function Navbar({style}) {
    const navbarStyle = {minHeight: '10%', position: "fixed", zIndex: "1001", ...style}
    const navbarStyle2 = {minHeight: '10%', position: "sticky", ...style}

    return (
        <>
        <Flex bg='#1f497d' paddingX='0%' width="100%" alignItems='center' style={navbarStyle}>
            <Link href='/'>
                <Image id='CHIPS-logo' src={'/images/CHIPS-logo.png'} alt='CHIPS logo' style={{height: '100px'}}/>
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
        <Flex paddingX='0%' width="100%" alignItems='center' style={navbarStyle2}>
            {/* <Link href='/'>
                <Image id='CHIPS-logo' src={'/images/CHIPS-logo.png'} alt='CHIPS logo' style={{height: '100px'}}/>
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
            <Spacer /> */}
        </Flex>
        </>
    )
}

export default Navbar