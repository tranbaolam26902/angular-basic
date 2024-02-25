import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard',
    },
    {
        path: 'heroes',
        component: HeroesComponent,
        title: 'Heroes',
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
    },
];
