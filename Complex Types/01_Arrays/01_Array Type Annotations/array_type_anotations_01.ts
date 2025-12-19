// ==============================
// TYPESCRIPT PRACTICE — ARRAY TYPE ANNOTATIONS
// ==============================
//
// SCENARIO:
// You are building a simple task management feature.
// Each task has a title, a completion status, and a priority.
//
// TASK 1: BASIC ARRAY TYPE
// ------------------------
// 1. Create an array called taskTitles
// 2. It should only contain strings
// 3. Initialize it with at least three task titles

let taskTitles: string[] = ["make report", "complete checks", "clean up"];

// TASK 2: ARRAY OF OBJECTS
// ------------------------
// 1. Create an array called tasks
// 2. Each element should be an object with:
//    - title: string
//    - completed: boolean
//    - priority: number
// 3. Initialize the array with at least two tasks

let tasks: { title: string, completed: boolean, priority: number }[] = [
    {
        title: taskTitles[0],
        completed: false,
        priority: 0
    },
    {
        title: taskTitles[1],
        completed: true,
        priority: 1
    }
];

// TASK 3: ADDING ITEMS SAFELY
// ---------------------------
// Scenario:
// You want to add a new task to the tasks array.
//
// 1. Use push to add a new task
// 2. The new task must match the required object shape
// 3. TypeScript should reject any task with missing or extra properties

let newTask: { title: string, completed: boolean, priority: number } =
{
    title: taskTitles[2],
    completed: false,
    priority: 2
};

tasks.push(newTask);

// TASK 4: READ-ONLY ARRAY
// -----------------------
// Scenario:
// Some arrays should not be modified after creation.
//
// 1. Create a read-only array called completedTaskTitles
// 2. It should only contain strings
// 3. Attempting to push a new value should cause a TypeScript error

let completedTaskTitles: readonly string[] = [
    "completed-task-title-1",
    "completed-task-title-2",
    "completed-task-title-3"
];

// TASK 5: ARRAY TRANSFORMATION
// ----------------------------
// Scenario:
// You want to extract data from the tasks array.
//
// 1. Create a new array called completedTasks
// 2. It should contain only tasks where completed is true
// 3. Ensure the resulting array is correctly typed


let completedTasks: { title: string; completed: boolean; priority: number }[] =
    tasks.filter(task => task.completed);

