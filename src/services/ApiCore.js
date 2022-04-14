import axios from 'axios';
import { apiUrl } from "../config.json";

export const apiCore = axios.create({
  baseURL: apiUrl
});