import React from "react"
import { Link, withRouter } from "react-router-dom"


const CollectionUnit = (props) => {





    const { name, id } = props.item;
    const { search } = props;
    let imgUrl = `/img/${search}/${name}/img-1.jpeg`

    return <Link to={`/shop/${search}/${id}`} className="collection-unit">

        <img src={imgUrl} alt="" />

        <h1> {name} </h1>
    </Link>
}


export default withRouter(CollectionUnit);