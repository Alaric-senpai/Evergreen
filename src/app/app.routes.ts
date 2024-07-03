import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoursesEnrolledComponent } from './components/courses-enrolled/courses-enrolled.component';
import { ResultsComponent } from './components/results/results.component';
import { FeeStructureComponent } from './components/fee-structure/fee-structure.component';
import { FeeStatementsComponent } from './components/fee-statements/fee-statements.component';
import { UnitDetailsComponent } from './components/unit-details/unit-details.component';
import { PageMissingComponent } from './components/page-missing/page-missing.component';
import { LibraryComponent } from './components/library/library.component';
import { LibrarySearchComponent } from './components/library-search/library-search.component';
import { MessagesComponent } from './components/messages/messages.component';

export const routes: Routes = [
    {
        path:'',
        // component: AppComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                title: 'dashboard'
            },
            {
                path: 'profile',
                component: ProfileComponent,
                title: 'User profile'
            },
            {
                path: 'courses',
                component: CoursesEnrolledComponent,
                title: 'Units enrolled'
            },
            {
                path: 'results',
                component: ResultsComponent,
                title: 'Results'
            },
            {
                path: 'structures',
                component: FeeStructureComponent,
                title: 'feees structure'
            },
            {
                path: 'statements',
                component: FeeStatementsComponent
            },
            {
                path: 'details/:id',
                component: UnitDetailsComponent,
                title: 'Unit details',
            },
            {
                path: 'library',
                component: LibraryComponent,
                title: 'Library'
            },
            {
                path: 'search',
                component: LibrarySearchComponent,
                title: 'Search resource'
            },
            {
                path: 'messages',
                component: MessagesComponent,
                title: 'messages'
            }

        ]
    },
    {
        path: '**',
        component: PageMissingComponent,
        title: 'Page not found'
    }
];
