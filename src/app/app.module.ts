import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PontosComponent } from './pontos/pontos.component';

const appRoutes: Routes = [
  { path: 'pontos', component: PontosComponent },
  { path: '',
    redirectTo: '/pontos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PontosComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
