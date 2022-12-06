import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NguCarouselModule } from '@ngu/carousel';
import { SimpleComponent } from './simple/simple.component';
import { NestedComponent } from './nested/nested.component';
import { AppRoutingModule } from './app.routing';
import { StaticComponent } from './static/static.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NguCarouselModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, SimpleComponent, NestedComponent, StaticComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
