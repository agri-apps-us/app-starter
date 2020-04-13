<template>
  <div class="app-page">
      <app-input-field label="Quote of the day" hint="Enter an inspiring quote for today">
          <input class="app-input" type="text" v-model="daily" />
      </app-input-field>
      <app-input-field label="Author" hint="Enter the author's name">
          <input class="app-input" type="text" v-model="author" />
      </app-input-field>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
    computed: {
        ...mapFields([
            'daily',
            'author'
        ])
    }
}
</script>

<style>

</style>