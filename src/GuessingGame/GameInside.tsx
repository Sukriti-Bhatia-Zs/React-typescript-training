import React, { useState, useEffect } from 'react';
import './Game.css';
import Won from './Won.tsx';
import Loose from './Loose.tsx';

interface wordprops {
    word: string;
  }

const GameInside = ({ word }:wordprops) => {

    const name=word;

    const [content, setContent] = useState<{ letter: string, index: number, isGuessed: boolean }[]>([]);
    const [input, setInput] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [lifes, setLifes] = useState<number>(name.length);
    const [lifearray, setLifeArray] = useState<number[]>([]);
    const [won,setWon]=useState<boolean>(false)
    const [reload,setReload]=useState<boolean>(false);
    const [loose,setLoose]=useState<boolean>(false)

    const messagearr=["Correct Input at correct index","Correct Input at wrong index","Wrong input"]

    const addinarray = (name: string) => {
        const tempArray: { letter: string, index: number, isguessed: boolean }[] = [];
        for (let i = 0; i < name.length; i++) {
            tempArray.push({ letter: name[i], index: i, isguessed: false });
        }
        setContent(tempArray);
    };

    useEffect(() => {
        addinarray(name);
    }, []);

    useEffect(() => {
        setLifeArray(Array.from({ length: lifes + 1 }, (_, index) => index));
    }, [lifes]);

    const handleChange = (e: any) => {
        setInput(e.target.value);
        setMessage('');
    };


    useEffect(()=>{
        console.log(won)
    },[won])

    useEffect(()=>{
        if(reload){
            setMessage("")
            addinarray(name)
            setIndex(0);
            setLifes(name.length);
            setReload(false);
            setInput('')
        }
    },[reload])

    useEffect(()=>{
        setTimeout(()=>{
            if(lifes===-1){
                setLoose(true)
            }
            console.log(loose)
        },1000)
    },[lifes])

    const findIndex=(input:string)=>{
        const foundindex=content.findIndex(item=>item.letter === input)
        return content[foundindex].isguessed
    }

    const handleSubmit = () => {
        if (index < content.length) {
            if (input === content[index].letter) {
                setMessage("Correct Input at correct index");
                setContent(prev => prev.map((item, idx) => idx === index ? { ...item, isguessed: true } : item));
                setTimeout(()=>{
                    if(index+1 === name.length){
                        setWon(true)
                    }   
                },1000) 
                setIndex(prev => prev + 1);
            } else if (name.includes(input) && !findIndex(input) ) {
                setMessage("Correct Input at wrong index");
                setLifes(prev => prev - 1)

            } else {
                setMessage("Wrong input");
                setLifes(prev => prev - 1)

            }
        }
        
    }


    return (
        <div className="maindivs">
            <div className="innerdivs">
                {content.map((element, indx) => (
                    <div
                        key={indx}
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: element.isguessed ? "lightblue" : "white",
                            color: "black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid grey",
                        }}
                    >
                        {element.isguessed ? element.letter : ""}
                    </div>
                ))}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Please Enter the letter here.."
                    onChange={handleChange}
                    value={input}
                    style={{ width: "100%", padding: "0.5rem" }}
                />
            </div>

            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className="lifelength">
                {lifearray.map((_, indx) => (
                    <div key={indx} className="lifes">
                        ❤️
                    </div>
                ))}
            </div>
            {message && <div style={{ backgroundColor: "beige", color: message === messagearr[0] ? 'green' : message === messagearr[1] ? 'orange' : 'red', padding: "0.2rem", borderRadius: "10px" }}><p>{message}</p></div>}
            {won && <Won won={won} setWon={setWon} reload={reload} setReload={setReload} />}
            {loose && <Loose setLoose={setLoose} setReload={setReload}/>}

        </div>
    );
};

export default GameInside;
