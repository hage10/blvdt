import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layer-dashboard',
  templateUrl: './layer-dashboard.component.html',
  styleUrls: ['./layer-dashboard.component.css']
})
export class LayerDashboardComponent implements OnInit {

  routerLink: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public router: Router
  ) { }
  items = [
    { icon: 'pi pi-envelope', label: 'Tiếp dân và xử lý đơn thư' },
    { icon: 'pi pi-user-edit', label: 'Thanh tra hành chính và phòng, chống tham nhũng' },
    { icon: 'pi pi-eye', label: 'Giám sát và xử lý sau thanh tra' },
    { icon: 'pi pi-exclamation-circle', label: 'Xử phạt vi phạm hành chính' },
    { icon: 'pi pi-info-circle', label: 'Nhóm thông tin tổng hợp khác ....' },
    { icon: 'pi pi-cloud', label: 'Tổng cục Khí tượng Thuỷ văn' },
    { icon: 'pi pi-map', label: 'Cục Đăng ký và Dữ liệu thông tin đất đai' },
    { icon: 'pi pi-globe', label: 'Cục Địa chất Việt Nam' },
    { icon: 'pi pi-car', label: 'Cục Kiểm soát ô nhiễm môi trường' },
    { icon: 'pi pi-compass', label: 'Các Cục chuyên ngành và các Đơn vị khác...' }
  ];
  ngOnInit() {
    // Lấy tham số routerLink từ URL
    this.route.paramMap.subscribe(params => {
      this.routerLink = params.get('routerLink')!;
      // Gọi API hoặc xử lý dựa trên routerLink
      this.fetchData(this.routerLink);
    });
  }

  fetchData(routerLink: string) {
    // Ví dụ gọi API dựa trên routerLink
    this.http.get(`/api/${routerLink}`).subscribe(data => {
      console.log(data);
    });
  }
}
