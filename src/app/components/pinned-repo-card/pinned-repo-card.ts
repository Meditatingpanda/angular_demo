import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  isArchive?: boolean;
  isPublic?: boolean;
}

@Component({
  selector: 'app-pinned-repo-card',
  imports: [CommonModule],
  templateUrl: './pinned-repo-card.html',
  styleUrl: './pinned-repo-card.css',
})
export class PinnedRepoCard {
  @Input() repo!: PinnedRepo;
}
