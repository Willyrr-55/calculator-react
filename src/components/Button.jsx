import React from "react";
import '../stylesheets/Button.css';

function Button(props){
    const isOperator=valor=>{
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };
    return(
        <div className={`btn-container ${isOperator(props.children)?'operator':''}`.trimEnd()} onClick={()=>props.handlerClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;

