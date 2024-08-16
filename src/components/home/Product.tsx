
import { useNavigate } from 'react-router-dom'

export const Product = ({ product }: { product: any }) => {

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className="flex flex-col group relative border p-5 rounded-md">
            <div className="overflow-hidden rounded-md">
                <img src={product?.image} className="h-[200px] w-[200px] object-contain m-auto" />
            </div>
            <div className="mt-8 flex justify-between border-t pt-8">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {product?.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product?.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product?.price}</p>
            </div>
        </div>
    )
}
