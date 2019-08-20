<template>
    <div id="login-form">
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label for="email">Email</label>
            <input required v-model="email" type="email" placeholder="Name" />    
            <label for="password">Password</label>
            <input required v-model="password" type="password" placeholder="Password" />
            <hr />
            <button type="submit">Login</button>
        </form>   
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data: () => {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            const email = this.email
            const password = this.password
            
            fetch(process.env.VUE_APP_LOGIN_ROUTE, {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
            })
            .then(res => res.json())
            .then(data => console.log(data))
            // if (email == 'admin@example.com' && password == 'password') {
            //     this.$store.commit('authenticate', { username: 'admin' })
            //     this.$store.commit('setMessage', {
            //         type: 'success',
            //         show: true,
            //         body: `Welcome admin`
            //     })
            // } else {
            //     this.$store.commit('setMessage', {
            //         type: 'error',
            //         show: true,
            //         body: 'nah'
            //     })
            }

            // this.$store.dispatch('login', { email, password })
            //     .then(() => {
            //         console.log(email, password)
            //     })
            //     .catch(err => this.$store.commit('setMessage', {
            //         type: 'error',
            //         show: true,
            //         body: err
            //     }))
    }
}
</script>
