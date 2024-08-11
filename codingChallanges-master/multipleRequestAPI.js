async function combineData(){
    const [api1, api2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json()),
    ]);

    const completeData ={
        todo : api1,
        post : api2,
    };

    return completeData;
    
}
combineData().then((data) => console.log(data));