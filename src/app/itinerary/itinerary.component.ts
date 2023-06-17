
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class Itinerary {
  title = 'weather';
  thien: any = [];
  thienn: any = [];
  add: boolean = false;
  hih: boolean = false;
  zoom: boolean = false;
  siderbar:boolean = false;
  list:boolean = false;
  place:boolean=false
  index=0
  trip=this.d.itinerary
  color:boolean=false
  color0:boolean=false
  color1:boolean=false
  color2:boolean=false
  editt:boolean=true
  mapp:boolean=true
  dataFromParent:any

  constructor(public router: Router, private d:DataService) {}
  locations = this.d.location
  location=this.locations[this.index]

  ngOnInit() {
    for(let j =0;j<this.locations[0].route.length;j++) {
      if(!this.locations[0].route[j].description.rating)
      {
        this.locations[0].route[j].description.rating=5
      }
      this.thienn.push(100 - (this.locations[0].route[j].description.rating / 5) * 100+30);
      console.log(this.thienn)
    }

    for (let i = 0; i < this.locations.length-1; i++) {
      this.thien.push('Day' + " " + (i+2))
      console.log(this.locations[i].route.length);
      

      for(let j =0;j<this.locations[i].route.length;j++) {
        this.thienn.push(100 - (this.locations[i].route[j].description.rating / 5) * 100);
        console.log(this.thienn)
      }
    }
    if(this.d.extraitinerary[0])
    {
      this.locations=this.d.extraitinerary
      this.location=this.locations[this.index]
      console.log('duk')
      console.log(this.d.extraitinerary[0])
      this.d.itinerary.routes=this.d.extraitinerary
    }
    else if (!this.d.extraitinerary[0])
    {
      this.locations=this.d.itinerary.routes
      this.location=this.locations[this.index]
      console.log(this.locations)
      console.log('duke')
    }
  }

  detailLocation = {
    img: '',
    imgextras: [],
    name: '',
    des: '',
    sTime: '',
    eTime: '',
    rating: '',
    price: ''
  };


  hotels = [
    {
      img: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1596027180/blog/nlxf8wldxdfprjmzei6o.webp',
      name: 'Vanda Hotel'
    },
    {
      img: 'https://www.vietfuntravel.com.vn/image/data/Da-Nang/khach-san-da-nang/Nhung-khach-san-view-dep-o-da-nang-h6.jpg',
      name: 'Cerana Hotel'
    },
    {
      img: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1596027180/blog/nlxf8wldxdfprjmzei6o.webp',
      name: 'Vanda Hotel'
    },
    {
      img: 'https://danangaz.com/wp-content/uploads/2018/09/113332334-1.jpg',
      name: 'Blue Beach'
    },
    {
      img: 'https://kenhhomestay.com/wp-content/uploads/2018/05/khach-san-tren-ban-dao-son-tra-20.jpg',
      name: 'Tarna Hotel'
    }
  ];


  detail(location: any) {
    this.detailLocation = location;
    this.add = true;
    this.zoom = true;
    this.hih = false;
  }
  hihi() {
    this.hih = true;
    this.add = false;
    this.zoom = true;
  }
  map() {
    this.mapp=false
    this.place=true
    this.editt=true
    this.color=true
    this.color0=false
    this.color1=false
    this.color2=false
    this.router.navigateByUrl('/map')
  }
  edit() {
    if (!localStorage.getItem('token')) {
      alert('You must Sign in before do this');
      this.router.navigateByUrl('/signin');
    } else if (localStorage.getItem('token')) {
      this.color2=true
      this.color1=false
      this.color=false
      this.mapp=true
      this.place=true
      this.editt=false
      this.router.navigateByUrl('/edit')
    }
  }
  unmap() {
    this.color0=true
    this.color=false
    this.color1=false
    this.color2=false
    this.mapp=true
    this.place=false
    this.editt=true
    this.router.navigateByUrl('/itinerary')
  }
  trash(position: any) {
    if (!localStorage.getItem('token')) {
          alert('You must Sign in before do this')
          this.router.navigateByUrl('/signin');
        } else if (localStorage.getItem('token')) {
          confirm('Do you want delete this?')
        {
    this.locations.splice(position, 1);
    }
  }

}
addd()
{
  this.siderbar=true
  this.list=true
}
thi(i:any)
{

    document.querySelector('.add')?.classList.remove('add')
    document.querySelectorAll('.itinerary-search_input_day_detail')[i].classList.add('add');
    this.index=i
    console.log(this.index);
    this.location=this.locations[this.index]

}
back()
{
  this.router.navigateByUrl('/search')
}
}
