/**
 * Created by jack on 16-8-14.
 */

import vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import {setBlogTitle} from 'common/service/CommonService';
import template from './blog.html';

export default vue.component('blog', {
	template,
	created() {
		this.loadBrowserSetting();
		this.loadNavList();
		this.loadSocialLink();
	},
	computed: mapGetters(['isDesktop', 'navList', 'socialLinkList', 'title']),
	methods: mapActions(['loadBrowserSetting', 'loadNavList', 'loadSocialLink']),
	watch: {
		'title': function() {
			setBlogTitle(this.title);
		}
	}
});
