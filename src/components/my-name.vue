<template>
  <h1 class="msg"> {{msg}} </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyName',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.msg {
    text-align: center;
    margin-top:185px;
    color:#42b983;
  }
</style>
