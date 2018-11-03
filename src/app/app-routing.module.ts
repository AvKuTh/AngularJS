import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirmsComponent} from './firms/firms.component';
import {ListBoardComponent} from './list-board/list-board.component';
import { FirmDetailComponent }  from './firm-detail/firm-detail.component';

const routes:Routes = [
                       {path: '', redirectTo: '/listboard', pathMatch :'full' },
                       {path: 'firms', component : FirmsComponent},
                       {path: 'listboard', component : ListBoardComponent},
                       { path: 'detail/:id', component: FirmDetailComponent },
                      ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
