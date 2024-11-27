<template>
    <div class="modal" tabindex="-1" aria-hidden="true" v-if="showModal" style="display: block;"
        @click.self="CloseModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="CloseModal"></button>
                </div>
                <div class="modal-body">
                    <p>{{ modalText }}</p>
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="CloseModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['title', 'modalText', 'showModal'],
    methods: {
        CloseModal() {
            this.$emit('close-modal')
        }
    }
}

</script>