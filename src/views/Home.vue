<template>
  <div class="home">
    <h2 class="home__headline">This is happening.</h2>
    <div class="home__users-list">
      <router-link
        v-for="user in users"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
        :key="user.id"
      >
        <div class="users-list__user">
          <img
            class="user-pic"
            :src="require(`@/assets/images/${user.pic}`)"
            :alt="user.username"
          />
          <div class="user-info">
            <h2 class="user-name">{{ user.firstName }} {{ user.lastName }}</h2>
            <h2 class="user-username">{{ user.username }}</h2>
            <h3 class="user-followers">Followers: {{ user.followers }}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from '../assets/users';
export default {
  name: 'Home',
  setup() {
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__headline {
    margin-top: 50px;

    text-align: center;
    font-size: 48px;

    color: $base-font-color;
  }
  &__users-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 80%;

    margin: 100px auto;
    @media (max-width: $laptop) {
      width: 95%;
    }
    @media (max-width: $tablet-m) {
      justify-content: space-around;
    }
    .users-list__user {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 450px;
      width: 300px;

      border-radius: 10px;

      transition: 0.3s;

      text-align: center;

      background-color: #e7e7e8;
      @media (max-width: $laptop-s) {
        width: 280px;
      }
      @media (max-width: $tablet) {
        margin: 10px 0;
      }
      &:hover {
        transform: scale(1.1, 1.1);
      }
      .user-pic {
        width: 150px;
        height: 150px;

        margin: 0 auto;

        border-radius: 50%;
      }
      .user-name {
        padding: 5px;

        color: $base-font-color;
      }
      .user-username {
        padding: 5px;

        font-size: 16px;

        color: #696969;
      }
      .user-followers {
        padding: 5px;

        font-size: 14px;

        color: #ac9797;
      }
    }
  }
}
</style>
