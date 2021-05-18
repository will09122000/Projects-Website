<template>
  <q-tab-panel name="ALevel">
      <q-tabs
          v-model="ALevel"
          no-caps
          mobile-arrows
          outside-arrows
      >
      <q-tab name="RowData" label="RowData" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="ALevel" animated class="bg-purple-1 text-center">
          <q-tab-panel name="RowData" class="bg-grey-8">
          <div class="text-h3 q-mb-sm">
              <q-img
              src="../assets/RowData_logo.png"
              spinner-color="white"
              width="15%"
              height="15%"
              />
          </div>

          <q-icon name="fab fa-python" size="80px"/>
          <div class="q-mt-md q-mb-md">
              {{text.ALevel.RowData.a}}<br>
          </div>
          <q-separator dark class="q-mt-sm"/>
          <div class="row q-py-md q-gutter-md justify-center">
              <q-card dark bordered class="my-card-wide">
              <q-card-section><div class="text-h6">Log In</div></q-card-section>
              <q-separator dark inset />
              <q-card-section>{{text.ALevel.RowData.Login}}</q-card-section>
              <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
              >
                  <q-card class="bg-grey-8 text-white">
                  <q-bar class="bg-secondary">
                      <div class="text-body-2">
                      RowData Log In
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                  </q-bar>
                  <q-card-section class="row justify-center">
                      <q-img
                      src="../assets/RowData_login.png"
                      spinner-color="white"
                      />
                  </q-card-section>
                  </q-card>
              </q-dialog>
              <q-img
                  src="../assets/RowData_login.png"
                  spinner-color="white"
              >
              </q-img>
              <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />

              </q-card>
              <q-card dark bordered class="my-card-wide">
              <q-card-section><div class="text-h6">Main Menu</div></q-card-section>
              <q-separator dark inset />
              <q-card-section>{{text.ALevel.RowData.Menu}}</q-card-section>
              <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
              >
                  <q-card class="bg-grey-8 text-white">
                  <q-bar class="bg-secondary">
                      <div class="text-body-2">
                      RowData Menu
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                  </q-bar>
                  <q-card-section class="row justify-center">
                      <q-img
                      src="../assets/RowData_menu.png"
                      spinner-color="white"
                      />
                  </q-card-section>
                  </q-card>
              </q-dialog>
              <q-img
                  src="../assets/RowData_menu.png"
                  spinner-color="white"
              >
              </q-img>
              <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
              </q-card>

              <q-card dark bordered class="my-card-wide">
              <q-card-section><div class="text-h6">Just Row</div></q-card-section>
              <q-separator dark inset />
              <q-card-section>{{text.ALevel.RowData.Justrow}}</q-card-section>
              <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
              >
                  <q-card class="bg-grey-8 text-white">
                  <q-bar class="bg-secondary">
                      <div class="text-body-2">
                      RowData Just Row
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                  </q-bar>
                  <q-card-section class="row justify-center">
                      <q-img
                      src="../assets/RowData_justrow.png"
                      spinner-color="white"
                      />
                  </q-card-section>
                  </q-card>
              </q-dialog>
              <q-img
                  src="../assets/RowData_justrow.png"
                  spinner-color="white"
              >
              </q-img>
              <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
              </q-card>

              <q-card dark bordered class="my-card-wide">
              <q-card-section><div class="text-h6">Rowing Summary</div></q-card-section>
              <q-separator dark inset />
              <q-card-section>{{text.ALevel.RowData.Summary}}</q-card-section>
              <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
              >
                  <q-card class="bg-grey-8 text-white">
                  <q-bar class="bg-secondary">
                      <div class="text-body-2">
                      RowData Rowing Summary
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                  </q-bar>
                  <q-card-section class="row justify-center">
                      <q-img
                      src="../assets/RowData_summary.png"
                      spinner-color="white"
                      />
                  </q-card-section>
                  </q-card>
              </q-dialog>
              <q-img
                  src="../assets/RowData_summary.png"
                  spinner-color="white"
              >
              </q-img>
              <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
              </q-card>

              <q-card dark bordered class="my-card-wide">
              <q-card-section><div class="text-h6">Personal Best</div></q-card-section>
              <q-separator dark inset />
              <q-card-section>{{text.ALevel.RowData.Pb}}</q-card-section>
              <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
              >
                  <q-card class="bg-grey-8 text-white">
                  <q-bar class="bg-secondary">
                      <div class="text-body-2">
                      RowData Personal Best
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                  </q-bar>
                  <q-card-section class="row justify-center">
                      <q-img
                      src="../assets/RowData_pb.png"
                      spinner-color="white"
                      />
                  </q-card-section>
                  </q-card>
              </q-dialog>
              <q-img
                  src="../assets/RowData_pb.png"
                  spinner-color="white"
              >
              </q-img>
              <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
              </q-card>

          </div>
          <q-footer elevated>
              <q-toolbar class="bg-secondary text-white">
              <div class="text-left text-body2 q-mr-sm">
                  RowData
              </div>
              <q-separator dark vertical inset />
              <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
              <q-toolbar-title class="text-right"></q-toolbar-title>
              <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/RowData')"/>
              </q-toolbar>
          </q-footer>
          </q-tab-panel>
      </q-tab-panels>
  </q-tab-panel>
</template>
<script>
import { openURL } from 'quasar'
import TextJson from '../text.json'

export default {
  name: 'alevel',
  methods: {
    redirect: function (text) {
      openURL(text)
    },
    getPic (index) {
      return `../assets/ ${String(index)} .png`
    },
    handleResize () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.width = `${window.innerWidth}px`
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.height = `${window.innerHeight}px`
    }
  },
  data () {
    return {
      window: {
        width: '0px',
        height: '0px'
      },
      ALevel: 'RowData',
      text: TextJson,
      dialog: false,
      dialog_1: false,
      maximizedToggle: true
    }
  }
}
</script>

<style>
</style>
