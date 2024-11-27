<template>
    <div>
        <Index />
        <Skills :skills="skills" />
    </div>
</template>

<script>
import Index from "@/components/Index.vue";
import Skills from "@/components/Skills.vue";
import Skill from "@/models/Skill.js";

export default {
    components: {
        Index,
        Skills
    },
    data() {
        return {
            skills: [
                new Skill("HTML", 90),
                new Skill("CSS", 80),
                new Skill("Javascript", 70),
                new Skill("Vue.js", 60),
                new Skill("Node.js", 50),
                new Skill("PHP", 40),
                new Skill("C#", 30),
                new Skill("SQL", 20),
            ]
        };
    }
}
</script>
