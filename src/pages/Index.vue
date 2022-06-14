<template>
  <q-page>

    <div class="q-pa-md">
      <div class="no-wrap flex-center text-center">
        <div v-resize-text="{maxFontSize: '70px', minFontSize: '35px'}">About Me</div>
        <div class="row justify-center text-body1">
          <div style="max-width: 1000px" >
            {{ text.AboutMe }}
          </div>
        </div>
      </div>

      <q-separator color="white" inset class="q-my-lg"/>

      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="black"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        infinite
        padding
        arrows
        height="1330px"
        class="bg-secondary text-black shadow-1 rounded-borders"
      >

        <q-carousel-slide name="Workout_Planner" class="no-wrap flex-center text-center">
          <workout-planner/>
        </q-carousel-slide>

        <q-carousel-slide name="Unite" class="no-wrap flex-center text-center">
          <unite/>
        </q-carousel-slide>

        <q-carousel-slide name="Lift_Algorithm" class="no-wrap flex-center text-center">
          <lift-algorithm/>
        </q-carousel-slide>

      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import ResizeText from 'vue-resize-text'

import textJson from '../text.json'

import unite from './home/unite.vue'
import liftAlgorithm from './home/liftAlgorithm.vue'
import workoutPlanner from './home/workoutPlanner.vue'

export default {
  components: { unite, liftAlgorithm, workoutPlanner },
  data () {
    return {
      window: {
        width: '0px',
        height: '0px'
      },
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,
      slide: 'Workout_Planner',
      text: textJson
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = `${window.innerWidth}px`
      this.window.height = `${window.innerHeight - 81}px`
    },
    redirect: function (text) {
      openURL(text)
    }
  },
  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  },
  directives: {
    ResizeText
  }
}
</script>

<style>
.q-carousel {
  max-width: 1500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
