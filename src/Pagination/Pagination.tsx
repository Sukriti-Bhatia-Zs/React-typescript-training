import React ,{useState,useEffect} from 'react'
import Pages from './Pages.tsx';



interface Product{
    img:string,
    id:number,
    title:string
}

const Pagination=()=>{

    const [page,setPage]=useState<number>(1);
    const [products,setProducts]=useState<Product[]>([])

    const fetchdata=async ()=>{
        const res=await fetch('https://dummyjson.com/products?limit=100')
        const data=await res.json()

        if(data && data.products){
            const limitedproducts=data.products.map((product:any)=>{
                return {
                    img: product.images[0],
                    id: product.id,
                    title: product.title,
                  };
            })
            setProducts(limitedproducts)
        }
    }

    useEffect(()=>{
        fetchdata()
    },[])


    return (
        <div>
            <Pages page={page} setPage={setPage} products={products}/>
        </div>
    )
}

export default Pagination