import { Component } from '@angular/core';
import { ImportDoc } from '@doc/tooltip/importdoc';
import { StyleDoc } from '@doc/tooltip/styledoc';
import { PositionDoc } from '@doc/tooltip/positiondoc';
import { EventDoc } from '@doc/tooltip/eventdoc';
import { AutoHideDoc } from '@doc/tooltip/autohidedoc';
import { DelayDoc } from '@doc/tooltip/delaydoc';
import { OptionsDoc } from '@doc/tooltip/optionsdoc';
import { AccessibilityDoc } from '@doc/tooltip/accessibilitydoc';
import { CustomDoc } from '@doc/tooltip/customdoc';

@Component({
    templateUrl: './tooltipdemo.html',
    standalone: false
})
export class TooltipDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'event',
            label: 'Event',
            component: EventDoc
        },
        {
            id: 'autohide',
            label: 'Auto Hide',
            component: AutoHideDoc
        },
        {
            id: 'delay',
            label: 'Delay',
            component: DelayDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
        },
        {
            id: 'options',
            label: 'Tooltip Options',
            component: OptionsDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
