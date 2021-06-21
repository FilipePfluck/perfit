import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);
  
    const api = axios.create({
      baseURL: 'https://perfit-api.herokuapp.com/',
      headers: {
        Authorization: `Bearer ${cookies['perfit.token']}`
      }
    });
    
    api.interceptors.response.use(response => {
      return response;
    }, (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
          cookies = parseCookies(ctx);
    
          const { 'perfit.refreshToken': refresh_token } = cookies;
          const { 'perfit.token': old_token } = cookies;
          const originalConfig = error.config
    
          if (!isRefreshing) {
            isRefreshing = true

            api.post('/auth/refresh-token', {
                token: old_token,
                refresh_token,
            }).then(response => {
              const { access_token, refresh_token } = response.data;

              setCookie(ctx, 'perfit.token', access_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
              })
    
              setCookie(ctx, 'perfit.refreshToken', refresh_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
              })
    
              api.defaults.headers['Authorization'] = `Bearer ${access_token}`;
    
              failedRequestsQueue.forEach(request => request.onSuccess(access_token))
              failedRequestsQueue = [];
            }).catch(err => {
              failedRequestsQueue.forEach(request => request.onFailure(err))
              failedRequestsQueue = [];
    
              if(process.browser){
                signOut()
              }else{
                return Promise.reject(new AuthTokenError())
              }
            }).finally(() => {
              isRefreshing = false
            });
          }
    
          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer ${token}`
    
                resolve(api(originalConfig))
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              } 
            })
          });
        } else {
          if(process.browser){
            signOut()
          }else{
            return Promise.reject(new AuthTokenError())
          }
        }
      }
    
      return Promise.reject(error)
    });
  
    return api
  }
  
  export const api = setupAPIClient()