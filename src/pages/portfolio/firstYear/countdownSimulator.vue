<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Countdown Simulator</div>
  <div class="text-h5 q-mt-sm">Module: Programming</div>
  <div class="text-h5 q-mt-sm">Grade: 88%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.First_Year.Countdown_Simulator.a}} <br>
      {{text.First_Year.Countdown_Simulator.b}} <br>
      {{text.First_Year.Countdown_Simulator.c}} <br>
      {{text.First_Year.Countdown_Simulator.d}} <br>
      {{text.First_Year.Countdown_Simulator.e}} <br>
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">
    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Countdown_Simulator.WDIL}}
      </q-card-section>
    </q-card>
  </div>

  <customImage filename="countdown_simulator_0.png" imageDescription="Countdown Simulator" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Countdown Simulator
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
        <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Countdown-Simulator" icon="open_in_new" color="primary" target="_blank" />
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
