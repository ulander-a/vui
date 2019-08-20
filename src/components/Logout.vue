<template>
    <a @click="logout">Logout</a>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logout: function() {
            // destroy token
            this.$store.commit('logout')
            this.$store.commit('setMessage', {
                type: 'success',
                show: true,
                body: 'Successfully logged out'
            })
            // redirect to front page
        }
    }
}
</script>