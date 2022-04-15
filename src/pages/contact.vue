<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered dark>
        <q-item>
          <q-item-section avatar>
            <q-icon name="email" class="q-pl-sm" style="height:25px;"/>
          </q-item-section>
          <q-item-section><q-img
                            src="../assets/email.png"
                            style="max-width: 140px; height:25px;"
                          />
          </q-item-section>
          <q-btn icon="content_copy" size="sm" v-on:click="copy('will0912@icloud.com')" class="bg-secondary"/>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar icon="phone" style="height:25px;"/>
          </q-item-section>

          <q-item-section><q-img
                            src="../assets/mobile.png"
                            style="max-width: 95px; height:25px;"
                          />
          </q-item-section>
          <q-btn icon="content_copy" size="sm" v-on:click="copy('07411137158')" class="bg-secondary"/>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar icon="fab fa-twitter" style="height:25px;"/>
          </q-item-section>

          <q-item-section>@willcoates0912</q-item-section>
          <q-btn icon="open_in_new" size="sm" v-on:click="redirect('https://twitter.com/willcoates0912')" class="bg-secondary"/>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar icon="fab fa-discord" style="height:25px;"/>
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
