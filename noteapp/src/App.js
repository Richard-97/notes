import React, {useState} from 'react';
import { withRouter, Route } from 'react-router-dom';

import Home from './containers/Home';
import NewNote from './containers/NewNote';

import en_icon from './img/icons/en.svg'
import cz_icon from './img/icons/cz.svg';

import LanContext from './Context/index';

const App = () => {

    const [lan, setLan] = useState('CZ');

    return (
      <LanContext.Provider value={lan}>
              <div className="container">
                  <div className='home-flags'>
                    <img src={en_icon} alt='en' onClick={()=>setLan('EN')}/>
                    <img src={cz_icon} alt='cz' onClick={()=>setLan('CZ')}/>
                  </div>
                  <Route exact path='/' render={(props)=><Home />} />
                  <Route exact path='/newNote' component={NewNote} />
              </div>
            </LanContext.Provider>
    );
}

export default withRouter(App);
