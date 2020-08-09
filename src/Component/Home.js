import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import DriversPage from './DriversPage';

const Home = () => {
    return (
        <React.Fragment>
            <div className="Home__container" >
            <div className="Home__view mx-auto col-md-6  col-10" >
                <p className="mt-3 ml-3 lead"><strong className=" mr-3">Drivers Only</strong>
                 <small>
                     <Link to="/passengerPage" className="pasLink"> Click here for Passenger's Page </Link>
                     
                </small> </p>
                <DriversPage />
                
            </div>
            </div>

        </React.Fragment>
    )
}
export default Home;

