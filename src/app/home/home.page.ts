import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName : 'Codimg',
    itemDueDate: '13-10-21',
    itemPriority: 'High',
    itemCategory : 'Work'
  },
  {
    itemName : 'Design',
    itemDueDate: '28-10-21',
    itemPriority: 'Low',
    itemCategory : 'Work'
  },
  {
    itemName : 'Shopping',
    itemDueDate: '13-10-21',
    itemPriority: 'Middle',
    itemCategory : 'Personal'
  },
  {
    itemName : 'Workout',
    itemDueDate: '13-10-21',
    itemPriority: 'High',
    itemCategory : 'Personal'
  }
]

today: number = Date.now();

  constructor(public modalCtrl:ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

}
