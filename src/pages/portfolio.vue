<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-btn-toggle
          v-model="year"
          spread
          no-caps
          toggle-color= "orange-7"
          color="grey-2"
          text-color="black"
          :options="[
            {label: 'GCSE', value: '1'},
            {label: 'A-Level', value: '2'},
            {label: 'First Year', value: '3'},
            {label: 'Second Year', value: '4'},
            {label: 'Third Year', value: '5'},
            {label: 'Fourth Year', value: '6'},
            {label: 'Personal', value: '7'}
          ]"
        />
      </div>
      <q-card v-if="year == '1'" bordered class="q-mt-md bg-grey-5">
        <q-card-section>
          GCSE
        </q-card-section>
      </q-card>

      <q-card v-if="year == '2'" bordered class="q-mt-md bg-grey-5">
        <q-card-section>
          A-Level
        </q-card-section>
      </q-card>

      <q-card v-if="year == '3'" bordered class="q-mt-md bg-grey-5">
        <div class="q-gutter-y-md">
          <q-btn-toggle
            v-model="first_year"
            spread
            no-caps
            toggle-color= "orange-7"
            color="grey-2"
            text-color="black"
            :options="[
              {label: 'Countdown Simulator', value: '1'},
              {label: 'Smart Alarm Clock', value: '2'},
              {label: 'Barnabys Brewhouse', value: '3'},
              {label: 'Beanbag Shop back end', value: '4'},
              {label: 'Lift Algorithm', value: '5'},
              {label: 'Task Manager', value: '6'}
            ]"
          />
        </div>
      </q-card>

      <q-card v-if="year == '4'" bordered class="q-mt-md bg-grey-5">
        <q-card-section>
          Second Year
        </q-card-section>
      </q-card>

      <q-card v-if="year == '5'" bordered class="q-mt-md bg-grey-5">
        <q-card-section>
          Third Year
        </q-card-section>
      </q-card>

      <q-card v-if="year == '6'" bordered class="q-mt-md bg-grey-5">
        <q-card-section>
          Fourth Year
        </q-card-section>
      </q-card>

      <q-card v-if="year == '7'" bordered class="q-mt-md bg-grey-5">
        <q-card-section>
          Personal
        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      year: '1',
      first_year: '1'
    }
  }
}
</script>

<style>
</style>
