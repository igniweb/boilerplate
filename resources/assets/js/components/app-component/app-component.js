import Vue from 'vue';
import template from './app-component.html';
import ListComponent from '../list-component/list-component';

const AppComponent = Vue.extend({
	template,
	props: [
		'locales'
	],
	components: {
		'list-component': ListComponent
	},
	methods: {
		//
	}
});

export default AppComponent;