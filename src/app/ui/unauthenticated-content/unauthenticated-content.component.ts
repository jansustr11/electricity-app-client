import { Component } from '@angular/core';

@Component({
    selector: 'app-unauthenticated-content',
    templateUrl: './unauthenticated-content.component.html',
    styleUrls: ['./unauthenticated-content.component.scss']
})
export class UnauthenticatedContentComponent {
    get title(): string | undefined {
        return 'Hello';
    }

    get description(): string | undefined {
        return 'World';
    }
}
