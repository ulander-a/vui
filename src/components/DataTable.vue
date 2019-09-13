<template>
        <v-data-table
            v-if="tableData"
            :headers="tableData.headers"
            :items="tableData.rows"
        >
            <template v-slot:item.name="{ item }">
                <router-link :to="(`/details/${1}`)">{{ item.name }}</router-link>
            </template>
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

