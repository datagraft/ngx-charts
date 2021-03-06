import { EventEmitter, TemplateRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class AdvancedPieChartComponent extends BaseChartComponent {
    gradient: boolean;
    activeEntries: any[];
    tooltipDisabled: boolean;
    tooltipText: any;
    label: string;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    data: any;
    dims: ViewDimensions;
    domain: any[];
    outerRadius: number;
    innerRadius: number;
    transform: string;
    colors: ColorHelper;
    legendWidth: number;
    margin: number[];
    valueFormatting: (value: number) => any;
    nameFormatting: (value: string) => any;
    update(): void;
    getDomain(): any[];
    onClick(data: any): void;
    setColors(): void;
    onActivate(event: any): void;
    onDeactivate(event: any): void;
}
