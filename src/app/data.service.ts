import axios from 'axios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  booking(booking: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public router: Router) {}
  data: any;
  thinh:any
  tuyet:any
  itinerary:any
  mang:any=[]
  diadiem:any=[]
  thoigian:any=[]
  vitri:any=[]
  tong:any=[]
  index:any
  extraitinerary:any=[]
  location:any=[]
  minh:any
  lat:any
  lng:any
  getData(value: any) {
    axios
      .post('http://ec2-13-114-139-244.ap-northeast-1.compute.amazonaws.com:5000/accounts', value)
      .then( (response) => {
        console.log(response.config.headers);
        this.router.navigateByUrl('/signin');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
