import Vue from 'vue';
import Alert from './components/Alert.vue';
import Greeter from './components/Greeter.vue';

new Vue({
    el: '#app',

    components: {
    	Alert,
    	Greeter
    },
    
    ready() {
        alert('Vue and Vueify all set to go!');
    }
});