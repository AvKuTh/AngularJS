import { Component, OnInit } from '@angular/core';
import { Firm } from '../firm';
import { FirmService } from '../firm.service';
 
@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: [ './list-board.component.css' ]
})
export class ListBoardComponent implements OnInit {
  firms: Firm[] = [];
 
  constructor(private firmService: FirmService) { }
 
  ngOnInit() {
    this.getFirms();
  }
 
  getFirms(): void {
    this.firmService.getFirms()
      .subscribe(firms => this.firms = firms.slice(0,2));
  }
}
