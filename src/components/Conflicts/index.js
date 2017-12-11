import React from 'react';
import './style.css';
import { Container, Row, Col, Alert } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Conflicts extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            items: [],
            totalSize: 0,
            page: 1,
            sizePerPage: 10,
        };
        this.fetchData = this.fetchData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(page = this.state.page, sizePerPage = this.state.sizePerPage) {
        fetch('http://localhost:8080/v1/conflicts/1')
            .then(response => response.json()) // This transforms the response to JSON and stores it in the same variable.
            .then(response => this.setState({items: response.announcements, totalSize: response.total, page, sizePerPage}));
    }

    handlePageChange(page, sizePerPage) {
        this.fetchData(page, sizePerPage);
    }

    handleSizePerPageChange(sizePerPage) {
        // When changing the size per page always navigating to the first page
        this.fetchData(1, sizePerPage);
    }

    render() {
        const options = {
            onPageChange: this.handlePageChange,
            onSizePerPageList: this.handleSizePerPageChange,
            page: this.state.page,
            sizePerPage: this.state.sizePerPage,
        };

        return (
            <div className="Conflicts">
                <Container>
                    <header className="Conflicts">
                        <h1 className="Conflicts">Conflicts</h1>
                    </header>
                    <Row>
                        <Col xs="6">
                            <h4>Last conflicts</h4>
                            <BootstrapTable
                                data={this.state.items}
                                options={options}
                                fetchInfo={{dataTotalSize: this.state.totalSize}}
                                remote
                                pagination
                                striped
                                hover
                                condensed
                                version='4'
                            >
                                <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='asn'>ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField='prefix'>Prefix</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                        <Col xs="6">
                            <h4>Filtered announcements</h4>
                            <i>Table with announcements for which exist validated_roas entries with active filtered flag. Will be added after the next database scheme.</i>
                            <h4>Whitelisted announcements</h4>
                            <i>Table with announcements for which exist validated_roas entries with active whitelisted flag. Will be added after the next database scheme.</i>
                        </Col>
                    </Row>
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
