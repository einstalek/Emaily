// Shows SurveyForm and SorveyForm preview
import React, {Component} from "react";
import { reduxForm } from 'redux-form';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
    // component level state
    state = { showReview: false };

    renderComponent() {
        if (this.state.showReview) {
            return (
                <div>
                    <SurveyFormReview
                    onCancel = {() => {this.setState({showReview: false})} }
                    />
                </div>
            )
        };
        return (
            <div>
                <SurveyForm 
                onSurveySubmit = {() => {this.setState({showReview: true})}} 
                />
            </div>
        )
    }

    render() {
        return this.renderComponent();
    }
};

export default reduxForm(
    {form: 'surveyForm'}
)(SurveyNew);