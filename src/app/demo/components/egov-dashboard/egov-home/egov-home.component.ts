import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egov-home',
  templateUrl: './egov-home.component.html',
  styleUrls: ['./egov-home.component.css']
})
export class EgovHomeComponent implements OnInit {

  constructor(public router: Router) { }
  items = [
    {
      icon: 'assets/demo/images/egov/icTaiNguyenKhoangSan.png',
      name: 'Tài nguyên khoáng sản',
      routerLink:'tai-nguyen-khoang-san'
    },
    {
      icon: 'assets/demo/images/egov/icDatDai.png',
      name: 'Đất đai',
      routerLink:'dat-dai'
    },
    {
      icon: 'assets/demo/images/egov/icDiaChat.png',
      name: 'Địa chất',
      routerLink:'dia-chat'
    },
    {
      icon: 'assets/demo/images/egov/icMoiTruong.png',
      name: 'Môi trường',
      routerLink:'moi-truong'
    },
    {
      icon: 'assets/demo/images/egov/icKhiTuongThuyVan.png',
      name: 'Khí tượng thuỷ văn',
      routerLink:'khi-tuong-thuy-van'
    },
    {
      icon: 'assets/demo/images/egov/icBienDoiKhiHau.png',
      name: 'Biến đổi khí hậu',
      routerLink:'bien-doi-khi-hau'
    },
    {
      icon: 'assets/demo/images/egov/icDoDac.png',
      name: 'Đo đạc, bản đồ',
      routerLink:'do-dac-ban-do'
    },
    {
      icon: 'assets/demo/images/egov/icTongHop.png',
      name: 'Quản lý tổng hợp và thống nhất biển và hải đảo',
      routerLink:'quan-ly-tong-hop-va-thong-nhat-bien-va-hai-dao'
    },
  ]

  ngOnInit() {
  }
}
