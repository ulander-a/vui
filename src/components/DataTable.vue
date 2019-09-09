<template>
        <v-data-table
            :headers="tableData.headers"
            :items="tableData.rows"
        >
        </v-data-table>
</template>

<script>
export default {
    name: "DataTable",
    props: { tableData: null }
}
</script>

