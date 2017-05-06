import Vue from '../node_modules/vue/dist/vue';

import App from './app.vue';
import './styles/styles.css';
import './styles/styles.scss';

new Vue({
    el: '.todo',
    components: { App }
})