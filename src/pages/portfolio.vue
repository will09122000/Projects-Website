<template>
  <q-page>
    <div class="q-pa-md">
      <q-tabs
        v-model="root"
        no-caps
        mobile-arrows
        outside-arrows
        class="bg-secondary text-white"
      >
        <q-tab name="alevel" label="A-Level" />
        <q-tab name="first_year" label="1st Year" />
        <q-tab name="second_year" label="2nd Year" />
        <q-tab name="third_year" label="3rd Year" />
        <q-tab name="freelance" label="Freelance" />
        <q-tab name="personal" label="Personal" />
      </q-tabs>

      <q-separator dark inset/>

      <q-tab-panels v-model="root" animated class="bg-grey-9 text-white">

        <q-tab-panel name="alevel">
          <q-tabs
              v-model="alevel"
              no-caps
              mobile-arrows
              outside-arrows
          >
          </q-tabs>
          <row-data/>
        </q-tab-panel>

        <q-tab-panel name="first_year">
          <q-tabs
            v-model="first_year"
            no-caps
            mobile-arrows
            outside-arrows
          >
            <q-tab name="countdown_simulator" label="Countdown Simulator" />
            <q-tab name="smart_alarm_clock" label="Smart Alarm Clock" />
            <q-tab name="barnabys_brewhouse" label="Barnaby's Brewhouse" />
            <q-tab name="beanbag_store" label="Beanbag Store" />
            <q-tab name="task_manager" label="Task Manager" />
            <q-tab name="lift_algorithm" label="Lift Algorithm" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="first_year" animated class="bg-purple-1 text-center">

            <q-tab-panel name="countdown_simulator" class="bg-grey-8">
              <countdown-simulator/>
            </q-tab-panel>

            <q-tab-panel name="smart_alarm_clock" class="bg-grey-8">
              <smart-alarm-clock/>
            </q-tab-panel>

            <q-tab-panel name="barnabys_brewhouse" class="bg-grey-8">
              <barnabys-brewhouse/>
            </q-tab-panel>

            <q-tab-panel name="beanbag_store" class="bg-grey-8">
              <beanbag-store/>
            </q-tab-panel>

            <q-tab-panel name="task_manager" class="bg-grey-8">
              <task-manager/>
            </q-tab-panel>

            <q-tab-panel name="lift_algorithm" class="bg-grey-8">
              <lift-algorithm/>
            </q-tab-panel>

          </q-tab-panels>
        </q-tab-panel>

        <q-tab-panel name="second_year">
          <q-tabs
            v-model="second_year"
            no-caps
            mobile-arrows
            outside-arrows
          >
            <q-tab name="card_game" label="Card Game" />
            <q-tab name="functional_programming" label="Functional Programming" />
            <q-tab name="logic_programming" label="Logic Programming" />
            <q-tab name="unite" label="Unite"/>
            <q-tab name="8_puzzle_problem" label="8-Puzzle Problem" />
            <q-tab name="post_office_queues" label="Post Office Queues" />
            <q-tab name="vaccine_ordering" label="Vaccine Ordering" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="second_year" animated class="bg-purple-1 text-center">

            <q-tab-panel name="card_game" class="bg-grey-8">
              <card-game/>
            </q-tab-panel>

            <q-tab-panel name="functional_programming" class="bg-grey-8">
              <functional-programming/>
            </q-tab-panel>

            <q-tab-panel name="logic_programming" class="bg-grey-8">
              <logic-programming/>
            </q-tab-panel>

            <q-tab-panel name="unite" class="bg-grey-8">
              <unite/>
            </q-tab-panel>

            <q-tab-panel name="8_puzzle_problem" class="bg-grey-8">
              <eight-puzzle-problem/>
            </q-tab-panel>

            <q-tab-panel name="post_office_queues" class="bg-grey-8">
              <post-office-queues/>
            </q-tab-panel>

            <q-tab-panel name="vaccine_ordering" class="bg-grey-8">
              <vaccine-ordering/>
            </q-tab-panel>

          </q-tab-panels>
        </q-tab-panel>

        <q-tab-panel name="third_year">
          <q-tabs
            v-model="third_year"
            no-caps
            mobile-arrows
            outside-arrows
          >
            <q-tab name="workout_planner" label="LEAN" />
            <q-tab name="street_scene" label="Street Scene" />
            <q-tab name="spotify_hit_predictor" label="Spotify Hit Predictor" />
            <q-tab name="quickhull_algorithm" label="Quickhull Algorithm" />
            <q-tab name="ant_colony_optimisation" label="Ant Colony Optimisation"/>
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="third_year" animated class="bg-purple-1 text-center">

            <q-tab-panel name="workout_planner" class="bg-grey-8">
              <workout-planner/>
            </q-tab-panel>

            <q-tab-panel name="street_scene" class="bg-grey-8">
              <street-scene/>
            </q-tab-panel>

            <q-tab-panel name="spotify_hit_predictor" class="bg-grey-8">
              <spotify-hit-predictor/>
            </q-tab-panel>

            <q-tab-panel name="quickhull_algorithm" class="bg-grey-8">
              <quickhull-algorithm/>
            </q-tab-panel>

            <q-tab-panel name="ant_colony_optimisation" class="bg-grey-8">
              <ant-colony-optimisation/>
            </q-tab-panel>

          </q-tab-panels>
        </q-tab-panel>

        <q-tab-panel name="freelance">
          <q-tabs
            v-model="freelance"
            no-caps
            mobile-arrows
            outside-arrows
          >
            <q-tab name="treadmill_assistant" label="Treadmill Assistant" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="freelance" animated class="bg-purple-1 text-center">

            <q-tab-panel name="treadmill_assistant" class="bg-grey-8">
              <treadmill-assistant/>
            </q-tab-panel>

          </q-tab-panels>
        </q-tab-panel>

        <q-tab-panel name="personal">
          <q-tabs
            v-model="personal"
            no-caps
            mobile-arrows
            outside-arrows
          >
            <q-tab name="measure_area" label="Measure Area" />
            <q-tab name="discord_bot" label="Discord Bot" />
            <q-tab name="rally_results_reader" label="Rally Results Reader" />
            <q-tab name="this_website" label="This Website" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="personal" animated class="bg-purple-1 text-center">

            <q-tab-panel name="measure_area" class="bg-grey-8">
              <measure-area/>
            </q-tab-panel>

            <q-tab-panel name="discord_bot" class="bg-grey-8">
              <discord-bot/>
            </q-tab-panel>

            <q-tab-panel name="rally_results_reader" class="bg-grey-8">
              <rally-results-reader/>
            </q-tab-panel>

            <q-tab-panel name="this_website" class="bg-grey-8">
              <this-website/>
            </q-tab-panel>

          </q-tab-panels>
        </q-tab-panel>

      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import TextJson from '../text.json'

