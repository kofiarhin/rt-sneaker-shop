import React from "react"
import { connect } from "react-redux"
import "./collection-preview.styles.sass"
import { Link } from "react-router-dom"
import CollectionPreviewUnit from "./collection-preview-unit/collection-preview-unit"

const CollectionPreview = ({ title, shopData }) => {

    const { items } = shopData.find(item => item.title === title);

    const newItems = items.slice(0, 5)

    return <div className="collection-preview">

        <h1 className="title preview-title">{title} </h1>

        <div className="container">
            {
                newItems.map(({ name, price, id }) => (
                    <CollectionPreviewUnit name={name} key={id} price={price} title={title} />
                ))
            }

        </div>

        <div className="cta-wrapper">

            <Link to={`/shop/${title}`}>View All</Link>
        </div>
    </div >
}

const mapStateToProps = state => ({
    shopData: state.shop.shopData
})

export default connect(mapStateToProps)(CollectionPreview)