import { HTTP } from '../http/index'
import { EventBus } from '../event_bus/event_bus'

export default class Api {
  getCountryInfo (country) {
    const requestUrl = `name/${country}`

    return HTTP.get(requestUrl)
  }
}