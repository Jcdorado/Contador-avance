import React from "react";
import './button.css'

export function Button ({onAdd, onReset, onSubstract}) {

    return(
    <>
    <div className="button-space">
        <button type="button" className="button-style-substract" onClick={onSubstract}>-</button>
        <button type="button" className="button-style-reset" onClick={onReset}>Reset</button>
        <button type="button" className="button-style-add" onClick={onAdd}>+</button>
    </div>
   
    </>
    )
    
}