import axios from 'axios';

import { URL_API } from '../../env.json';

export const api = axios.create({
  baseURL: URL_API,
});
