import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class PaginationService {

    pageSize: number = 10;

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = this.pageSize) {
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        if (totalPages <= this.pageSize) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = this.pageSize;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - (this.pageSize-1);
                endPage = totalPages;
            } else {
                startPage = currentPage - 3;
                endPage = currentPage + 2;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = _.range(startPage, endPage + 1);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}