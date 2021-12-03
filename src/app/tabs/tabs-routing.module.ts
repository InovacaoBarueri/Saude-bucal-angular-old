import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
      },
      {
        path: 'tab6',
        loadChildren: () => import('../tab6/tab6.module').then( m => m.Tab6PageModule)
      },
    
      {
        path: 'tab8',
        loadChildren: () => import('../tab8/tab8.module').then( m => m.Tab8PageModule)
      },
      {
        path: 'tab9',
        loadChildren: () => import('../tab9/tab9.module').then( m => m.Tab9PageModule)
      },
      {
        path: 'tab10',
        loadChildren: () => import('../tab10/tab10.module').then( m => m.Tab10PageModule)
      },
      {
        path: 'tab11',
        loadChildren: () => import('../tab11/tab11.module').then( m => m.Tab11PageModule)
      },
      {
        path: 'tab12',
        loadChildren: () => import('../tab12/tab12.module').then( m => m.Tab12PageModule)
      },
      {
        path: 'tab13',
        loadChildren: () => import('../tab13/tab13.module').then( m => m.Tab13PageModule)
      },
      {
        path: 'tab12',
        loadChildren: () => import('../tab13/tab13.module').then( m => m.Tab13PageModule)
      },
      {
        path: 'tab14',
        loadChildren: () => import('../tab14/tab14.module').then( m => m.Tab14PageModule)
      },
      {
        path: 'tab15',
        loadChildren: () => import('../tab15/tab15.module').then( m => m.Tab15PageModule)
      },
      {
        path: 'tab16',
        loadChildren: () => import('../tab16/tab16.module').then( m => m.Tab16PageModule)
      },
      {
        path: 'tab17',
        loadChildren: () => import('../tab17/tab17.module').then( m => m.Tab17PageModule)
      },
      {
        path: 'tab18',
        loadChildren: () => import('../tab18/tab18.module').then( m => m.Tab18PageModule)
      },
      {
        path: 'tab19',
        loadChildren: () => import('../tab19/tab19.module').then( m => m.Tab19PageModule)
      },
      {
        path: 'tab20',
        loadChildren: () => import('../tab20/tab20.module').then( m => m.Tab20PageModule)
      },
      {
        path: 'tab21',
        loadChildren: () => import('../tab21/tab21.module').then( m => m.Tab21PageModule)
      },
      {
        path: 'tab22',
        loadChildren: () => import('../tab22/tab22.module').then( m => m.Tab22PageModule)
      },
      {
        path: 'tab23',
        loadChildren: () => import('../tab23/tab23.module').then( m => m.Tab23PageModule)
      },
      {
        path: 'pdf1',
        loadChildren: () => import('../pdf1/pdf1.module').then( m => m.Pdf1PageModule)
      },
      {
        path: 'pdf2',
        loadChildren: () => import('../pdf2/pdf2.module').then( m => m.Pdf2PageModule)
      },
      {
        path: 'pdf3',
        loadChildren: () => import('../pdf3/pdf3.module').then( m => m.Pdf3PageModule)
      },
      {
        path: 'pdf4',
        loadChildren: () => import('../pdf4/pdf4.module').then( m => m.Pdf4PageModule)
      },
      {
        path: 'pdf5',
        loadChildren: () => import('../pdf5/pdf5.module').then( m => m.Pdf5PageModule)
      },
      {
        path: 'pdf6',
        loadChildren: () => import('../pdf6/pdf6.module').then( m => m.Pdf6PageModule)
      },
      {
        path: 'pdf7',
        loadChildren: () => import('../pdf7/pdf7.module').then( m => m.Pdf7PageModule)
      },
      {
        path: 'pdf8',
        loadChildren: () => import('../pdf8/pdf8.module').then( m => m.Pdf8PageModule)
      },
      {
        path: 'pdf9',
        loadChildren: () => import('../pdf9/pdf9.module').then( m => m.Pdf9PageModule)
      },
      {
        path: 'pdf10',
        loadChildren: () => import('../pdf10/pdf10.module').then( m => m.Pdf10PageModule)
      },
      {
        path: 'pdf11',
        loadChildren: () => import('../pdf11/pdf11.module').then( m => m.Pdf11PageModule)
      },
      {
        path: 'pdf12',
        loadChildren: () => import('../pdf12/pdf12.module').then( m => m.Pdf12PageModule)
      },
      {
        path: 'pdf13',
        loadChildren: () => import('../pdf13/pdf13.module').then( m => m.Pdf13PageModule)
      },
      {
        path: 'pdf14',
        loadChildren: () => import('../pdf14/pdf14.module').then( m => m.Pdf14PageModule)
      },
      {
        path: 'pdf15',
        loadChildren: () => import('../pdf15/pdf15.module').then( m => m.Pdf15PageModule)
      },
      {
        path: 'pdf16',
        loadChildren: () => import('../pdf16/pdf16.module').then( m => m.Pdf16PageModule)
      },
      {
        path: 'pdf17',
        loadChildren: () => import('../pdf17/pdf17.module').then( m => m.Pdf17PageModule)
      },
      {
        path: 'pdf18',
        loadChildren: () => import('../pdf18/pdf18.module').then( m => m.Pdf18PageModule)
      },
      {
        path: 'pdf19',
        loadChildren: () => import('../pdf19/pdf19.module').then( m => m.Pdf19PageModule)
      },

      {
        path: 'game1',
        loadChildren: () => import('../game1/game1.module').then( m => m.Game1PageModule)
      },
      {
        path: 'game2',
        loadChildren: () => import('../game2/game2.module').then( m => m.Game2PageModule)
      },
      {
        path: 'game3',
        loadChildren: () => import('../game3/game3.module').then( m => m.Game3PageModule)
      },
      {
        path: 'game4',
        loadChildren: () => import('../game4/game4.module').then( m => m.Game4PageModule)
      },
      {
        path: 'game5',
        loadChildren: () => import('../game5/game5.module').then( m => m.Game5PageModule)
      },
      {
        path: 'game6',
        loadChildren: () => import('../game6/game6.module').then( m => m.Game6PageModule)
      },
    
     
     
      
     
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
