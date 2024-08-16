export const Sorting = ({ setSort }: { setSort: any }) => {
    return (
        <div onChange={(e: any) => setSort(e.target.value)} className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
            <select name="" id="" className='bg-white py-3 px-5 sm:w-auto w-full'>
                <option value="" disabled>Seçiniz</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
        </div>
    )
}
