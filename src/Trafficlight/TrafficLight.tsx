import React ,{useState,useEffect} from 'react'
import './Light.css'


const TrafficLight=()=>{

    const [index,setIndex]=useState<number>(1)
    const [timer,setTimer]=useState<number>(5000)

    // useeffect approach

    // const handlelights=()=>{
    //     if(index===1){
    //         const timer=setTimeout(()=>{
    //             setIndex(2)
    //         },5000)
        
    //         return ()=>{
    //             clearTimeout(timer)
    //         }
    //     }
    //     if(index===2){
    //         const timer=setTimeout(()=>{
    //             setIndex(3)
    //         },2000)
        
    //         return ()=>{
    //             clearTimeout(timer)
    //         }
    //     }      
    //     if(index===3){
    //         const timer=setTimeout(()=>{
    //             setIndex(1)  
    //         },3000)
        
    //         return ()=>{
    //             clearTimeout(timer)
    //         }
    //     }
    // }
    // useEffect(()=>{
          
    //     handlelights()
        
    // },[index])

    // settimout approach

        // setTimeout(() => {
        //     if (timer === 5000) {
        //         setIndex(2);
        //         setTimer(2000);
        //     }
        //     else if (timer === 2000) {
        //         setIndex(3);
        //         setTimer(3000)
        //     }
        //     else if (timer === 3000) {
        //         setIndex(1);
        //         setTimer(5000)
        //     }
        // }, timer); 
     
    // setinterval approach
        useEffect(() => {
            const interval = setInterval(() => {
              if (timer === 5000) {
                setIndex(2);
                setTimer(2000);
              } else if (timer === 2000) {
                setIndex(3);
                setTimer(3000);
              } else if (timer === 3000) {
                setIndex(1);
                setTimer(5000);
              }
            }, timer);
        
            return () => clearInterval(interval);
          }, [timer])
     



    return (
        <div className="maindiv">
            <div className="lights" >
                <div className={index===1? "red" : "innerlights"}></div>
                <div className={index===2? "yellow" : "innerlights"}></div>
                <div className={index===3? "green" : "innerlights"}></div>
            </div>
            <div style={{backgroundColor:"black",border:"1px solid black",height:"5rem",width:"10px"}}></div>
        </div>
    )
}

export default TrafficLight