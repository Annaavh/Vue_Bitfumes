import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLoginOpen: false,
            authUser:{}
        }
    },
    mutations:{
        setIsLoggedIn(state){
            state.isLoginOpen = true;
        },
        setAuthUser(state,payload){
            state.authUser = payload;
        }
    }
});
//8:12
export default store;