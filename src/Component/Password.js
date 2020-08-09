import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';


function Password(props) {
    const {label,name, ...rest} = props;
    return (
        <div className="form-group">
            <Field 
                as='password' 
                name={name} 
                id={name} 
                {...rest} 
                className='form-control' />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default Password