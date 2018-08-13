import moment from 'moment'

export function humanReadableDate(date, suffix = true, prefix = false) {
    let start = moment(date);
    let end = moment()
    let output = end.from(start, !prefix)

    if (suffix === true)
        output += ' ago'

    return output
}
