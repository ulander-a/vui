<template>
  <div id="message-container">
    <div class="message" v-if="message.show">
      <span>{{ message.type }}</span>
      <p>{{ message.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  computed: {
    message() {
      return this.$store.state.message
    }
  }
}
</script>
