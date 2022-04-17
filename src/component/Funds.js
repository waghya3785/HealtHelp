import React, { Component } from 'react'
import FundItems from './FundItems';
import Tempp from './Tempp';
export class Funds extends Component {

    contacts = [
        {
            "email": "wagholetanmay3785@gmail.com",
            "message": "this is message",
            "name": "PRAKALP",
            "subject": "testing"
        },
        {
            "email": "tanmaywaghole3785@gmail.com",
            "message": "project based learning",
            "name": "Tanmay Waghole",
            "subject": "pbl"
        },
        {
            "email": "gelakasethi@hfmail.tk",
            "message": "uisgui",
            "name": "sushrut Gaikwad",
            "subject": "testing"
        },
        {
            "email": "wagholetanmay3785@gmail.com",
            "message": "testing",
            "name": "PRAKALP",
            "subject": "testing"
        },
        {
            "address": "aissms aids",
            "amount": "69 for blowjob",
            "category": "bhikarchot",
            "email": "gelakasethi@hfmail.tk",
            "message": "mi chutya aahe mala gheun java tumchya barobar ",
            "name": "Onkar Sonvane",
            "organization": "mokhar boizzzz",
            "phone": "8974839294"
        },
        {
            "address": "sanket avbhxahv",
            "amount": "3",
            "category": "Balwadi",
            "email": "tanmaywaghole3785@gmail.com",
            "message": "mi madarchod aahe pan zavdya nahiye ubha nahi hot maza choti nunni ahe mi kothrud la jato ani aai ghalun gheto ",
            "name": "sanket kumbhar",
            "organization": "mokhar boixx",
            "phone": "8308956677"
        },
        {
            "address": "Zeal",
            "amount": "4000/-",
            "category": "bhikarchot",
            "email": "tanmaywaghole3785@gmail.com",
            "message": "root canal",
            "name": "ajay jadhav",
            "organization": "mokhar boizzzz",
            "phone": "8974839294"
        },
        {
            "address": "Xhamester",
            "amount": "69 for blowjob",
            "email": "leahfuckatharva@gmail.com",
            "name": "leah atharva chavan",
            "phone": "6969696969"
        },
        {
            "address": "aasdf",
            "amount": "asdfasd",
            "email": "adfsda@gmail.com",
            "name": "asdfasd",
            "phone": "asdfasdf"
        },
        {
            "address": "Katraj",
            "amount": "1,00,00,000/-",
            "email": "tanmay@gmail.com",
            "name": "Tanmay waghole",
            "phone": "6969696969"
        }
    ]

    constructor() {
        super();
        this.state = {
            contacts: this.contacts,
            loading: false
        }
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>Fund Raisers</h2>
                    <div className="row">
                        {this.state.contacts.map((Element) => {
                            return <div className="col-md-4">
                                <Tempp address={Element.address} amount={Element.amount} email={Element.email} message={Element.message} name={Element.name} organization={Element.organization} phone={Element.phone} category={Element.category} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Funds