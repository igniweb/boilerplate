import Vue from 'vue';
import template from './list-component.html';

const ListComponent = Vue.extend({
	template,
	data() {
		return {
			listItems: ['test1', 'test2']
		};
	}
});

export default ListComponent;