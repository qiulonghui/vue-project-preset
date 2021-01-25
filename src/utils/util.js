import dayjs from 'dayjs'

export function formatTime(time, formatStr = 'YYYY-MM-DD') {
  return dayjs(time).format(formatStr)
}

export function getUrlParams (param) {
	const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)','i');
	const r = window.location.search.substr(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg);
	if (r != null) {
			return decodeURIComponent(r[2]);
	}
};