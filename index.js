const readline = require('readline-sync');

let tasks = [];

function addTask() {
    const task = readline.question('Enter task: ');
    tasks.push(task);
    console.log('Task added successfully!');
}

function listTasks() {
    console.log('Your Tasks:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function removeTask() {
    const index = parseInt(readline.question('Enter task number to remove: ')) - 1;
    if (!isNaN(index) && index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('Task removed successfully!');
    } else {
        console.log('Invalid task number!');
    }
}

function main() {
    while (true) {
        console.log('\n1. Add Task\n2. List Tasks\n3. Remove Task\n4. Exit');
        const choice = readline.question('Enter your choice: ');
        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                listTasks();
                break;
            case '3':
                removeTask();
                break;
            case '4':
                console.log('Exiting...');
                process.exit(0);
            default:
                console.log('Invalid choice!');
        }
    }
}

main();
