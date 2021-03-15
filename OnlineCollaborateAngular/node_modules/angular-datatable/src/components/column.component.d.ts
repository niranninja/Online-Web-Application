import { OnInit } from '@angular/core';
import { DataTableRow } from './row.component';
import { CellCallback, DataTableSortCallback } from './types';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableColumn implements OnInit {
    header: string;
    sortable: boolean;
    resizable: boolean;
    property: string;
    styleClass: string;
    cellColors: CellCallback;
    customSort: DataTableSortCallback;
    width: number | string;
    visible: boolean;
    cellTemplate: any;
    headerTemplate: any;
    getCellColor(row: DataTableRow, index: number): string;
    private styleClassObject;
    ngOnInit(): void;
    private _initCellClass();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableColumn, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DataTableColumn, "data-table-column", never, { "sortable": "sortable"; "resizable": "resizable"; "visible": "visible"; "styleClass": "styleClass"; "header": "header"; "property": "property"; "cellColors": "cellColors"; "customSort": "customSort"; "width": "width"; }, {}, ["cellTemplate", "headerTemplate"]>;
}

//# sourceMappingURL=column.component.d.ts.map