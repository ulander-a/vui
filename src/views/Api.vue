<template>
  <div class="api">
    <h1>API</h1>

    <h2>
      Current API:&nbsp;
      <span>SWAPI</span>
    </h2>
    <Fetching v-if="isFetching" />
    <DataDisplay v-bind:rawData="fromApi" />
  </div>
</template>

<script>
import DataDisplay from "@/components/DataDisplay"
import Fetching from "@/components/Fetching"

const url = "https://swapi.co/api/people/"

export default {
  name: 'Api',
  data: () => {
    return {
      isFetching: false,
      fromApi: null
    }
  },
  methods: {
    getData(url) {
      this.isFetching = true
      fetch(url)
        .then(res => res.json())
        .then(json => {
          this.isFetching = false
          this.$store.commit('setMessage', {
            type: 'success',
            show: true,
            body: 'Got some data!'
          })
          this.fromApi = json
        })
        .catch(err => {
          this.isFetching = false
          this.$store.commit('setMessage', {
            type: 'error',
            show: true,
            body: err
          })
        })
    }
  },
  mounted: function() {
    this.getData(url)
  },
  components: {
    DataDisplay,
    Fetching
  }
}
</script>
