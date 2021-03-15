import { Directive, Input, ContentChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["dataTableCell"];
var _c1 = ["dataTableHeader"];
export var DataTableColumn = (function () {
    function DataTableColumn() {
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
        this.styleClassObject = {}; // for [ngClass]
    }
    DataTableColumn.prototype.getCellColor = function (row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    };
    DataTableColumn.prototype.ngOnInit = function () {
        this._initCellClass();
    };
    DataTableColumn.prototype._initCellClass = function () {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a
            );
        }
        var _a;
    };
    /** @nocollapse */
    DataTableColumn.ctorParameters = function () { return []; };
    DataTableColumn.propDecorators = {
        'header': [{ type: Input },],
        'sortable': [{ type: Input },],
        'resizable': [{ type: Input },],
        'property': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'cellColors': [{ type: Input },],
        'customSort': [{ type: Input },],
        'width': [{ type: Input },],
        'visible': [{ type: Input },],
        'cellTemplate': [{ type: ContentChild, args: ['dataTableCell',] },],
        'headerTemplate': [{ type: ContentChild, args: ['dataTableHeader',] },],
    };
DataTableColumn.ɵfac = function DataTableColumn_Factory(t) { return new (t || DataTableColumn)(); };
DataTableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DataTableColumn, selectors: [["data-table-column"]], contentQueries: function DataTableColumn_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
    } }, inputs: { sortable: "sortable", resizable: "resizable", visible: "visible", styleClass: "styleClass", header: "header", property: "property", cellColors: "cellColors", customSort: "customSort", width: "width" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableColumn, [{
        type: Directive,
        args: [{
                selector: 'data-table-column'
            }]
    }], function () { return []; }, { sortable: [{
            type: Input
        }], resizable: [{
            type: Input
        }], visible: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], header: [{
            type: Input
        }], property: [{
            type: Input
        }], cellColors: [{
            type: Input
        }], customSort: [{
            type: Input
        }], width: [{
            type: Input
        }], cellTemplate: [{
            type: ContentChild,
            args: ['dataTableCell']
        }], headerTemplate: [{
            type: ContentChild,
            args: ['dataTableHeader']
        }] }); })();
    return DataTableColumn;
}());

//# sourceMappingURL=column.component.js.map