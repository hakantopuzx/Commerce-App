import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

export const Category = ({ setCategory }: { setCategory: any }) => {

    const dispatch = useDispatch<any>();
    const { categories } = useSelector((state: any) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    return (
        <div className='w-full bg-gray-100 p-4 md:w-1/6'>
            <div className='border-b p-2 text-xl font-bold'>KATEGORİ</div>
            {categories?.map((category: any, index: number) => {
                return <>
                    <div onClick={() => setCategory(category)} key={index} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2'>{category}</div>
                </>
            })}
            <div onClick={() => setCategory(null)} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2'>Tümü</div>
        </div>
    )
}
