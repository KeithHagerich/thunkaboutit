import {beginAjaxCall} from './ajaxStatusActions';
import * as types from './actionTypes';

// export function uploadCsvSuccess(fileData) {
//     return {type: types.UPLOAD_FILE_SUCCESS, fileData};
// }

export function sendCsvSuccess(csvData) {
    console.log("send csv success");
    return {type: types.SEND_CSV_SUCCESS, csvData};
}

export function sendCsv(csvData) {
    return function (dispatch) {
        console.log("send csv");
        return XMLHttpRequest.send(csvData).then(csvData => {
            dispatch(sendCsvSuccess(csvData));
        }).catch(error => {
            throw(error);
        });
    };
}