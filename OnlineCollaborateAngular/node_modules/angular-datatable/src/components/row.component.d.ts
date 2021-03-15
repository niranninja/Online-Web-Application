import { EventEmitter, OnDestroy } from '@angular/core';
import { DataTable } from './table.component';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableRow implements OnDestroy {
    dataTable: DataTable;
    item: any;
    index: number;
    expanded: boolean;
    private _selected;
    selectedChange: EventEmitter<{}>;
    expandRowChange: EventEmitter<{}>;
    selected: boolean;
    readonly displayIndex: number;
    getTooltip(): string;
    expandRow(event: Event): void;
    constructor(dataTable: DataTable);
    ngOnDestroy(): void;
    private _this;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableRow, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableRow, "[dataTableRow]", never, { "item": "item"; "index": "index"; }, { "selectedChange": "selectedChange"; "expandRowChange": "expandRowChange"; }, never, never>;
}

//# sourceMappingURL=row.component.d.ts.map