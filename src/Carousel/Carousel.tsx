import React ,{useState,useRef} from 'react'
import './Carousel.css'

interface image{
    src:string,
    alt:string,
    id:string,
}

interface CarouselProps {
    images: image[]; 
  }
const Carousel=({images}:CarouselProps)=>{

    const [currentindex,setCurrentIndex]=useState<number>(0)
    const ref=useRef<HTMLDivElement>(null)


    const clicknext=()=>{ 
        if (ref.current){
            const newindx=(currentindex+1)%images.length;
            const translate=(newindx*ref.current.clientWidth)
    
            ref.current.style.transition="transform 0.5s ease-in-out"
            ref.current.style.transform= `translateX(-${translate}px)`
    
            setCurrentIndex(newindx)
        }
       
       
    }

    const clickprev=()=>{
        
        if(ref.current){
            const newindx=(currentindex-1)%images.length
            const translate=(newindx*ref.current.clientWidth);

            ref.current.style.transition="transform 0.5s ease-in-out";
            ref.current.style.transform=`translateX(-${translate}px)`

            setCurrentIndex(newindx) 
        }
        
    }


        return (
        <div className="maindiv">
            <div className='innerdiv'>
                <div ref={ref} className="imageContainer" >
                    {
                        images.map((Image:image,indx:number)=>{
                            return (
                                <img 
                                    className='image' 
                                    src={Image.src} 
                                    alt={Image.alt}
                                    key={Image.id}
                                    
                                /> 
                            )
                        })
                    }    
                </div>
                <button className="forward" onClick={clicknext}>▶</button>
                <button className="backward" onClick={clickprev}>◀</button>
                <div className="navbar">
                    {
                        images.map((el: image, indx: number) => {
                            return <span key={indx}>{currentindex === indx ? '🔴' : '⭕'}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
    

}

export default Carousel