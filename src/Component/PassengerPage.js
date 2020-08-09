import React from 'react';
import {useHistory} from 'react-router-dom';
import {Formik , Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

//import PassengerAddress from './PassengerAddress';
import {useStateValue} from './Store';



const PassengerPage = () => {
    const [{Token}] = useStateValue();
    const history = useHistory();

    const initialValues = {
        TokenKey : '',
        
    }

    const validationSchema = Yup.object({
        TokenKey : Yup.string().required('Required')
    })

    const onSubmit = values => {
       values.TokenKey === Token ? history.push('/passengerAddress'): console.log(Token)
        
    };
    return (
        <div className= "col-10 col-md-8 mt-5 mx-auto" >
            <p className = "lead"> Input Your Driver Token Key Below</p>
        <Formik
        initialValues = {initialValues} 
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}  >
        { formik => {
            return (<Form>
                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Input Token Key'
                    name = 'TokenKey'
                    placeholder = 'Token Key'
                    />
            <button type='submit' className=" btn btn-outline-success" >
                    Proceed
                </button>
            </Form> );

        }
          }
        </Formik>
        </div>

        
    )
}
export default PassengerPage;