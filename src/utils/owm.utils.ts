import OWM_API from '../config/owm.api'

export const buildUrl = (type: string, units: EUnits, mode: EMode, lang: ELang): string => {
	const { url, protocol, version } = OWM_API.endpoint

	let query: string = ''
	let endpoint: string = protocol.concat('://').concat(url).concat('/').concat(version).concat(query)

	switch (type) {
		default:
			break

		case 'current':
			break
	}

	return endpoint
}

enum EUnits {
	standart,
	metric,
	imperial,
}
enum EMode {
	xml,
	html,
}
enum ELang {
	af,
	al,
	ar,
	az,
	bg,
	ca,
	cz,
	da,
	de,
	el,
	en,
	eu,
	fa,
	fi,
	fr,
	gl,
	he,
	hi,
	hr,
	hu,
	id,
	it,
	ja,
	kr,
	la,
	lt,
	mk,
	no,
	nl,
	pl,
	pt,
	pt_br,
	ro,
	ru,
	sv, // Swedish
	se, // Swedish
	sk,
	sl,
	sp,
	sr,
	th,
	tr,
	ua,
	uk,
	vi,
	zh_cn, // Chinese Simplified
	zh_tw, // Chinese Traditional
	zu,
}
