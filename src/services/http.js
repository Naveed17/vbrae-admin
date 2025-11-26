import axios from 'axios';
import { store } from '@/redux'; // if using redux
import { setLogout } from '@/redux/slices/user';
import toast from 'react-hot-toast';

function getToken() {
  const cname = 'token';
  if (typeof window !== 'undefined') {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  return '';
}

export const baseURL = process.env.NEXT_PUBLIC_API_URL;
const http = axios.create({
  baseURL: baseURL + `/api`,
  // withCredentials: true
});

http.interceptors.request.use(
  (config) => {
    //const token = getToken();
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJuYXZlZWQwNzc4NkBnbWFpbC5jb20iLCJpYXQiOjE3NjIxODA2MjYsImV4cCI6MTc2Mjc4NTQyNn0.XakayKFgAqZpYEjAElDNaYBz9P2Eg8o7_XJe8dIz-Cc';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Response interceptor: catch 401
// http.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // ✅ show toast once
//       toast.error('Session expired, please login again.');

//       // ✅ clear auth state
//       store.dispatch(setLogout());
//       // ✅ optional: redirect to login page
//       window.location.href = '/auth/sign-in';
//     }
//     return Promise.reject(error);
//   }
// );

export default http;
