import moment from 'moment'

let today = moment()

let future = today.add(1, 'day')

if (future === today) {
    console.log("Etrange, non?")
} else {
    console.log("Le futur est différent du jour même")
}
