module.exports = (function() {
	return [{
		repos: "https://github.com/twbs/ratchet.git",
		version: "v2.0.2",
		description: "Build mobile apps with simple HTML, CSS, and JavaScript components.",
		name: "ratchet",
		main: "ratchet",
		dependencies: [
		],
		mapping: [
			{
                reg: /^\/dist\/js\/(.*\.js)$/,
                release: '$1'
            },
            {
                reg: /^\/dist\/(.*)$/,
                release: '$1'
            },
            {
                reg: /^\/js\/([^\/]*\.js)$/,
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