<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">8-Puzzle Problem</div>
  <div class="text-h5 q-mt-sm">Module: Artificial Intelligence and Applications</div>
  <div class="text-h5 q-mt-sm">Grade: 63%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Second_Year.Puzzle_Problem.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">
    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Manhattan Distance Heuristic</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.Second_Year.Puzzle_Problem.Manhattan}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Euclidean Distance Heuristic</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.Second_Year.Puzzle_Problem.Euclidean}}
      </q-card-section>
    </q-card>
  </div>

  <customImage filename="8-puzzle_problem_2.png" imageDescription="Manhattan Distance Heuristic" />
  <q-separator class="q-mt-md" />
  <customImage filename="8-puzzle_problem_1.png" imageDescription="Euclidean Distance Heuristic" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        8-Puzzle Problem
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/ECM2423_Coursework/blob/main/question_1.2.py" icon="open_in_new" color="primary" target="_blank" />
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
