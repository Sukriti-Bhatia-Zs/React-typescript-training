import React  from 'react'
import {useState,useEffect} from 'react'

const useData=(url:string)=>{

    const [data,setData]=useState<{src:string,alt:string,id:string}[]>([])
    const [error,setError]=useState<any>("")
    const [loading,setLoading]=useState<boolean>(false)

  

    const fetchData=async (url:string)=>{
        try{
            setLoading(true)
            const res=await fetch(url)
            const data=await res.json()
            setData(data)
            setLoading(false)
            
        }
        catch(err:any){
            setError(err)
            setLoading(false)
        }
       
           
    }

    useEffect(()=>{
        fetchData(url)
       
    },[])
    

    return {data,error,loading}

}

export default useData


