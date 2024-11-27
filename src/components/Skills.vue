<template>
    <div class="container">
        <div class="row">
            <div class="col-6" v-for="(skill, index) in skills" :key="index">
                <h3>{{ skill.name }}</h3>
                <div class="progress" role="progressbar" aria-label="Info striped example"
                    :aria-valuenow="skill.progress" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped bg-info" :style="{ width: skill.progress + '%' }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    props: ['skills'],
}
</script>
