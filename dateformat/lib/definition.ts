import { minWidthIntegerContraint } from "constraint"

export let formatSelector = {
    relative : "RELATIVE",
    shortTime : "SHORT_TIME",
    longTime : "LONG_TIME",
    shortDate : "SHORT_DATE",
    longDate : "LONG_DATE",
    dateWithTime : "DATE_WITH_TIME",
    dateWithTimeAndDay : "DATE_WITH_TIME_AND_DAY"
}

export let formatTrad = {
    fr : {
        ListMois : [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre"
        ],
        ListWeek : [
            'Lundi',
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
            "Dimanche"
        ],
        relative : {
            before : (time : number, type : string) => {
                return `Il y a ${time} ${type}`
            },
            after : (time : number, type : string) => {
                return `Dans ${time} ${type}`
            },
            commingBefore : "Dans quelques instants",
            commingAfter : "Il y a quelques instants"
        },
        shortTime : (hour : number, minute : number) => {
            return `${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}`
        },
        longTime : (hour : number, minute : number, seconde : number) => {
            return `${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}:${minWidthIntegerContraint(seconde, 2)}`
        },
        shortDate : (day : number, month : number, year : number) => {
            return `${minWidthIntegerContraint(day, 2)}/${minWidthIntegerContraint(month + 1, 2)}/${year}`
        },
        longDate : (day : number, month : number, year : number) => {
            return `${minWidthIntegerContraint(day, 2)} ${formatTrad.fr.ListMois[month]} ${year}`
        },
        shortDateTime : (day : number, month : number, year : number, hour : number, minute : number) => {
            return `${minWidthIntegerContraint(day, 2)} ${formatTrad.fr.ListMois[month]} ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}`
        },
        longDateTime : (day : number, month : number, year : number, hour : number, minute : number, dateDay : number) => {
             return `${formatTrad.fr.ListWeek[dateDay]}, ${minWidthIntegerContraint(day, 2)} ${formatTrad.fr.ListMois[month]} ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}`
        },
        classified : (day : number, month : number, year : number) => {
            return `${year}.${minWidthIntegerContraint(month, 2)}.${minWidthIntegerContraint(day, 2)}`
        },
    }, en : {
        ListMois : [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        ListWeek : [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ], 
        relative : {
            before : (time : number, type : string) => {
                return `In ${time} ${type}`
            },
            after : (time : number, type : string) => {
                return `${time} ${type} ago`
            },
            commingBefore : "In a few moments",
            commingAfter : "A few moments ago"
        },
        shortTime : (hour : number, minute : number) => {
            if(hour > 12) return `${minWidthIntegerContraint(hour - 12, 2)}:${minWidthIntegerContraint(minute, 2)} PM`
            return `${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)} AM`
        },
        longTime : (hour : number, minute : number, seconde : number) => {
            if(hour > 12) return `${minWidthIntegerContraint(hour - 12, 2)}:${minWidthIntegerContraint(minute, 2)}:${minWidthIntegerContraint(seconde, 2)} PM`
            return `${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}:${minWidthIntegerContraint(seconde, 2)} AM`
        },
        shortDate : (day : number, month : number, year : number) => {
            return `${minWidthIntegerContraint(month + 1, 2)}/${minWidthIntegerContraint(day, 2)}/${year}`
        },
        longDate : (day : number, month : number, year : number) => {
            return `${minWidthIntegerContraint(day, 2)} ${formatTrad.en.ListMois[month]}, ${year}`
        },
        shortDateTime : (day : number, month : number, year : number, hour : number, minute : number) => {
            if(hour > 12) return `${minWidthIntegerContraint(day, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour - 12, 2)}:${minWidthIntegerContraint(minute, 2)} PM`
            return `${minWidthIntegerContraint(day, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)} AM`
        },
        longDateTime : (day : number, month : number, year : number, hour : number, minute : number, dateDay : number) => {
            if(hour > 12) return `${formatTrad.en.ListWeek[dateDay]}, ${minWidthIntegerContraint(day, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour - 12, 2)}:${minWidthIntegerContraint(minute, 2)} PM`
            return `${formatTrad.en.ListWeek[dateDay]}, ${minWidthIntegerContraint(day, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)} AM`
        },
        classified : (day : number, month : number, year : number) => {
            return `${year}.${minWidthIntegerContraint(month, 2)}.${minWidthIntegerContraint(day, 2)}`
        },
    }
}

export let minutesLength = 60000
export let heuresLength = 60
export let jourLength = 24
export let anneesLength = 365.24219