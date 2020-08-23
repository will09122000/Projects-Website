<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered dark>
      <q-item>
        <q-item-section avatar>
          <q-icon name="email" />
        </q-item-section>

        <q-item-section>Email:<br>will0912@icloud.com</q-item-section>

        <q-btn icon="content_copy" size="sm" v-on:click="copy('will0912@icloud.com')" class="bg-secondary"/>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar icon="phone" />
        </q-item-section>

        <q-item-section>Mobile:<br>07411137157</q-item-section>
        <q-btn icon="content_copy" size="sm" v-on:click="copy('07411137158')" class="bg-secondary"/>
      </q-item>

      <q-separator dark/>

      <q-item>
        <q-item-section avatar>
          <q-avatar icon="fab fa-twitter" />
        </q-item-section>

        <q-item-section>@Will09121</q-item-section>
        <q-btn icon="open_in_new" size="sm" v-on:click="redirect('https://twitter.com/Will09121')" class="bg-secondary"/>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar icon="fab fa-discord"/>
        </q-item-section>

        <q-item-section>Will0912 #7353</q-item-section>
        <q-btn icon="content_copy" size="sm" v-on:click="copy('Will0912 #7353')" class="bg-secondary"/>
      </q-item>

    </q-list>
  </div>
  </q-page>
</template>

<script>
import { openURL, copyToClipboard } from 'quasar'

export default {
  name: 'PageContact',
  methods: {
    copy: function (text) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      copyToClipboard(text)
    },
    redirect: function (text) {
      openURL(text)
    }
  }
}

</script>

<style>
</style>
