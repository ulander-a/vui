<template>
    <table id="data-table">
        <tbody>
            <th v-for="(column, i) in data.columns" :key="(`c${i}`)">
                {{column}}
            </th>
            <tr class="row" v-for="(row, i) in data.rows" :key="(`r${i}`)">
                <td class="cell" v-for="(cell, i) in row" :key="(`c${i}`)">
                    <router-link v-if="i == 0" :to="(`/details/${row.length}`)">{{ cell }}</router-link>
                    <small v-else>{{ cell }}</small>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "DataTable",
    props: { data: null }
}
</script>

