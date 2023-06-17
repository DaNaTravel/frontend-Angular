import { Component} from '@angular/core';
  
@Component({
  selector: 'managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class Managebooking {
  title = 'managebooking';
  historybookings=[

  {
    id:1,
    img: 'https://ik.imagekit.io/tvlk/blog/2022/08/khach-san-view-bien-da-nang-1-1024x624.jpg?tr=dpr-2,w-675',
    name: 'Manada Hotel',
    price: '300.000',
    username:'Nguyen Thi Anh Tuyet',
    status:'paid'
  },

  {
    id:2,
    img: 'https://maximilan.com.vn/wp-content/uploads/2020/03/96515_og_1.jpeg',
    name: 'Benna Hotel',
    price: '200.000',
    username:'Vo Dang Khoa',
    status:'paid'
  },

  {
    id:3,
    img: 'https://giclandhotel.com/uploads/noidung/images/31b5d04245a8637c1a88a3bb4a99a529.jpg',
    name: 'Venna Hotel',
    price: '450.000',
    username:'Mai Viet Thanh',
    status:'paid'
  },

  {
    id:4,
    img: 'https://hanoimoi.com.vn/Uploads/anhthu/2019/2/17/dn.jpg',
    name: 'Tina Hotel',
    price: '300.00',
    username:'Nguyen Thanh Dương',
    status:'paid'
  },

  {
    id:5,
    img: 'https://cdn.vietnammoi.vn/171464242508312576/2020/7/6/228796178-1594026396952167435123.jpg',
    name: 'Mambo Hotel',
    price: '400.000',
    username:'Nguyen Nhat Tran',
    status:'paid'
  },

  {
    id:6,
    img: 'https://mrvivu.com/wp-content/uploads/2021/04/sala-danang-beach-hotel.jpeg',
    name: 'Kentito Hotel',
    price: '300.000',
    username:'Tran Van Nam',
    status:'paid'
  },
  
 
];
  
}