import * as dayjs from 'dayjs'

var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

export function transformDate(date, dateFormat) {
  var string = dateFormat.replace('dd', 'DD')
  string = string.replace('yyyy', 'YYYY')
  string = string.replace('EEEE', 'dddd')
  string = string.replace('EEE', 'ddd')
  string = string.replace('E', 'ddd')
  string = string.replace('do', 'Do')

  return dayjs(date).format(string);
}