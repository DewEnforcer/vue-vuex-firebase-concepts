import { createStore } from "vuex";

import {auth} from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async login() {

        },
        async signup(context, {email, password}) {

            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (!res) throw new Error("Failed to login");

            context.commit("setUser", res.user);
        }
    }
});

export default store;