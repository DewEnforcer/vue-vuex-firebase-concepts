<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div v-if="user">
      <span>Logged in as {{user.email}}</span>
      <button @click="handleLogout">Logout</button>
    </div>
    <!-- for logged out users -->
    <div v-else>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { getUser } from '../composables/getUser';
export default {
  setup() {
    const store = useStore();
    const user = getUser();

    const handleLogout = () => {
      store.dispatch("logout");
    }

    return {handleLogout, user}
  }
}
</script>