<template>
  <div>
    <div class="text-h3 q-mb-sm">
      <q-img src="../../assets/unite_logo.png" spinner-color="white" width="100px" class="q-mt-sm" />
    </div>
    <div v-resize-text="{maxFontSize: '70px', minFontSize: '35px'}">Unite</div>
    <div v-resize-text="{maxFontSize: '40px'}">Second Year</div>
    <q-icon name="fab fa-react" size="70px" />
    <div class="row justify-center q-mt-md q-mb-md text-body1">
      <div style="max-width: 1000px" >
        {{ text.Second_Year.Unite.Main }}
      </div>
    </div>

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
    >
      <q-card class="bg-grey-8 text-white">
        <q-bar class="bg-secondary">
          <div class="text-body-2">
            Unite
          </div>
          <q-space />
          <q-btn flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="row justify-center">
          <q-img
            src="../../assets/unite_poster.png"
            spinner-color="white"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-img
      src="../../assets/unite_poster.png"
      style="max-width: 500px"
      spinner-color="white"
      class="rounded-borders"
    >
      <q-btn class="q-ma-lg absolute-bottom-right" icon="open_in_full" color="secondary" @click="dialog = true" />
    </q-img>

    <div class="row justify-evenly q-gutter-md q-pa-md">
        <q-btn color="primary" icon="fas fa-align-justify" label="More Details"  to="portfolio?category=second_year&project=unite"/>
        <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Unite')"/>
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
