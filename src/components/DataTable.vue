<template>
    <div id="data-table">
        <span v-for="(column, i) in data.columns" :key="(`c${i}`)">
           - {{column}} -
        </span>
        <div class="row" v-for="(row, i) in data.data" :key="(`r${i}`)">
            <!-- <span class="cell" v-for="(row., i) in row"></span> -->
            {{Object.keys(row).map(key => row[key])}}
        </div>
    </div>
</template>

<script>
export default {
    name: "DataTable",
    props: { data: null },
    mounted: function() {
        console.log('DataTable mounted')
    }
}
</script>
