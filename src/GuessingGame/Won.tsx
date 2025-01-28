import React from 'react'

interface wonprops {
    won: boolean;
    setWon: React.Dispatch<React.SetStateAction<boolean>>;
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const Won=({won,setWon,reload,setReload}:wonprops)=>{

    const handleCross=()=>{
        setWon(false);
        setReload(true);
    }

    return (
        <div className="wonmaindiv">
            <div className="wondiv">
                <div>
                    <h1>🎉🎉 CONGRATULATIONS 🎉🎉 </h1>
                </div>
                <div>
                    <h2>YOU WON 🏆!!</h2>
                </div>
                <div onClick={()=>handleCross()} className="cross">
                ❌
            </div>
            </div>
            
        </div>
    )
}

export default Won