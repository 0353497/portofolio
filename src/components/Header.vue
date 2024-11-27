<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">{{ PageTitle }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Skills">Skills</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown link
                        </a>
                        <Dropdown :ListItems="ListItems" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

import Dropdown, { ListItem } from './Dropdown.vue';
export default {
    name: 'Header',
    components: {
        Dropdown,
    },
    props: ['PageTitle'],
    data() {
        return {
            ListItems: [
                new ListItem('Home', '/home'),
                new ListItem('Contact', '/contact'),
            ],
        };
    }
}
</script>