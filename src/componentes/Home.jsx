import React from 'react';
import StartScreen from './StartScreen';
export default function Home(){


    return(

    <div style={{textAlign:"center"}}>

        <div>
            <StartScreen />
        </div>
        <hr/>
        <div style={{backgroundColor:"cyan"}}>
            <form>
                <button  >Over</button><br/><br/>
                <button >Under</button><br/><br/>
            </form>
            </div>
    </div>

    )
};