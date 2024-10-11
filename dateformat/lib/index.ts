import { anneesLength, formatTrad, heuresLength, jourLength, minutesLength } from "./definition";
import { dateCheck } from "checks";

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

    constructor(lang = "fr", date?:number){
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

    reverse = {

    }

    /**
     * 
     * @returns string
     * @example `Il y a 5 minutes` 
     * @example `Dans 5 heures` 
     */
    Relative = () => {
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
     * @returns string
     * @example `10:03` // French
     * @example `10:03 PM` // English
     */
    shortTime = () => {
        let shorttime = formatTrad[this.lang as keyof typeof formatTrad].shortTime
        return shorttime(this.hour, this.minutes)
    }

   /**
     * 
     * @returns string
     * @example `10:03:54 PM` // English
     * @example `10:03:54` // French
     */
    longTime = () => {
        let longtime = formatTrad[this.lang as keyof typeof formatTrad].longTime
        return longtime(this.hour, this.minutes, this.seconde)
    }

    /**
     * 
     * @returns string
     * @example `10/23/2024` // english 
     * @example `23/10/2024` // french 
     */
    shortDate = () => {
        let shortDate = formatTrad[this.lang as keyof typeof formatTrad].shortDate
        return shortDate(this.day, this.month, this.year)
    }

     /**
     * 
     * @returns string
     * @example `10 april, 2024` // english 
     * @example `10 avril 2024` // french 
     */
    longDate = () => {
        let longDate = formatTrad[this.lang as keyof typeof formatTrad].longDate
        return longDate(this.day, this.month, this.year)
    }

    /**
     * 
     * @returns string
     * @example `28 april, 2024 02:04 PM` // english
     * @example `28 avril 2024 14:04` // french
     */
    shortDateTime = () => {
        let shortDateTime = formatTrad[this.lang as keyof typeof formatTrad].shortDateTime
        return shortDateTime(this.day, this.month, this.year, this.hour, this.minutes)
    }

    /**
     * 
     * @returns string
     * @example `Sunday, 28 april, 2024 02:04 PM` // english
     * @example `Dimanche 28 avril 2024 14:04` // french
     */
    longDateTime = () => {
        let longDateTime = formatTrad[this.lang as keyof typeof formatTrad].longDateTime
        return longDateTime(this.day, this.month, this.year, this.hour, this.minutes, this.dateDay)
    }

    /**
     * 
     * @returns string
     * @example `2024.04.28`
     */
    classified = () => {
        let classified = formatTrad[this.lang as keyof typeof formatTrad].classified
        return classified(this.day, this.month, this.year)
    }
}