<template>
  <!--Show posts form component here-->
  <PostsFields />
    <!--Show posts component here-->
    <Posts
      v-for="(post, index) in posts"
        :post="post"
          :index="index"
            :key="post.id"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useStore from '@/composables/use-store';
import Posts from '@/components/posts.vue';
import PostsFields from '@/components/posts-fields.vue';

export default defineComponent({
  name: 'NewsfeedView',
  components: {
    Posts,
    PostsFields,
  },
  setup() {
    const { posts } = useStore();
    posts.value.splice(0, 1);
    return {
      posts,
    };
  },
});
</script>
