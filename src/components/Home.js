
// import styles from './Login.module.css'
// import reset from './Reset.module.css'
// import logo from '../img/Logo.png';
// // import logoGrande from '../img/LogoGrande.png';

// import { useState } from 'react'
// import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


import React from 'react';


function Home() {
    const { dados } = useContext(AppContext);
console.log(dados);

return(
    
    <div></div>
)
}

export default Home

