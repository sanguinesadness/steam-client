import axios from 'axios';
import { ISteamUser, UserType, UserTypes } from '../types/user';
import { API_URL } from '../constants/api-url';
import { extractUserFromResponse } from '../lib/steam-helper';
import { ILoginModel } from '../models/login';

class SteamUserService {
    static getUser = async (type: UserType) => {
        return new Promise<ISteamUser>((resolve, reject) => {
            axios.get<any, any>(`${API_URL}/${type}`)
                .then(response => resolve(extractUserFromResponse(response)))
                .catch(error => reject(error));
        })
    }

    static refreshUser = async (type: UserType) => {
        return new Promise<ISteamUser>((resolve, reject) => {
            axios.put<any, any>(`${API_URL}/${type}/refresh`)
                .then(response => resolve(extractUserFromResponse(response)))
                .catch(error => reject(error));
        });
    }

    static login = async (type: UserType, data: ILoginModel) => {
        return new Promise<ISteamUser>((resolve, reject) => {
            axios.post<any, any>(`${API_URL}/${type}/login`, data)
                 .then(response => resolve(extractUserFromResponse(response)))
                 .catch(error => reject(error.response.data));
        });
    }

    static logout = async (type: UserType) => {
        return new Promise<string>((resolve, reject) => {
            axios.post<any, any>(`${API_URL}/${type}/logout`)
                 .then(() => resolve("Successfully Logged out"))
                 .catch(error => reject(error.response.data));
        });
    }

    static setRandomProfile = async (type: UserType) => {
        if (type !== UserTypes.FAKE) {
            return null;
        }

        return axios.post<any, any>(`${API_URL}/${type}/setRandomProfile`);
    }

    static setWarningProfile = async (type: UserType) => {
        if (type !== UserTypes.VICTIM) {
            return null;
        }

        return axios.post<any, any>(`${API_URL}/${type}/setWarningProfile`);
    }
}

export default SteamUserService;