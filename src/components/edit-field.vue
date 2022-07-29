<template>
<div class="edit-field" v-if="!isEdit">
  <div class="edit-field_user-form">
    <form class="user-form">
      <p>
        <label class="user-form_content" for="edit-textarea-content">
          <textarea class="edit-textarea-content" name="edit-textarea-content"
          v-model="userContent" placeholder="I would prefer to placeholder a lorem ipsum but too many vue warnings about unknown words."
          style="width:404px; height:52px"></textarea>
        </label>
      </p>
    </form>
    <div class="edit-field_edit-composable">
      <button class="edit-button" @click.prevent="Edit(index), isEdit = !isEdit">{{'Edit(A)'}}</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePosts from '@/composables/use-posts';

export default defineComponent({
  name: 'EditField',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const { userContent, isEdit, Edit } = usePosts();
    return {
      userContent,
      isEdit,
      Edit,
    };
  },
});
</script>

<style>
.edit-field_user-form {
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
  .edit-textarea-content {
    margin: auto;
    border-color: #42b983;
    border-inline-start-color: blue;
    border-inline-end-color: blue;
    border-width: 5px;
    border-radius: 17px;
  }
    .edit-field_edit-composable {
      text-align: end;
    }
      .edit-button {
        color: blue;
        border-color: #42b983;
        font-weight: bold;
        font-size: large;
        border-radius: 25px;
        border-style: outset;
        width: 100px;
      }
</style>
