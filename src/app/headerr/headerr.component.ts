import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.css']
})
export class Headerr {
  title = 'headerr';
  action_request: boolean | undefined;
  action_main: boolean | undefined;
  add:boolean=true
  @Input() addd:any

  constructor(public router: Router) {}
  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.action_request = false;
      this.action_main = true;
      // this.router.navigateByUrl('');
    } else if (localStorage.getItem('token')) {
      this.action_request = true;
    }
  }

  signout() {
    localStorage.clear();
  }
  showmore()
  {
    if(this.add)
    { this.add=false}
    else{
      this.add=true
    }
  }
  homepage()
  {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('');
    } else if (localStorage.getItem('token')) {
      this.router.navigateByUrl('homepage');
    }
  }
  account = [
      {
        name: 'Thien V. Thai',
        email: 'vanthiendiendien@gmail.com',
        img: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/314711271_1773655676332860_5993930688468759077_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=r2b25dKToZYAX95cWGl&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAHGb581wUDTkS4Yp909fS8FLe1qAjNAXoeP3H9bYrvig&oe=645CF3A1'
      }
    ];
}
