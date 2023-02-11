import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { removeItem, addItem, getItem } from './LocaleStorage';

export function hasAuthenticated() {
   const token = getItem('miniblogToken');
   // Ligne à décommenter en cas de possibilité d'obtention de valides tokens
   // const result = token ? tokenIsValid(token) : false;
   const result = token ? token : false;


   if (false === result) {
      removeItem('miniblogToken');
   }
   return result;
}

export function login(credentials) {
   const rand = () => {
      return Math.random().toString(36).substr(2);
   };
   const token = () => {
      return rand() + rand();
   }

   addItem('miniblogToken', token());
   return true;
   // return axios
   //    .post('http://miniblog.local:8888/api/login_check', credentials)
   //    .then(response => response.data.token)
   //    .then(token => {
   //       addItem('miniblogToken', token)

   //       return true;
   //    });
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