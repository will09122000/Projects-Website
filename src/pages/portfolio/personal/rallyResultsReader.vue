<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Rally Results Reader</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">
    <q-card dark bordered class="bg-grey-9">
      <q-card-section>
        <div class="text-h6">Rally Results Reader</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.Personal.Rally_Results_Reader}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="reader.py" href="https://github.com/will09122000/Results-Reader/blob/main/reader.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>
  </div>
  <br>

  <div class="text-h6 q-mb-sm">Ingests Rally Results Screenshot</div>
  <customImage filename="rally_results_reader_1.png" imageDescription="Rally Result Screenshot"/>
  <br>

  <div class="text-h6 q-mb-sm">Outputs Rally Results CSV File</div>
  <customImage filename="rally_results_reader_2.png" imageDescription="Rally Result CSV File"/>
  <br>

  <div class="text-h6 q-mb-sm">CSV File Uploaded to <a href="https://beta.eerc.info/Leagues/DIRT"> Website</a></div>
  <customImage filename="rally_results_reader_3.png" imageDescription="Rally Result CSV File"/>

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Rally Results Reader
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Results-Reader" icon="open_in_new" color="primary" target="_blank" />
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
