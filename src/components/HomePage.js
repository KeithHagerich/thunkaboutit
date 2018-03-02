import React from 'react';
import { Link } from 'react-router-dom';
import {fuelSavings} from '../types';
import {func} from 'prop-types';
import CsvFileInput from './CsvFIleInput';


const HomePage = ({onChange}) => {
  return (
    <div>
      <h1>ThunkAboutIt</h1>

      <h2>Get Started</h2>
      <ol>
        <tr>
          <td><label htmlFor="newMpg">Csv File Upload</label></td>
          <td><CsvFileInput onChange={onChange} name="csvUpload" value={fuelSavings.newMpg}/>
          </td>
          <button type="submit" class="btn btn-primary">SEND</button>
        </tr>
      </ol>
    </div>
  );
};

HomePage.propTypes = {
  onChange: func.isRequired,
};

export default HomePage;
