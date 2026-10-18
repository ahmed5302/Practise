export class Logger{
    constructor(private enable : boolean){}

    log(){
        if(this.enable){
            console.log("Logging is enabled");
        }
    }
}

