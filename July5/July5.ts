import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed; 

    console.log(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The todo with id: ${id}
    It has a title: ${title}
    Is it completed: ${completed}
    `);
}
