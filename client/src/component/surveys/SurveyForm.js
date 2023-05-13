import React, {Component} from "react";
import { reduxForm, Field  } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";

import validateEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                {FIELDS.map(f => {
                    return <Field type="text" key={f.name} name={f.name} label={f.label} component={SurveyField} />
                })}
            </div>
        );
    };

    render() {
        return (
            <div>
                <form 
                onSubmit={this.props.handleSubmit( this.props.onSurveySubmit )}>
                    {this.renderFields()}
                    <Link to='/surveys' className="red btn waves-effect waves-light">
                        Cancel
                    </Link>
                    <button className="btn waves-effect waves-light right"> 
                        Next 
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
};

const validate = (values) => {
    const errors = {};

    FIELDS.forEach(({name}) => {
        if (!values[name]) {
            errors[name] = 'Must provide some value'
        };
    })

    if (values.recipients) {
        errors.recipients = validateEmails(values.recipients);
    }

    return errors;
};

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);