<template lang="pug">
.relative.px-4(class='sm:px-6 lg:px-8')
  .text-lg.max-w-prose.mx-auto
    h1
      span.mt-2.block.text-3xl.text-center.leading-8.font-extrabold.tracking-tight.text-gray-900(class='sm:text-4xl')
        | {{ post.title }}
    p.mt-8.text-xl.text-gray-500.leading-8
      | {{ post.body }}
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
