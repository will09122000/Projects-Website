<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/measure_area_logo.png" spinner-color="white" width="20%" class="q-mt-sm" />
  </div>
  <div class="text-h3 q-mb-sm">Measure Area</div>
  <q-icon name="fab fa-swift" size="80px" />
  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Personal.Measure_Area.Main}}
    </div>
  </div>
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Reminders</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.Personal.Discord_Bot.Reminders}}</q-card-section>
      <customImage filename="Discord_Bot_Reminders.png" imageDescription="Reminders"/>
    </q-card>

  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Measure Area
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-swift" size="30px" class="q-ml-xs" />
    </q-toolbar>
  </q-footer>
</div>
</template>

<script>
import textJson from '../../../text.json'
import customImage from '../../../components/image.vue'

export default {
  components: {
    customImage
  },
  data () {
    return {
      text: textJson
    }
  }
}
</script>
