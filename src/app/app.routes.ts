import { Routes } from '@angular/router';
import { ProfileLayout } from './components/profile-layout/profile-layout';
import { OverviewTab } from './components/overview-tab/overview-tab';
import { RepositoriesTab } from './components/repositories-tab/repositories-tab';
import { ProjectsTab } from './components/projects-tab/projects-tab';
import { PackagesTab } from './components/packages-tab/packages-tab';

export const routes: Routes = [
    {
        path: ':username',
        component: ProfileLayout,
        children: [
            { path: '', component: OverviewTab },
            { path: 'repositories', component: RepositoriesTab },
            { path: 'projects', component: ProjectsTab },
            { path: 'packages', component: PackagesTab },
        ]
    },
    { path: '', redirectTo: '/shreeramk', pathMatch: 'full' },
    { path: '**', redirectTo: '/shreeramk' }
];
