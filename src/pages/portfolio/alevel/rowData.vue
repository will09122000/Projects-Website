<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-my-sm q-pt-md">RowData</div>
  <div class="text-h5 q-mt-sm">Grade: A*</div>

  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      <div>{{text.ALevel.RowData.Main}}</div>
      <q-img src="../../../assets/rowing_monitor.jpg" spinner-color="white" width="300px" class="q-mt-md"/>
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Log In</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Login}}</q-card-section>
      <customImage filename="RowData_login.png" imageDescription="Log In" class="q-pa-sm"/>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Main Menu</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Menu}}</q-card-section>
      <customImage filename="RowData_menu.png" imageDescription="Main Menu" class="q-pa-sm"/>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Just Row</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Justrow}}</q-card-section>
      <customImage filename="RowData_justrow.png" imageDescription="Just Row" class="q-pa-sm absolute-bottom"/>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Rowing Summary</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Summary}}</q-card-section>
      <customImage filename="RowData_summary.png" imageDescription="Rowing Summary" class="q-pa-sm absolute-bottom"/>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Personal Best</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>{{text.ALevel.RowData.Pb}}</q-card-section>
      <customImage filename="RowData_pb.png" imageDescription="Personal Best" class="q-pa-sm"/>
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
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/RowData" icon="open_in_new" color="primary" target="_blank" />
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
