import { bootstrapApplication } from '@angular/platform-browser';
import { TableRowExpansionDemo } from './app/table-row-expansion-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TableRowExpansionDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));