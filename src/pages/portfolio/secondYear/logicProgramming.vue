<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Logic Programming</div>
  <div class="text-h5 q-mt-sm">Module: Computer Languages & Representations</div>
  <div class="text-h5 q-mt-sm">Grade: 87%</div>
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/prolog.png" spinner-color="white" width="10%" class="q-mt-sm" />
  </div>
  <q-separator dark class="q-mt-sm" />

  <div class="row q-py-md q-gutter-md justify-center">

      <q-card dark bordered class="my-card-wide">
        <q-card-section>
          <div class="text-h6">Question 1</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-mb-xl">
          {{text.Second_Year.Logical_Programming.Question_1_1}}
          <ul>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_1_2}}</li>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_1_3}}</li>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_1_4}}</li>
          </ul>
        </q-card-section>
        <div class="q-py-md absolute-bottom">
          <q-btn class="redirect" type="a" label="Question1.pl" href="https://github.com/will09122000/ECM2418-CA-Logic-Programming/blob/main/Question1.pl" icon="open_in_new" color="primary" target="_blank" />
        </div>
      </q-card>

      <q-card dark bordered class="my-card-wide">
        <q-card-section>
          <div class="text-h6">Question 2</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section class="q-mb-xl">
          {{text.Second_Year.Logical_Programming.Question_2_1}}
          <ul>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_2_2}}</li>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_2_3}}</li>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_2_4}}</li>
            <li class="list">{{text.Second_Year.Logical_Programming.Question_2_5}}</li>
          </ul>
        </q-card-section>
        <div class="q-py-md absolute-bottom">
          <q-btn class="redirect" type="a" label="Question2.pl" href="https://github.com/will09122000/ECM2418-CA-Logic-Programming/blob/main/Question2.pl" icon="open_in_new" color="primary" target="_blank" />
        </div>
      </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Second_Year.Logical_Programming.WDIL}}
      </q-card-section>
    </q-card>

  </div>
  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Logic Programming
      </div>
      <q-separator dark vertical inset />
      <q-img src="../../../assets/prolog.png" spinner-color="white" width="4%" class="q-ml-sm" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/ECM2418-CA-Logic-Programming" icon="open_in_new" color="primary" target="_blank" />
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
