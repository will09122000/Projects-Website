<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-avatar square>
          <img src="../assets/Will.png">
        </q-avatar>

        <q-toolbar-title>
          Will Coates
        </q-toolbar-title>

        <div class="q-pa-md">
          <q-toggle v-model="mode" label="Dark Mode"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list>
        <q-item
          v-for="link in essentialLinks"
          :key="link.title"
          clickable
          :to="link.link"
          exact>
          <q-item-section avatar>
            <q-icon :name="link.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>
              {{ link.caption }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <EssentialLink
          v-for="link in essentialLinksExternal"
          :key="link.title"
          v-bind="link"
          clickable
          v-ripple
        />
      </q-list>

    </q-scroll-area>

      <q-img class="absolute-top" src="../assets/background.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="70px" square>
            <img src="../assets/Will.png">
          </q-avatar>
          <div class="text-weight-bold">Will Coates</div>
          <div>@Will0912</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Curriculum Vitae',
    icon: 'school',
    link: '/cv'
  },
  {
    title: 'Portfolio',
    caption: 'My Computer Science Projects',
    icon: 'assignment',
    link: '/portfolio'
  },
  {
    title: 'Contact',
    caption: 'will0912@icloud.com',
    icon: 'contact_mail',
    link: '/contact'
  },
  {
    title: 'About Me',
    caption: '',
    icon: 'emoji_people',
    link: '/about-me'
  }
]

const linksDataExternal = [
  {
    title: 'GitHub',
    caption: 'github.com/will09122000',
    icon: 'code',
    link: 'https://github.com/will09122000'
  }
]

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup () {
    const leftDrawerOpen = ref(false)
    const essentialLinks = ref(linksData)
    const essentialLinksExternal = ref(linksDataExternal)

    return { leftDrawerOpen, essentialLinks, essentialLinksExternal }
  },
  data () {
    return {
      mode: true
    }
  }
})
</script>
