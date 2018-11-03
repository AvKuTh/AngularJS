import { Component, OnInit , Input} from '@angular/core';
import {Firm} from '../firm';
import {FirmService} from '../firm.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-firm-detail',
  templateUrl: './firm-detail.component.html',
  styleUrls: ['./firm-detail.component.css']
})

export class FirmDetailComponent implements OnInit {
@Input() firm: Firm;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private firmService: FirmService

    ) { }

    ngOnInit(): void{
        this.getFirm();
    }
    goBack(): void {
        this.location.back();
    }
    
    getFirm(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.firmService.getFirm(id)
            .subscribe(firm => this.firm = firm);
}
        save(): void {
           this.firmService.updateFirm(this.firm)
                .subscribe(() => this.goBack());
 }

}
