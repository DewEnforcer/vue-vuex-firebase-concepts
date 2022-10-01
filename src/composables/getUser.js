import { computed } from "vue";
import { useStore } from "vuex";


const getUser = () => {
    const store = useStore();

    const user = computed(() => {
      return store.state.user;
    })

    return user;
}

export {getUser};