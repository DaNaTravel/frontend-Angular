import { Component} from '@angular/core';
  
@Component({
  selector: 'manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class Manageuser {
  title = 'manageuser';
  users = [
    { 
      id:1,
      img: 'https://thpthongquang.edu.vn/wp-content/uploads/2023/03/imager_1_9155_700.jpg',
      name: 'Thai Van Tinh',
      email:'tinh@gmail.com',
      role:'user'
    },
    {
      id:2,
      img: 'https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compress=85',
      name: 'Nguyen Van Nam',
      email:'nam@gmail.com',
      role:'user'
    },
    {
      id:3,
      img: 'https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2021/07/cach-chup-anh-chan-dung-nam-3.jpeg',
      name: 'Mai Ba Hung',
      email:'hung@gmail.com',
      role:'user'
    },
    {
      id:4,
      img: 'https://vcdn1-giaitri.vnecdn.net/2021/12/15/do-thi-ha-1639533223.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=-2bGpQeJddx9OkUTtWqqtg',
      name: 'Vo Thanh Tam',
      email:'tam@gmail.com',
      role:'user'
    },
    {
      id:5,
      img: 'https://haycafe.vn/wp-content/uploads/2022/03/Hinh-chan-dung-nam-dep.jpg',
      name: 'Nguyen Duc Duong',
      email:'duong@gmail.com',
      role:'user'
    },
    {
      id:6,
      img: 'https://htmediagroup.vn/wp-content/uploads/2022/09/Anh-cty-9-min.jpg',
      name: 'Mai Ba Hoang',
      email:'hoang@gmail.com',
      role:'user'
    },
    
  ];
}