<template>
<div class="posts-component">
  <div class="posts_post">
    <div class="posts_post-value-show">
      <h3 class="posts_post-username">{{post.username}}</h3>
      {{'posted'}}
      <p class="posts_post-content">{{'"' + post.content + '"'}}</p>
    </div>
    <div class="posts_buttons">
      <span class="posts_comments-show">
        <button class="posts_comments-show-button"
          @click.prevent="
          isComments = !isComments,
          isEdit = false,
          modeLog()">
          {{'Comment'}}
        </button>
      </span>
      {{'\n'}}
      <span class="posts_edit-form-show">
      <button class="posts_edit-form-show-button"
        @click.prevent="
        isEdit = !isEdit,
        isComments = false,
        modeLog()">
       {{'Edit'}}
      </button>
      </span>
      {{'\n'}}
      <span class="posts_delete-composable">
      <button class="posts_delete-button"
        @click.prevent="Delete(index)">
        {{'Delete'}}
      </button>
      </span>
    </div>
  </div>
  <div class="posts_edit-component-show" v-if="isEdit">
    <EditField :index="index" />
  </div>
  <div class="posts_comments-fields-show" v-if="isComments">
    <CommentsFields :index="index" />
    <div class="posts_comments-value-show" v-show="isCommentsEmpty">
      <div class="posts_comments" v-for="comment in post.comments" v-bind:key="comment.id">
        <div class="comments">
          <ul>
            <i><h3>{{comment.username}}</h3>{{'commented'}}</i>
            <i><p>{{'"'+ comment.comment +'"'}}</p></i>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <ol>
  <p name="posts-content">{{'"\n' + post.content + '\n"'}}</p>
  <span name="posts-username">{{'Posted by ' + post.username}}</span><br>
    Show buttons for posts here
    Show comment button here
    <button
      name="comments-button"
        @click.prevent="
          isComments = !isComments,
            isEdit = false,
              modeLog()">
                Comment
                  </button>
    Show edit button here
    <button
      name="edit-button"
        @click.prevent="
          isEdit = !isEdit,
            isComments = false,
              modeLog()">
                Edit
                  </button>
    Show delete composable here
    <button
      name="delete-composable-button"
        @click.prevent="
          Delete(index)">
            Delete
          </button><br>
  isEdit = true; edit form will show
  <div v-if="isEdit">
    Show edit component here
    <EditField
      :index="index"/>
        </div>
  isComments = true; comments form will show
  <div v-if="isComments">
    Show comments form component here
    <CommentsField
      :index="index"/>
    isCommentsEmpty > 0; comments will show
    <div v-show="isCommentsEmpty">
      Show list of comments here
      <p v-for="comment in post.comments" v-bind:key="comment.id">
        <span>{{comment.username + '\ncommented this:'}}</span><br>
        <span>{{comment.comment}}</span><br>
          </p>
            </div>
              </div>
                </ol> -->
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import usePosts from '@/composables/use-posts';
import EditField from '@/components/edit-field.vue';
import CommentsFields from './comments-fields.vue';

export default defineComponent({
  name: 'PostsList',
  components: {
    EditField,
    CommentsFields,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { isEdit, isComments, Delete } = usePosts();
    const modeLog = () => {
      console.log('commentMode:, ', isComments.value);
      console.log('isEdit: ', isEdit.value);
    };
    const isCommentsEmpty = computed(() => (props.post.comments.length !== 0));
    return {
      isEdit,
      isComments,
      Delete,
      modeLog,
      isCommentsEmpty,
    };
  },
});
</script>

<style>
.posts_post {
  text-align: center;
  padding: 20px;
  background-color: black;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
  border: 5px;
  border-style: groove;
  margin-bottom: auto;
  border-color: #42b983;
  border-top-color: darkblue;
  color: #42b983;
  background-color: black;
}
  .posts_post-username{
    font-size: large;
    color:#0de282;
  }
  .posts_post-content {
    font-size: large;
    color:#0de282
  }
    .posts_comments-show-button {
      color: crimson;
      border-color: #0de282;
      font-weight: bold;
      font-size: large;
      border-radius: 25px;
    }
    .posts_edit-form-show-button {
      color: crimson;
      border-color: #0de282;
      font-weight: bold;
      font-size: large;
      border-radius: 25px;
    }
    .posts_delete-button {
      color: crimson;
      border-color: #0de282;
      font-weight: bold;
      font-size: large;
      border-radius: 25px;
    }
      .posts_comments-value-show {
        text-align: center;
        padding: 20px;
        background-color: black;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;
        transition: all 0.25s ease;
        margin: auto;
        width: 47%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: white;
        border-radius: 25px;
        border: 5px;
        border-style: inset;
        margin-bottom: auto;
        border-color: #42b983;
        border-top-color: darkblue;
        color: blue;
        background-color: black;
      }
        .comments {
          border-style: outset;
          border-radius: 25px;
          border-color: #42b983;
        }
</style>
