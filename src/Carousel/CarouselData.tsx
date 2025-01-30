import React from 'react'
import useData from './useData.tsx'
import useState from 'react'
import Carousel from './Carousel.tsx'

const CarouselData = () => {

    const { data, error, loading } = useData('http://localhost:3000/images')

    console.log(data)


    console.log(data, error, loading)

    return (
        <div>
            {loading ? <div style=
                {{  width: "100vw",
                    height: "100vh", 
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "beige"
                }}>Loading ...</div> 
            :(
                data && <Carousel images={data} />
            ) 
        }
        </div>
    )
}

export default CarouselData