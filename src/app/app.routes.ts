import { Routes } from '@angular/router';
import { Main } from '../app/page/main/main';
import { Imprint } from '../app/page/imprint/imprint';

export const routes: Routes = [
    {
        path:'',
        component:Main
    },
    {
        path:'imprint',
        component:Imprint
    },
];
