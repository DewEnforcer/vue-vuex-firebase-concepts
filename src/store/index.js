import { createStore } from "vuex";

const store = createStore({
    state: {
        optionalApiData: {
            title: "Hello world OPT"
        }
    },
    mutations: {
        updateTitle(state, payload) {
            state.optionalApiData.title = payload;
        }
    }
});

export default store;