import React from "react"
import { withRouter, Redirect } from "react-router-dom"
import "./search.styles.sass"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import { searchItem } from "../../redux/search/search.action"
class Search extends React.Component {

    constructor() {

        super()

        this.state = {
            search: ""
        }
    }

    handleChange = e => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { search } = this.state;

        this.props.dispatch(searchItem(search))

        this.props.history.push(`/search/${search}`)

        this.setState({
            search: ""
        })
    }

    render() {

        return <div className="search">

            <form onSubmit={this.handleSubmit}>
                <FormInput placeholder="Search Product" name="search" handleChange={this.handleChange} value={this.state.search} />
                <CustomButton> Search</CustomButton>
            </form>

        </div>
    }
}

export default connect()(withRouter(Search))