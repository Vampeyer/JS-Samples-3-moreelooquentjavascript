// todo.js

const fs = require('fs');
const path = require('path');

// Define the path for the todo file
const todoFilePath = path.join(__dirname, 'todos.json');

// Function to read todos from the file
const readTodos = () => {
  // Check if file exists
  if (!fs.existsSync(todoFilePath)) {
    return [];
  }

  // Read file content
  const data = fs.readFileSync(todoFilePath, 'utf8');

  // Check if the file is empty
  if (data.trim() === '') {
    return [];
  }

  // Parse the JSON data
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return []  ;
  }
};

// Function to write todos to the file
const writeTodos = (todos) => {
  fs.writeFileSync(todoFilePath, JSON.stringify(todos, null, 2));
};


//////////////////////////////////
0

/////////////////////
// Main function to handle command line arguments
const main = () => {
  const args = process.argv.slice(2); // Skip the first two elements

  if (args.length === 0) {
    console.log('Usage: node todo.js <command> [options]');
    console.log('Commands:');
    console.log('  add <task>    Add a new task');
    console.log('  list          List all tasks');
    console.log('  remove <id>   Remove a task by id');
    return;
  }

  const command = args[0];

  switch (command) {
    case 'add':
      const task = args.slice(1).join(' ');
      const todos = readTodos();
      todos.push({ id: todos.length + 1, task });
      writeTodos(todos);
      console.log(`Task added: "${task}"`);
      break;

    case 'list':
      const allTodos = readTodos();
      if (allTodos.length === 0) {
        console.log('No tasks found.');
      } else {
        console.log('Todo List:');
        allTodos.forEach(todo => {
          console.log(`${todo.id}: ${todo.task}`);
        });
      }
      break;

    case 'remove':
      const idToRemove = parseInt(args[1]);
      const todosToRemove = readTodos();
      const updatedTodos = todosToRemove.filter(todo => todo.id !== idToRemove);
      writeTodos(updatedTodos);
      console.log(`Task with id ${idToRemove} removed.`);
      break;

    default:
      console.log('Unknown command. Use "add", "list", or "remove".');
  }
};

// Execute the main function
main();