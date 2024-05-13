import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectPage() {

    const navigate = useNavigate()

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    
      return () => clearTimeout(timer);
    }, []);
    
    return ( 
        <>
        <h1>You are being redirected to your beerflow.io dashboard</h1>
        </>
     );
}

export default RedirectPage;