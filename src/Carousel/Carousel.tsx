import React ,{useState,useEffect} from 'react'
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
    const [animation,setAnimation]=useState<string>('')


    const clicknext=()=>{ 
        setAnimation('slidein');
        setCurrentIndex(prev=>(prev+1)%images.length)
        setTimeout(() => setAnimation(''), 500);
    }

    const clickprev=()=>{
        setAnimation('slideout');
        setCurrentIndex(prev=>(prev-1+images.length)%images.length) 
        setTimeout(() => setAnimation(''), 500);
    }

        return (
        <div className="maindiv">
            <div className='innerdiv'>
                <div className={`imageContainer ${animation}`} >
                    {
                        images.map((Image:image,indx:number)=>{
                            return (
                                <img 
                                    className='image' 
                                    src={Image.src} 
                                    alt={Image.alt}
                                    key={Image.id}
                                    style={{
                                        display: indx === currentindex ? 'block':'none',
                                        width:"100%",
                                        height:"100%",
                                    }}
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