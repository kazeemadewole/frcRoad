import React from 'react';
import {useHistory} from 'react-router-dom';
import {Formik , Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import {useStateValue} from './Store';
// import {auth} from './Firebase';






const DriversPage = ()  => {
    
    const [{user}, dispatch] = useStateValue();
   const history = useHistory();

    
    const initialValues = {
        Email : '',
        Password : ''
        
    }

    const validationSchema = Yup.object({
        Email : Yup.string().email('Invalid').required('Required'),
        Password : Yup.string().required('Required')
    })

    const onSubmit = values => {
        
            try{
                dispatch({type: 'ADD_USER', val: values})
                history.push('/driverPage');
            
            }catch(e){
                alert (e.message);
            }

       };
    return (
        <div className="container ">
        <div className='card bg-transparent'> 
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
                    label = 'Email Address'
                    name = 'Email'
                    placeholder = 'Email Address'
                    />
                     <FormikControl 
                    control='input'
                    type = 'password'
                    label = 'Password'
                    name = 'Password'
                    placeholder = 'Password'
                    />
                   
                <button type='submit' className="btn btn-lg btn-primary " >
                    Sign In
                </button>
            </Form> );

        }
          }
        </Formik>
        </div>
        </div>
        </div>
        
        
    )

  
    
}


export default DriversPage;
