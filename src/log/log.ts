import * as fs from "fs";
import axios from "axios";
import { Timepiece } from '../date/date';
import { env } from "../params/params"

/*
    log inter service
*/
export class log {
    private service : string
    private pathLog : string
    private infoServ : Array<string>
    private errorServices : number

    constructor (CE_Service : string, pathLog : string ) {
        this.service = CE_Service
        this.pathLog = pathLog

        this.errorServices = 0

        this.infoServ = []

        this.RoutineLogs()
    }

    /**
     * Cette méthode permet de logguer en tâche de fond l'erreur
     * @param req {any} - requete
     * @param err {Error} - L'erreur actuellement en cause
     */
    UnknowRequestError = async (req : any, err ?: Error) => {
        let method = req.method, protocol = req.protocol, originalUrl = req.originalUrl, params = JSON.stringify(req.params), body = JSON.stringify(req.body), cookies = JSON.stringify(req.cookies), headers = JSON.stringify(req.headers)
        let title = "UnknowError :"
        let description = "No error params provided"
        if(err){
            title = err.name
            description = err.message
        }

        axios.post(env.WEBHOOK_ERROR_FOR_DISCORD, {
            embeds: [{
                color : 984148,

                title : `[WARNING ERROR - ${this.service}]`,
                fields : [
                    {
                        name : "Methods",
                        value : `${method} - ${protocol}:${originalUrl}`
                    },{
                        name : "Params",
                        value : `${params}`
                    },{
                        name : "Body",
                        value : `${body}`
                    },{
                        name : "Cookies",
                        value : `${cookies}`
                    },{
                        name : "Header",
                        value : `${headers}`
                    }
                ]
            },{
                timestamp: new Date().toISOString(),
                color : 984148,

                description : description?.toString(),
                title : title?.toString(), 

                footer : {
                    text : 'Unknow request err'
                }
            }]
        })
        .catch((error) => {});

        this.errorServices ++
    }

    UnknowAppError = async (service : string, err ?: Error) => {
        let title = "UnknowError :"
        let description = "No error params provided"
        if(err){
            title = err.name
            description = "Error Message : " + err.message + '\nService : ' + service
        }

        axios.post(env.WEBHOOK_ERROR_FOR_DISCORD, {
            embeds: [{
                timestamp: new Date().toISOString(),
                color : 984148,

                description,
                title,

                footer : {
                    text : `Unknow app err - ${this.service}`
                }
            }]
        })
        .catch((error) => {});

        this.errorServices ++
    }

    /**
     * Log du service
     * @param service {string} - Le titre du service
     * @param info {string} - L'information à partager de ce service
     */
    ServiceInfo = async (service : string, info : string) => {
        this.infoServ.push(`[INFO] ${new Timepiece().longTime()} - ${service} : ${info}`)
    }

    private RoutineLogs = () => {
        if(this.infoServ[0] !== undefined){
            let today = new Timepiece().shortDate()
            const arrToday = today.split('/')
            today = arrToday.reverse().join('.')

            const todayFileName = `${today}.log`

            let fileContent = {
                author : {
                    service : this.service
                },
                hour : new Timepiece().shortTime(),
                errorReport : this.errorServices,
                ServiceInformation : this.infoServ
            }

            fs.writeFile(`${this.pathLog}/${todayFileName}`, JSON.stringify(fileContent) + ",\n", {flag : "a"}, (erro)=>{
                if(erro) console.log(erro)
            })

            this.errorServices = 0
            
            this.infoServ = []
        }

        // Routines toutes les 30 mins
        setTimeout(() => {this.RoutineLogs()}, 60000);
    }
}