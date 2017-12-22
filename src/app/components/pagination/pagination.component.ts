import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    providers: [ PaginationService ]
})

export class PaginationComponent implements OnInit{
    
    @Input() allItems: any[];
    pager: any = {};
    pagedItems: any[];

    constructor(private _service: PaginationService){}

    ngOnInit(): void {
        this.setPage(1);
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes['allItems']){
            this.setPage(1);
        }
    }

    setPage(page: number): void {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        this.pager = this._service.getPager(this.allItems.length, page);
 
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}