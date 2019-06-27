<template>
  <div id="data-display">
    <DataTable v-if="toDisplay != null" :data="toDisplay" />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'DataDisplay',
  data() {
    return { toDisplay: null }
  },
  props: {
    rawData: null
  },
  watch: {
    rawData: function() {
      this.toDisplay = this.cleanData(this.rawData)
    }
  },
  methods: {
    cleanData(data) {
      const columns = Object.keys(data.results[0])
      const rows = data.results.map(res => Object.values(res))
      const cleaned = {
        columns: columns,
        rows: rows
      }
      return cleaned
    }
  },
  components: {
    DataTable,
  }
}
</script>
