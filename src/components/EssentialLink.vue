<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section v-if="icon == 'github'" avatar>
    <q-img src="../assets/github.png" style="max-width: 24px;"/>
    </q-item-section>
    <q-item-section v-else avatar><q-icon :name="icon" /></q-item-section>

    <q-item-section>
      <div class="row q-pr-md q-gutter-md">
        <q-item-label>{{ title }}</q-item-label>
            <q-item-section
          v-if="icon"
          avatar
        >
          <q-icon name="open_in_new" size="medium"/>
        </q-item-section>
      </div>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
