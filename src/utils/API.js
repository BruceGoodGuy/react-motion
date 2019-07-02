import axios from 'axios';
import * as Config from './../constants/config';

export default function callAPI (endpoint, method='GET', body){
    return axios({
        method: method,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
      }).catch(err => {
        return err.response;
      })
}