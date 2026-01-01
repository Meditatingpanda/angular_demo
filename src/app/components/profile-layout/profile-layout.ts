import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute, RouterModule } from '@angular/router';
import { ProfileSidebar } from '../profile-sidebar/profile-sidebar';
import { GithubService } from '../../services/github';
import { Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-profile-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ProfileSidebar],
  templateUrl: './profile-layout.html',
  styleUrl: './profile-layout.css',
})
export class ProfileLayout {
  private route = inject(ActivatedRoute);
  private githubService = inject(GithubService);

  user$: Observable<any> = this.route.paramMap.pipe(
    map(params => params.get('username') || 'shreeramk'),
    switchMap(username => this.githubService.getUser(username))
  );
}
