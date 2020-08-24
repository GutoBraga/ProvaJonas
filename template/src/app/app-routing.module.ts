import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { IndexContentComponent } from './index-content/index-content.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexContentComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    {
        path: 'blocks',
        component: BlocksComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }