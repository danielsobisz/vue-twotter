<template>
  <div class="user-profile">
    <!-- <div
      class="user-profile__background"
      :style="
        require({
          background: `url('@/assets/images/${state.user.background})`,
        })
      "
    ></div> -->
    <div class="user-profile__content">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">{{ state.user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
          <p>Admin</p>
        </div>
        <div class="user-profile__follower-count">
          <p>Followers: {{ state.user.followers }}</p>
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
      <div class="user-profile__twoots-wrapper">
        <TwootItem
          v-for="twoot in state.user.twoots"
          :key="twoot.id"
          :username="state.user.username"
          :firstName="state.user.firstName"
          :lastName="state.user.lastName"
          :pic="state.user.pic"
          :twoot="twoot"
          :date="state.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users';
import TwootItem from '../components/TwootItem';
import CreateTwootPanel from '../components/CreateTwootPanel';

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      user: users[userId.value - 1] || users[1],
    });
    function addTwoot(twoot) {
      let currentDate = new Date().toLocaleString();
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
        date: currentDate,
      });
    }
    return {
      state,
      addTwoot,
      userId,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  &__content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-template-areas:
      'userpanel createtwoot createtwoot'
      'userpanel twootswrapper twootswrapper';
    grid-gap: 10px;

    width: 50%;

    margin: 0 auto;
    padding: 50px 5%;
    @media (max-width: $laptop) {
      width: 70%;
    }
    @media (max-width: $tablet-m) {
      width: 90%;
      display: block;
    }
  }
  &__background {
    height: 500px;

    background-position: 50%;
    filter: brightness(50%);
  }
  &__username {
    @media (max-width: $mobile) {
      font-size: 24px;
    }
  }
  &__user-panel {
    display: flex;
    flex-direction: column;

    grid-area: userpanel;

    padding: 20px;

    max-height: 150px;

    background-color: white;

    border-radius: 5px;
    border: 1px solid #dfe3e8;
    @media (max-width: $tablet-m) {
      margin: 20px 0;
    }
  }
  &__admin-badge {
    margin: 5px auto 5px 0;
    padding: 0 10px;

    background-color: rebeccapurple;
    color: white;

    border-radius: 5px;

    font-weight: bold;
  }
  &__follower-count {
    padding: 10px 0;
  }
  &__twoots-wrapper {
    grid-area: twootswrapper;
    @media (max-width: $tablet-m) {
      margin: 20px 0;
    }
  }
}
</style>
