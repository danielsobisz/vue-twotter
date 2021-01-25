<template>
  <div class="twoot-item">
    <div class="user-profile__twoot">
      <div class="twoot-item__user">
        <img
          class="twoot-item__user-pic"
          :src="require(`@/assets/images/${pic}`)"
          :alt="username"
        />
        <p class="user__name">
          {{ firstName }} {{ lastName
          }}<span class="user__name--username">{{ username }}</span>
        </p>
      </div>
      <div class="twoot-item__content">
        <p>{{ twoot.content }}</p>
        <p class="twoot-item__date">{{ twoot.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwootItem',
  props: {
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  margin: 5px;

  background-color: white;

  border-radius: 5px;
  border: 1px solid #dfe3e8;

  cursor: pointer;
  transition: all 0.25s ease;
  &__user-pic {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  &:hover {
    transform: scale(1.1, 1.1);
  }
  &__user {
    font-weight: bold;
    padding: 10px 0;
    display: flex;
    align-items: center;
    .user__name {
      padding: 5px;
      &--username {
        padding: 5px;
        font-size: 12px;
        color: #d3d6db;
      }
    }
  }
  &__date {
    padding: 5px;
    font-size: 12px;
    text-align: right;
    color: #d3d6db;
  }
}
</style>
