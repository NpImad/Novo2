// 
const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then(json => {
          console.log(json);
          return json.filter((el) => el.id % 2 === 0);
          })
          .then((filteredArray) => {
            console.log(filteredArray);
            return filteredArray.filter((el) => el.completed);

          })
          .then((completedTodos) => console.log(completedTodos));
    }
    
    fetchData();