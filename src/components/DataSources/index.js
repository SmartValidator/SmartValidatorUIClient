import React from 'react';
import './style.css';
import {Container} from 'reactstrap';
import { Alert } from 'reactstrap';

class DataSources extends React.Component {
    render() {
        return (
            <div className="DataSources">
                <Container>
                    <header className="DataSources">
                        <h1 className="DataSources">DataSources</h1>
                    </header>
                    <Alert color="primary">
                        This view could be splittet in three. It should show the BGP announcements,
                        ROAs and the ASNs in a DataTables presentation. Users should be able to
                        search the database for this items. No other actions are intended here.
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default DataSources;
