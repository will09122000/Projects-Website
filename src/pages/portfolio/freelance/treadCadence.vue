<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/tread_cadence_logo.png" spinner-color="white" width="16%" class="q-mt-sm" />
  </div>
  <div class="text-h3 q-mb-sm">Tread Cadence</div>
  <q-icon name="fab fa-swift" size="80px" class="q-pa-sm"/>
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Freelance.Tread_Cadence.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

      <q-card dark bordered class="my-card-wide">
        <q-card-section>
          <div class="text-h6">iPhone App</div>
        </q-card-section>
        <q-separator dark inset />
          <div class="row justify-center">
            <div class="col q-pa-md">
              <customImage filename="tread_cadence_1.png" imageDescription="Workout list" :showButton="false"/>
            </div>
            <div class="col q-pa-md">
              <customImage filename="tread_cadence_2.png" imageDescription="Working Out" :showButton="false"/>
            </div>
          </div>
      </q-card>

      <q-card dark bordered class="my-card-wide">
        <q-card-section>
          <div class="text-h6">Apple Watch App</div>
        </q-card-section>
        <q-separator dark inset />
          <div class="row justify-center">
            <div class="col q-pa-md">
              <q-img src="../../../assets/tread_cadence_3.png" spinner-color="white" width="500px" class="q-mt-md"/>
            </div>
          </div>
      </q-card>
  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Tread Cadence
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-swift" size="30px" class="q-pa-sm" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
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
