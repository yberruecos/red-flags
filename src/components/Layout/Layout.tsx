import React,{useState} from "react";
import { goodThings,badThings } from "../../dataGame";
import Card from '../Card/Card'
import './Layout.css'

const Layout=()=>{
    const [gameHand,setgameHand]:any=useState([])

    const genRadomNum=()=>{
        return Math.floor(Math.random()*10)
    }

    const handlePlay=()=>{
        setgameHand([goodThings[genRadomNum()],goodThings[genRadomNum()],badThings[genRadomNum()]])
    }
    return (
        <main>
            <div className="card-container">
            {
                gameHand.map((item:string,index:number)=>{
                    return <Card key={`card-${index}`} text={item} type={index===gameHand.length-1?'red':'default'}/>
                })
            }
            </div>
            <button className="button-play" type="button" onClick={()=>handlePlay()}>Play</button>
        </main>
    )
}

export default Layout