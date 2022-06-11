<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/EERC.png" spinner-color="white" width="20%" class="q-mt-sm" />
  </div>
  <div class="text-h3 q-mb-sm">Discord Bot</div>
  <q-icon name="fab fa-js-square" size="80px" />
  <div class="q-mt-md q-mb-md text-body1">
    {{text.Personal.Discord_Bot.a}}<br>
    {{text.Personal.Discord_Bot.b}}
  </div>
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Reminders</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.Personal.Discord_Bot.Reminders}}</q-card-section>
      <customImage filename="Discord_Bot_Reminders.png" imageDescription="Reminders"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Weather</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.Personal.Discord_Bot.Weather}}</q-card-section>
      <customImage filename="Discord_Bot_Weather.png" imageDescription="Weather"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Stats</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.Personal.Discord_Bot.Stats}}</q-card-section>
      <customImage filename="Discord_Bot_Stats.png" imageDescription="Stats"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Roles</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.Personal.Discord_Bot.Roles}}</q-card-section>
      <customImage filename="Discord_Bot_Roles.png" imageDescription="Roles"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Text to Speech</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.Personal.Discord_Bot.TTS}}</q-card-section>
    </q-card>
  </div>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Discord Bot
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-js-square" size="30px" class="q-ml-xs" />
    </q-toolbar>
  </q-footer>
</div>
</template>

<script>
import textJson from '../../../text.json'
import customImage from '../../../components/image.vue'

export default {
  components: {
    customImage
  },
  data () {
    return {
      text: textJson
    }
  }
}
</script>
