import { minWidthIntegerContraint, dateCheck } from "../utils/utils"

//-----------------------------------//
//-                                 -//
//-        DEFINITION PART          -//
//-                                 -//
//-----------------------------------//

let anneesLength = 365.24219
let minutesLength = 60000
let heuresLength = 60
let jourLength = 24
let formatTrad = {
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
            return `${minWidthIntegerContraint(day + 1, 2)}/${minWidthIntegerContraint(month + 1, 2)}/${year}`
        },
        longDate : (day : number, month : number, year : number) => {
            return `${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.fr.ListMois[month]} ${year}`
        },
        shortDateTime : (day : number, month : number, year : number, hour : number, minute : number) => {
            return `${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.fr.ListMois[month]} ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}`
        },
        longDateTime : (day : number, month : number, year : number, hour : number, minute : number, dateDay : number) => {
             return `${formatTrad.fr.ListWeek[dateDay]}, ${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.fr.ListMois[month]} ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)}`
        },
        classified : (day : number, month : number, year : number) => {
            return `${year}.${minWidthIntegerContraint(month + 1, 2)}.${minWidthIntegerContraint(day + 1, 2)}`
        },
        monthOnly : (month : number, year : number) => {
            return `${minWidthIntegerContraint(month + 1, 2)}/${year}`
        }
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
            return `${minWidthIntegerContraint(month + 1, 2)}/${minWidthIntegerContraint(day + 1, 2)}/${year}`
        },
        longDate : (day : number, month : number, year : number) => {
            return `${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.en.ListMois[month]}, ${year}`
        },
        shortDateTime : (day : number, month : number, year : number, hour : number, minute : number) => {
            if(hour > 12) return `${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour - 12, 2)}:${minWidthIntegerContraint(minute, 2)} PM`
            return `${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)} AM`
        },
        longDateTime : (day : number, month : number, year : number, hour : number, minute : number, dateDay : number) => {
            if(hour > 12) return `${formatTrad.en.ListWeek[dateDay]}, ${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour - 12, 2)}:${minWidthIntegerContraint(minute, 2)} PM`
            return `${formatTrad.en.ListWeek[dateDay]}, ${minWidthIntegerContraint(day + 1, 2)} ${formatTrad.en.ListMois[month]}, ${year} ${minWidthIntegerContraint(hour, 2)}:${minWidthIntegerContraint(minute, 2)} AM`
        },
        classified : (day : number, month : number, year : number) => {
            return `${year}.${minWidthIntegerContraint(month + 1, 2)}.${minWidthIntegerContraint(day, 2)}`
        },
        monthOnly : (month : number, year : number) => {
            return `${minWidthIntegerContraint(month + 1, 2)}/${year}`
        }
    }
}

//-----------------------------------//


export class Timepiece {
    private lang : string 
    private now : number
    private day : number
    private time : number
    private year : number
    private hour : number
    private month : number
    private minutes : number
    private seconde : number
    private dateDay : number

    constructor(date?:number, lang = "fr"){
        if(!date) date = Date.now()
        if(!dateCheck(date)) throw new Error("DateSelector must be number")

        this.lang = lang

        this.now = Date.now()
        this.time = new Date(date).getTime()

        this.minutes = new Date(date).getMinutes()
        this.seconde = new Date(date).getSeconds()
        this.year = new Date(date).getFullYear()
        this.month = new Date(date).getMonth()
        this.dateDay = new Date(date).getDay()
        this.hour = new Date(date).getHours()
        this.day = new Date(date).getDate()
    }

    /**
     * 
     * @returns {string}
     * @example `Il y a 5 minutes` 
     * @example `Dans 5 heures` 
     */
    Relative = () : string => {
        let diff = this.now - this.time
        let relative = formatTrad[this.lang as keyof typeof formatTrad].relative
        let response, comming
        if(diff > 0){
            comming = relative.commingBefore
            response = relative.before
        }else{
            response = relative.after
            comming = relative.commingAfter
            diff = this.time - this.now
        }

        let end = ""
        let val = 0

        let sEnd = (v : number) => (v > 1 ? "s" : "")

        if(diff > minutesLength*heuresLength*jourLength*anneesLength){
            val = Math.floor(diff / (minutesLength*heuresLength*jourLength*anneesLength))
            end = "an" + sEnd(val)
        }else if(diff > minutesLength*heuresLength*jourLength*anneesLength/12){
            val = Math.floor(diff / (minutesLength*heuresLength*jourLength*anneesLength/12))
            end = "mois";
        }else if(diff > minutesLength*heuresLength*jourLength){
            val = Math.floor(diff / (minutesLength*heuresLength*jourLength)) 
            end = "jour" + sEnd(val)
        }else if(diff > minutesLength*heuresLength){
            val = Math.floor(diff / (minutesLength*heuresLength))
            end = "heure" + sEnd(val)
        }else if(diff > minutesLength){
            val = Math.floor(diff / (minutesLength))
            end = "minute" + sEnd(val)
        }else{
            return comming
        }

        return response(val, end)
    }

    /**
     * 
     * @returns {string}
     * @example `10:03` // French
     * @example `10:03 PM` // English
     */
    shortTime = () : string => {
        let shorttime = formatTrad[this.lang as keyof typeof formatTrad].shortTime
        return shorttime(this.hour, this.minutes)
    }

   /**
     * 
     * @returns {string}
     * @example `10:03:54 PM` // English
     * @example `10:03:54` // French
     */
    longTime = () : string => {
        let longtime = formatTrad[this.lang as keyof typeof formatTrad].longTime
        return longtime(this.hour, this.minutes, this.seconde)
    }

    /**
     * 
     * @returns {string}
     * @example `10/23/2024` // english 
     * @example `23/10/2024` // french 
     */
    shortDate = () : string => {
        let shortDate = formatTrad[this.lang as keyof typeof formatTrad].shortDate
        return shortDate(this.day, this.month, this.year)
    }

     /**
     * 
     * @returns {string}
     * @example `10 april, 2024` // english 
     * @example `10 avril 2024` // french 
     */
    longDate = () : string => {
        let longDate = formatTrad[this.lang as keyof typeof formatTrad].longDate
        return longDate(this.day, this.month, this.year)
    }

    /**
     * 
     * @returns {string}
     * @example `28 april, 2024 02:04 PM` // english
     * @example `28 avril 2024 14:04` // french
     */
    shortDateTime = () : string => {
        let shortDateTime = formatTrad[this.lang as keyof typeof formatTrad].shortDateTime
        return shortDateTime(this.day, this.month, this.year, this.hour, this.minutes)
    }

    /**
     * 
     * @returns {string}
     * @example `Sunday, 28 april, 2024 02:04 PM` // english
     * @example `Dimanche 28 avril 2024 14:04` // french
     */
    longDateTime = () : string => {
        let longDateTime = formatTrad[this.lang as keyof typeof formatTrad].longDateTime
        return longDateTime(this.day, this.month, this.year, this.hour, this.minutes, this.dateDay)
    }

    /**
     * 
     * @returns {string}
     * @example `2024.04.28`
     */
    classified = () : string => {
        let classified = formatTrad[this.lang as keyof typeof formatTrad].classified
        return classified(this.day, this.month, this.year)
    }

    /**
     * @returns {string}
     * @example `01/2024`
     */
    monthOnly = () : string => {
        let monthOnly = formatTrad[this.lang as keyof typeof formatTrad].monthOnly
        return monthOnly(this.month, this.year)
    }
}