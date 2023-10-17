import Product from "interfaces/Product";
import { useEffect, useState } from "react";
import data from "../../public/products.json";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import JSONData from "interfaces/JSONData";
import { containsAllWords } from "../utils/contains-all-words";
import { TiPlus, TiMinus } from 'react-icons/ti'
import IconButton from "./IconButton";

const Catalog = () => {
    const initialData = data as JSONData
    const { products: initialProducts } = initialData
    const [searchFilter, setSearchFilter] = useState<string>(null)
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [isViewContracted, setIsViewContracted] = useState(false)

    useEffect(() => {

        if (searchFilter) {
            const filteredProducts = products.filter((product) =>
                containsAllWords(product.name, searchFilter)
            );
            setProducts(filteredProducts)
        } else {
            setProducts(initialProducts)
        }

    }, [searchFilter])

    return (
        <div className="flex flex-col space-y-8">
            <div className="flex px-0 justify-between ">
                <SearchInput
                    value={searchFilter ?? ''}
                    onChange={(value) => {
                        if (value === '') {
                            setSearchFilter(null)
                            return
                        }
                        setSearchFilter(value)
                    }} />

                <div className="flex gap-2">
                    <IconButton icon={<TiMinus size={40} className="text-gray-400" />} onClick={() => setIsViewContracted(false)} />
                    <IconButton icon={<TiPlus size={40} className="text-gray-400" />} onClick={() => setIsViewContracted(true)} />


                </div>

            </div>

            <div className={`grid gap-8 ${isViewContracted ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-5'}`}>
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} imageHeight={isViewContracted ? 'h-72' : 'h-44'} />
                ))}
            </div>
        </div>
    )
}

export default Catalog