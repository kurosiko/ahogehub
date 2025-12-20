import { writable,type Writable} from "svelte/store";
export type User = {
    user_id : string,
    username : string,
}
export const user_default_value = {
    user_id : "",
    username : "",
}
export const is_logged_in: Writable<boolean> = writable(false);
export const authUser:Writable<User> = writable(user_default_value);
export const logout = ()=>{
    authUser.set(user_default_value);
    is_logged_in.set(false);
}