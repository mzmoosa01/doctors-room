import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ui-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  personalDetails: FormGroup;
  @Input() personalDetailsHeading: string = "Personal details";

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    IdNumber: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    contactNum: ['', Validators.required],    
    })
  }
  // address: this.formBuilder.group({
  //   street: ['', Validators.required],
  //   city: ['', Validators.required],
  //   province: ['', Validators.required],
  //   postalCode: ['', Validators.required],
  // }),
}
