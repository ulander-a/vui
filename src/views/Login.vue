<template>
    <div id="login">
        <LoginForm v-if="!showRegistration" />
        <p v-else>Placeholder for registration form</p>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
    name: 'Login',
    data: () => {
        showRegistration: false
    },
    components: {
        LoginForm
    }
}
</script>
