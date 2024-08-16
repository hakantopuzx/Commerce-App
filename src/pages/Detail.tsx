import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice';
import { DetailComp } from '../components/detail/DetailComp';
import { Loading } from '../components/Loading';

export const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<any>();
    const { productDetail, productDetailStatus } = useSelector((state: any | unknown) => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id));
    }, [dispatch, id])

    return (
        <div>
            {productDetailStatus == "LOADING" ? <Loading /> : <DetailComp productDetail={productDetail} />}
        </div>
    )
}
