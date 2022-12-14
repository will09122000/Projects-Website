<template>
  <q-page padding>

    <q-btn square stack to="apps/gymple" class="q-pa-md" style="width: 220px">
      <q-avatar rounded size="100px" class="q-mb-sm">
        <img src="../assets/gymple_logo.png">
      </q-avatar>
      Gymple
    </q-btn>

    <q-btn square stack to="apps/treadAssist" class="q-pa-md" style="width: 220px">
      <q-avatar rounded size="100px" class="q-mb-sm">
        <img src="../assets/tread_assistant_logo.png">
      </q-avatar>
      Tread Assist
    </q-btn>

    <q-btn square stack to="apps/measureArea" class="q-pa-md" style="width: 220px">
      <q-avatar rounded size="100px" class="q-mb-sm">
        <img src="../assets/measure_area_logo.png">
      </q-avatar>
      Measure Area
    </q-btn>

    <q-btn square stack to="apps/wonkyNotes" class="q-pa-md" style="width: 220px">
      <q-avatar rounded size="100px" class="q-mb-sm">
        <img src="../assets/wonky_notes_logo.png">
      </q-avatar>
      Wonky Notes
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
