<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Quickhull Algorithm</div>
  <div class="text-h5 q-mt-sm">Module: Algorithms that Changed the World</div>
  <div class="text-h5 q-mt-sm">Grade: 76%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Third_Year.Quickhull_Algorithm.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">
      <q-card dark bordered class="my-card-wide">
        <q-card-section>
          <div class="text-h6">Feedback</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-mb-xl">
          {{text.Third_Year.Quickhull_Algorithm.FB}}
        </q-card-section>
      </q-card>
  </div>

  <customImage filename="quickhull_algorithm.png" imageDescription="Calculating the convex hull from a 2D set of point using the Quickhull algorithm." />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Quickhull Algorithm
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Quickhull-Algorithm" icon="open_in_new" color="primary" target="_blank" />
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
