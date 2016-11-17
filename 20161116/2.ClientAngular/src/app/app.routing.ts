import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent }  from './views/home.component';
import { NewComponent }  from './views/new.component';

const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'new',
        component:NewComponent
    }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);