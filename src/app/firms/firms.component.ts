import { Component, OnInit } from '@angular/core';
import {Firm} from '../firm';
import {FirmService} from '../firm.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-firms',
  templateUrl: './firms.component.html',
  styleUrls: ['./firms.component.css']
})

export class FirmsComponent implements OnInit {

       firms : Firm[];       

    
    constructor(
        private firmService: FirmService,
        private messageService: MessageService
    )
    { }

  getFirms(){
      this.firmService.getFirms()
          .subscribe(firms => this.firms  = firms);

  }
    add(name: string) {

        name = name.trim();
        if (!name) { return; }
        this.firmService.addFirm({firmName:name} as Firm )
            .subscribe(firm => {
                this.firms.push(firm);
            });
    }
    delete(firm: Firm): void {
        this.firms = this.firms.filter(f => f !== firm);
        this.firmService.deleteFirm(firm).subscribe();
}
  ngOnInit() {
      this.getFirms();
  }


}
