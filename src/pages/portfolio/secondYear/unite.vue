<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/unite_logo.png" spinner-color="white" width="16%" class="q-mt-sm" />
  </div>
  <div class="text-h3 q-mb-sm">Unite</div>
  <div class="text-h5 q-mb-sm">Module: Group Software Engineering Project</div>
  <div class="text-h5 q-mt-sm">Grade: 87%</div>
  <q-icon name="fab fa-react" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="text-body-2 q-pa-md">
    {{text.Second_Year.Unite.Main}}
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <div class="my-row">
      <q-card dark bordered class="bg-grey-9 my-column">
        <q-card-section>
          <div class="text-h6">Team Feedback</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          <ul>
            <li class="list">"{{text.Second_Year.Unite.Feedback_1}}"</li>
            <li class="list">"{{text.Second_Year.Unite.Feedback_2}}"</li>
            <li class="list">"{{text.Second_Year.Unite.Feedback_3}}"</li>
          </ul>
        </q-card-section>
      </q-card>

      <q-card dark bordered class="bg-grey-9 my-column">
        <q-card-section>
          <div class="text-h6">What did I learn?</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          {{text.Second_Year.Unite.WDIL}}
        </q-card-section>
      </q-card>
    </div>
  </div>

  <customImage filename="unite_poster.png" imageDescription="Unite" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Unite
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-react" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Unite" icon="open_in_new" color="primary" target="_blank" />
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
