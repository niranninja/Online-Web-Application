import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var PixelConverter = (function () {
    function PixelConverter() {
    }
    PixelConverter.prototype.transform = function (value, args) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    };
    /** @nocollapse */
    PixelConverter.ctorParameters = function () { return []; };
PixelConverter.ɵfac = function PixelConverter_Factory(t) { return new (t || PixelConverter)(); };
PixelConverter.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "px", type: PixelConverter, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PixelConverter, [{
        type: Pipe,
        args: [{
                name: 'px'
            }]
    }], function () { return []; }, null); })();
    return PixelConverter;
}());

//# sourceMappingURL=px.js.map