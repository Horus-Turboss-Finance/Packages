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
     * @param method {string} - la méthode (get, post, put, etc)
     * @param protocol {string} - http ou https
     * @param originalUrl {string} - L'url originale de la requête
     * @param params {string} - les paramètres de requête
     * @param body {string} - Le corps de requête
     * @param cookies {string} - les cookies de requête
     * @param headers {string} - l'en tête de requete
     * @param err {Error} - L'erreur actuellement en cause
     */
    UnknowRequestError = async (method : string, protocol : string, originalUrl : string, params : string, body : string, cookies : string, headers : string, err ?: Error) => {
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

                description,
                title, 

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
        setTimeout(() => {this.RoutineLogs()}, 1800000);
    }
}