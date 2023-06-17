import { Component, ViewChild} from '@angular/core';
  
@Component({
  selector: 'itineraryy',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class Manageitinerary {
  title = 'itinerary';


  itinerarys = [
    { 
      id:1,
      name: 'Da Nang Date 13',
      price: '300.000',
      day:'12/03/2023',
      status:'valid'
    },
    {
      id:2,
      name: 'Team "Leaf House"',
      price: '500.000',
      day:'12/03/2023',
      status:'valid'
    },
    {
      id:3,
      name: 'Travel Travel Travel',
      price: '1.000.000',
      day:'12/03/2023',
      status:'valid'
    },
    {
      id:4,
      name: 'Tet Holiday At Da Nang',
      price: '200.000',
      day:'12/03/2023',
      status:'valid'
    },
    {
      id:5,
      name: 'Thanh Xuan Cua Chung Ta',
      price: '250.000',
      day:'12/03/2023',
      status:'valid'
    },
    {
      id:6,
      name: 'Go With Mother',
      price: '150.000',
      day:'12/03/2023',
      status:'valid'
    },
    {
      id:7,
      name: 'Hoa Bac, BaNa Hill',
      price: '300.000',
      day:'12/03/2023',
      status:'valid'
    },]
  
}