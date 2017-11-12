import React from 'react';
import './style.css';
import {Container} from 'reactstrap';
import { Alert } from 'reactstrap';

class RootPage extends React.Component {
    render() {
        return (
            <div className="RootPage">
                <Container>
                    <header className="RootPage">
                        <h1 className="RootPage">SmartValidator UI concept</h1>
                    </header>
                    <Alert color="primary">
                        <p>In the first step, we need to defined</p>
                        <ul>
                            <li><b>which data</b> we want to show in the UI and</li>
                            <li><b>which actions</b> users should be able to do.</li>
                        </ul>
                        <p>As soon as we agree on that, I will create some more sketches about layout variants.
                        Maybe I will also come up with different versions which we need to discuss then.</p>
                        <p>Key concepts for the UI should be (in my opinion, open for discussion):</p>
                        <ul>
                            <li>Simple and easy</li>
                            <li>Be minimalistic</li>
                            <li>Follow user expectations</li>
                            <li>Hide and show data, when appropriate.</li>
                            <li>State choices clearly with their consequences.</li>
                            <li>Should work on mobile, but the normal usecase here are admins on desktop systems. (?...)</li>
                            <li>Optimized for W3C, not for Netscape Navigator 4.0</li>
                        </ul>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default RootPage;
