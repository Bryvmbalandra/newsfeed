<template>
<div class="comments-fields" v-if="!isComments">
  <div class="comments-fields_user-form">
    <form class="user-form">
      <p>
        <label class="user-form_username" for="comments-input-username">
          <span class="span-comments-username"><b>{{'COMMENT FORM\n'}}</b></span>
          <input class="comments-input-username" name="comments-input-username"
          v-model="userName" placeholder="BALANDRA, BRYAN VINCENT, M"
          style="width:300px; height: 25px;">
        </label>
      </p>
      <p>
        <label class="user-form_content" for="comments-textarea-content">
          <textarea class="comments-textarea-content" name="comments-textarea-content"
          v-model="userContent" placeholder="I would prefer to placeholder a lorem ipsum but too many vue warnings about unknown words."
          style="width:404px; height:52px"></textarea>
        </label>
      </p>
    </form>
    <div class="comments-fields_post-composable">
      <button class="comment-button" @click.prevent="Comment(index), isComments = !isComments">{{'Comment(A)'}}</button>
    </div>
  </div>
</div>
<!-- <div class="comments-fields-component" v-if="!isComments">
  <form class="comments-fields_users-form">
    <div class="comments-fields_username-field">
      <label for="comments-fields_userName">
        <h5 class="username-field_show">{{'USER NAME'}}</h5>
          <input name="comments-fields_userName"
            v-model="userName"
            placeholder="LAST NAME, FIRST NAME, MIDDLE NAME (OPTIONAL)"
            style="width: 345px; height: 27px;">
      </label>
    </div>
    <div class="users-form_user-content-field">
      <label for="comments-fields_userContent">
        <h5 class="user-content-field_show">{{'USER COMMENT'}}</h5>
          <textarea name="comments-fields_userContent"
            v-model="userContent"
            placeholder=""
            style="width: 347px; height: 61px;">
          </textarea>
      </label>
    </div>
  </form>
  <div class="comments-fields_comment-composable"><br>
    <button class="comment-button"
      @click.prevent="Comment(index), isComments = !isComments">
        <span class="comment-button_show">
          <strong>{{'Comment(A)'}}</strong>
        </span>
    </button>
  </div>
</div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePosts from '@/composables/use-posts';

export default defineComponent({
  name: 'CommentsField',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const {
      userName,
      userContent,
      isComments,
      Comment,
    } = usePosts();
    return {
      userName,
      userContent,
      isComments,
      Comment,
    };
  },
});
</script>

<style>
.comments-fields_user-form {
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
  .comments-input-username {
    margin: auto;
    border-color: #42b983;
    border-inline-start-color: blue;
    border-inline-end-color: blue;
    border-width: 5px;
    border-radius: 25px;
  }
  .comments-textarea-content {
    margin: auto;
    border-color: #42b983;
    border-inline-start-color: blue;
    border-inline-end-color: blue;
    border-width: 5px;
    border-radius: 17px;
  }
    .comments-fields_post-composable {
      text-align: end;
    }
      .comment-button {
        color: blue;
        border-color: #42b983;
        font-weight: bold;
        font-size: large;
        border-radius: 25px;
        border-style: outset;
        width: 140px;
      }
</style>
