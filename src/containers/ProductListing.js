import React, {useEffect} from "react"
import axios from "axios"
import {useDispatch ,useSelector } from "react-redux"
import { setProduct } from "../redux/actions/productActions"
import ProductComponent from "./ProductCompunent"

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async() => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log(error)
        })
        dispatch(setProduct(response.data))

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