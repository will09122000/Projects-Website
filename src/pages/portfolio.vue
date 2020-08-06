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
        </q-tab-panels>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      windowHeight: window.innerHeight * 0.8,
      root: 'Personal',
      personal: 'Discord Bot',
      gcse: 'A452'
    }
  }
}
</script>

<style>
</style>
