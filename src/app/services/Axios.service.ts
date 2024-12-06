import { config } from "rxjs"
import http  from "../app.axios"

export class AxiosHandler {
    tableName!:String
    http = http
    constructor(tableName:string) {
        this.tableName = tableName
    }
    getAll(_callback=(data:any)=>{}) {
        http.get("/"+this.tableName)
            .then((res)=>{
                _callback(res.data)
            })
            .catch((error) => {
                console.log(error)
            }) 
    }
    getOne(id:number,_callback=(data: any)=>{}){
        http.get("/"+this.tableName+"/"+id,)
            .then((res)=>{
                _callback(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    hydrate(obj:any){
        let id = obj.id | obj.idart 
        this.getOne(id , (data)=>{
            obj = data[0]
        })
        
    }

    getOneWith(assoc: any,_callback=(data: any)=>{}){
        http.post("/"+this.tableName+"_with",assoc)
            .then((res)=>{
                console.log(res.data)
                _callback(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getCount(_callback=((data: any)=>{})){
        http.get("/count/"+this.tableName)
            .then((res)=>{
                _callback(res.data["count"])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    create(data:any,_callback=(res: any)=>{}, _catch=(res: any)=>{}) {
        http.put("/"+this.tableName,data)
            .then((res) => {
                _callback(res)
            })
            .catch((error) => {_catch(error);})
    }

    update(data:any,_callback=(res: any)=>{}) {
        http.put("/"+this.tableName+"/"+(data.id | data.idart),data)
            .then((res)=>{
                _callback(res)
            })
            .catch((error) => {console.log(error)})
    }

    delete(id:number,_callback=(res: any)=>{}) {
        http.delete("/"+this.tableName+"/"+id)
            .then((res)=> {
                _callback(res)
            })
            .catch((error)=>{console.log(error)})
    }

    tabs_to_assoc(keys=[], datas=[]){
        const assoc: never[] = []
        for(let i=0, c=keys.length; i<c ; i++) {
            assoc[keys[i]] = datas[i]  
        }
        return assoc
    }

    search(_callback=(res: any)=>{}, columns: any, keys: any, start=-1, limit=-1) {
        let data = {
            columns,
            keys,
            start,
            limit
        }
        http.post("/"+this.tableName+"/search",data)
            .then((res)=>{
                _callback(res)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
}
