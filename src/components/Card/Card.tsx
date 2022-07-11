import React from "react";
import './Card.css'

export type propCard= {
    text:string,
    type:string
}

const Card =({text,type}:propCard)=>{
    return (
        <div className={type==='red'?'red-flag':'default-flag'}>
            {text}
        </div>
    )
}

export default Card