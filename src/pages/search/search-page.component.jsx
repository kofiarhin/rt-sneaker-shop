import React from "react"
import { connect } from "react-redux"
import "./search-page.styles.sass"
import { Link } from "react-router-dom"

class SearchPage extends React.Component {

    componentDidMount() {

        console.log(this.props.match.params)
    }



    render() {

        const { searchResult, search } = this.props;



        return <div className="search-result">


            <h1 className="title">You are searching for  <span> "{search}" </span> </h1>


            <div className="container">
                <div className="search-wrapper">

                    {searchResult ?

                        searchResult.map(item => {

                            return <Link to={`/shop/${item.title}/${item.id}`} className="search-unit">

                                <img src={`/img/${item.title}/${item.name}/img-1.jpeg`} />
                                <h2> {item.name} xxx  </h2>
                                <p>${item.price} &up </p>

                            </Link>
                        })

                        : null}
                </div>
            </div>


        </div>
    }
}

const mapStateToProps = state => {
    return {
        searchResult: state.search.searchResult,
        search: state.search.search
    }
}
export default connect(mapStateToProps)(SearchPage)