// import { createApp } from 'vue';

import GreetingComponent from './GreetingComponent.js';

const app = Vue.createApp({
    components: {
        GreetingComponent
    }
});

app.mount('#app2');
