import React from "react"
import { connect } from "react-redux"
import "./collection.styles.sass"
import { Link } from "react-router-dom"
import CollectionUnit from "./collection-unit/collection-unit.component"

const Collection = ({ shopData, search }) => {

    const { items } = shopData.find(item => item.title === search)



    return <div>


        <div className="collection-wrapper">

            {

                items.map(item => {

                    return <CollectionUnit key={item.id} item={item} search={search} />
                })

            }

        </div>

    </div>
}

const mapStateToProps = state => ({
    shopData: state.shop.shopData,
    search: state.shop.search
})

export default connect(mapStateToProps)(Collection)