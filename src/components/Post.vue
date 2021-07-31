<template>
  <h1>{{ post.title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Post',
  props: {
    post: {
      required: true,
      type: Object
    }
  }
})
</script>

<style scoped></style>
