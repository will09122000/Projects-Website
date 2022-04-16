<template>
<q-tab-panel name="Personal">
  <q-tabs v-model="personal" no-caps mobile-arrows outside-arrows>
    <q-tab name="Discord Bot" label="Discord Bot" />
    <q-tab name="This Website" label="This Website" />
    <q-tab name="Rally Results Reader" label="Rally Results Reader" />
  </q-tabs>
  <q-separator />
  <q-tab-panels v-model="personal" animated class="bg-purple-1 text-center">
    <q-tab-panel name="Discord Bot" class="bg-grey-8">
      <discord-bot />
    </q-tab-panel>

    <q-tab-panel name="This Website" class="bg-grey-8">
      <this-website />
    </q-tab-panel>

    <q-tab-panel name="Rally Results Reader" class="bg-grey-8">
      <rally-results-reader />
    </q-tab-panel>
  </q-tab-panels>
</q-tab-panel>
</template>

<script>
import textJson from '../../../text.json'

import discordBot from './discordBot.vue'
import thisWebsite from './thisWebsite.vue'
import rallyResultsReader from './rallyResultsReader.vue'

export default {
  components: {
    discordBot,
    thisWebsite,
    rallyResultsReader
  },
  data () {
    return {
      text: textJson,
      personal: 'Discord Bot'
    }
  }
}
</script>
