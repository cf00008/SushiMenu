function _getUrlParam() {
	var arg = new Object;
	var pair = document.location.search.substring(1).split('&');
	if (!pair) {
		return false;
	}
	for (var i = 0; pair[i]; i++) {
		var kv = pair[i].split('=');
		arg[kv[0]] = kv[1];
	}
	return arg;
}