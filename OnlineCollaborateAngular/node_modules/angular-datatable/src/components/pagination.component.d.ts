import { DataTable } from './table.component';
import * as ɵngcc0 from '@angular/core';
export declare class DataTablePagination {
    dataTable: DataTable;
    constructor(dataTable: DataTable);
    pageBack(): void;
    pageForward(): void;
    pageFirst(): void;
    pageLast(): void;
    readonly maxPage: number;
    limit: number;
    page: number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTablePagination, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTablePagination, "data-table-pagination", never, {}, {}, never, never>;
}

//# sourceMappingURL=pagination.component.d.ts.map