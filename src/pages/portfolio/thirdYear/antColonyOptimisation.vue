<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Ant Colony Optimisation</div>
  <div class="text-h5 q-mt-sm">Module: Nature-inspired Computation</div>
  <div class="text-h5 q-mt-sm">Grade: 79%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Third_Year.Ant_Colony_Optimisation.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">
    <div class="my-row">
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">Feedback</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-mb-xl">
          {{text.Third_Year.Ant_Colony_Optimisation.FB}}
        </q-card-section>
      </q-card>

      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">What did I learn?</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          {{text.Third_Year.Ant_Colony_Optimisation.WDIL}}
        </q-card-section>
      </q-card>
    </div>
  </div>

  <customImage filename="ant_colony_optimisation.png" imageDescription="The graph ants would traverse to create a solution to the bin packing problem." />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Ant Colony Optimisation
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Bin-Packing-with-ACO" icon="open_in_new" color="primary" target="_blank" />
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
