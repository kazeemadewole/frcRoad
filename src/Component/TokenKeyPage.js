import React from 'react'

import {useStateValue} from './Store';

const TokenKeyPage = () => {
    const [{Token}] = useStateValue();
    return (
        <div className= "container">
            <div className="col-10 col-md-8 mx-auto mt-5">
                <h5>Give your Passengers the following Token Key</h5>
                <small className= "text-muted">Direction to passengers: login to the website, find passenger's page, and input the
                    token key to fill the form afterwards
                </small>

                <p className="lead"> {Token}</p>
            </div>
        </div>

    )
}
export default TokenKeyPage