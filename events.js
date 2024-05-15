var e=require("events")
var ee=new e.EventEmitter()
ee.emit("SayName") 
ee.on("SayName",()=>{
    console.log("My name is:")
})