import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/uploadActions';
import SendCsvUI from '../sendCsvButton/SendCsvUI';
import CsvFileInputUI from '../csvFileUpload/CsvFileInputUI';
import ReactDthree from '../reactD3';
import csvData from '../../resources/data.csv'

export class ThunkHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.sendCsv = this.sendCsv.bind(this);
    }

    sendCsv = () => {
        this.props.actions.sendCsv(this.props.csvData);
    }

    render() {
        return (
            <div>
                <CsvFileInputUI
                    name="File Input"
                    />
                <SendCsvUI
                    onClick={this.sendCsv}
                />
                <ReactDthree
                    dataFileName={csvData}
                    height={960}
                    width={500}
                />
            </div>
        );
    }
}

ThunkHomePage.propTypes = {
};

function mapStateToProps(state) {
    return {
        csvData: state.csvData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThunkHomePage);
