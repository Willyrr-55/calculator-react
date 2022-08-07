import React from "react";
import '../stylesheets/ButtonClear.css';


const ButtonClear = (props)=>(
    <div className="button-clear" onClick={props.handlerClick}>
        {props.children}
    </div>
)

export default ButtonClear;
