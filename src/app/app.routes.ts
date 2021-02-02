// import router dependencies
import { Routes, RouterModule   } from '@angular/router';

// import App components that are linked to a route
import { DashboardComponent     } from './components/dashboard/dashboard.component';
import { ManageComponent        } from './components/manage/manage.component';

// Define the route configuration array
const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
         path: 'manage',
         component: ManageComponent
    }
];

// export the routes for use
export const AppRoutes = RouterModule.forRoot( routes );
