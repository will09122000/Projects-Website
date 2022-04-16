<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Lift Algorithm</div>
  <div class="text-h5 q-mt-sm">Module: Data Structures and Algorithms</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Lift Algorithm</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Lift_Algorithm.Main}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="lift_algorithm.py" href="https://github.com/will09122000/Lift-Algorithim/blob/master/lift_algorithm.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Settings</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.First_Year.Lift_Algorithm.Settings}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Base Algorithm</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.First_Year.Lift_Algorithm.Base_Algorithm}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Improved Algorithm</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.First_Year.Lift_Algorithm.Improved_Algorithm}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Lift_Algorithm.WDIL}}
      </q-card-section>
    </q-card>

  </div>

  <q-video :ratio="16/9" src="https://www.youtube.com/embed/l_47qbni9mY?rel=0" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Lift Algorithm
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Lift-Algorithim" icon="open_in_new" color="primary" target="_blank" />
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
