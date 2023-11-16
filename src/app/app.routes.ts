import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/common/page-not-found/page-not-found.component";

export const routes: Routes = [
  {path: 'link1', component: HomeComponent},
  {path: 'link2', component: AboutComponent},
  {path: '', redirectTo: '/link1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
