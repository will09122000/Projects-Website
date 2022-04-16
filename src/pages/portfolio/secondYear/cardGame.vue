<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Card Game</div>
  <div class="text-h5 q-mt-sm">Module: Software Development</div>
  <div class="text-h5 q-mt-sm">Grade: 74%</div>
  <q-icon name="fab fa-java" size="80px" />
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Card Game</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Second_Year.Card_Game.Main}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="CardGame.py" href="https://github.com/will09122000/Card-Game/blob/main/src/main/CardGame.java" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Second_Year.Card_Game.WDIL}}
      </q-card-section>
    </q-card>
  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Card Game
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-java" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Card-Game" icon="open_in_new" color="primary" target="_blank" />
    </q-toolbar>
  </q-footer>
</div>
</template>

<script>
import textJson from '../../../text.json'

export default {
  data () {
    return {
      text: textJson
    }
  }
}
</script>
