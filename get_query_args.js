/*	
	获得location查询字符串中的参数
	@return object
*/

function getQueryStringArgs() {
	var qs = (location.search.length > 0 ? location.search.substring(1) : ''),
	args = {},
	items = qs.length ? qs.split('&') : [],
	item = null, name = null, value = null;

	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
}
