import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data;

  const id = todo.id;
  const title = todo.title;
  const complete = todo.completed;

  console.log(`
Todo id :${id}
Todo name : ${title}
Todo complete :${complete}
`);
});
