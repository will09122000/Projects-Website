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
          <q-tab name="ALevel" label="A-Level" />
          <q-tab name="1st Year" label="1st Year" />
          <q-tab name="2nd Year" label="2nd Year" />
          <q-tab name="3rd Year" label="3rd Year" />
          <q-tab name="Personal" label="Personal" />
        </q-tabs>

        <q-separator dark inset/>

        <q-tab-panels v-model="root" animated class="bg-grey-9 text-white">

          <q-tab-panel name="ALevel">
            <q-tabs
                v-model="ALevel"
                no-caps
                mobile-arrows
                outside-arrows
            >
            </q-tabs>
            <row-data/>
          </q-tab-panel>

          <q-tab-panel name="Personal">
            <q-tabs
              v-model="personal"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Discord Bot" label="Discord Bot" />
              <q-tab name="This Website" label="This Website" />
              <q-tab name="Rally Results Reader" label="Rally Results Reader" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="personal" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Discord Bot" class="bg-grey-8">
                <discord-bot/>
              </q-tab-panel>

              <q-tab-panel name="This Website" class="bg-grey-8">
                <this-website/>
              </q-tab-panel>

              <q-tab-panel name="Rally Results Reader" class="bg-grey-8">
                <rally-results-reader/>
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
                <countdown-simulator/>
              </q-tab-panel>

              <q-tab-panel name="Smart Alarm Clock" class="bg-grey-8">
                <smart-alarm-clock/>
              </q-tab-panel>

              <q-tab-panel name="Barnaby's Brewhouse" class="bg-grey-8">
                <barnabys-brewhouse/>
              </q-tab-panel>

              <q-tab-panel name="Beanbag Store" class="bg-grey-8">
                <beanbag-store/>
              </q-tab-panel>

              <q-tab-panel name="Task Manager" class="bg-grey-8">
                <task-manager/>
              </q-tab-panel>

              <q-tab-panel name="Lift Algorithm" class="bg-grey-8">
                <lift-algorithm/>
              </q-tab-panel>

            </q-tab-panels>
          </q-tab-panel>

          <q-tab-panel name="2nd Year">
            <q-tabs
              v-model="second_year"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Card Game" label="Card Game" />
              <q-tab name="Functional Programming" label="Functional Programming" />
              <q-tab name="Logic Programming" label="Logic Programming" />
              <q-tab name="Unite" label="Unite"/>
              <q-tab name="8-Puzzle Problem" label="8-Puzzle Problem" />
              <q-tab name="Post Office Queues" label="Post Office Queues" />
              <q-tab name="Vaccine Ordering" label="Vaccine Ordering" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="second_year" animated class="bg-purple-1 text-center">

              <q-tab-panel name="Card Game" class="bg-grey-8">
                <card-game/>
              </q-tab-panel>

              <q-tab-panel name="Functional Programming" class="bg-grey-8">
                <functional-programming/>
              </q-tab-panel>

              <q-tab-panel name="Logic Programming" class="bg-grey-8">
                <logic-programming/>
              </q-tab-panel>

              <q-tab-panel name="Unite" class="bg-grey-8">
                <unite/>
              </q-tab-panel>

              <q-tab-panel name="8-Puzzle Problem" class="bg-grey-8">
                <eight-puzzle-problem/>
              </q-tab-panel>

              <q-tab-panel name="Post Office Queues" class="bg-grey-8">
                <post-office-queues/>
              </q-tab-panel>

              <q-tab-panel name="Vaccine Ordering" class="bg-grey-8">
                <vaccine-ordering/>
              </q-tab-panel>

            </q-tab-panels>
          </q-tab-panel>

          <q-tab-panel name="3rd Year">
            <q-tabs
              v-model="third_year"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Workout Planner" label="Workout Planner" />
              <q-tab name="Street Scene" label="Street Scene" />
              <q-tab name="Spotify Hit Predictor" label="Spotify Hit Predictor" />
              <q-tab name="Quickhull Algorithm" label="Quickhull Algorithm" />
              <q-tab name="Ant Colony Optimisation" label="Ant Colony Optimisation"/>
              <q-tab name="Alexa" label="Alexa" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="third_year" animated class="bg-purple-1 text-center">

              <q-tab-panel name="Workout Planner" class="bg-grey-8">
                <workout-planner/>
              </q-tab-panel>

              <q-tab-panel name="Street Scene" class="bg-grey-8">
                <card-game/>
              </q-tab-panel>

              <q-tab-panel name="Spotify Hit Predictor" class="bg-grey-8">
                <card-game/>
              </q-tab-panel>

              <q-tab-panel name="Quickhull Algorithm" class="bg-grey-8">
                <card-game/>
              </q-tab-panel>

              <q-tab-panel name="Ant Colony Optimisation" class="bg-grey-8">
                <card-game/>
              </q-tab-panel>

              <q-tab-panel name="Alexa" class="bg-grey-8">
                <card-game/>
              </q-tab-panel>

            </q-tab-panels>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import openURL from 'quasar'
