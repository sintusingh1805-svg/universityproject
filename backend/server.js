import { app } from "./src/app.js";

import { config_ENV } from "./src/config/configenv.js";

const startserver=()=>{
    try{
        app.listen(process.env.PORT,()=>{
            console.log(`server running on port http://localhost:${process.env.PORT}`);
            
        });
    }catch(error){
        console.log("server was not running");
        process.exit(1);
    }
}

startserver();