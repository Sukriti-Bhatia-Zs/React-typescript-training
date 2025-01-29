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
    const visibleRange=5;

    const startingpagerange=Math.max(1,page-visibleRange+1);
    const endingpagerange=Math.min(totalPages,startingpagerange+visibleRange-1);


    const selectPage = (pageSelected: number) => {
        if (pageSelected > 0 && pageSelected <= totalPages && pageSelected !== page) {
            setPage(pageSelected);
        }
    };


    return (
        <div className="bottom">
            <button onClick={() => selectPage(1)} className={page === 1 ? 'disabled' : ''}>
                ⏮
            </button>
            <button onClick={() => selectPage(page-1)} className={page === 1 ? 'disabled' : ''}>
                ◀
            </button>
            <div className="innerbottom">

                {[...Array(visibleRange)].map((_, index) => {
                   const pagenumber=startingpagerange+index;
                    return (
                       pagenumber<=totalPages && (
                            <span
                                className={pagenumber===page ? "selectedpage":" "}
                                onClick={()=>selectPage(pagenumber)}
                            >
                                {pagenumber}
                            </span>
                       )
  
                    );
                })}

               
                {endingpagerange <totalPages && <span>...</span>}
            </div>
            <button onClick={() => selectPage(page+1)} className={page === totalPages ? 'disabled' : ''}>
                ▶
            </button>
            <button
                onClick={() => selectPage(totalPages)}
                className={page === totalPages ? 'disabled' : ''}
            >
                ⏭
            </button>
        </div>
    );
};

export default BottomNavigation;
