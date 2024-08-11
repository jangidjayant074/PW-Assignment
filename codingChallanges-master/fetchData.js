async function data(){
    const response = await fetch( "https://jsonplaceholder.typicode.com/todos/1");
    const dataFetched = await response.json();
    console.log(dataFetched);
}
data();