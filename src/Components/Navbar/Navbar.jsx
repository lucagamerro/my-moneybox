import React from 'react';
import moneybox from './money-box.png';

function Navbar() {
  return (
    <div>
        <nav>
          <h1 className="display-1"> 
            <img src={moneybox} alt="moneyimage" width="100" height="100" className="hvr-shrink" /> 
            Moneybox
          </h1>
        </nav>
        <hr />

        <br/><br/>
    </div>
  );
}

export default Navbar;