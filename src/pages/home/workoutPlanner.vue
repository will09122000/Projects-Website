<template>
  <div>
    <div class="q-my-sm">
      <q-img src="../../assets/gymple_logo.png" spinner-color="black" width="100px" />
    </div>
    <div v-resize-text="{maxFontSize: '70px', minFontSize: '35px'}">LEAN</div>
    <div v-resize-text="{maxFontSize: '50px'}" style="line-height: 110%">Real-Time Analysis of Resistance Training using Wearable Computing</div>
    <div v-resize-text="{maxFontSize: '40px'}">Third Year</div>
    <q-icon name="fab fa-swift" size="70px" class="q-pa-sm"/>
    <q-icon name="fab fa-python" size="70px" class="q-pa-sm"/>
    <div class="row justify-center q-mt-md q-mb-md text-body1">
      <div style="max-width: 1000px" >
        {{ text.Third_Year.Workout_Planner.Summary }}
      </div>
    </div>

    <div class="col justify q-pa-md">
      <q-img src="../../assets/gymple_1.png" style="max-width: 300px" spinner-color="black" />
      <q-img src="../../assets/gymple_2.png" style="max-width: 300px" spinner-color="black" />
      <q-img src="../../assets/gymple_4.png" style="max-width: 300px" spinner-color="black" />
    </div>

    <div class="row justify-evenly q-gutter-md q-pa-md">
        <q-btn color="primary" icon="fas fa-align-justify" label="More Details" to="portfolio?category=third_year&project=workout_planner"/>
        <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Workout-Planner')"/>
    </div>
  </div>
</template>

<script>
import TextJson from '../../text.json'
import { openURL } from 'quasar'
import ResizeText from 'vue-resize-text'

export default {
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
      slide: 'Unite',
      autoplay: true,
      text: TextJson,
      dialog: false,
      maximizedToggle: true
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
