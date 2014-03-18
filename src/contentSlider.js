/*
 *  Project: ContentSlider
 *  Description: A Simple ContentSlider with navigation
 *  Author: Malte Sohns
 *  License: MIT
 */

// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;
(function($, window, undefined) {

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variables rather than globals
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	// Create the defaults once
	var pluginName = 'contentSlider',
		document = window.document,
		defaults = {
			slideSpeed: 1000,
			animateType: 'swing',
			contentSize: 800
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;

		// jQuery has an extend method which merges the contents of two or 
		// more objects, storing the result in the first object. The first object
		// is generally empty as we don't want to alter the default options for
		// future instances of the plugin
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype.init = function() {
		// Place initialization logic here
		// You already have access to the DOM element and the options via the instance, 
		// e.g., this.element and this.options
		var opt = this.options;

		var itemCount = $(".slider-navItem").length; //DO NOT CHANGE
		var contentWrapSize = opt.contentSize; //DO NOT CHANGE
		var contentContainer = opt.contentSize * itemCount; //DO NOT CHANGE
		var margLeft = 0; //DO NOT CHANGE
		var divHeight = $('.slider-content:eq(0)').height();

		// SET CSS SETTINGS
		$('.slider-content').css("width", opt.contentSize + 'px');
		$('#slider-contentContainer').css("width", contentContainer + 'px');
		$('#slider-contentWrap').css("width", contentWrapSize + 'px');
		$('#slider-contentWrap').css("height", divHeight + 'px');


		// This is the whole Slider function
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
				height: divSize+'px'
			}, {
				duration: opt.slideSpeed,
				queue: false
			});
		});
	};

	// A really lightweight plugin wrapper around the constructor, 
	// preventing against multiple instantiations
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	}

}(jQuery, window));