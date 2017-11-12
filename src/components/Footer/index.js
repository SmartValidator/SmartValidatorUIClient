import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <Container>
                <footer className="Footer">
                    <hr/>
                    <Row>
                        <Col xs="6" className="text-muted small">
                            <a href="https://github.com/naturtrunken/SmartValidatorUI">https://github.com/naturtrunken/SmartValidatorUI</a>
                        </Col>
                        <Col xs="6" className="text-right text-muted small">This is the footer.</Col>
                    </Row>
                </footer>
            </Container>
        );
    }
}

export default Footer;
