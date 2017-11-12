import React from 'react';
import './style.css';
import {Container} from 'reactstrap';
import { Alert } from 'reactstrap';

class Conflicts extends React.Component {
    render() {
        return (
            <div className="Conflicts">
                <Container>
                    <header className="Conflicts">
                        <h1 className="Conflicts">Conflicts</h1>
                    </header>
                    <Alert color="primary">
                        <p>This view should be splitted into two parts:</p>
                        <ul>
                            <li>Left: A list of conflicts.</li>
                            <li>Right: Proposed solutions from the conflict resolvers.</li>
                        </ul>
                        <p>Unhandled conflicts should be displayed differently. This view should present the user an overview
                            about handles and unhandled conflicts.</p>

                            <p>Depending how complex solution proposals from the conflict resolver are, the user should here
                        or on another view <i>accept</i> or <i>reject</i> proposed solutions. If these actions have
                        an effect, depends whether the simulation mode is on or off.</p>

                        <p>The number of open conflicts should be shown in the header within the badge after the link.</p>
                    </Alert>

                </Container>
            </div>
        );
    }
}

export default Conflicts;
