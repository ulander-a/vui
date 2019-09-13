<template>
    <v-alert v-model="alert.show" :type="alert.type" :dismissible="true" transition="slide-y-transition">{{ alert.content }}</v-alert>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Alert',
  computed: {
    ...mapState('alert', ['type', 'show', 'content']),
    alert: {
      get() { return this.$store.state.alert },
      set() { this.$store.commit('setAlert', { type: null, show: false, content: '' }) }
    }
  }
}
</script>
