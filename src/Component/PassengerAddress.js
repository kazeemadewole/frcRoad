import React from 'react';
import {Formik , Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import {useStateValue} from './Store';
import DriverDetails from './DriverDetails';

const PassengerAddress = () => {
    
    const [, dispatch] = useStateValue();
   // const history = useHistory();

    
    const initialValues = {
        FullName : '',
        Address : '',
        Sex : '',
        Destination : '',
        Name_of_Next_of_Kin : '',
        Address_of_Next_of_Kin : '',
        Phone_number_of_Next_of_kin : ''
        
    }

    const validationSchema = Yup.object({
        FullName : Yup.string().required('Required'),
        Address : Yup.string().required('Required'),
        Destination : Yup.string().required('Required'),
        Name_of_Next_of_Kin : Yup.string().required('Required'),
        Address_of_Next_of_Kin : Yup.string().required('Required'),
        Phone_number_of_Next_of_kin : Yup.number().required('Required'),
    })

    const onSubmit = values => {
        dispatch({type: 'TOKEN_INITIATION', val: {
            FullName : values.FullName,
            Address : values.Address,
            Sex : values.Sex,
            Destination : values.Destination,
            Name_of_Next_of_Kin : values.Name_of_Next_of_Kin,
            Address_of_Next_of_Kin : values.Address_of_Next_of_Kin,
            Phone_number_of_Next_of_kin : values.Phone_number_of_Next_of_kin
        }});
        
    };
    return (
        <div className="container mt-5 ">
        <div className=''>
            {<DriverDetails  /> }
     <div className='card col-10 col-md-8 mx-auto '> 
        <div className='card-body'> 
        <Formik
        initialValues = {initialValues} 
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}  >
        { formik => {
            return (<Form>
                <FormikControl 
                    control='input'
                    type = 'input'
                    name = 'FullName'
                    placeholder = 'Fullname'
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
                    name = 'Sex'
                    placeholder = 'Sex'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    name = 'Destination'
                    placeholder = 'Destination'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    name = 'Name_of_Next_of_Kin'
                    placeholder = 'Name of Next of Kin'
                    />
                    <FormikControl 
                    control='textarea'
                    name = 'Address_of_Next_of_Kin'
                    placeholder = 'Address of Next of Kin'
                    />
                     <FormikControl 
                    control='input'
                    type = 'input'
                    name = 'Phone_number_of_Next_of_kin'
                    placeholder = 'Phone Number of Next of Kin'
                    />
                     
                    
                <button type='submit' className="btn btn-lg btn-primary">
                    Proceed
                </button>
            </Form> );

        }
          }
        </Formik>
        </div>
        </div>
        </div>
        </div>
        
        
    )

  
    
}

export default PassengerAddress