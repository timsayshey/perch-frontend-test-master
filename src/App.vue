<template lang="pug">
#app(v-if="post")
  .flex.flex-col.min-h-screen
    main.pt-20.flex-grow
      Post(:post='post')
    footer.pb-20.text-center
      button.bg-gray-300.text-gray-800.font-bold.py-2.px-4.rounded-l(@click='prevPost', :class='{"opacity-25 cursor-not-allowed": page === 1, "hover:bg-gray-400": true}')
        | Previous Post
      button.bg-gray-300.text-gray-800.font-bold.py-2.px-4.rounded-r(@click='nextPost', class='hover:bg-gray-400')
        | Next Post
</template>

<script lang="ts">
import Post from './components/Post.vue'
import store from './store'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Post
  },
  setup () {
    // data
    const page = ref(1)
    const post = ref()
    // methods
    const loadPage = async () => {
      post.value = await store.dispatch('getPost', page.value)
    }
    const prevPost = async () => {
      if (page.value > 1) {
        page.value--
        await loadPage()
      }
    }
    const nextPost = async () => {
      page.value++
      await loadPage()
    }
    // mounted
    onMounted(async () => {
      await loadPage()
    })
    return {
      page,
      post,
      prevPost,
      nextPost
    }
  }
})
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css');
</style>
