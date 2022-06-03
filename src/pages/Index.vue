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

        <q-carousel-slide name="Unite" class="no-wrap flex-center text-center">
          <div v-resize-text="{maxFontSize: '80px', minFontSize: '35px'}">Unite</div>
          <div v-resize-text="{maxFontSize: '40px'}">Second Year</div>
          <q-icon name="fab fa-react" size="80px" />
          <div class="q-mt-md q-mb-md">
            {{ text.Second_Year.Unite.Main }}
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
                  src="../assets/unite_poster.png"
                  spinner-color="white"
                />
              </q-card-section>
            </q-card>
          </q-dialog>
          <q-img
            src="../assets/unite_poster.png"
            style="max-width: 350px"
            spinner-color="white"
            class="rounded-borders"
          >
            <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
          </q-img>

          <div class="row q-my-md q-gutter-md justify-evenly">
              <q-btn color="primary" icon="fas fa-align-justify" label="More Details" to="portfolio"/>
              <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Unite')"/>
          </div>
        </q-carousel-slide>

        <!--
        <q-carousel-slide name="Barnabys_Brewhouse" class="no-wrap flex-center text-center">
          <div v-resize-text="{maxFontSize: '80px', minFontSize: '35px'}">Barnaby's Brewhouse</div>
          <div v-resize-text="{maxFontSize: '40px'}">First Year</div>
          <q-icon name="fab fa-python" size="80px" />
          <div class="q-mt-md q-mb-md">
            {{ text.First_Year.Barnabys_Brewhouse.Main }}
          </div>
          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
          >
            <q-card class="bg-grey-8 text-white">
              <q-bar class="bg-secondary">
                <div class="text-body-2">
                  Barnaby's Brewhouse
                </div>
                <q-space />
                <q-btn flat icon="close" v-close-popup>
                  <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>
              <q-card-section class="row justify-center">
                <q-img
                  src="../assets/barnabys_brewhouse_0.png"
                  spinner-color="white"
                />
              </q-card-section>
            </q-card>
          </q-dialog>
          <q-img
            src="../assets/barnabys_brewhouse_0.png"
            spinner-color="white"
            class="rounded-borders"
          >
            <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
          </q-img>

          <div class="row q-my-md q-gutter-md justify-evenly">
              <q-btn color="primary" icon="fas fa-align-justify" label="More Details" to="portfolio"/>
              <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse')"/>
          </div>
        </q-carousel-slide>
        -->

        <q-carousel-slide name="Lift_Algorithm" class="no-wrap flex-center text-center">
          <div v-resize-text="{maxFontSize: '80px', minFontSize: '35px'}">Lift Algorithm</div>
          <div v-resize-text="{maxFontSize: '40px'}">First Year</div>
          <q-icon name="fab fa-python" size="80px" />
          <div class="q-mt-md q-mb-md">
            {{ text.First_Year.Lift_Algorithm.Main }}
          </div>
          <q-video
            :ratio="16/9"
            src="https://www.youtube.com/embed/l_47qbni9mY?rel=0"
          />
          <div class="row q-my-md q-gutter-md justify-evenly">
              <q-btn color="primary" icon="fas fa-align-justify" label="More Details" to="portfolio"/>
              <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse')"/>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import TextJson from '../text.json'
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

<style>
.q-carousel {
  max-width: 1500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.q-img {
  max-width: 1050px;
}

</style>
