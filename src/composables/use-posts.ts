import useStore from '@/composables/use-store';
import { ref } from 'vue';

export default function usePosts() {
  const { posts } = useStore(); // reactive posts
  const userName = ref(''); // input value for both posts and comments
  const userContent = ref(''); // textarea value for both posts and comments
  const isEdit = ref(false); // show edit form
  const isComments = ref(false); // show comments form and comments
  let counter = 0; // post id initializer

  function Post() {
    console.log('isEdit: ', isEdit.value);
    console.log('isComments: ', isComments.value);
    console.log('counter [pre-unshift]: ', counter);

    if (userName.value !== '' && userContent.value !== '') {
      counter += 1; // counter increments post id

      const items = {
        id: counter,
        username: userName.value,
        content: userContent.value,
        comments: [],
      };
      posts.value.unshift(items); // increments post list

      console.log('counter [post-unshift]: ', counter);
    } else if (userName.value !== '' && userContent.value === '') {
      // eslint-disable-next-line no-alert
      alert('Textarea is empty.\nUser input for content is required!\nPlease attempt again?');
    } else if (userName.value === '' && userContent.value !== '') {
      // eslint-disable-next-line no-alert
      alert('Input is empty.\nUser input for username is required!\nPlease attempt again?');
    } else {
      // eslint-disable-next-line no-alert
      alert('No data found!\nUser input for username and content are required!\nPlease attempt again!');
    }
    console.log('userName[pre-post]: ', userName.value);
    console.log('userContent[pre-post]: ', userContent.value);

    userName.value = ''; // refreshes input value
    userContent.value = ''; // refreshes textarea value

    console.log('userName[post-post]: ', userName.value);
    console.log('userContent[post-post]: ', userContent.value);
    console.log('Posts list: ', posts.value);
    console.log('List length: ', posts.value.length);
  }

  function Edit(index: number) {
    console.log('isEdit: ', isEdit.value);
    console.log('isComments: ', isComments.value);

    const prevContent = posts.value[index].content; // stores previous textarea value for logging

    if (userContent.value !== '') {
      posts.value[index].content = userContent.value;
    } else {
      // eslint-disable-next-line no-alert
      alert('Textarea is empty.\nUser input required.\nPlease attempt again.');
    }

    console.log('prevContent: ', prevContent);
    console.log('userContent[pre-edit]: ', userContent.value);

    userContent.value = ''; // refreshes textarea value

    console.log('userContent[post-edit]: ', userContent.value);
    console.log('Posts list: ', posts.value);
    console.log('List length: ', posts.value.length);
    console.log('Post [', index, '] ', posts.value[index].id, ' edited.');
  }

  function Delete(index: number) {
    console.log('Post [', index, '] id.', posts.value[index].id, ' deleted.');

    posts.value.splice(index, 1); // splices selected post and all its comments

    console.log('Posts list: ', posts.value);
    console.log('List length: ', posts.value.length);
  }

  function Comment(index: number) {
    let len = posts.value[index].comments.length;
    console.log('len [pre-push]: ', len);

    if (userName.value !== '' && userContent.value !== '') {
      len += 1; // len increments comment id

      const items = {
        id: len,
        username: userName.value,
        comment: userContent.value,
      };

      posts.value[index].comments.push(items); // increments comments list
      console.log('len [post-push]: ', len);
    } else if (userName.value !== '' && userContent.value === '') {
      // eslint-disable-next-line no-alert
      alert('Textarea is empty.\nUser input for comment is required!\nPlease attempt again?');
    } else if (userName.value === '' && userContent.value !== '') {
      // eslint-disable-next-line no-alert
      alert('Input is empty.\nUser input for username is required!\nPlease attempt again?');
    } else {
      // eslint-disable-next-line no-alert
      alert('No data found!\nUser input for username and comment are required!\nPlease attempt again!');
    }
    console.log('Post [', index, '] ', posts.value[index].id, ' commented on.');
    console.log('userName[pre-post]: ', userName.value);
    console.log('userComment*[pre-post]: ', userContent.value);

    userName.value = ''; // refreshes input value
    userContent.value = ''; // refreshes textarea value

    console.log('userName[post-post]: ', userName.value);
    console.log('userComment*[post-post]: ', userContent.value);
    console.log('Posts list: ', posts.value);
    console.log('List length: ', posts.value.length);
    console.log('Comments list: ', posts.value[index].comments);
    console.log('List length: ', posts.value[index].comments.length);
  }
  return {
    posts,
    userName,
    userContent,
    isEdit,
    isComments,
    Post,
    Edit,
    Delete,
    Comment,
  };
}
