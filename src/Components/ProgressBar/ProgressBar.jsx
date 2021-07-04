import React, { useState } from "react";
import './progressBar.css';

const ProgressBar = (props) => {
 

  return (
          
          <div className='progress-bar'>Completed {props.points} from {props.goal}</div>

         
          
  );
};

export default ProgressBar;
