import React,{useState} from 'react'

export default function Test(){

const [list, setlist] = useState({cards:[]})

async function get(){
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    const data= await res.json();
    console.log(data)
}

    return(
        <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"burlywood"}}>
        {(data && data.cards) &&
            <div>
            <img src={data.cards[0].image} alt="image"></img>
            </div>
        }    
        </div>
    )