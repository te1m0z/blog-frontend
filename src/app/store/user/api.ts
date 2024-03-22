import { http } from "@/app/config/axios";
import type { IUserLoginParams } from "./types";
import { AxiosError, AxiosResponse } from "axios";

const USER_LOGIN = 'user/login'

export async function loginWithPassword(params: IUserLoginParams) {
    try {
        //
        const response = await http.post(USER_LOGIN, params)
        console.log(response);
        //
        return response.data.data
    } catch (err) {
        console.log(12331, err)
    }
}
