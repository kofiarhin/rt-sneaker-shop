import React from "react"
import Landing from "../../components/landing/landing.component"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import TopPick from "../../components/top-pick/top-pick.component"
const Home = () => {
    return <div>

        <Landing />
        <CollectionPreview title="jordan" />
        <CollectionPreview title="nike" />
        <CollectionPreview title="adidas" />
        <CollectionPreview title="women" />
        <CollectionPreview title="kids" />

        <TopPick />

    </div>
}

export default Home;