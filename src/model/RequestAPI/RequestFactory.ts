import { ECall } from './Call'
import { EFormatLang, EFormatMode, EFormatUnits } from './Format'

interface IRequestFormat {
	mode?: EFormatMode
	units?: EFormatUnits
	lang?: string
	// lang?: EFormatLang
}

class RequestFormat implements IRequestFormat {
	mode = EFormatMode.JSON
	units = EFormatUnits.STANDART
	lang = 'en'

	getQuery(apiid: string): string {
		return `appid=${apiid}&mode=${this.mode}&units=${this.units}&lang=${this.lang}`
	}
}

export interface IRequest {
	url: string
	version: number
	call: ECall
	format?: IRequestFormat
	buildEndpoint(query: string): string
}

export default class RequestFactory {
	static request(call: ECall = ECall.CURRENT): IRequest {
		try {
			switch (call) {
				default:
				case ECall.CURRENT:
					return new RequestCurrent()
				case ECall.FORECAST:
					return new RequestForecast()
				case ECall.HISTORY:
					return new RequestHistory()
			}
		} catch (e) {
			return new RequestCurrent()
		}
	}
}

class Request implements IRequest {
	appid = 'c15053e7a024be38ee66e8c9cc995324'
	url = 'https://api.openweathermap.org/data'
	version = 2.5
	call = ECall.CURRENT
	format = new RequestFormat()

	buildEndpoint(query: string): string {
		/** @todo В зависимости от call надо менять передаваемый параметр q */

		return `${this.url}/${this.version}/${this.call}?q=${query}&${this.format.getQuery(this.appid)}`
	}
}

class RequestCurrent extends Request {
	constructor() {
		super()
		this.call = ECall.CURRENT
	}
}
class RequestForecast extends Request {
	constructor() {
		super()
		this.call = ECall.FORECAST
	}
}
class RequestHistory extends Request {
	constructor() {
		super()
		this.call = ECall.HISTORY
	}
}
