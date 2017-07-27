class Task {
    constructor(title, deadline) {

        this.title = title;
        this.deadline = new Date(deadline);
        if (this.deadline) {

        }
        this.status = this.isOverdue();

        this.icon = '';

    }

    isOverdue() {
        if (this.deadline.getTime() > Date.now()) {
            this.status = 'Open';
            return '';
        }
        this.status = 'Overdue';
        return '';
    }

    static comparator(a, b) {
        if (a.isOverdue && b.isOverdue || a.status === b.status) {
            return b.deadline - b.deadline;
        }


        if (a.isOverdue && b.isOverdue) {
            console.log(a.isOverdue());
            console.log(b.isOverdue());
            return -1;
        }

        if (a.status !== 'In Progress' && b.status === 'In Progress') {
            return -1;
        }
        if (a.status === 'In Progress' && b.status !== 'In Progress') {
            return 1;
        }

        if (a.status !== 'Open' && b.status === 'Open') {
            return -1;
        }
        if (a.status === 'Open' && b.status !== 'Open') {
            return 1;
        }
        if (a.status !== 'Complete' && b.status === 'Complete') {
            return -1;
        }
        if (a.status === 'Complete' && b.status !== 'Complete') {
            return 1;
        }

    }

    toString() {
        if (this.status === 'Overdue') {
            this.icon = "\u26A0";
            return `[${this.icon}] ${this.title} (overdue)`;
        }
        else if (this.status === 'Complete') {
            this.icon = "\u2714";
            return `[${this.icon}] ${this.title}`;
        }
        else if (this.status === 'Open') {
            this.icon = "\u2731";
            return `[${this.icon}] ${this.title} (deadline: ${this.deadline}`;
        }
        else if (this.status === 'In Progress') {
            this.icon = "\u219D";
            return `[${this.icon}] ${this.title} (deadline: ${this.deadline}`;
        }
        else if (this.status === 'Overdue') {
            this.icon = "\u26A0";
            return `[${this.icon}] ${this.title} (overdue)`;
        }
    }

}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
console.log(task4.isOverdue());
let task5 = new Task('Task 5', new Date());
let task6 = new Task('Task 6', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5, task6];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
task1.deadline = new Date(2005, '4', '20');

