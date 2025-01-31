import React from 'react';
import './Pages.css';

interface NavigationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    products: Product[];
}

interface Product {
    img: string;
    id: number;
    title: string;
}

const BottomNavigation = ({ page, setPage, products }: NavigationProps) => {
    const totalPages = Math.ceil(products.length / 10);
    const visiblerange = 5;

    const startingpagerange = Math.max(1, page - visiblerange + 1);
    const endingpagerange = Math.min(totalPages, startingpagerange + visiblerange - 1);


    const selectPage = (pageSelected: number) => {
        if(page===1 && pageSelected===0){
            setPage(totalPages)
        }
        if(page===totalPages && pageSelected===11){
            setPage(1)
        }
        if (pageSelected > 0 && pageSelected <= totalPages && pageSelected !== page) {
            setPage(pageSelected);
        }
        
    };

    return (
        <div className="bottom">
            <button onClick={() => selectPage(totalPages)} >
                ⏮
            </button>
            <button onClick={() => selectPage(page - 1)} >
                ◀
            </button>
            <div className="innerbottom">

                {[...Array(visiblerange)].map((_, index) => {
                    const pagenumber = startingpagerange + index;
                    return (
                        pagenumber <= totalPages && (
                            <span
                                className={pagenumber === page ? "selectedpage" : " "}
                                onClick={() => selectPage(pagenumber)}
                                style={{ fontSize: "20px" }}
                            >
                                {pagenumber}
                            </span>
                        )

                    );
                })}


                {endingpagerange < totalPages && <span>...</span>}
            </div>
            <button onClick={() => selectPage(page + 1)} >
                ▶
            </button>
            <button
                onClick={() => selectPage(1)}
               
            >
                ⏭
            </button>
        </div>
    );
};

export default BottomNavigation;
