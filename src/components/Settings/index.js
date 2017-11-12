import React from 'react';
import './style.css';
import {Container} from 'reactstrap';
import { Alert } from 'reactstrap';

class Settings extends React.Component {
    render() {
        return (
            <div className="Settings">
                <Container>
                    <header className="Settings">
                        <h1 className="Settings">Settings</h1>
                    </header>
                    <Alert color="primary">
                        <p>Here the user can configure the system. For example:</p>
                        <ul>
                            <li>User management (Add/lock/delete users, change password, change credentials, etc.)</li>
                            <li>Notification settings (when, via what channel who wants to be informed about conflicts/applied solutions)</li>
                            <li>...?</li>
                        </ul>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default Settings;
