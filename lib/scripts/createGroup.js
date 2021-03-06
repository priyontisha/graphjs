import apiCall from './api.js';

function createGroupCall(args, callback) {
	apiCall("createGroup", {
		"title": args[0],
		"description": args[1]
	},
	function(response) {
		callback(response.data);
	});
};

export default function() {
	let args = Array.from(arguments);
	let callback = args.pop();
	createGroupCall(args, callback);
};