<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Smart Alarm Clock</div>
  <div class="text-h5 q-mt-sm">Module: Programming</div>
  <div class="text-h5 q-mt-sm">Grade: 90%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.First_Year.Smart_Alarm_Clock.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Notifications</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Smart_Alarm_Clock.Notifications}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="notifications.py" href="https://github.com/will09122000/Smart-Alarm-Clock/blob/master/notifications.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Alarms</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Smart_Alarm_Clock.Alarms}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="alarm.py" href="https://github.com/will09122000/Smart-Alarm-Clock/blob/master/alarm.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Weather</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Smart_Alarm_Clock.Weather}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="weather.py" href="https://github.com/will09122000/Smart-Alarm-Clock/blob/master/weather.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">News</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Smart_Alarm_Clock.News}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="news.py" href="https://github.com/will09122000/Smart-Alarm-Clock/blob/master/news.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Smart_Alarm_Clock.WDIL}}
      </q-card-section>
    </q-card>
  </div>

  <customImage filename="smart_alarm_clock_0.png" imageDescription="Smart Alarm Clock" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Smart Alarm Clock
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Smart-Alarm-Clock" icon="open_in_new" color="primary" target="_blank" />
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
