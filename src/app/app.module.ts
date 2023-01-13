import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxErrorsModule } from '@ngspot/ngx-errors';
import { ValdemortModule } from 'ngx-valdemort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsincronaModule } from './asincrona/asincrona.module';
import { ClaseFormsModule } from './clase-forms/clase-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClaseFormsModule,
    AsincronaModule,
    ValdemortModule/* ,
    NgxErrorsModule.configure({
      showErrorsWhenInput:'touched',
      showMaxErrors:1
    }) */
  ],
  providers: [  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideErrorTailorConfig(arg0: {}): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

