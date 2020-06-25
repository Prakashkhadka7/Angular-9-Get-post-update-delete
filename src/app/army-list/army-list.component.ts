import { Component, OnInit } from '@angular/core';

import { ArmyService } from '../services/army.service';

@Component({
  selector: 'app-army-list',
  templateUrl: './army-list.component.html',
  styleUrls: ['./army-list.component.css']
})
export class ArmyListComponent implements OnInit {
  armyList: any = [];


  constructor(public armyService : ArmyService) { }

  ngOnInit() {
    this.loadArmy();
  }

  //function for loading army detailed-list in the page
  loadArmy(){
    return this.armyService.getArmies().subscribe((data :{}) => {
      this.armyList = data;

    })
  }

  //For deleting army from the table-list
  deleteArm(data){
    var index = index = this.armyList.map(x => {return x.army_name}).indexOf(data.army_name);
    return  this.armyService.deleteArmy(data.id).subscribe(res => {
      this.armyList.splice(index, 1)
      console.log('Army Deleted')
    })

  }

}
