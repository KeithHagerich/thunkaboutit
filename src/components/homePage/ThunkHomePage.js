import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/uploadActions';
import SendCsvUI from '../sendCsvButton/SendCsvUI';
import CsvFileInputUI from '../csvFileUpload/CsvFileInputUI';

export class ThunkHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.sendCsv = this.sendCsv.bind(this);
    }

    sendCsv = () => {
        this.props.actions.sendCsvSuccess();
    }

    // sendCsv = () => {
    //     console.log("send csv");
    //     return null;
    // }

    render() {
        return (
            <div>
                <CsvFileInputUI
                    name="File Input"
                    />
                <SendCsvUI
                    onClick={this.sendCsv}
                />
            </div>
        );
    }
}

ThunkHomePage.propTypes = {
};

function mapStateToProps(state) {
    return {

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
