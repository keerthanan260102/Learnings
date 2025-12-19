import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyPluginModule } from '../../../my-plugin/src/lib/my-plugin.module';
import { Landing } from './landing/landing';
import { Header } from './shared/header/header';
import { SidePanel } from './shared/side-panel/side-panel';
import { Dashboard } from './dashboard/dashboard';
import { Menu1 } from './menu1/menu1';
import { Menu2 } from './menu2/menu2';
import { DashboardDesign } from './dashboard/dashboard-design/dashboard-design';
import { PageNotfound } from './page-notfound/page-notfound';
import { DashboardAnalysisComponent } from './dashboard/dashboard-analysis/dashboard-analysis.component';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { TargetComponent } from './dashboard/target/target.component';

@NgModule({
  declarations: [
    App,
    Landing,
    Header,
    SidePanel,
    Dashboard,
    // Menu1,
    // Menu2,
    DashboardDesign,
    DashboardAnalysisComponent,
    DashboardViewComponent,
    TargetComponent,
    PageNotfound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyPluginModule
  ],
  providers: [
   
  ],
  bootstrap: [App]
})
export class AppModule { }
