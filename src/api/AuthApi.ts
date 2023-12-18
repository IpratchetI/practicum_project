import { BaseApi } from './BaseApi'
import {SigninData, SignupData, User} from "../utils/Types";

export class AuthApi extends BaseApi {
    constructor() {
        super('/auth')
    }

    signin(data: SigninData) {
        return this.http.post('/signin', data)
    }

    signup(data: SignupData) {
        return this.http.post('/signup', data)
    }

    read(): Promise<User> {
        return this.http.get('/user')
    }

    logout() {
        return this.http.post('/logout')
    }
}

export const authApi = new AuthApi()
