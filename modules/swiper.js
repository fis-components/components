'use strict';

module.exports = (function() {

	return [{
		repos: "https://github.com/nolimits4web/Swiper.git",
		version: "v3.3.1",
		description: "Most modern mobile touch slider with hardware accelerated transitions",
		name: "Swiper",
		main: "swiper.js",
		dependencies: [
		],
		mapping: [
			{
        reg: /^\/dist\/js\/(swiper\.js)$/,
        release: '$1'
      },
      {
        reg: /^\/dist\/css\/(.*\.css)$/,
        release: '$1'
      },

			{
        reg: /^\/README\.md$/,
        release: '$&'
      },
      {
        reg: "*",
        release: false
      }
		]
	}]
})();
