import { ActivatedRoute, Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ArmyService } from '../services/army.service';
import { Army } from '../services/army';

@Component({
  selector: 'app-update-army',
  templateUrl: './update-army.component.html',
  styleUrls: ['./update-army.component.css']
})
export class UpdateArmyComponent implements OnInit {
armyupdateForm: FormGroup;
armyList: any = [];
armyinfo: Army;

  constructor(private fb: FormBuilder,
              private actRoute: ActivatedRoute,
              public armyService: ArmyService,
              private ngZone: NgZone,
              private router: Router) {
    //   let id = this.actRoute.snapshot.paramMap.get('id');
    //   this.armyService.getArmy(id).subscribe((data) => {
    //   this.armyupdateForm = this.fb.group({
    //    army_name: [data.army_name],
    //   army_details: [data.army_details]
    //   });
    // });
  }

  ngOnInit() {
    this.getArmy(this.fetchItemIdUrl());

    // this.updateForm();
  }
 fetchItemIdUrl() {
    return this.actRoute.snapshot.params['id'];
  }

  getArmy(id: number) {
    return this.armyService.getArmy(id)
      .subscribe(data => {
        this.armyinfo = data;
        console.log(data);
        this.updateForm();
      });
  }
updateForm(): void {
  this.armyupdateForm = this.fb.group({
   army_name : [this.armyinfo.army_name ,Validators.required],
   army_details : [this.armyinfo.army_details]

  });
}

submitForm() {
  // let id = this.actRoute.snapshot.paramMap.get('id');
  this.armyService.updateArmy(this.fetchItemIdUrl() , this.armyupdateForm.value).subscribe(res => {
    this.ngZone.run(() => this.router.navigateByUrl('/list'));
  });

}

}
