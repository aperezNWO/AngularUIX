import { NgModule                } from '@angular/core';
import { RouterModule            } from '@angular/router';
import { MatListModule           } from '@angular/material/list';
import { MatTableModule          } from '@angular/material/table';
import { MatPaginatorModule      } from '@angular/material/paginator';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule     } from '@angular/common/http';
import { AppComponent         } from './app.component';
import { LogInfoViewComponent } from './loginfoview/loginfoview.component';
import { ListaComponent       } from './lista/lista.component';
import { DatatableComponent   } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DatatableComponent,
    LogInfoViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {  path: 'lista'          , component: ListaComponent           },
      {  path: 'datatable'      , component: DatatableComponent       },
      {  path: 'dynamictable'   , component: LogInfoViewComponent     }, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
