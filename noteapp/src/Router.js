import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ThemeContext from './Context/index';

const RouterComponent = () => {
    
    return(  
        <ThemeContext.Provider value='CZ'>
                <Router>
                    <App />
                </Router>
        </ThemeContext.Provider> 
    );
}

export default RouterComponent;