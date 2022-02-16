import React, { useState } from 'react'
import Select from './Select.js';
import Select2 from './Select2.js';
import Select3 from './Select3.js';
import Select4 from './Select4.js';
import Select5 from './Select5.js';


function Toggle() {
    const [toggles, setToggles] = useState(false);
   const handleClick = () => {
       if (toggles === true) {
           <Select />
       } else {
           document.innerHTML = "no value";
       }
   }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        </div>
  )
}

export default Toggle;