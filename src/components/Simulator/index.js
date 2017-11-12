import React from 'react';
import './style.css';
import {Container} from 'reactstrap';
import {Alert} from 'reactstrap';

class Simulator extends React.Component {
    render() {
        return (
            <div className="Simulator">
                <Container>
                    <header className="Simulator">
                        <h1 className="Simulator">Simulator</h1>
                    </header>
                    <Alert color="primary">
                        <p>If the simulation mode is off, this view shows the performed solutions which were
                            proposed from the conflict resolver.</p>
                        <p>If the simulation mode is on, this view shows which solutions would be performed,
                            if the simulation mode would be off.</p>
                        <p>Users should be able to activate and deactivate the simulation mode here.</p>
                    </Alert>
                    <Alert color="warning">
                        <p>What shall we do with a drunken simulator? Ahm... What should we do if the simulation mode is off? Then,
                        it doesn't make sense to show here the applied solutions, because then, this is not a simulation.
                        Maybe should we add another view which does the same, but isn't called <i>Simulator</i>?
                            (Maybe <i>Reporting</i>?)</p>
                        <p>But we shouldn't also remove the point <i>Simulator</i> from the header, because I think this
                        is an importend key-feature which should be very visible.</p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default Simulator;
