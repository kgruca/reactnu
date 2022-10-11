import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png'
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} alt='Nucamp Logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm ready for Workshop!
        </div>
    );
}

export default App;
