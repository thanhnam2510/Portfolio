import {
  SiAngular, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss,
  SiMaterialdesign, SiDotnet, SiNodedotjs, SiNestjs, SiGraphql, SiMysql, SiPostgresql, SiMongodb,
  SiRabbitmq, SiWebrtc, SiDocker, SiGithubactions, SiGit, SiPostman, SiSwagger,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { VscAzure } from 'react-icons/vsc'
import {
  TbBrandCSharp, TbDatabaseCog, TbApi, TbTopologyStar3, TbPlugConnected, TbServer2, TbBrain, TbCloud,
  TbLayout, TbServerBolt, TbDatabase, TbBolt, TbTools, TbBook,
} from 'react-icons/tb'

/** Skill groups; `color` is each technology's brand colour, darkened where needed for contrast on white. */
export const skillCategories = [
  {
    key: 'frontend',
    icon: TbLayout,
    skills: [
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Angular Signals', icon: SiAngular, color: '#C3002F' },
      { name: 'Angular Material', icon: SiMaterialdesign, color: '#3F51B5' },
      { name: 'React', icon: SiReact, color: '#087EA4' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#111111' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#C9B100' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#0E9DBF' },
    ],
  },
  {
    key: 'backend',
    icon: TbServerBolt,
    skills: [
      { name: 'C#', icon: TbBrandCSharp, color: '#68217A' },
      { name: '.NET / ASP.NET Core', icon: SiDotnet, color: '#512BD4' },
      { name: 'Entity Framework Core', icon: TbDatabaseCog, color: '#512BD4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
      { name: 'Express / NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'RESTful API', icon: TbApi, color: '#4F46E5' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Microservices & DDD', icon: TbTopologyStar3, color: '#0F766E' },
    ],
  },
  {
    key: 'database',
    icon: TbDatabase,
    skills: [
      { name: 'SQL Server', icon: DiMsqlServer, color: '#CC2927' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    key: 'realtime',
    icon: TbBolt,
    skills: [
      { name: 'SignalR', icon: TbPlugConnected, color: '#512BD4' },
      { name: 'LiveKit / WebRTC', icon: SiWebrtc, color: '#333333' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    ],
  },
  {
    key: 'devops',
    icon: TbTools,
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#1D63ED' },
      { name: 'Azure', icon: VscAzure, color: '#0078D4' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger', icon: SiSwagger, color: '#4E8B1F' },
      { name: 'VPS & Hosting', icon: TbServer2, color: '#475569' },
    ],
  },
  {
    key: 'learning',
    icon: TbBook,
    skills: [
      { name: 'AI', icon: TbBrain, color: '#DB2777' },
      { name: 'Cloud', icon: TbCloud, color: '#0284C7' },
    ],
  },
]
