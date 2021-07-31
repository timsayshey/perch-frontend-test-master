<template>
  <div id="app">
    <Post :post="post"/>
    <button @click="prevPost" v-if="page != ">Previous Post</button>
    <button @click="nextPost">Next Post</button>
  </div>
</template>

<script lang="ts">
import Post from './components/Post.vue'
import axios from 'axios'
import { defineComponent, ref, computed, } from '@vue/composition-api'
export default defineComponent({
  name: 'App',
  components: {
    Post
  },
  setup: async () => {
    // data
    const apiUrl = ref('https://jsonplaceholder.typicode.com/posts/')
    const page = ref(1)
    let post = ref({})
    // computed
    const postUrl = computed(() => {
      return `${apiUrl}${page}`
    })
    // created
    const { data } = await axios.get(postUrl.value)
    console.log(data)
    post = data
  }

})

defineComponent2({

  methods: {
    prevPost () {
      if()
      // TODO
    },
    nextPost () {
      // TODO
    }
  }
})
</script>

<style></style>
