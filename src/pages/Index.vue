<template>
  <q-page>
    <div class="q-pa-md">
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
        :height=window.height
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
      slide: 'Workout_Planner'
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.width = `${window.innerWidth}px`
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
