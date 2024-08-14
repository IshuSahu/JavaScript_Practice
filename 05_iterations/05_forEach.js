const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){  // take a call back function
    // console.log(val);
} )
    
// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// IMPPPPPPPPPPPPPPPPPPPPPPPP
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr); //js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ] for all
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )


const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

map.forEach((Item)=>{ 
    console.log(Item) // return value not key
})