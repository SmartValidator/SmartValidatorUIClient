import React from 'react';
import './style.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
let config = require('../../../config');

class Announcements extends React.Component {

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
        fetch(config.api_host + '/v1/announcements')
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
        );
    }
}

export default Announcements;
