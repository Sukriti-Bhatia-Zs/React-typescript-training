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
    const [animation,setAnimation]=useState<string>('fadein')


    const clicknext=()=>{
        setAnimation('fadin')
        setCurrentIndex(prev=>(prev+1)%images.length)
    }

    const clickprev=()=>{
        setAnimation('fadeout')
        setCurrentIndex(prev=>(prev-1+images.length)%images.length)
    }


 
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimation('');
        }, 400);
        return () => clearTimeout(timeout);
    }, [animation]);


    if(images.length===0){
        return <div>Loading..</div>
    }

        return (
        <div className="maindiv">
            <div className='innerdiv'>
            <div className={`carousel-image ${animation}`} style={{ width: "100%", height: "100%" }}>
                    <img src={images[currentindex].src} alt={images[currentindex].alt} height={"100%"} width={"100%"} />
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