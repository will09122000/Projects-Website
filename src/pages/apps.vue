<template>
  <q-page padding>

    <q-btn square stack to="apps/treadCadence">
      <q-avatar rounded size="100px">
        <img src="../assets/tread_cadence_logo.png">
      </q-avatar>
      Tread Cadence
    </q-btn>

    <router-view/>

  </q-page>
</template>

<script>
import { openURL, copyToClipboard } from 'quasar'

export default {
  name: 'PageContact',
  methods: {
    copy: async function (text) {
      await copyToClipboard(text)
    },
    redirect: function (text) {
      openURL(text)
    }
  }
}

</script>

<style>
</style>
