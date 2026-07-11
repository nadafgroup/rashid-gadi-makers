import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BedComponent } from './bed/bed.component';
import { PillowComponent } from './pillow/pillow.component';
import { SofaComponent } from './sofa/sofa.component';
import { RepairComponent } from './repair/repair.component';
import { RentComponent } from './rent/rent.component';
import { FurnitureComponent } from './furniture/furniture.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bed', component: BedComponent },
  { path: 'pillow', component: PillowComponent },
  { path: 'sofa', component: SofaComponent },
  { path: 'repair', component: RepairComponent },
  { path: 'rent', component: RentComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: '**', redirectTo: '' }
];
