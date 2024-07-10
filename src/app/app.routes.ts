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
import { StudentsComponent } from './components/students/students.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { LecDashboardComponent } from './components/lec-dashboard/lec-dashboard.component';
import { LecTimetableComponent } from './components/lec-timetable/lec-timetable.component';
import { LecCoursesComponent } from './components/lec-courses/lec-courses.component';
import { LecProfileComponent } from './components/lec-profile/lec-profile.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { LecEventsComponent } from './components/lec-events/lec-events.component';
import { LecUnitDetailsComponent } from './components/lec-unit-details/lec-unit-details.component';

export const routes: Routes = [
    {
        path: '',
        component: NavigateComponent
    },
    {
        path:'student',
        component: StudentsComponent,
        children: [
            {
                path: 'dashboard',
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
                path: 'details/:id',
                component: UnitDetailsComponent,
                title: 'Unit details',
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
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        title: 'admin'
    },
    {
        path: 'teacher',
        component: TeachersComponent,
        title: 'Lecturer',
        children: [
            {
                path: 'dashboard',
                component: LecDashboardComponent,
                title: 'dashboard'
            },
            {
                path: 'timetable',
                component: LecTimetableComponent,
                title: 'Schedule'
            },
            {
                path: 'lcourses',
                component: LecCoursesComponent,
                title: 'Units'
            },
            {
                path: 'lprofile',
                component: LecProfileComponent,
                title: 'Profile'
            },
            {
                path: 'reminders',
                component: RemindersComponent,
                title: 'Reminders'
            },
            {
                path: 'events',
                component: LecEventsComponent,
                title: 'Events'
            },
            {
                path: 'unit_details/:id',
                component: LecUnitDetailsComponent,
                title: 'Unit details'
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        component: PageMissingComponent,
        title: 'Page not found'
    }
];
