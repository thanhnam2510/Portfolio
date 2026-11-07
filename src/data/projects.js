import teamflowLogo from '@/assets/images/teamflow/logo-mark.svg'
import shotHome from '@/assets/images/teamflow/home.jpg'
import shotKanban from '@/assets/images/teamflow/kanban.jpg'
import shotRoom from '@/assets/images/teamflow/room.jpg'
import shotRequests from '@/assets/images/teamflow/requests.jpg'
import shotAssets from '@/assets/images/teamflow/assets.jpg'
import shotPerf from '@/assets/images/teamflow/perf-manager.jpg'

/** Featured personal project. Copy lives in `projects.teamflow` in the locale files. */
export const teamflow = {
  logo: teamflowLogo,
  liveUrl: 'https://thanhnam2510.github.io/ProjectPersional_Landingpage/',
  shots: [
    { key: 'home', src: shotHome },
    { key: 'kanban', src: shotKanban },
    { key: 'room', src: shotRoom },
    { key: 'requests', src: shotRequests },
    { key: 'assets', src: shotAssets },
    { key: 'perf', src: shotPerf },
  ],
  featureGroups: ['collaborate', 'work', 'people', 'operations'],
  stack: [
    'Angular 22', 'TypeScript', 'Signals', 'Angular Material 3',
    '.NET 10', 'ASP.NET Core', 'EF Core 9', 'MySQL',
    'SignalR', 'LiveKit', 'MailKit', 'Docker',
    'React', 'Vite', 'GitHub Actions',
  ],
}

/** Client and company projects. Copy lives in `projects.<key>` in the locale files. */
export const clientProjects = [
  {
    key: 'mfott',
    teamSize: 5,
    technologies: ['.NET Core 3', 'Angular 8', 'Microservices', 'DDD', 'RabbitMQ', 'Stored Procedures', 'Email', 'Postman', 'SQL Server'],
  },
  {
    key: 'congLuongCom',
    teamSize: 4,
    technologies: ['React', '.NET 9', 'Azure', 'MySQL', 'SQL Server', 'Postman', 'REST API'],
  },
  {
    key: 'pandaloyalty',
    teamSize: 5,
    technologies: ['NodeJS', 'C# (.NET Core 3.1)', 'MySQL', 'Docker', 'Zalo API', 'KiotViet API', 'QR Code Scanner', 'MVC', 'Swagger', 'Postman'],
  },
]
