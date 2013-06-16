/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'haseitl1\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-logo_gefuellt' : '&#x68;',
			'icon-user' : '&#x6a;',
			'icon-home' : '&#x48;',
			'icon-github' : '&#x67;',
			'icon-github-2' : '&#x47;',
			'icon-steam' : '&#x73;',
			'icon-xing' : '&#x78;',
			'icon-stackoverflow' : '&#x53;',
			'icon-google-plus' : '&#x2b;',
			'icon-twitter' : '&#x74;',
			'icon-mail' : '&#x6d;',
			'icon-facebook' : '&#x66;',
			'icon-google-drive' : '&#x64;',
			'icon-console' : '&#x63;',
			'icon-linkedin' : '&#x6c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};