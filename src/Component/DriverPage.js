import React from 'react';
import {useHistory} from 'react-router-dom';
import {Formik , Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import {useStateValue} from './Store';

const DriverPage = () => {
    
    const [{Token}, dispatch] = useStateValue();
    const history = useHistory();

    
    const initialValues = {
        FullName : '',
        Address : '',
        Name_of_vehicle : '',
        Type_of_vehicle : '',
        Colour : '',
        Registration_no : '',
        Engine_no : '',
        Chasis_no : '',
        Departure_point : '',
        Destination : '',
        Departure_time : '',
        Date : ''
        
    }

    const validationSchema = Yup.object({
        FullName : Yup.string().required('Required'),
        Address : Yup.string().required('Required'),
        Name_of_vehicle : Yup.string().required('Required'),
        Type_of_vehicle : Yup.string().required('Required'),
        Registration_no : Yup.number().required('Required'),
        Departure_point : Yup.string().required('Required'),
        Date : Yup.string().required('Required'),
    })

    const onSubmit = values => {
        try{
        dispatch({type: 'TOKEN_INITIATION', val: {
            FullName : values.FullName,
            Address : values.Address,
            Name_of_vehicle : values.Name_of_vehicle,
            Type_of_vehicle : values.Type_of_vehicle,
            Colour : values.Colour,
            Registration_no : values.Registration_no,
            Engine_no : values.Engine_no,
            Chasis_no : values.Chasis_no,
            Departure_point : values.Departure_point,
            Destination : values.Destination,
            Departure_time : values.Departure_time,
            Date : values.Date
        }});
        history.push('/TokenKeyPage');
    }catch(e) {
        alert( e.message);
    }
        
    };
    return (
        <div className="container mt-5 ">
        <div className='card col-10 col-md-8 mx-auto '> 
        <div className='card-body'> 
        <Formik
        initialValues = {initialValues} 
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}  >
        { formik => {
            return (
        <React.Fragment>
            <p className="lead">  Create a unique token for your travel</p>
            <Form>
                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'FullName'
                    name = 'FullName'
                    placeholder = 'Your FullName'
                    />
                    <FormikControl 
                    control='textarea'
                    label = 'Address'
                    name = 'Address'
                    placeholder = 'Address'
                    />
                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Name of vehicle'
                    name = 'Name_of_vehicle'
                    placeholder = 'Name of Vehicle'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Type of vehicle'
                    name = 'Type_of_vehicle'
                    placeholder = 'Type of Vehicle'
                    />
                    <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Colour'
                    name = 'Colour'
                    placeholder = 'Colour'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Registration Number'
                    name = 'Registration_no'
                    placeholder = 'Registration Number'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Engine Number'
                    name = 'Engine_no'
                    placeholder = 'Engine Number'
                    />
                    <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Chasis Number'
                    name = 'Chasis_no'
                    placeholder = 'Chasis Number'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Departure Point'
                    name = 'Departure_point'
                    placeholder = 'Departure Point'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Destination'
                    name = 'Destination'
                    placeholder = 'Destination'
                    />
                    <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Departure Time'
                    name = 'Departure_time'
                    placeholder = 'Departure Time'
                    />
                     <FormikControl 
                    control='date'
                    label = 'Date'
                    name = 'Date'
                    placeholder = 'Date'
                    />
                    
                <button type='submit' className="btn btn-success" >
                    Generate Token Key
                </button>
            </Form>
            </React.Fragment> );

        }
          }
        </Formik>
        </div>
        {Token != '' ? (<p>{Token}</p>): null}
        </div>
        </div>
        
        
    )

  
    
}

export default DriverPage