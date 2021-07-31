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
import { defineComponent, ref, onMounted, computed } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Post
  },
  setup () {
    // data
    const page = ref(1)
    // methods
    const loadPage = async () => {
      await store.dispatch('getPost', page.value)
    }
    const prevPost = async () => {
      if (page.value !== 1) {
        page.value--
        await loadPage()
      }
    }
    const nextPost = async () => {
      page.value++
      await loadPage()
    }
    // computed
    const post = computed(() => {
      return store.state.posts[page.value - 1]
    })
    const isDisabled = computed(() => {
      return page.value === 1
    })
    // mounted
    onMounted(async () => {
      await loadPage()
    })
    return {
      page,
      post,
      prevPost,
      nextPost,
      isDisabled
    }
  }
})
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css');
</style>
