<template>
<div class="posts-fields">
  <div class="posts-fields_user-form">
    <form class="user-form">
      <p>
        <label class="user-form_username" for="posts-input-username">
          <span class="span-posts-username"><b>{{'POST FORM\n'}}</b></span>
          <input class="posts-input-username" name="posts-input-username"
          v-model="userName" placeholder="BALANDRA, BRYAN VINCENT, M"
          style="width:300px; height: 25px;">
        </label>
      </p>
      <p>
        <label class="user-form_content" for="posts-textarea-content">
          <textarea class="posts-textarea-content" name="posts-textarea-content"
          v-model="userContent" placeholder="I would prefer to placeholder a lorem ipsum but too many vue warnings about unknown words."
          style="width:404px; height:52px"></textarea>
        </label>
      </p>
    </form>
    <div class="posts-fields_post-composable">
      <button class="post-button" @click.prevent="Post()">{{'Post'}}</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePosts from '@/composables/use-posts';

export default defineComponent({
  name: 'PostsFields',
  setup() {
    const {
      userName,
      userContent,
      Post,
    } = usePosts();
    return {
      userName,
      userContent,
      Post,
    };
  },
});
</script>

<style>
.posts-fields_user-form {
  text-align:start;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
  border: 5px;
  border-style: outset;
  margin-bottom: auto;
  border-color: #42b983;
  border-top-color: darkblue;
  color: blue;
  background-color: black;
  }
  .posts-input-username {
    margin: auto;
    border-color: #42b983;
    border-inline-start-color: blue;
    border-inline-end-color: blue;
    border-width: 5px;
    border-radius: 25px;
  }
  .posts-textarea-content {
    margin: auto;
    border-color: #42b983;
    border-inline-start-color: blue;
    border-inline-end-color: blue;
    border-width: 5px;
    border-radius: 17px;
  }
    .posts-fields_post-composable {
      text-align: end;
    }
      .post-button {
        color: blue;
        border-color: #42b983;
        font-weight: bold;
        font-size: large;
        border-radius: 25px;
        border-style: outset;
        width: 100px;
      }
</style>
