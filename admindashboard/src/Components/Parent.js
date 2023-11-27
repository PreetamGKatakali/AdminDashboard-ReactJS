import React from 'react';
import Head from './Head';
import Sidebar from './Sidebar';
import Main from './Main';
import About from './About';

function Parent(){
    return(
        <div className='container'>
          <Head/>
          <div className='main-container'>
            <Sidebar/>
            <Main/>
            <About/>
          </div>
        </div>
    )
}

export default Parent