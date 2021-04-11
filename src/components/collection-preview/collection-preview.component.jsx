import React from "react"
import { connect } from "react-redux"
import "./collection-preview.styles.sass"
import { Link } from "react-router-dom"

const CollectionPreview = ({ title, shopData }) => {

    const { items } = shopData.find(item => item.title === title);

    const newItems = items.slice(0, 5)

    return <div className="collection-preview">

        <h1 className="title preview-title">{title} </h1>
        <div className="container">

            {
                newItems.map(({ name, price, id }) => (

                    <Link to={`/shop/${title}/${id}`} className="preview-unit">
                        <img src={`/img/${title}/${name}/img-1.jpeg`} alt="" />
                        <div className="text-wrapper">
                            <h1 className="item-name">  {name} </h1>
                            <p className="price"> {price} </p>
                        </div>

                    </Link>

                ))
            }

        </div>
    </div>
}

const mapStateToProps = state => ({
    shopData: state.shop.shopData
})

export default connect(mapStateToProps)(CollectionPreview)