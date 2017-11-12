import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import T from 'i18n-react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">
                        <h3><T.span text={{key: "platform.name"}}/></h3>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/data_sources">Data sources</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/conflicts">
                                    Conflicts
                                    <span className="badge badge-info">42</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/simulator">Simulator</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/settings">Settings</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }


}
