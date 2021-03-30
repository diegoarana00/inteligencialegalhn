import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollspyDirective } from './scrollspy.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactSuccessComponent } from './contact/contact-success/contact-success.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AboutComponent, ClientsComponent, ContactComponent, FeaturesComponent, FooterComponent, ServicesComponent, ScrollspyDirective, ContactSuccessComponent],
  entryComponents: [ContactSuccessComponent],
  imports: [
    CommonModule, CarouselModule, CountToModule, FormsModule, HttpClientModule
  ],
  exports: [AboutComponent, ClientsComponent, ContactComponent, FeaturesComponent, FooterComponent, ServicesComponent, ScrollspyDirective, ContactSuccessComponent]
})
export class SharedModule { }
