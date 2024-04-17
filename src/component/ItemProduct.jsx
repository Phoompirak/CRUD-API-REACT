import React from 'react'
// import { handleRemove } from './FormProduct'

const ItemProduct = ({ product, index }) => {
    return (
        <tr key={index}>
            <td>{index+1}</td>
            <td>{product.name}</td>
            <td>{product.detail}</td>
            <td>{product.price}</td>
            <td>delete</td>
        </tr>
    )
}

export default ItemProduct
