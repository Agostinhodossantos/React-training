import React, {useEffect} from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import ProductComponent from "./ProductCompunent"

const ProductListing = () => {
    const products = useSelector((state) => state)


    const fetchProducts = async() => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log(error)
        })

        console.log(response)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing