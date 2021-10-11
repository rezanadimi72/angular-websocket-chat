import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('./page/page.module')
            .then(m => m.PageModule),
    },
    {path: '', redirectTo: 'page', pathMatch: 'full'},
    {path: '**', redirectTo: 'page'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
