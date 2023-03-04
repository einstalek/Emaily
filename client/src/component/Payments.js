import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";


class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                amount={500}
                currency="USD"
                token={t => this.props.handleToken(t)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                description="Add credits to your account"
            

            >
                <button className="btn"> Add credits </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);