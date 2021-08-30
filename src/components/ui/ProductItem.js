import { FiPlus } from 'react-icons/fi'

export default function ProductItem({product}) {
    return (
        <div className="bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibol p-3">
            <button className="absolute bg-white top-0 right-0 w-8 h-8 flex items-center justify-center border-gray-200 rounded-lg text-brand-color shadow-md hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color">
                <FiPlus size={16}/>
            </button>
            <img src={product.image} alt={product.title}></img>
            <div className=" text-brand-color">{product.price}</div>
            <div className=" text-gray-800">{product.title}</div>
            <div className="text-gray-500">{product.alt}</div>
        </div>
    )
}
