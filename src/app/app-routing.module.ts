import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitedStatesComponent } from './unitedstates/unitedstates.component';
import { CountiesComponent } from './counties/counties.component';


const routes: Routes = [
  { path: 'counties/:selectedState/:selectedType/:selectedScale/:selectedMetric/:selectedDate', component: CountiesComponent },
  { path: 'unitedstates/:selectedType/:selectedScale/:selectedMetric/:selectedDate', component: UnitedStatesComponent },
  { path: '', component: UnitedStatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }