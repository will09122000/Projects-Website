<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/wonky_notes_logo.png" spinner-color="white" width="20%" class="q-mt-sm" />
  </div>
  <div class="text-h3 q-mb-sm">Wonky Notes</div>
  <q-icon name="fab fa-swift" size="80px" />
  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Freelance.Wonky_Notes.Main}}
    </div>
  </div>
  <q-separator dark class="q-mt-sm" />

  <div class="col justify q-pa-md">
    <q-img src="../../../assets/wonky_notes_1.png" style="max-width: 300px" class="q-ma-sm" spinner-color="black" />
    <q-img src="../../../assets/wonky_notes_2.png" style="max-width: 300px" class="q-ma-sm" spinner-color="black" />
  </div>

  <div class="col justify q-pa-md">
    <q-img src="../../../assets/wonky_notes_3.png" style="max-width: 300px" class="q-ma-sm" spinner-color="black" />
    <q-img src="../../../assets/wonky_notes_4.png" style="max-width: 300px" class="q-ma-sm" spinner-color="black" />
    <q-img src="../../../assets/wonky_notes_5.png" style="max-width: 300px" class="q-ma-sm" spinner-color="black" />
  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Wonky Notes
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-swift" size="30px" class="q-ml-xs" />
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
