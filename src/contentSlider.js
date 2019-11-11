/*
 *  Project: ContentSlider
 *  Description: A Simple ContentSlider with navigation
 *  Author: rangulvers
 *  License: MIT
 */



;
(function($, window, undefined) {


	var pluginName = 'contentSlider',
		document = window.document,
		defaults = {
			slideSpeed: 1000,
			animateType: 'swing',
			contentSize: 800
		};


	function Plugin(element, options) {
		this.element = element;

		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype.init = function() {

		var opt = this.options;

		var itemCount = $(".slider-navItem").length;
		var contentWrapSize = opt.contentSize;
		var contentContainer = opt.contentSize * itemCount;
		var margLeft = 0;
		var divHeight = $('.slider-content:eq(0)').height();


		$('.slider-content').css("width", opt.contentSize + 'px');
		$('#slider-contentContainer').css("width", contentContainer + 'px');
		$('#slider-contentWrap').css("width", contentWrapSize + 'px');
		$('#slider-contentWrap').css("height", divHeight + 'px');



		$('.slider-navItem').click(function() {
			var index = $(".slider-navItem").index($(this));
			var divSize = $('.slider-content:eq(' + index + ')').height();
			$("#slider-contentContainer").animate({
				marginLeft: margLeft - (opt.contentSize * index)
			}, {
				duration: opt.slideSpeed,
				queue: false
			});
			$("#slider-contentWrap").animate({
				height: divSize + 'px'
			}, {
				duration: opt.slideSpeed,
				queue: false
			});
		});
	};



	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	}

}(jQuery, window));
