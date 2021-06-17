import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = []
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate
  itemPriority
  itemCategory

  constructor(public modalCtrl:ModalController, public todoService:TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

   async add(){
    this.newTaskObj = ({itemName:this.itemName, 
                        itemDueDate:this.itemDueDate, 
                        itemPriority:this.itemPriority,
                        itemCategory:this.categorySelectedCategory})

    console.log(this.newTaskObj);

    let uid = this.itemName + this.itemDueDate;

    if(uid){
      await this.todoService.addTask(uid, this.newTaskObj);
    }
    else{
      console.log("cant save empty task");
    }
    
    this.dismis()  
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.newTaskObj)
  }

}
