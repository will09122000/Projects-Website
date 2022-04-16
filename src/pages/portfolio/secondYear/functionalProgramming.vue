<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Functional Programming</div>
  <div class="text-h5 q-mt-sm">Module: Computer Languages & Representations</div>
  <div class="text-h5 q-mt-sm">Grade: 76%</div>
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/haskell.png" spinner-color="white" width="13%" class="q-mt-sm" />
  </div>
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">
    <div class="my-row">

      <q-card dark bordered class="bg-grey-9 my-column">
        <q-card-section>
          <div class="text-h6">Question 1</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-mb-xl">
          {{text.Second_Year.Functional_Programming.Question_1_1}}
          <ul>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_1_2}}</li>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_1_3}}</li>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_1_4}}</li>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_1_5}}</li>
          </ul>
        </q-card-section>
        <div class="q-py-md absolute-bottom">
          <q-btn class="redirect" type="a" label="puzzle.hs" href="https://github.com/will09122000/ECM2418-CA-Functional-Programming/blob/main/puzzle.h" icon="open_in_new" color="primary" target="_blank" />
        </div>
      </q-card>

      <q-card dark bordered class="bg-grey-9 my-column">
        <q-card-section>
          <div class="text-h6">Question 2</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-mb-xl">
          {{text.Second_Year.Functional_Programming.Question_2_1}}
          <ul>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_2_2}}</li>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_2_3}}</li>
            <li class="list">{{text.Second_Year.Functional_Programming.Question_2_4}}</li>
          </ul>
          {{text.Second_Year.Functional_Programming.Question_2_5}}
        </q-card-section>
        <div class="q-py-md absolute-bottom">
          <q-btn class="redirect" type="a" label="GameOfLife.hs" href="https://github.com/will09122000/ECM2418-CA-Functional-Programming/blob/main/GameOfLife.h" icon="open_in_new" color="primary" target="_blank" />
        </div>
      </q-card>
    </div>

    <q-card dark bordered class="bg-grey-9 my-column">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Second_Year.Functional_Programming.WDIL}}
      </q-card-section>
    </q-card>

  </div>

  <customImage filename="glider_pattern.png" imageDescription="Question 2 - Glider Pattern" :caption="true" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Functional Programming
      </div>
      <q-separator dark vertical inset />
      <q-img src="../../../assets/haskell.png" spinner-color="white" width="5%" class="q-ml-sm" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/ECM2418-CA-Functional-Programming" icon="open_in_new" color="primary" target="_blank" />
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
