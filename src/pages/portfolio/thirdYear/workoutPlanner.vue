<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/workout_planner_logo.png" spinner-color="white" width="16%" class="q-mt-sm" />
  </div>
  <div class="text-h3 q-mb-sm">Workout Planner</div>
  <div class="text-h5 q-mt-sm">Module: Individual Literature Review and Project</div>
  <div class="text-h5 q-mt-sm">Grade: 83%</div>
  <q-icon name="fab fa-swift" size="80px" class="q-pa-sm"/>
  <q-icon name="fab fa-python" size="80px" class="q-pa-sm" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Third_Year.Workout_Planner.a}}<br><br>
      {{text.Third_Year.Workout_Planner.b}}<br><br>
      {{text.Third_Year.Workout_Planner.c}}
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
              <customImage filename="workout_planner_1.png" imageDescription="Workout list" :showButton="false"/>
            </div>
            <div class="col q-pa-md">
              <customImage filename="workout_planner_2.png" imageDescription="Working Out" :showButton="false"/>
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
              <customImage filename="workout_planner_3.png" imageDescription="Workout list"/>
            </div>
            <div class="col q-pa-md">
              <customImage filename="workout_planner_4.png" imageDescription="Working Out"/>
            </div>
          </div>
      </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Feedback</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.Third_Year.Workout_Planner.FB}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.Third_Year.Workout_Planner.WDIL}}
      </q-card-section>
    </q-card>
  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Workout Planner
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-swift" size="30px" class="q-pa-sm" />
      <q-icon name="fab fa-python" size="30px"/>
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/Resistance-Training-App" icon="open_in_new" color="primary" target="_blank" />
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
