<template>
<MyName :msg="msg" />
</template>

<script lang="ts">
import MyName from '@/components/my-name.vue';

export default ({
  name: 'HomeView',
  components: {
    MyName,
  },
  props: {
    msg: {
      type: String,
      default: 'BRYAN VINCENT M BALANDRA',
    },
  },
});
</script>
