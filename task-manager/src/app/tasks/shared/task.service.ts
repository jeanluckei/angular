import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  listAll(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  register(task: Task): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(id: number): Task {
    const tasks: Task[] = this.listAll();
    return tasks.find(t => t.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  remove(id: number): void {
    let tasks: Task[] = this.listAll();
    tasks = tasks.filter(t => t.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

}
