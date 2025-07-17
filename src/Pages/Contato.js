import React from 'react'
import Maps from '../Components/Maps.js';
import TxtContato from '../Components/TxtContato';
import FAQ from '../Components/FAQ.js';
import TxtHome from '../Components/TxtHome.js';

function Contato() {
  return (
    <div>
        <Maps />
        <TxtContato />
        <TxtHome/>
        <FAQ/>
    </div>
  )
}

export default Contato