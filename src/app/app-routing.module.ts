import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CountDownTimerComponent } from './Components/count-down-timer/count-down-timer.component';
import { FloatingBannerComponent } from './Components/floating-banner/floating-banner.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { InfiniteScrollComponent } from './Components/infinite-scroll/infinite-scroll.component';
import { CountdownTimerByServiceComponent } from './Components/countdown-timer-by-service/countdown-timer-by-service.component';
import { StudentComponent } from './Components/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countdowntimer', component: CountDownTimerComponent },
  { path: 'floatingbanner', component: FloatingBannerComponent },
  { path: 'viewproducts', component: ViewProductsComponent },
  { path: 'lazyscroll', component: InfiniteScrollComponent },
  { path: 'countdowntimer2', component: CountdownTimerByServiceComponent },
  { path: 'student', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
