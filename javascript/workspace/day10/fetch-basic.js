// https://jsonplaceholder.typicode.com
fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then(console.log);

