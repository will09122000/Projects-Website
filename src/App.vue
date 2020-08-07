<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import 'prismjs'
import 'prismjs/themes/prism-dark.css'
import 'prismjs/components/prism-python.js'

export default defineComponent({
  name: 'App'
})
</script>
