import React, { useState } from "react";
import {addWord} from '../../Utils/functions'
import './form.css';

const Form = () => {
  
  return (
          <form action="submit">
             <input type="text" />
             <input type="text" />
             <button onClick = {addWord}>Add</button>
         </form>
  );
};

export default Form;
