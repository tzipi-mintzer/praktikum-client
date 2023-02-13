import { Injectable } from '@angular/core';
import Child from 'src/models/Child';
import User from 'src/models/User';
@Injectable({
    providedIn: 'root'
})
export default class FormService {
    user: User = new User( 0,"", "", "", new Date(), 0,0);
    child: Child = new Child(0, "", new Date(), "", 0);
    children: Child[] = [];
    saveChanges(user, child, children) {
        this.user = user;
        this.child = child;
        this.children = children;
    }
}