import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { removeItem, addItem, getItem } from './LocaleStorage';

export function hasAuthenticated() {
   return false;
   const token = getItem('miniblogToken');
   const tokenIsValid = token ? tokenIsValid(token) : false;


   if (false === tokenIsValid) {
      removeItem('miniblogToken');
   }
   return tokenIsValid;
}

export function login(credentials) {
   return axios
      .post('http://miniblog.local:8888/api/login_check', credentials)
      .then(response => response);
}

export function logout() {
   removeItem('miniblogToken')
}

export function tokenIsValid(token) {
   const { exp } = jwtDecode(token);

   if (exp * 1000 > new Date().getTime()) {
      return true;
   }

   return false;
}