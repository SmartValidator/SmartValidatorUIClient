import React from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'reactstrap';

const Status = ({code, children}) => (
    <Route render={({staticContext}) => {
        if (staticContext)
            staticContext.status = code
        return children
    }}/>
)

const NotFound = () => (
    <Status code={404}>
        <Container>
            <div>
                <h1>Sorry, can’t find that.</h1>
            </div>
        </Container>
    </Status>
)

export default NotFound;
