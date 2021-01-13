<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">
        <div class="nav__logo">Twotter</div>
      </router-link>
      <p class="nav__user" v-if="user">{{ user.username }}</p>
    </nav>

    <router-view />
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'App',
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>
<style lang="scss">
.nav {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: $mobile) {
    display: block;
    text-align: center;
  }
  &__logo {
    font-size: 36px;
    color: #34b3ea;
    font-family: 'Open Sans', sans-serif;
  }
  &__user {
    padding-top: 5px;
    font-size: 24px;
    color: $base-font-color;
  }
}
</style>
