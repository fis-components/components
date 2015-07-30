'use strict';

module.exports = (function() {

	return [{
		repos: "https://github.com/nolimits4web/Swiper.git",
		version: "v3.1.0",
		description: "Most modern mobile touch slider with hardware accelerated transitions",
		name: "Swiper",
		main: "swiper.min.js",
		dependencies: [
		],
		mapping: [
			{
        reg: /^\/dist\/js\/(.*\.js)$/,
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
