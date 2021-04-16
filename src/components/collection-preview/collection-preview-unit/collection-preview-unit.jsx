import React from "react"
import { Link } from "react-router-dom"

const CollectionPreviewUnit = ({ name, title, id, price }) => {

    return <Link to={`/shop/${title}/${id}`} className="preview-unit" key={id}>
        <img src={`img/${title}/${name}/img-1.jpeg`} alt="" />
        <div className="text-wrapper">
            <h1 className="item-name">  {name} </h1>
            <p className="price"> ${price} </p>
        </div>

    </Link>
}


export default CollectionPreviewUnit;