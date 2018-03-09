import {beginAjaxCall} from './ajaxStatusActions';
import * as types from './actionTypes';

// export function uploadCsvSuccess(fileData) {
//     return {type: types.UPLOAD_FILE_SUCCESS, fileData};
// }

export function sendCsvSuccess() {
    console.log("send csv");
    return {type: types.SEND_CSV_SUCCESS};
}

// export function sendCsv() {
//     return function (dispatch) {
//         dispatch(beginAjaxCall());
//         return XMLHttpRequest.send(csvData).then(courses => {
//             dispatch(sendCsvSuccess(fileData));
//         }).catch(error => {
//             throw(error);
//         });
//     };
// }