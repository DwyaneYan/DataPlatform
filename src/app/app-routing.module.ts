import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePlatformComponent } from './page-platform/page-platform.component';
import { PageMaterialComponent } from './page-material/page-material.component';
import { PageDisplayTableComponent } from './page-display-table/page-display-table.component';
import { PageDisplayPictureComponent } from './page-display-picture/page-display-picture.component';
import { PageDisplayReportComponent } from './page-display-report/page-display-report.component';
import { PageDisplayReportFsComponent } from './page-display-report-fs/page-display-report-fs.component';
import { PageDisplayTypicalPartComponent } from './page-display-typical-part/page-display-typical-part.component';
import { PageConstractComponent } from './page-constract/page-constract.component';
import { PageAttributeConstractComponent } from './page-attribute-constract/page-attribute-constract.component';
import { PageMaterialFakeComponent } from './page-material-fake/page-material-fake.component';
import { PageMaterialFloatingBoxComponent } from './page-material-floating-box/page-material-floating-box.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent},
  { path: 'platform', component: PagePlatformComponent},
  { path: 'material', component: PageMaterialComponent},
  { path: 'display-table', component:PageDisplayTableComponent},
  { path: 'diplay-picture', component:PageDisplayPictureComponent},
  { path: 'display-report', component:PageDisplayReportComponent},
  { path: 'report-fullscreen', component:PageDisplayReportFsComponent},
  { path: 'display-typical-part', component:PageDisplayTypicalPartComponent},
  { path: 'contrast', component:PageConstractComponent},
  { path: 'attribute-constract', component:PageAttributeConstractComponent},
  { path: 'material-fake', component:PageMaterialFakeComponent},
  { path: 'material-floating-box', component:PageMaterialFloatingBoxComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  //初始化路由器,并让它开始监听浏览器中的地址变化
  exports: [ RouterModule ],  //导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
})
export class AppRoutingModule { }
