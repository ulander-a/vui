<template>
  <h2>
    Currently connected to
    <span>{{ api.name }}</span>
  </h2>
</template>

<script>
export default {
  name: "Api",
  data() {
    return {
      api: {
          name: process.env.VUE_APP_API_NAME
      }
    }
  }
}
</script>
