import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from "./page.component";
import {LoginComponent} from "./login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {NgModule} from '@angular/core';

const routes: Routes = [{
    path: '',
    component: PageComponent,
    children: [

        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'chat',
            component: ChatComponent,
        },


        {
            path: '',
            redirectTo: 'chat',
            pathMatch: 'full',
        },
        {
            path: '**',
            component: ChatComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}