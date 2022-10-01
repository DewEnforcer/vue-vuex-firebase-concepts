<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <h4 v-if="errorMsg">Failed to login {{errorMsg}}</h4>
    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const errorMsg = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("login", {email: email.value, password: password.value});
        router.push("/");    
      } catch (error) {
        errorMsg.value = error.message;
      }
    }

    return { handleSubmit, email, password, errorMsg }
  }
}
</script>