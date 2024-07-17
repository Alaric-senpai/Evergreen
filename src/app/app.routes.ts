import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentsComponent } from './components/students/students.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoursesEnrolledComponent } from './components/courses-enrolled/courses-enrolled.component';
import { UnitDetailsComponent } from './components/unit-details/unit-details.component';
import { ResultsComponent } from './components/results/results.component';
import { FeeStructureComponent } from './components/fee-structure/fee-structure.component';
import { FeeStatementsComponent } from './components/fee-statements/fee-statements.component';
import { LibraryComponent } from './components/library/library.component';
import { LibrarySearchComponent } from './components/library-search/library-search.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AdminNoticeComponent } from './components/admin-notice/admin-notice.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { AdminMessageComponent } from './components/admin-message/admin-message.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { LecDashboardComponent } from './components/lec-dashboard/lec-dashboard.component';
import { LecTimetableComponent } from './components/lec-timetable/lec-timetable.component';
import { LecCoursesComponent } from './components/lec-courses/lec-courses.component';
import { LecProfileComponent } from './components/lec-profile/lec-profile.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { LecEventsComponent } from './components/lec-events/lec-events.component';
import { LecUnitDetailsComponent } from './components/lec-unit-details/lec-unit-details.component';
import { PageMissingComponent } from './components/page-missing/page-missing.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path: 'student',
    component: StudentsComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'User Profile'
      },
      {
        path: 'courses',
        component: CoursesEnrolledComponent,
        title: 'Units Enrolled'
      },
      {
        path: 'details/:id',
        component: UnitDetailsComponent,
        title: 'Unit Details'
      },
      {
        path: 'results',
        component: ResultsComponent,
        title: 'Results'
      },
      {
        path: 'structures',
        component: FeeStructureComponent,
        title: 'Fee Structure'
      },
      {
        path: 'statements',
        component: FeeStatementsComponent,
        title: 'Fee Statements'
      },
      {
        path: 'library',
        component: LibraryComponent,
        title: 'Library'
      },
      {
        path: 'search',
        component: LibrarySearchComponent,
        title: 'Search Resource'
      },
      {
        path: 'messages',
        component: MessagesComponent,
        title: 'Messages'
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
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashComponent,
        title: 'Admin Dashboard'
      },
      {
        path: 'notices',
        component: AdminNoticeComponent,
        title: 'General Notices'
      },
      {
        path: 'events',
        component: AdminEventsComponent,
        title: 'General Events'
      },
      {
        path: 'messages',
        component: AdminMessageComponent,
        title: 'Messages'
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        title: 'Profile'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'teacher',
    component: TeachersComponent,
    canActivate: [authGuard],

    children: [
      {
        path: 'dashboard',
        component: LecDashboardComponent,
        title: 'Dashboard'
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
        title: 'Unit Details'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageMissingComponent,
    title: 'Page Not Found'
  }
];
