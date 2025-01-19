// Fetch vs Axios
const axios = require('axios')
async function main() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await response.json();
    console.log("fetch data: ", data);
}

async function main2() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log("Axios Data: ",response.data);
}

main()
main2()

