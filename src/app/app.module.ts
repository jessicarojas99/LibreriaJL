import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AboutComponent } from './about/about/about.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

const routes: Route[]=[
  { path:'', component: InicioComponent},
  { path:'about', component: AboutComponent},
  { path:'login', component: LoginComponent},
  { path:'registro', component: RegistroComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
