import axios from 'axios';
import * as Config from './../constants/config';

export default function callAPI (endpoint, method='GET', body, token){
  let params = {'Content-Type': 'application/json',
                Accept: 'application/json'
              }
    // if(token !== null){
    //     params = {'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   };
    // }
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: params
      }).catch(err => {
        console.log(err)
      })
}