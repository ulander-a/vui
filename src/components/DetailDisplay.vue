<template>
    <div id="detail-display">
        <p>Here be details</p>
        <small>{{ $route.params.id }}</small>
    </div>
</template>

<script>
export default {
    name: 'DetailDisplay'
}
</script>
