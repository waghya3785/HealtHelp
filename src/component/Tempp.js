import React, { Component } from 'react'

export default class Tempp extends Component {
    render() {
        let { address, amount, email, message, name, organization, category } = this.props;

        return (
            <div className="container mt-5">
                <table className="table table-warning table-hover">
                    <thead>
                        <tr>
                            <tr>
                                <th scope="col">Name:- {name}</th>
                            </tr>

                            <tr>
                                <td scope="col">Email:- {email}</td>
                            </tr>

                            <tr>
                                <td scope="col">Category:- {category}</td>
                            </tr>

                            <tr>
                                <td scope="col">Message:- {message}</td>
                            </tr>

                            <tr>
                                <td scope="col">Amount:- {amount}</td>
                            </tr>
                            <tr>
                                <td scope="col"><button type="button" className="btn btn-success">Donate Now</button></td>
                            </tr>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}
