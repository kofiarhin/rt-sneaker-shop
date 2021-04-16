import React from "react"
import "./top-pick.styles.sass"
import FormInput from "../../components/form-input/form-input.component"

const TopPick = (props) => {

    return <div className="top-pick">

        <div className="container">
            <h1 className="title"> Our Top Pick</h1>

            <p className="slug"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laborum mollitia cupiditate itaque modi consequatur vel quo sequi. Esse inventore vero corrupti nostrum iusto cum eligendi tenetur explicabo beatae! Excepturi?</p>

            <div className="wrapper">

                <div className="img-wrapper">
                    <img src="img/jordan/thumb.jpeg" alt="" />
                </div>

                <div className="content-wrapper">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla ipsam neque nostrum tempora corrupti nihil numquam dicta natus. Praesentium magnam quidem error voluptates ex ab! Harum libero, obcaecati fuga velit voluptas, distinctio magnam repellendus mollitia odit, aliquid eligendi nisi!</p>
                </div>
            </div>


        </div>

    </div>
}

export default TopPick