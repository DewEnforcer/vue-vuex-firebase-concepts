import { createStore } from "vuex";

const store = createStore({
    state: {
        optionsApiDAta: {
            title: "Hello world OPT"
        },
        compositionApiData: {
            title: "Hello world CMPSD"
        },
    },
    mutations: {
        updateTitle(state, payload) {
            state.optionsApiDAta.title = payload;
        },
        updateTitleComp(state, payload) {
            state.compositionApiData.title = payload;
        },
    }
});

export default store;