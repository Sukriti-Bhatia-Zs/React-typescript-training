import React from 'react'
import GameInside from './GameInside.tsx'
import {useState,useEffect} from 'react'


const Game=()=>{
   

    const names=['tinaa','navya','shreya','sukriti','riya'];

   
    const shuffleArray = (names:string[]) => {
        const newarr = [...names]; 
        for (let i = newarr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newarr[i], newarr[j]] = [newarr[j], newarr[i]]; 
        }
        return newarr;
      };

  
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightblue",width:"100vw",height:"100vh"}}>
            <GameInside word={shuffleArray(names)[0]}/>
        </div>
    )
}

export default Game