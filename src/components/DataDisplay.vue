<template>
  <div id="data-display">
    <DataTable :tableData="toDisplay" />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
import { cleanData } from '@/lib/helpers.js'

export default {
  name: 'DataDisplay',
  data: () => {
    return { toDisplay: null }
  },
  props: {
    rawData: null
  },
  watch: {
    rawData: function() {
      this.toDisplay = cleanData(this.rawData)
    }
  },
  components: {
    DataTable,
  }
}
</script>
