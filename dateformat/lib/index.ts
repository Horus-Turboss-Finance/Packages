import { anneesLength, formatSelector, heuresLength, jourLength, ListMois, ListWeek, minutesLength } from "./definition";
import { minWidthIntegerContraint } from "constraint";
import { dateCheck } from "checks";

/**
 * Retourne une chaine modifié de la date entré (en fonction du format)
 * @param {number} [DateSelector] 
 * @param {string} format 
 * 
 * @example
 * // Il y a quelques instant
 * DateFormator(formatSelector.relative)
 * @example
 * // 15:08
 * DateFormator(formatSelector.shortTime)
 * @example
 * // 15:08:32
 * DateFormator(formatSelector.longTime)
 * @example
 * // 28/07/2024
 * DateFormator(formatSelector.shortDate)
 * @example
 * // 28 Juillet 2024
 * DateFormator(formatSelector.longDate)
 * @example
 * // 28 Juillet 2024 à 15:08
 * DateFormator(formatSelector.dateWithTime)
 * @example
 * // Dimanche, 28 Juillet 2024 à 15:08
 * DateFormator(formatSelector.dateWithTimeAndDay)
 * @returns {string}
 */
export function DateFormator (format : string, DateSelector?: number) {
    if(!DateSelector) DateSelector = Date.now()
    if(!dateCheck(DateSelector)) throw new Error("DateSelector must be number")

    let minutesDate = new Date(DateSelector).getMinutes()
    let secondDate = new Date(DateSelector).getSeconds()
    let yearDate = new Date(DateSelector).getFullYear()
    let dayMountDate = new Date(DateSelector).getDate()
    let mountDate = new Date(DateSelector).getMonth()
    let dayWeekDate = new Date(DateSelector).getDay()
    let hoursDate = new Date(DateSelector).getHours()
    let time = new Date(DateSelector).getTime()

    let now = Date.now()

    let defaultTime = `${minWidthIntegerContraint(hoursDate, 2)}:${minWidthIntegerContraint(minutesDate, 2)}`
    let defaultDate = `${dayMountDate} ${ListMois[mountDate]} ${yearDate}`

    let res
    switch (format) {
        case formatSelector.relative :
            let diff = now - time
            if(diff > 0){
                res = 'Il y a '
                diff = diff
            }else{
                res = 'Dans '
                diff = time - now
            }
            
            let end = ""
            let val = 0

            let sEnd = (v : number) => (v > 1 ? "s" : "")

            if(diff > minutesLength*heuresLength*jourLength*anneesLength){
                val = Math.floor(diff / (minutesLength*heuresLength*jourLength*anneesLength))
                end = " an" + sEnd(val)
            }else if(diff > minutesLength*heuresLength*jourLength*anneesLength/12){
                val = Math.floor(diff / (minutesLength*heuresLength*jourLength*anneesLength/12))
                end = " mois";
            }else if(diff > minutesLength*heuresLength*jourLength){
                val = Math.floor(diff / (minutesLength*heuresLength*jourLength)) 
                end = " jour" + sEnd(val)
            }else if(diff > minutesLength*heuresLength){
                val = Math.floor(diff / (minutesLength*heuresLength))
                end = " heure" + sEnd(val)
            }else if(diff > minutesLength){
                val = Math.floor(diff / (minutesLength))
                end = " minute" + sEnd(val)
            }else{
                end = "quelques instants"
            }
            
            res += `${(val == 0)? '' : val} ${end}`
            
            break;
        case formatSelector.shortTime:            
            res = defaultTime;
            break;
        case formatSelector.longTime:
            res = `${defaultTime}:${minWidthIntegerContraint(secondDate, 2)}`;
            break;
        case formatSelector.shortDate:
            res = `${minWidthIntegerContraint(dayMountDate, 2)}/${minWidthIntegerContraint(mountDate, 2)}/${minWidthIntegerContraint(yearDate, 2)}`
            break;
        case formatSelector.longDate:
            res = defaultDate
            break;
        case formatSelector.dateWithTime:
            res = `${defaultDate} à ${defaultTime}`
            break;
        case formatSelector.dateWithTimeAndDay:
            res = `${ListWeek[dayWeekDate]} ${defaultDate} à ${defaultTime}`
            break;
        default:
            throw new Error("Format must be a formatSelector");
    }

    return res
}

export { formatSelector } from "./definition";