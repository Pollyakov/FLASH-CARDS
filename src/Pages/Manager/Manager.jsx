import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import Form from '../../Components/Form/Form'
import {editWord, removeWord} from '../../Utils/functions'


const Manager = ({words})=> {
    let wordsCollection = words.map( word => {
        return( <section className="word-wrapper" >
        <Card word='Ksenia' lang='eng' />
        <section className="buttons-container">
        <button onClick = {editWord}>Edit Word</button>
        <button onClick = {removeWord}>Delete Word</button>
        </section>
        </section>
    );
});


    return (<div>
         <Form/>
        <div className="vocabulary">
       {wordsCollection}
    </div>
    </div>
    )
}

export default Manager