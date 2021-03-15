import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var MinPipe = (function () {
    function MinPipe() {
    }
    MinPipe.prototype.transform = function (value, args) {
        return Math.min.apply(null, value);
    };
    /** @nocollapse */
    MinPipe.ctorParameters = function () { return []; };
MinPipe.ɵfac = function MinPipe_Factory(t) { return new (t || MinPipe)(); };
MinPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "min", type: MinPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinPipe, [{
        type: Pipe,
        args: [{
                name: 'min'
            }]
    }], function () { return []; }, null); })();
    return MinPipe;
}());

//# sourceMappingURL=min.js.map