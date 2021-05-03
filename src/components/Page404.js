import React from 'react';

const Page404 = (props) => {
    return(
        <div className='text-center'>
            <p><h3>404</h3> {props.notfound} doesn't exist</p>
        </div>
    )
}

export default Page404