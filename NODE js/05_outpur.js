

// const function1 = ()=> console.trace() //For debuggings
// const function2 = ()=> function1()

// function2()



// Progrebar Using

const ProgressBar = require("progress")

const bar = new ProgressBar("Dowloding [:bar] : rate/bps : percent :etas", {
    total: 20

})

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
},100)