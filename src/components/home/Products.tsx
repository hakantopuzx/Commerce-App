import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProduct, getProduct } from '../../redux/productSlice';
import { Loading } from '../Loading';
import { Product } from './Product';
import ReactPaginate from 'react-paginate';

export const Products = ({ category, sort }: { category: any, sort: any }) => {
    const dispatch = useDispatch<any>();

    const products = useSelector((state: any) => state.products.products);
    const productStatus = useSelector((state: any) => state.products.productStatus);

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProduct(category))
            itemOffset > 0 && setItemOffset(0)
        } else {
            dispatch(getProduct())
        }
    }, [dispatch, category])


    return (
        <div className='w-full pl-0 mt-8 md:pl-4 md:mt-0'>
            {productStatus == "LOADING" ? <Loading /> :
                <>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        {currentItems?.sort((a: any, b: any) => sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : null).map((product: any, index: number) => {
                            return (
                                <Product product={product} key={index} />
                            )
                        })}
                    </div>
                    <ReactPaginate
                        className='paginate'
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </>

            }
        </div>
    )
}