import rowData from './portfolio/alevel/rowData.vue'

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
import streetScene from './portfolio/thirdYear/streetScene.vue'
import spotifyHitPredictor from './portfolio/thirdYear/spotifyHitPredictor.vue'
import quickhullAlgorithm from './portfolio/thirdYear/quickhullAlgorithm.vue'
import AntColonyOptimisation from './portfolio/thirdYear/antColonyOptimisation.vue'

import treadmillAssistant from './portfolio/freelance/treadmillAssistant.vue'

import measureArea from './portfolio/personal/measureArea.vue'
import discordBot from './portfolio/personal/discordBot.vue'
import rallyResultsReader from './portfolio/personal/rallyResultsReader.vue'
import thisWebsite from './portfolio/personal/thisWebsite.vue'

export default {
  methods: {
    handleResize () {
      this.window.width = `${window.innerWidth}px`
      this.window.height = `${window.innerHeight}px`
    }
  },
  components: {
    rowData,
    treadmillAssistant,
    measureArea,
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
    workoutPlanner,
    streetScene,
    spotifyHitPredictor,
    quickhullAlgorithm,
    AntColonyOptimisation
  },
  data () {
    return {
      window: {
        width: '0px',
        height: '0px'
      },
      root: 'alevel',
      alevel: 'RowData',
      first_year: 'countdown_simulator',
      second_year: 'card_game',
      third_year: 'workout_planner',
      freelance: 'treadmill_assistant',
      personal: 'measure_area',
      text: TextJson
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
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
    },
    '$route.query': {
      immediate: true,
      handler (params) {
        if (params.category) {
          this.root = params.category.toString()
        }
        if (params.project) {
          switch (this.root) {
            case 'first_year':
              this.first_year = params.project.toString()
              break
            case 'second_year':
              this.second_year = params.project.toString()
              break
            case 'third_year':
              this.third_year = params.project.toString()
              break
          }
        }
        this.$router.replace('/portfolio')
      }
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
  min-height: 450px;
  background-color: #2c2f31;
}

.my-column {
  float: left;
  width: 50%;
  background-color: #2c2f31;
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
  max-width: 1000px;
  background-color: #2c2f31;
}

.q-img {
  max-width: 1000px;
}

.list {
  text-align: left;
}

</style>
