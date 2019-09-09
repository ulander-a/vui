<template>
        <v-data-table
            v-if="tableData"
            :headers="tableData.headers"
            :items="tableData.rows"
        >
        </v-data-table>
        <v-data-table
            v-else
            loading
        >
        </v-data-table>
</template>

<script>
export default {
    name: "DataTable",
    props: { tableData: null }
}
</script>

