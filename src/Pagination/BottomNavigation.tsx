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
        if (pageSelected < 1) {
            setPage(totalPages);  
        } else if (pageSelected > totalPages) {
            setPage(1);  
        } else if (pageSelected !== page) {
            setPage(pageSelected);
        }
    };

    return (
        <div className="bottom">
             <button onClick={() => selectPage(page === 1 ? totalPages : 1)}>
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


              
            </div>
            <button onClick={() => selectPage(page + 1)} >
                ▶
            </button>
            <button onClick={() => selectPage(page === totalPages ? 1 : totalPages)}>
                ⏭
            </button>
        </div>
    );
};

export default BottomNavigation;

