<template>
  <form @submit.prevent="handleSubmit">
    <h1 v-if="signUpMessage" style="color: red">Failed to signup! Please try again! {{signUpMessage}}</h1>
    <h3>Sign up</h3>
    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import {useRouter} from "vue-router";

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const signUpMessage = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      signUpMessage.value = null;

      try {
        await store.dispatch("signup", {email: email.value, password: password.value});
        router.push("/");
      } catch (error) {
        signUpMessage.value = error.message;
      }
    }

    return { handleSubmit, email, password, signUpMessage }
  }
}
</script>