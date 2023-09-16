/* eslint-disable arrow-body-style */
import axios from 'axios';
import config from './config.json';

let envData = config['development'];
Object.keys(config).forEach((ele, i) => {
    if (ele === process.env.REACT_APP_ENV) {
        envData = Object.values(config)[i];
    }
});

export const { server } = envData;

// eslint-disable-next-line arrow-body-style
// eslint-disable-next-line import/prefer-default-export
export const withoutAuth = () => {
  return axios.create({
    baseURL: `${server}`,
  });
};

export const userInstance = () => {
  return axios.create({
    baseURL: server,
    headers: {
      Authorization: localStorage.getItem('hotelauth')
        ? `${'Bearer '}${localStorage.getItem('hotelauth')}`
        : 'HOTELAUTH@@@',
      authtoken: localStorage.getItem('hoteltoken')
        ? `${'Bearer '}${localStorage.getItem('hoteltoken')}`
        : 'HOTELAUTH@@@',
    },
    timeout: 1000 * 20,
  });
};


export const notTimeOutUserInstance = () => {
  return axios.create({
    baseURL: server,
    headers: {
      Authorization: localStorage.getItem('hotelauth')
        ? `${'Bearer '}${localStorage.getItem('hotelauth')}`
        : '',
      authtoken: localStorage.getItem('hoteltok')
        ? `${'Bearer '}${localStorage.getItem('hoteltok')}`
        : '',
    },
  });
};
