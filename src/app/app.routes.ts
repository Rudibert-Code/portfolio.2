import { Routes } from '@angular/router';
import { Main } from '../app/page/main/main';
import { Imprint } from '../app/page/imprint/imprint';
import { PrivacyPolicy } from '../app/page/privacy-policy/privacy-policy';

export const routes: Routes = [
    {
        path:'',
        component:Main
    },
    {
        path:'imprint',
        component:Imprint
    },
    {
        path:'privacy',
        component:PrivacyPolicy
    },

    //{
    //path:'',
    //    component:Main,
    //    children: [
    //      { path: 'imprint', component: Imprint },
    //      { path: 'privacy', component: PrivacyPolicy },
    //    ]
    //}
];
