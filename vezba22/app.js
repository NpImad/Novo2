const fetchingData = async (broj) => {
    

    // const result = await data.json();
    // console.log(result);
    // const filtered = await result.filter((el) => el.id % 2 === 0);
    // console.log(filtered);
    // let broj = prompt ('unesite broj');
    // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${broj}/comments`);
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments/postId=${broj}`);
    const result = await data.json()
    console.log(result);
}
fetchingData();

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((adlads) => [sad])

// fetchingData().then((el) => console.log(el));