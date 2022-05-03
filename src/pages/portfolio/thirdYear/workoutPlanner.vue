<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Resistance Training App with Automatic Exercise Analysis</div>
  <div class="text-h5 q-mt-sm">Module: Individual Literature Review and Project</div>
  <div class="text-h5 q-mt-sm">Grade: x%</div>
  <q-icon name="fab fa-swift" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="text-body-2 q-pa-md">
    {{text.Third_Year.Workout_Planner.a}}<br><br>
    {{text.Third_Year.Workout_Planner.b}}<br><br>
    {{text.Third_Year.Workout_Planner.c}}
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <div class="my-row">

      <q-card dark bordered class="bg-grey-9 my-column">
        <q-card-section>
          <div class="text-h6">Euclidean Distance Heuristic</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          {{text.Second_Year.Puzzle_Problem.Euclidean}}
        </q-card-section>
      </q-card>
    </div>

    <q-card dark bordered class="bg-grey-9">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.Second_Year.Puzzle_Problem.WDIL}}
      </q-card-section>
    </q-card>
  </div>

  <div class="row">
    <customImage filename="workout_planner_1.png" imageDescription="Manhattan Distance Heuristic" />
    <customImage filename="workout_planner_2.png" imageDescription="Euclidean Distance Heuristic" />
  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Workout Planner
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-swift" size="30px" class="q-ml-xs" />
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
