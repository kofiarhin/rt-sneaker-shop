import React from "react"
import Landing from "../../components/landing/landing.component"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

const Home = () => {
    return <div>

        <Landing />
        <CollectionPreview title="jordan" />
        <CollectionPreview title="nike" />
        <CollectionPreview title="adidas" />
        <CollectionPreview title="women" />
        <CollectionPreview title="kids" />

    </div>
}

export default Home;