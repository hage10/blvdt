import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EgovDashboardComponent } from './egov-dashboard.component';
import { EgovHomeComponent } from './egov-home/egov-home.component';
import { LayerDashboardComponent } from './layer-dashboard/layer-dashboard.component';
import { MenuBarComponent } from './layer-dashboard/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    EgovDashboardComponent,
    EgovHomeComponent,
    LayerDashboardComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: EgovDashboardComponent, // Route mặc định khi vào /egov
        children: [
          { path: '', component: EgovHomeComponent } ,// Route con cho /egov/layer-dashboard
          { path: ':routerLink', component: LayerDashboardComponent } // Đường dẫn động với tham số routerLink
        ]
      }
    ])
  ]
})
export class EgovDashboardModule { }
