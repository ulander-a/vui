<template>
  <div id="details">
    <h1>Details</h1>
    <Fetching v-if="isFetching"/>
    <DetailDisplay :data="toDisplay" />
  </div>
</template>

<script>
import DetailDisplay from "@/components/DetailDisplay.vue";
import Fetching from "@/components/Fetching.vue";

const url = `https://swapi.co/api/people/`;

export default {
  name: "Details",
  components: {
    DetailDisplay,
    Fetching
  },
  methods: {
    getData(url) {
      this.isFetching = true;
      fetch(`${url}${this.$route.params.id}`)
        .then(res => res.json())
        .then(json => {
          this.isFetching = false;
          this.toDisplay = json
        })
        .catch(err => {
          this.isFetching = false
          console.log(err)
        });
    }
  },
  data() {
    return {
      isFetching: false,
      toDisplay: null
    };
  },
  mounted: function() {
    this.getData(url)
  }
};
</script>
