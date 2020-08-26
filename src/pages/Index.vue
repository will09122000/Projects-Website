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
        :autoplay="autoplay"
        class="bg-secondary text-black shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="no-wrap flex-center text-center">
          <div class="text-h2">Barnaby's Brewhouse</div>
          <div class="text-h5">First Year</div>
          <q-icon name="fab fa-python" size="80px" />
          <div class="q-mt-md q-mb-md">
            {{ text.First_Year.Barnabys_Brewhouse.Main }}
          </div>
            <q-img
              src="../assets/barnabys_brewhouse_0.png"
              spinner-color="white"
              class="rounded-borders"
            />
          <div class="q-mt-md">
            <div class="row">
              <div class="col">
                <q-btn color="primary" icon="fas fa-align-justify" label="More Details" to="portfolio"/>
              </div>
              <div class="col">
                <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse')"/>
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import TextJson from '../text.json'
import { openURL } from 'quasar'

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
      slide: 'style',
      autoplay: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      text: TextJson
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