import TextJson from '../text.json'

import rowData from './portfolio/alevel/rowData.vue'

import discordBot from './portfolio/personal/discordBot.vue'
import thisWebsite from './portfolio/personal/thisWebsite.vue'
import rallyResultsReader from './portfolio/personal/rallyResultsReader.vue'

import countdownSimulator from './portfolio/firstYear/countdownSimulator.vue'
import smartAlarmClock from './portfolio/firstYear/smartAlarmClock.vue'
import barnabysBrewhouse from './portfolio/firstYear/barnabysBrewhouse.vue'
import beanbagStore from './portfolio/firstYear/beanbagStore.vue'
import taskManager from './portfolio/firstYear/taskManager.vue'
import liftAlgorithm from './portfolio/firstYear/liftAlgorithm.vue'

import cardGame from './portfolio/secondYear/cardGame.vue'
import functionalProgramming from './portfolio/secondYear/functionalProgramming.vue'
import logicProgramming from './portfolio/secondYear/logicProgramming.vue'
import unite from './portfolio/secondYear/unite.vue'
import eightPuzzleProblem from './portfolio/secondYear/eightPuzzleProblem.vue'
import postOfficeQueues from './portfolio/secondYear/postOfficeQueues.vue'
import vaccineOrdering from './portfolio/secondYear/vaccineOrdering.vue'

import workoutPlanner from './portfolio/thirdYear/workoutPlanner.vue'

export default {
  methods: {
    redirect: function (text) {
      openURL(text)
    },
    getPic (index) {
      return `../assets/${String(index)}.png`
    },
    handleResize () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.width = `${window.innerWidth}px`
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.height = `${window.innerHeight}px`
    }
  },
  components: {
    rowData,
    discordBot,
    thisWebsite,
    rallyResultsReader,
    countdownSimulator,
    smartAlarmClock,
    barnabysBrewhouse,
    beanbagStore,
    taskManager,
    liftAlgorithm,
    cardGame,
    functionalProgramming,
    logicProgramming,
    unite,
    eightPuzzleProblem,
    postOfficeQueues,
    vaccineOrdering,
    workoutPlanner
  },
  data () {
    return {
      window: {
        width: '0px',
        height: '0px'
      },
      root: 'ALevel',
      ALevel: 'RowData',
      personal: 'Discord Bot',
      first_year: 'Countdown Simulator',
      second_year: 'Card Game',
      third_year: 'Workout Planner',
      smart_alarm_clock_code: null,
      text: TextJson
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
}
</script>

<style>

div.inline {
  display: inline-block;
  text-align: center;
}

.my-card {
  width: 100%;
  max-width: 300px;
  background-color: #36393F;
}

.my-column {
  float: left;
  width: 50%;
  background-color: #36393F;
  flex: 1;
}

.my-row {
  content: "";
  display: flex;
  clear: both;
  column-gap: 15px;
}

.my-card-wide {
  width: 100%;
  max-width: 600px;
  background-color: #36393F;
}

.q-img {
  max-width: 1000px;
}

.list {
  text-align: left;
}

</style>
