import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CountDownTimerComponent } from './Components/count-down-timer/count-down-timer.component';
import { LogTimerComponent } from './Components/count-down-timer/log-timer/log-timer.component';
import { CountClicksComponent } from './Components/count-down-timer/count-clicks/count-clicks.component';
import { TimerComponent } from './Components/count-down-timer/timer/timer.component';
import { TimerLimitComponent } from './Components/count-down-timer/timer-limit/timer-limit.component';
import { FormsModule } from '@angular/forms';
import { FloatingBannerComponent } from './Components/floating-banner/floating-banner.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollComponent } from './Components/infinite-scroll/infinite-scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownTimerByServiceComponent } from './Components/countdown-timer-by-service/countdown-timer-by-service.component';
import { TimerByServiceComponent } from './Components/countdown-timer-by-service/timer-by-service/timer-by-service.component';
import { TimerLimitByServiceComponent } from './Components/countdown-timer-by-service/timer-limit-by-service/timer-limit-by-service.component';
import { StudentComponent } from './Components/student/student.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimerComponent,
    TimerLimitComponent,
    CountDownTimerComponent,
    LogTimerComponent,
    CountClicksComponent,
    FloatingBannerComponent,
    ViewProductsComponent,
    InfiniteScrollComponent,
    CountdownTimerByServiceComponent,
    TimerByServiceComponent,
    TimerLimitByServiceComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
