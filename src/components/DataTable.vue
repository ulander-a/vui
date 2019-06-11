<template>
    <div id="data-table">
        <p>{{ data }}</p>
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
