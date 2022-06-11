<template>
  <div>
    <div v-resize-text="{maxFontSize: '80px', minFontSize: '35px'}">Lift Algorithm</div>
      <div v-resize-text="{maxFontSize: '40px'}">First Year</div>
      <q-icon name="fab fa-python" size="80px" />
       <div class="row justify-center q-mt-md q-mb-md text-body1">
        <div style="max-width: 1000px">
          {{ text.First_Year.Lift_Algorithm.Main }}
        </div>
      </div>
      <q-video
        :ratio="16/9"
        src="https://www.youtube.com/embed/l_47qbni9mY?rel=0"
      />
      <div class="row justify-evenly q-gutter-md q-pa-md">
          <q-btn color="primary" icon="fas fa-align-justify" label="More Details" to="portfolio"/>
          <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse')"/>
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      text: TextJson,
      dialog: false,
      maximizedToggle: true
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
