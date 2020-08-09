import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import DatePicker from './Datepicker';
import Password from './Password';

function FormikControl(props) {
    const {control, ...rest} = props;
    switch(control) {
        case 'input' : return <Input {...rest} />;
        case 'textarea' : return <Textarea {...rest} />;
        case 'date' : return <DatePicker {...rest} />;
        case 'password' : return <Password {...rest} />;
        default:
            return null;
    }
    
}

export default FormikControl;
