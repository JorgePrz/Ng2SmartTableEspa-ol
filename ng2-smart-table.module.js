import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
var Ng2SmartTableModule = /** @class */ (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CellModule,
                        FilterModule,
                        PagerModule,
                        TBodyModule,
                        THeadModule,
                    ],
                    declarations: [
                        Ng2SmartTableComponent,
                    ],
                    exports: [
                        Ng2SmartTableComponent,
                    ],
                },] },
    ];
    return Ng2SmartTableModule;
}());
export { Ng2SmartTableModule };
//# sourceMappingURL=ng2-smart-table.module.js.map