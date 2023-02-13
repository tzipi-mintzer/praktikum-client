import { Component, OnInit } from '@angular/core';
import User from 'src/models/User';
import FormService from 'src/services/formService.services';

@Component({
  selector: 'app-form-instructions',
  templateUrl: './form-instructions.component.html',
  styleUrls: ['./form-instructions.component.scss']
})
export class FormInstructionsComponent implements OnInit {
  constructor(public formService: FormService) { }

  myUser: User = new User(0,"", "", "", new Date(), 0, 0);
  ngOnInit(): void {
    this.myUser = this.formService.user;
  }
}
