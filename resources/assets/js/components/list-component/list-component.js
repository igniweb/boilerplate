import Vue from 'vue';
import template from './list-component.html';
import AppComponent from '../app-component/app-component';

const ListComponent = Vue.extend({
	template,
	data() {
		return {
			listItems: ['test1', 'test2']
		};
	},
	methods: {
		logLocales() {
			console.log(this.$parent.locales.title);
		}
	}
});

export default ListComponent;