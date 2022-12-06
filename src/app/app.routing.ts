import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { NestedComponent } from './nested/nested.component';
import { StaticComponent } from './static/static.component';

const routes: Route[] = [
  { path: 'simple', component: SimpleComponent },
  { path: 'nested', component: NestedComponent },
  { path: 'static', component: StaticComponent },
  { path: '', redirectTo: 'static', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }