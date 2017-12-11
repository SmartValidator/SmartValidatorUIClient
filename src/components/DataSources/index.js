import React from 'react';
import './style.css';
import { Container, Row, Col, Alert, Nav, NavItem, NavLink } from 'reactstrap';
import Roas from './Roas';
import Asns from './Asns';
import Announcements from './Announcements';
import {Route, Switch} from 'react-router-dom';

class DataSources extends React.Component {
    render() {
        return (
            <div className="DataSources">
                <Container>
                    <header className="DataSources">
                        <h1 className="DataSources">DataSources</h1>
                    </header>
                    <Alert color="primary">
                        Open
                        <ul>
                            <li>Searching</li>
                            <li>Pagination</li>
                        </ul>
                    </Alert>
                    <Row>
                        <Col xs="12" lg="3">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="/ui/data_sources/announcements">Announcements</NavLink>
                                    <NavLink href="/ui/data_sources/roas">ROAs</NavLink>
                                    <NavLink href="/ui/data_sources/asns">ASN</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs="12" lg="9">
                            <Switch>
                                <Route path="/ui/data_sources/announcements" component={Announcements}/>
                                <Route path="/ui/data_sources/roas" component={Roas}/>
                                <Route path="/ui/data_sources/asns" component={Asns}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DataSources;
