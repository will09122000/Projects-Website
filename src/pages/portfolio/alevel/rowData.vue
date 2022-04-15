<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">
    <q-img src="../../../assets/RowData_logo.png" spinner-color="white" width="20%" class="q-mt-sm" />
  </div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="text-body-2 q-pa-md">
    {{text.ALevel.RowData.RowData}}
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Log In</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Login}}</q-card-section>
      <customImage filename="RowData_login.png" imageDescription="Log In"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Main Menu</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Menu}}</q-card-section>
      <customImage filename="RowData_menu.png" imageDescription="Main Menu"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Just Row</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Justrow}}</q-card-section>
      <customImage filename="RowData_justrow.png" imageDescription="Just Row"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Rowing Summary</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Summary}}</q-card-section>
      <customImage filename="RowData_summary.png" imageDescription="Rowing Summary"/>
    </q-card>

    <q-card dark bordered class="my-card-wide">
      <q-card-section>
        <div class="text-h6">Personal Best</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Pb}}</q-card-section>
      <customImage filename="RowData_pb.png" imageDescription="Personal Best"/>
    </q-card>

  </div>
  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        RowData
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/RowData')" />
    </q-toolbar>
  </q-footer>
</div>
</template>

<script>
import openURL from 'quasar'
import textJson from '../../../text.json'
import customImage from '../../../components/image.vue'

export default {
  components: { customImage },
  methods: {
    redirect: function (text) {
      openURL(text)
    }
  },
  data () {
    return {
      text: textJson
    }
  }
}
</script>
