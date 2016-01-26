import Vue from 'vue';
import template from './app-component.html';
import ListComponent from '../list-component/list-component';

const AppComponent = Vue.extend({
	template,
	components: {
		'list-component': ListComponent
	}
});

export default AppComponent;