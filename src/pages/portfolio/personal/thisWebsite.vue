<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">This Website</div>
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/vue-js.png" spinner-color="white" width="15%" class="q-mt-sm" />
    <q-img src="../../../assets/quasar.png" spinner-color="white" width="19%" class="q-mt-sm" />
  </div>

  <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Projects-Website" icon="open_in_new" color="primary" target="_blank" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        This Website
      </div>
      <q-separator dark vertical inset />
      <q-img src="../../../assets/vue-js.png" spinner-color="white" width="8%" class="q-ml-xs" />
      <q-img src="../../../assets/quasar.png" spinner-color="white" width="10%" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Projects-Website" icon="open_in_new" color="primary" target="_blank" />
    </q-toolbar>
  </q-footer>

</div>
</template>

<script>
import textJson from '../../../text.json'

export default {
  data () {
    return {
      text: textJson
    }
  }
}
</script>
