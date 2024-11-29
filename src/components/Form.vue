<template>
    <form class="container" @submit.prevent="submitForm">
        <h1>Neem Contact op!</h1>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="email" class="form-control" placeholder="email" aria-label="Username"
                aria-describedby="basic-addon1" v-model="email" required />
        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" v-model="bericht"
                required></textarea>
            <label for="floatingTextarea">bericht</label>
        </div>
        <div class="input-group">
            <h1>{{ email }}</h1>
            <h1>{{ bericht }}</h1>
        </div>
        <div class="input-group mb-3">
            <button type="submit" class="btn btn-primary">Verstuur</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            bericht: ""
        };
    },
    methods: {
        submitForm() {
            console.log("submitForm werkt");
            this.$emit('modal', "Bedankt voor uw bericht", "Ik zal zo snel mogelijk reageren");
        },
    },
};
</script>
