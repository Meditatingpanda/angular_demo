import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { GithubService } from '../../services/github';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contribution-graph',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './contribution-graph.html',
  styleUrl: './contribution-graph.css',
})
export class ContributionGraph implements OnInit {
  private service = inject(GithubService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  years: any[] = [];
  selectedYear: string = 'last';
  private currentUsername: string = '';

  options: EChartsOption = {};
  isLoading = true;
  hasError = false;

  ngOnInit() {
    // We are in Overview Tab, which is child of Profile Layout which has :username
    // OR OverviewTab is child route. 
    // Actually, OverviewTab is routed component.
    // this.route.parent.paramMap gives the username.

    // Fallback if no parent (e.g. testing): 'shreeramk'
    const username$ = this.route.parent ? this.route.parent.paramMap.pipe(map((p: any) => p.get('username') || 'shreeramk')) : this.route.paramMap.pipe(map((p: any) => p.get('username') || 'shreeramk'));

    username$.pipe(
      tap((username: any) => {
        this.currentUsername = username;
        this.isLoading = true;
        this.hasError = false;
        this.options = {};
        this.selectedYear = 'last';
        this.cdr.markForCheck();
      }),
      switchMap((username: string) => this.fetchData(username, this.selectedYear))
    ).subscribe({
      next: (data) => this.handleResponse(data),
      error: () => this.handleError()
    });
  }

  fetchData(username: string, year: string) {
    this.isLoading = true;
    this.hasError = false;
    this.cdr.markForCheck();
    return this.service.getContributions(username, year).pipe(
      catchError((err: any) => {
        console.error('Error fetching contributions:', err);
        return of(null);
      })
    );
  }

  handleResponse(data: any) {
    if (data) {
      if (data.years) {
        this.years = data.years;
      }
      this.updateChart(data);
    } else {
      this.hasError = true;
    }
    this.isLoading = false;
    this.cdr.markForCheck();
  }

  handleError() {
    this.isLoading = false;
    this.hasError = true;
    this.cdr.markForCheck();
  }

  onYearSelect(year: any | string) {
    const y = typeof year === 'object' ? year.year : year;
    this.selectedYear = y;
    if (this.currentUsername) {
      this.fetchData(this.currentUsername, this.selectedYear).subscribe(data => this.handleResponse(data));
    }
  }

  updateChart(data: any) {
    if (!data.contributions || data.contributions.length === 0) {
      return;
    }

    // Transform API data to ECharts Heatmap format
    // Data.contributions is array of { date: 'YYYY-MM-DD', count: N, level: N }
    const seriesData = data.contributions.map((item: any) => [
      item.date,
      item.count
    ]);

    // Determine range
    const end = data.contributions[data.contributions.length - 1].date;
    const start = data.contributions[0].date;

    this.options = {
      tooltip: {
        position: 'top',
        formatter: (params: any) => {
          return `${params.value[1]} contributions on ${params.value[0]}`;
        }
      },
      visualMap: {
        min: 0,
        max: 10,
        show: false,
        inRange: {
          color: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
        }
      },
      calendar: {
        top: 30,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: [start, end],
        itemStyle: {
          color: '#161b22',
          borderColor: '#0d1117',
          borderWidth: 3
        },
        yearLabel: { show: false },
        dayLabel: {
          firstDay: 1,
          nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          color: '#8b949e'
        },
        monthLabel: {
          color: '#8b949e'
        },
        splitLine: { show: false }
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: seriesData
      }
    };
  }
}
