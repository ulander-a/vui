<template>
    <div id="detail-display">
        <p>Here be details</p>
        <small>{{ data }}</small>
    </div>
</template>

<script>
export default {
    name: 'DetailDisplay',
    props: { data: null }
}
</script>
