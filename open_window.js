/*
*  打开一个居中显示的窗口
*  @return window object
*/

function openWindowByURL(url, windowName) {
	var width = 700;
	var height = 400;
	var left = (window.outerWidth - width) / 2;
	var top = (window.outerHeight - height) / 2;
	var windowFeatures = 'height=' + height + ',width=' + width + 
		',top=' + top + ',left=' + left + ',resizable=yes';
	console.log(windowFeatures);

	var blocked = false;

	try {
		var newWin = window.open(url, windowName, windowFeatures);
		if (newWin == null) {
			blocked = true;
		}
	} catch (e) {
		blocked = true;
	}

	if (blocked) {
		alert('弹出窗口被浏览器阻止');
	}

	return newWin;
}

/*
	test: 

	var newWin = openWindowByURL('http://www.baidu.com', '_blank');
	setTimeout(function() {
		newWin.close();
		console.log(newWin.closed);
	}, 2000);

*/

