<template>
    <div class="text-center">
        <v-progress-circular
            indeterminate
            color="primary"
            :size="70"
            :width="7"
        ></v-progress-circular>
    </div>
</template>

<script>
export default {
    name: 'Fetching'
}
</script>