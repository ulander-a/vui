<template>
  <div>
    <h2>
      Current API:&nbsp;
      <span>{{ api.name }}</span>
    </h2>
    <DataDisplay />
  </div>
</template>

<script>
import DataDisplay from "@/components/DataDisplay.vue";
export default {
  name: "Api",
  data() {
    return {
      api: {
        name: process.env.VUE_APP_API_NAME
      }
    };
  },
  components: {
      DataDisplay
  }
};
</script>
