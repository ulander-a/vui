<template>
  <div id="data-display">
    <Fetching v-if="isFetching" />
    <DataTable v-if="toDisplay != null" :data="toDisplay" />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import Fetching from '@/components/Fetching.vue'

const url = 'https://swapi.co/api/planets/'

const cleanData = (data) => {
  // Get the columns
  const columns = Object.keys(data.results[0])
  // Get the rows
  const rows = data.results.map(res => Object.values(res))
  const cleaned = {
    columns: columns,
    rows: rows
  }
  return cleaned
}

export default {
  name: 'DataDisplay',
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
    this.getData(url)
  },
  components: {
    DataTable,
    Fetching
  }
}
</script>
