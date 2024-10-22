import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }
  items = [
    {
      name: 'Theo dõi đề án, nhiệm vụ',
      icon: 'assets/demo/images/egov/icTongHop.png',
    },
    {
      name: 'Kế hoạch, tài chính',
      icon: 'assets/demo/images/egov/icTongHop.png',

    },
    {
      name: 'Tổ chức cán bộ',
      icon: 'assets/demo/images/egov/icTongHop.png',

    },
    {
      name: 'Khoa học, công nghệ và Hợp tác quốc tế',
      icon: 'assets/demo/images/egov/icTongHop.png',

    },
    {
      name: 'Nhóm thông tin tổng hợp khác ....',
      icon: 'assets/demo/images/egov/icTongHop.png',
    },
  ]
  ngOnInit() {
  }

}
