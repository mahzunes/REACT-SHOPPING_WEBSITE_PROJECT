import store from "./store/index";
import { setActiveUser } from "./store/userSlice";


export const userHandle = data => {
    store.dispatch(setActiveUser(data));
}