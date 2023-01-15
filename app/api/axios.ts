import axios from 'axios';

import { getContentType } from '@utils/api.utils';

export const API_URL = `${process.env.REACT_API_URL}/api`;

export const api = axios.create({
  baseURL: API_URL,
  headers: getContentType()
});
