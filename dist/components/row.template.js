"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROW_TEMPLATE = "\n<tr\tclass=\"data-table-row\"\n    [title]=\"getTooltip()\"\n    [style.background-color]=\"dataTable.getRowColor(item, index, _this)\"\n    [class.row-odd]=\"index % 2 === 0\"\n    [class.row-even]=\"index % 2 === 1\"\n    [class.selected]=\"selected\"\n    [class.clickable]=\"dataTable.rowClickable(item)\"\n    (dblclick)=\"dataTable.rowDoubleClicked(_this, $event)\"\n    (click)=\"dataTable.rowClicked(_this, $event)\"\n    >\n    <td [hide]=\"!dataTable.expandColumnVisible\" (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\">\n        <span class=\"glyphicon glyphicon-triangle-right\" [hide]=\"expanded\"></span>\n        <span class=\"glyphicon glyphicon-triangle-bottom\" [hide]=\"!expanded\"></span>\n    </td>\n    <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\n    <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\n        <input type=\"checkbox\" [(ngModel)]=\"selected\"/>\n    </td>\n    <td *ngFor=\"let column of dataTable.columns\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\" class=\"data-column\"\n        [style.background-color]=\"column.getCellColor(_this, index)\">\n        <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\n        <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\" [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\n    </td>\n</tr>\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\n    <td [attr.colspan]=\"dataTable.columnCount\">\n        <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\n    </td>\n</tr>\n";
//# sourceMappingURL=/components/row.template.js.map