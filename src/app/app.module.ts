import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirmsComponent } from './firms/firms.component';
import { FirmDetailComponent } from './firm-detail/firm-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { ListBoardComponent } from './list-board/list-board.component';
import { HttpClientModule }    from '@angular/common/http';
import { FirmService} from './firm.service';
@NgModule({
  declarations: [
    AppComponent,
    FirmsComponent,
    FirmDetailComponent,
    MessagesComponent,
    ListBoardComponent,
    
  ],
  imports: [
    BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpClientModule,
  ],
    providers: [FirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
