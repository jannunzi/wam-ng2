import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProfileService} from "../shared/profile.service";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
