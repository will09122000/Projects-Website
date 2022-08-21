<template>
  <q-page padding>

    <q-btn square stack to="apps/treadmillAssistant" class="q-pa-md">
      <q-avatar rounded size="100px">
        <img src="../assets/tread_assistant_logo.png">
      </q-avatar>
      Treadmill Assistant
    </q-btn>

    <q-btn square stack to="apps/measureArea" class="q-pa-md">
      <q-avatar rounded size="100px">
        <img src="../assets/measure_area_logo.png">
      </q-avatar>
      Measure Area
    </q-btn>

    <router-view/>

  </q-page>
</template>

<script>

export default {
  name: 'PageContact'
}

</script>

<style>
</style>
