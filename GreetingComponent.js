// import MessageComponent from './components/MessageComponent.vue';

export default {
    template: `
        <div>
            <input v-model="name" placeholder="Введите имя">
            <p>Привет, {{ name ? name : '!' }}</p>
        </div>
    `,
    data() {
        return {
            name: ''
        };
    },
    //  components: {
    //      MessageComponent
    // }
};
