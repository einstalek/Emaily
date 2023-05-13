import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FIELDS from './formFields';
import * as actions from '../../actions';

class SurveyFormReview extends Component{
    renderFields() {
        return (
            <div>
                {FIELDS.map(f => {
                    return (
                        <div key={f.name}>
                            <label> {f.label} </label>
                            <div> {this.props.formValues[f.name]} </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h3> Confirm your entry </h3>
                <div>
                    <div>
                        {this.renderFields()}
                    </div>
                </div>
                <button className="yellow darken-3 white-text btn-flat" onClick={this.props.onCancel}> 
                    Back 
                </button>
                <button onClick={() => this.props.submitSurvey(this.props.formValues, this.props.history)}
                className="green white-text btn-flat right">
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(
    withRouter(SurveyFormReview));