<template>
    <div id="detail-display">
        <small>{{ detailsData }}</small>
    </div>
</template>

<script>
export default {
    name: 'DetailDisplay',
    props: { detailsData: null }
}
</script>
