<template>
  <div id="data-display">
    <p v-if="isFetching">Fetching ...</p>
    <DataTable v-if="toDisplay != null" :data="toDisplay" />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
const url = "https://swapi.co/api/people/"

const cleanData = (data) => {
  console.log('NANI?!')
  data.results.map(obj => {
    console.log(`${k} : ${v}`)
  })
  return data.results
}

export default {
  name: "DataDisplay",
  methods: {
    getData(url) {
      this.isFetching = true
      fetch(url)
        .then(res => res.json())
        .then(json => {
          this.isFetching = false
          this.toDisplay = cleanData(json)
        })
        .catch(err => this.isFetching = false)
    }
  },
  data() {
      return {
          isFetching: false,
          toDisplay: null
      }
  },
  mounted: function() {
    console.log('DataDisplay mounted')
    this.getData(url)
  },
  components: {
    DataTable
  }
}
</script>
