<template>
  <div>
    <q-dialog v-model="fullscreen" persistent :maximized="maximizedToggle">
    <q-card class="bg-grey-8 text-white">
      <q-bar class="bg-secondary">
        <div class="text-body-2">
          {{ imageDescription }}
        </div>
        <q-space/>
        <q-btn flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section class="row justify-center">
        <q-img :src="require(`../assets/${filename}`)" spinner-color="white" />
      </q-card-section>
    </q-card>
    </q-dialog>
    <q-img :src="require(`../assets/${filename}`)" spinner-color="white">
      <div v-if="caption" class="absolute-bottom-left text-subtitle2">
        {{ imageDescription }}
      </div>
    </q-img>
    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="fullscreen = true" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      fullscreen: false,
      maximizedToggle: true
    }
  },
  props: ['filename', 'imageDescription', 'caption']
}
</script>
