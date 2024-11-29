<template>
    <div>
        <Index />
        <hr />
        <Skills :skills="skills" />
        <hr />
        <WatKanIk :title="title" :text="text" />
        <hr />
        <WatKanIk :title="title2" :text="text" />
        <hr />
        <Certificaten :certificaten="certificaten" />
        <hr />
        <Form @modal="makeModal" />
        <Modal :visible="showModal" @close-modal="ToggleModal" :title="Modaltitle" :modalText="modalText"
            :show-modal="showModal" />
    </div>
</template>

<script>
import Index from "@/components/Index.vue";
import Skills from "@/components/Skills.vue";
import Skill from "@/models/Skill.js";
import Certificaat from "@/models/Certificaten";
import WatKanIk from "@/components/Wat-kan-Ik.vue";
import Certificaten from "@/components/Certificaten.vue";
import Form from "@/components/Form.vue";
import Modal from "@/components/Modal.vue";

export default {
    components: {
        Index,
        Skills,
        WatKanIk,
        Certificaten,
        Form,
        Modal,
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
            ],
            title: "Wat kan ik?",
            text:
                "Lorem ipsum dolor sit amet. Qui architecto exercitationem qui vitae voluptate sit illum magnam non unde facilis qui Quis deleniti ex inventore nemo ea blanditiis delectus. Ut cumque molestiae eum nisi dolores eum aliquam excepturi ut facilis voluptas a quia maxime? Sit sequi iure ut nemo quod At modi aperiam ut dolores suscipit. Quo minima debitis vel iure dolorum sit illum consequatur qui nobis accusamus. Vel molestiae sint est dignissimos culpa et voluptas accusantium ab culpa odio ea voluptatibus sint! Est laboriosam perspiciatis ut odio aspernatur non adipisci fuga! Sed quae eaque in repellendus atque quo voluptate maiores et recusandae quibusdam ea nobis tempora. A quas sequi et incidunt nulla in nihil perspiciatis id enim ipsum et voluptas ipsam. Et illo repellendus ut voluptatem quidem ut saepe iure et consequatur dicta.",
            title2: "Wie ben ik?",
            certificaten: [
                new Certificaat("HTML 5", "Dit is een beschrijving van certificaat 1", "01-01-2021"),
                new Certificaat("CSS", "Dit is een beschrijving van certificaat 2", "01-01-2021"),
                new Certificaat("C#", "Dit is een beschrijving van certificaat 3", "01-01-2021"),
                new Certificaat("Bootstrap 5", "Dit is een beschrijving van certificaat 4", "01-01-2021"),
                new Certificaat("ASP .net Razor", "Dit is een beschrijving van certificaat 5", "01-01-2021"),
                new Certificaat("Vue js", "Dit is een beschrijving van certificaat 6", "01-01-2021"),
                new Certificaat("Javaschript", "Dit is een beschrijving van certificaat 7", "01-01-2021"),
                new Certificaat("PHP", "Dit is een beschrijving van certificaat 8", "01-01-2021"),
            ],
            showModal: false,
            Modaltitle: "",
            modalText: "",
        };
    },
    methods: {
        ToggleModal() {
            this.showModal = !this.showModal;
        },
        makeModal(title, modalText) {
            this.Modaltitle = title;
            this.modalText = modalText;
            this.showModal = true;
        },
    },
};
</script>
