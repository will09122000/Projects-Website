<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Spotify Hit Predictor</div>
  <div class="text-h5 q-mt-sm">Module: Learning from Data</div>
  <div class="text-h5 q-mt-sm">Grade: 70%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.Third_Year.Spotify_Hit_Predictor.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        {{text.Third_Year.Spotify_Hit_Predictor.WDIL}}
      </q-card-section>
    </q-card>

  </div>

  <q-page class="row items-center justify-evenly">
    <iframe width=100% height=1000 allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="https://drive.google.com/file/d/1tKzemUUaO0MUVzIKC6l4-XasVOUx9Nx9/preview?"></iframe>
  </q-page>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Spotify Hit Predictor
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Spotify-Hit-Predictor" icon="open_in_new" color="primary" target="_blank" />
    </q-toolbar>
  </q-footer>
</div>
</template>

<script>
import textJson from '../../../text.json'

export default {
  components: {
  },
  data () {
    return {
      text: textJson
    }
  }
}
</script>
