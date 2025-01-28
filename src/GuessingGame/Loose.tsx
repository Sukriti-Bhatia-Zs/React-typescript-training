import React from 'react'

interface looseprops {
    setLoose: React.Dispatch<React.SetStateAction<boolean>>;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Loose=({setLoose,setReload}:looseprops)=>{

    const handleCross=()=>{
        setLoose(false);
        setReload(true)
    }

    return (
        <div className="wonmaindiv">
            <div className="wondiv">
                <div>
                    <h1>OOPS ALL LIFES LOST 😞😞 </h1>
                </div>
                <div>
                    <h2>BETTER LUCK NEXT TIME 🤞🤞</h2>
                </div>
                <div onClick={()=>handleCross()} className="cross">
                ❌
            </div>
            </div>
            
        </div>
    )
}

export default Loose 