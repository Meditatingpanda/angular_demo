import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinnedRepoCard, PinnedRepo } from '../pinned-repo-card/pinned-repo-card';
import { ContributionGraph } from '../contribution-graph/contribution-graph';

@Component({
  selector: 'app-overview-tab',
  standalone: true,
  imports: [CommonModule, PinnedRepoCard, ContributionGraph],
  templateUrl: './overview-tab.html',
  styleUrl: './overview-tab.css',
})
export class OverviewTab {
  pinnedRepos: PinnedRepo[] = [
    {
      name: 'Complete-Python-3-Bootcamp',
      description: 'Course Files for Complete Python 3 Bootcamp Course on Udemy',
      language: 'Jupyter Notebook',
      languageColor: '#DA5B0B',
      stars: 0,
      forks: 0,
      isPublic: true
    },
    {
      name: 'flutter_login_ui',
      description: 'https://youtu.be/6kaEbTfb444',
      language: 'Dart',
      languageColor: '#00B4AB',
      stars: 0,
      forks: 0,
      isPublic: true
    },
    {
      name: 'gitignore',
      description: 'A collection of useful .gitignore templates',
      language: '', // No language shown in screenshot or it is generic, but actually it might be 'Shell' or just hidden if empty. Let's leave empty.
      languageColor: '',
      stars: 0,
      forks: 0,
      isPublic: true
    },
    {
      name: 'node-opcua-logger',
      description: 'An OPCUA Client for logging data to InfluxDB! 🔌🏭',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      forks: 0,
      isPublic: true
    },
    {
      name: 'kafkajs',
      description: 'A modern Apache Kafka client for node.js',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      forks: 0,
      isPublic: true
    },
    {
      name: 'node-opcua-1',
      description: 'an implementation of a OPC UA stack fully written in javascript and nodejs - http://node-opcua.github.io/',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 0,
      forks: 0,
      isPublic: true
    }
  ];
}
