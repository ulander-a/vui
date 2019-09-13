<template>
    <a @click="logout">Logout</a>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logout: function() {
            // destroy token
            localStorage.removeItem('dummyToken')
            this.$store.commit('logout')
            this.$store.commit('setAlert', {
                type: 'success',
                show: true,
                content: 'Successfully logged out'
            })
            // redirect to front page
        }
    }
}
</script>