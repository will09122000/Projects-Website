<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Vaccine Ordering</div>
  <div class="text-h5 q-mt-sm">Module: The C Family</div>
  <div class="text-h5 q-mt-sm">Grade: 86%</div>
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/c++.png" spinner-color="white" width="6%" class="q-mt-sm" />
  </div>
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Second_Year.Vaccine_Ordering.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Feedback</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Second_Year.Vaccine_Ordering.FB}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Second_Year.Vaccine_Ordering.WDIL}}
      </q-card-section>
    </q-card>

  </div>

  <customImage filename="vaccine-ordering.png" imageDescription="Vaccine Ordering Example" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Vaccine Ordering
      </div>
      <q-separator dark vertical inset />
      <q-img src="../../../assets/c++.png" spinner-color="white" width="3%" class="q-ml-sm" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Vaccine-Ordering" icon="open_in_new" color="primary" target="_blank" />
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
