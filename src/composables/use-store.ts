import { IPost } from '@/model/post';
import { IComment } from '@/model/comment';
import { ref } from 'vue';

const staticDataPost:IPost[] = [
  {
    id: 0,
    username: '',
    content: '',
    comments: [],
  },
];

const staticDataComment:IComment[] = [
  {
    id: 0,
    username: '',
    comment: '',
  },
];

export default function useStore() {
  const posts = ref<IPost[]>(staticDataPost);
  const comments = ref<IComment[]>(staticDataComment);
  return {
    posts,
    comments,
  };
}
