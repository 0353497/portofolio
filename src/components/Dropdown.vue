<template>
    <ul class="dropdown-menu">
        <!-- Loop through ListItems and render each item -->
        <li v-for="(item, index) in ListItems" :key="index">
            <a class="dropdown-item" :href="item.href">{{ item.name }}</a>
        </li>
    </ul>
</template>

<script>
// Define the ListItem class
class ListItem {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    }
}

export default {
    name: 'Dropdown',
    props: {
        ListItems: {
            type: Array,
            required: true,
            validator(value) {
                return value.every(item => item instanceof ListItem);
            }
        }
    },
};

// Export the ListItem class for external use
export { ListItem };
</script>