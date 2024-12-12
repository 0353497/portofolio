<template>
    <div class="bg">
        <LoginForm title="Log in" @loggedIn="LoggedIn()" />
    </div>
</template>


<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
    name: 'RegisterPage',
    components: {
        LoginForm
    },
    methods: {
        LoggedIn() {
            return this.$router.push('/');
        }
    }
}

</script>
<style>
.bg {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 300% 300% !important;
    background: linear-gradient(45deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    -webkit-animation: AnimateBG 20s ease infinite;
    animation: AnimateBG 20s ease infinite;
}

@-webkit-keyframes AnimateBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes AnimateBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>