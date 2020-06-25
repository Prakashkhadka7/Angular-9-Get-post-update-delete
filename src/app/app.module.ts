import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArmyListComponent } from './army-list/army-list.component';
import { ArmyService } from './services/army.service';
import { BrowserModule } from '@angular/platform-browser';
import { CreateArmyComponent } from './create-army/create-army.component';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UpdateArmyComponent } from './update-army/update-army.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmyListComponent,
    CreateArmyComponent,
    UpdateArmyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArmyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
