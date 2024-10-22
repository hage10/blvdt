import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import * as pbi from 'powerbi-client';
@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    private report: pbi.Embed;

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initChart();
            });
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
        const embedUrl = "https://app.powerbi.com/view?r=eyJrIjoiZWRhNDczMjktNmI0ZS00OTk5LWFjMjItOGZhNTIyNGVhNGU3IiwidCI6IjBmOGQxOGNmLTBlZTgtNGIyYy1iYTJjLTZjMGQwMGRmNDNlOCIsImMiOjEwfQ%3D%3D";
        const reportContainer = document.getElementById('reportContainer');

        // Initialize PowerBI service
        const powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);

        const config: pbi.IEmbedConfiguration = {
            type: 'report',
            embedUrl: embedUrl,
            accessToken: 'eyJrIjoiZWRhNDczMjktNmI0ZS00OTk5LWFjMjItOGZhNTIyNGVhNGU3IiwidCI6IjBmOGQxOGNmLTBlZTgtNGIyYy1iYTJjLTZjMGQwMGRmNDNlOCIsImMiOjEwfQ%3D%3D',  // Bạn cần thêm token nếu sử dụng Power BI Embedded
            settings: {
                panes: {
                    filters: {
                        visible: false
                    },
                    pageNavigation: {
                        visible: false
                    }
                }
            }
        };

        this.report = powerbi.embed(reportContainer, config) as pbi.Report;
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    goToPage(pageName: string) {
       
    }

}
