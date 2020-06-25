import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ArmyService } from '../services/army.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-army',
  templateUrl: './create-army.component.html',
  styleUrls: ['./create-army.component.css']
})
export class CreateArmyComponent implements OnInit {
armyForm: FormGroup;
// armyArr: any=[];
  constructor( public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public armyService: ArmyService) { }

  ngOnInit() {
    this.createArmy()
  }

 private createArmy(){
    this.armyForm = this.fb.group({
     id : [''],
     army_name : [''],
     army_details : ['']

    })
  }
  submitForm(){
    this.armyService.createArmy(this.armyForm.value).subscribe(res =>{
      console.log('Army Create')
      this.ngZone.run(() => this.router.navigateByUrl('/list'))
    });
  }

}
