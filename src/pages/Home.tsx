import { useState } from 'react'
import { SliderComp } from '../components/home/SliderComp'
import { Sorting } from '../components/home/Sorting'
import { Category } from '../components/home/Category'
import { Products } from '../components/home/Products'

export const Home = () => {
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort} />
            <div className='flex flex-col md:flex-row'>
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}
