<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-tabs
          v-model="root"
          no-caps
          mobile-arrows
          outside-arrows
          class="bg-secondary text-white"
        >
          <q-tab name="Personal" label="Personal" />
          <q-tab name="GCSE" label="GCSE" />
          <q-tab name="A-Level" label="A-Level" />
          <q-tab name="1st Year" label="1st Year" />
          <q-tab name="2nd Year" label="2nd Year" />
          <q-tab name="3rd Year" label="3rd Year" />
          <q-tab name="4th Year" label="4th Year" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="root" animated class="bg-grey-9 text-white">
          <q-tab-panel name="Personal">
            <q-tabs
              v-model="personal"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Discord Bot" label="Discord Bot" />
              <q-tab name="This Website" label="This Website" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="personal" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Discord Bot" class="bg-grey-8">
                <div class="text-h6">Discord Bot</div>
              </q-tab-panel>
              <q-tab-panel name="This Website" class="bg-grey-8">
                <div class="text-h6">This Website</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>

          <q-tab-panel name="GCSE">
            <q-tabs
              v-model="gcse"
              no-caps
              mobile-arrows
              outside-arrows
            >
            <q-tab name="A452" label="A452" />
            <q-tab name="A453" label="A453" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="gcse" animated class="bg-purple-1 text-center">
              <q-tab-panel name="A452" class="bg-grey-8">
                <div class="text-h6">A452 Coursework | SQL</div>
                <iframe width=100% v-bind:height=windowHeight allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="https://drive.google.com/file/d/1_GeuFxHE6XqkyYT8qQeWCOJUkHqwx_LH/preview?"></iframe>
              </q-tab-panel>
              <q-tab-panel name="A453" class="bg-grey-8">
                <div class="text-h6">A453 Coursework | Python</div>
                {{ windowHeight }}
                <iframe width=100% v-bind:height=windowHeight allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="https://drive.google.com/file/d/1GZrq59o7UloVOx84_u3ERT1n8Av1V003/preview?"></iframe>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>

          <q-tab-panel name="1st Year">
            <q-tabs
              v-model="first_year"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Countdown Simulator" label="Countdown Simulator" />
              <q-tab name="Smart Alarm Clock" label="Smart Alarm Clock" />
              <q-tab name="Barnaby's Brewhouse" label="Barnaby's Brewhouse" />
              <q-tab name="Beanbag Store" label="Beanbag Store" />
              <q-tab name="Task Manager" label="Task Manager" />
              <q-tab name="Lift Algorithm" label="Lift Algorithm" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="first_year" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Countdown Simulator" class="bg-grey-8">
                <div class="text-h6">Countdown Simulator | Python</div>
              </q-tab-panel>
              <q-tab-panel name="Smart Alarm Clock" class="bg-grey-8">
                <div class="text-h6 inline" style="{display: inline-block}">Smart Alarm Clock | Python</div>
                <q-btn class="test" color="primary" icon="code" label="View on GitHub"/>
                <br>
                This program is a smart alarm clock intended to be run 24/7. It enables
                the user to schedule, edit and cancel alarms. The user is notified when
                an alarm is up via an alarm sound, text to speech and a notification
                which is displayed in the notifications column. The user is also
                notified when the weather in the location selected has changed and when
                there is a new news story. The web page will automatically refresh
                every 5 minutes to keep the notifications, weather and news up to date
                on screen.
                <prism language="python" class="code">
                  {{ smart_alarm_clock_code.data }}
                </prism>
              </q-tab-panel>
              <q-tab-panel name="Barnaby's Brewhouse" class="bg-grey-8">
                <div class="text-h6">Barnaby's Brewhouse | Python</div>
              </q-tab-panel>
              <q-tab-panel name="Beanbag Store" class="bg-grey-8">
                <div class="text-h6">Beanbag Store | Java</div>
              </q-tab-panel>
              <q-tab-panel name="Task Manager" class="bg-grey-8">
                <div class="text-h6">Task Manager | PHP, Javascript</div>
              </q-tab-panel>
              <q-tab-panel name="Lift Algorithm" class="bg-grey-8">
                <div class="text-h6">Lift Algorithm | Python</div>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>
        </q-tab-panels>

      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import Prism from 'vue-prism-component'

export default {
  data () {
    return {
      windowHeight: window.innerHeight * 0.8,
      root: 'Personal',
      personal: 'Discord Bot',
      gcse: 'A452',
      first_year: 'Countdown Simulator',
      smart_alarm_clock_code: null
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/will09122000/Smart-Alarm-Clock/master/Smart_Alarm_Clock.py')
      .then(response => (this.smart_alarm_clock_code = response))
      .catch((e) => console.log(e))
  },
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Prism
  }
}
</script>

<style>
.code {
  width:650px;
  height:800px;
}

div.inline {
  display: inline-block;
  text-align: center;
}

.test {
  float: right;
}
</style>
