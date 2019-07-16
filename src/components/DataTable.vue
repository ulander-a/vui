<template>
    <table id="data-table">
        <tbody>
            <th v-for="(column, colIndex) in tableData.columns" :key="(`c${colIndex}`)">
                {{ column }}
            </th>
            <tr class="row" v-for="(row, rowIndex) in tableData.rows" :key="(`r${rowIndex}`)">
                <td class="cell" v-for="(cell, cellIndex) in row" :key="(`c${cellIndex}`)">
                    <router-link v-if="cellIndex == 0" :to="(`/details/${rowIndex + 1}`)">{{ cell }}</router-link>
                    <small v-else>{{ cell }}</small>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "DataTable",
    props: { tableData: null }
}
</script>

