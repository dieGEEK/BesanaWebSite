import * as React from 'react';
import { useState } from 'react';
import "../../../nav.css";


const Select = ({ label, optionsList, onSelect }) => {

  return (
    <div class="dropdown">
      <button class="dropbtn"><span> {label} </span><span class="nav-arrow fa fa-angle-down" /> </button>
      <div class="dropdown-content">
        {optionsList.map((option) => {
          return (
            <div>
              <a href="#" onClick={() => { onSelect(option) }}>
                {option?.img && <img class="trp-flag-image" img src={option.img} width='16px' height='16px' style={{marginRight: 5}}/>}<span>{option.description} </span>
              </a>
            </div>
          )
        })}
      </div>
    </div >
  );
}
export default Select