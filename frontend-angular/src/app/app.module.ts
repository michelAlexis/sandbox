import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule as AppLayoutModule } from './layout/layout.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,

    // Material
    BrowserAnimationsModule,

    // Sandbox
    FeaturesModule,
    AppLayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
