import Product from 'interfaces/Product'
import Image from 'next/image'

import { formatPrice } from '../utils/format-price'
import { getDiscountSuffix } from '../utils/get-discount'
import { Tooltip } from "@material-tailwind/react";
import { useState } from 'react'

type Props = {
    product: Product
    imageHeight: string
}
const ProductCard = ({ product, imageHeight }: Props) => {

    const [isImageHovered, setIsImageHovered] = useState(false)
    const { name, price, totalPrice, image, reverseImage, discount, discountType, hasMoreColors } = product

    return (
        <div className="overflow-hidden flex items-center flex-col 
        p-5 rounded-md border  justify-between space-y-8 " >

            <div className='w-full space-y-6'>
                <div className={`w-full relative ${imageHeight}`} onMouseOver={() => setIsImageHovered(true)} onMouseOut={() => setIsImageHovered(false)}>
                    <Image className='h-full object-cover' src={isImageHovered ? reverseImage : image} layout='fill' alt="product" priority={true} />
                </div>
                <Tooltip content={name}>
                    <div className='truncate w-full text-center'>
                        <span>
                            {name}
                        </span>
                    </div>
                </Tooltip>
            </div>
            <div className='w-full space-y-6'>
                <div className='w-full flex flex-col items-center'>
                    <span className={`${discount && 'line-through'}`}>
                        {formatPrice(price)}
                    </span>

                    {discount && (
                        <span className='text-red-500'>
                            {totalPrice} (-{discount}{getDiscountSuffix(discountType)})
                        </span>
                    )}
                </div>


            </div>

            <div className='w-full flex justify-center flex-col items-center space-y-4 '>
                {hasMoreColors && (
                    <div className='text-center font-bold'>
                        <span className='text-gray-400'> más colores </span>
                    </div>
                )}

                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-light'>
                        Añadir
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard