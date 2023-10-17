import JSONData from "interfaces/JSONData";
import Product from "interfaces/Product";
import { useEffect, useState } from "react";
import { TiMinus, TiPlus } from 'react-icons/ti';
import { SortOrder } from "types/sort-order";
import data from "../../public/products.json";
import { containsAllWords } from "../utils/contains-all-words";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import Sorter from "./Sorter";
import { sortingProductsByPrice } from "../utils/sorting-products";

const Catalog = () => {
    const initialData = data as JSONData
    const { products: initialProducts } = initialData
    const [searchFilter, setSearchFilter] = useState<string>(null)
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [isViewContracted, setIsViewContracted] = useState(false)
    const [sortOrder, setSortOrder] = useState<SortOrder>(null)

    useEffect(() => {

        if (searchFilter) {
            const filteredProducts = products.filter((product) =>
                containsAllWords(product.name, searchFilter)
            );
            if (sortOrder) {
                setProducts(sortingProductsByPrice(filteredProducts, sortOrder))
            } else {
                setProducts(filteredProducts)
            }

        } else {
            if (sortOrder) {
                setProducts(sortingProductsByPrice(initialProducts, sortOrder))
            } else {
                setProducts(initialProducts)
            }

        }

    }, [searchFilter, sortOrder])

    const handleChangeSort = (sort: SortOrder) => {
        setSortOrder(sort)
    }
    return (
        <div className="flex flex-col space-y-8">
            <div className="flex justify-between ">
                <div className="flex gap-4">
                    <SearchInput
                        value={searchFilter ?? ''}
                        onChange={(value) => {
                            if (value === '') {
                                setSearchFilter(null)
                                return
                            }
                            setSearchFilter(value)
                        }} />

                    <Sorter onChange={handleChangeSort} />

                </div>

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