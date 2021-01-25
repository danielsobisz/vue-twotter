<template>
  <form
    class="user-profile__create-twoot"
    @submit.prevent="createNewTwoot"
    :class="{
      'user-profile__create-twoot--exceeded': newTwootCharacterCount >= 181,
    }"
  >
    <label for="newTwoot">
      <strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)
    </label>
    <textarea
      id="newTwoot"
      rows="4"
      v-model="state.newTwootContent"
      placeholder="What's crackin?"
      class="user-profile__textarea"
    />
    <button v-if="newTwootCharacterCount < 181" class="user-profile__button">
      Twoot!
    </button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'CreateTwootPanel',
  setup(props, ctx) {
    const state = reactive({
      newTwootContent: '',
      date: '',
    });

    const newTwootCharacterCount = computed(() => state.newTwootContent.length);

    function createNewTwoot() {
      ctx.emit('add-twoot', state.newTwootContent);
      state.newTwootContent = '';
    }
    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile__create-twoot {
  display: flex;
  flex-direction: column;
  .user-profile__textarea {
    margin: 10px 0;
    padding: 10px;

    font-family: 'Nunito', sans-serif;
    font-size: 16px;

    border: 0;
    border-radius: 5px;

    resize: none;
    &:focus {
      outline: 0;
    }
  }
  .user-profile__button {
    margin: 0 auto;
    padding: 10px;

    width: 20%;

    grid-area: createtwoot;

    background-color: rgb(45, 168, 224);
    color: white;

    font-size: 20px;
    letter-spacing: 0.5px;

    border-radius: 5px;
    border: 0px;

    cursor: pointer;
    transition: 0.5s;

    @media (max-width: $mobile) {
      width: 50%;
    }
    &:hover {
      background-color: white;
      color: rgb(45, 168, 224);
    }
  }

  &--exceeded {
    color: red;
  }
}
</style>
