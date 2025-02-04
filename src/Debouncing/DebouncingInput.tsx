import React ,{useState} from 'react'
import './Debouncing.css'



const DebouncingInput=()=>{

    const [input,setInput]=useState<string>("")

    const handlechange=(event:any)=>{
        setInput(event.target.value)
        console.log(input)
       
    }

    const debouncingfunc=(func:any,delay:any)=>{
        let timer;

        return (...args)=>{
            clearTimeout(timer)
            timer=setTimeout(()=>{
                func(...args)
            },delay)
        }

    }

    const debouncinghandle=debouncingfunc(handlechange,3000)


    return (
        <div className="mainbody">
            <div className="divclass">
                <div>
                    <strong>Enter the value</strong>
                </div>
                <input 
                    type="text" 
                    placeHolder="Enter the value "
                    style={{padding:"1rem"}}
                    onChange={debouncinghandle}
                 />
            </div>
            <div className="divclass">
                <div>
                    <strong>Entered Value</strong>
                </div>
                <input type="text" 
                placeholder="The value is"
                style={{padding:"1rem"}}
                value={input}
            />
            </div>
        </div>
    )
}

export default DebouncingInput