import React, { Component } from 'react'

export default class FundItems extends Component {
    render() {
        let { address, amount, email, message, name, organization, category } = this.props;

        return (
            <div>
                <div className="my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        {/* <img src={imageUrl} className="card-img-top" alt="..." /> */}
                        <div className="card-body border border-warning shadow-lg p-3 mb-5 bg-body rounded">
                            <h5 className="card-title">Name:- {name}</h5>
                            {/* <p className="card-text">Phone:- {phone}</p> */}
                            <p className="card-text">Email:- {email}</p>
                            {/* <p className="card-text">Organization Name:- {organization}</p> */}
                            <p className="card-text">Category:- {category}</p>
                            <p className="card-text">Message:- {message}</p>
                            <p className="card-text">Amount:- {amount}</p>
                            {/* <p className="card-text">Address:- {address}</p> */}
                            {/* <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a> */}
                            <button type="button" class="btn btn-success">Donate Now</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// image, Name, email, vategory, message, amount, 

