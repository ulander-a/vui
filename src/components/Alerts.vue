<template>
  <v-container id="message-container">
    <v-alert
      v-if="message.show"
      :type="message.type"
      :dismissible="true"
    >
      {{ message.body }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'Alerts',
  computed: {
    message() {
      return this.$store.state.message
    }
  }
}
</script>
