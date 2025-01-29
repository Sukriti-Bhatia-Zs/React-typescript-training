import React from 'react'
import './Pages.css'
import BottomNavigation from './BottomNavigation.tsx';

interface pageprops {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    products: Product[]
}

interface Product {
    img: string,
    id: number,
    title: string
}

const Pages = ({ page, setPage, products }: pageprops) => {

    console.log(products)



    return (
        <div>
            {
                products.length > 0 && (
                    <div style={{ backgroundColor: "beige", display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center" ,height:"100vh"}}>
                        <div >
                            <h1>Products of Page {page}</h1>
                        </div>
                        <div className="prods">
                            {products.slice(page*10-10, page*10).map((product: Product, indx: number) => {
                                return (
                                    <div className="insideprod">
                                        <div>
                                            <img src={product.img} width={'180rem'} height={"180rem"} style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="content">
                                            <div>
                                                {product.title}
                                            </div>
                                            <div>
                                                Id - {product.id}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <BottomNavigation page={page} setPage={setPage} products={products}/>
                    </div>
                )
            }
        </div>
    )
}

export default Pages