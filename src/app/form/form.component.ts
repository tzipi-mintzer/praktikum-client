import { Component, OnDestroy, OnInit } from '@angular/core';
import Child from 'src/models/Child';
import User from 'src/models/User';
import ChildService from 'src/services/childService.services';
import { ExcelService } from 'src/services/excel.service';
import FormService from 'src/services/formService.services';
import UserService from 'src/services/userService.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  myUser: User = new User(0, "", "", "", new Date(), 0, 0);
  today = new Date().toLocaleDateString();
  myChild: Child = new Child(0, "", new Date(), "", 0);

  myChildren: Child[] = [];
  data = [];
  constructor(public userService: UserService, public childservice: ChildService, public formService: FormService, private excelService: ExcelService) { }
  ngOnDestroy(): void {
    this.formService.saveChanges(this.myUser, this.myChild, this.myChildren);
  }
  save(f) {
    this.myUser.Gender = (Number)(this.myUser.Gender);
    this.myUser.HMO = (Number)(this.myUser.HMO);

    this.userService.addUser(this.myUser).subscribe(succ => {
      this.myUser = succ;
      console.log(this.myUser);
      this.data.push(this.myUser);
      for (let i = 0; i < this.myChildren.length; i++) {
        this.myChildren[i].ParentId = this.myUser.id;
        this.childservice.addChild(this.myChildren[i]).subscribe(succ => {
          this.myChildren[i] = succ;
          console.log(this.myChildren[i])
        });
      }
      for (let i = 0; i < this.myChildren.length; i++) {
        this.data.push(this.myChildren[i]);
      }
      this.excelService.exportAsExcelFile(this.data, 'form-details');
      f.reset();
    });
  }
  addChild(child) {
    this.myChildren.push(this.myChild);
    console.log(this.myChild)

    this.myChild = new Child(0, "", new Date(), "", 0);
    child.reset();
  }
  ngOnInit(): void {
    this.myUser = this.formService.user;
    this.myChild = this.formService.child;
    this.myChildren = this.formService.children;
  }
  isValidIsraeliID(identity) {
    let id = String(identity).trim();
    if (id.length > 9 || id.length < 5 || isNaN(identity)) return false;
    id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
    return Array
      .from(id, Number)
      .reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) % 10 === 0;
  }
}
