import { SiJavascript } from 'react-icons/si'
import { TbBrandCSharp, TbApi, TbSql, TbCertificate } from 'react-icons/tb'

/** Degree text lives in `education.*` in the locale files. */
export const education = { period: '2019 – 2023' }

export const certifications = [
  { title: 'Foundational C# with Microsoft', issuer: 'freeCodeCamp', id: 'fcc7795fa04-35de-4713-867a-2e93f435a6b7-fcswm', icon: TbBrandCSharp, color: '#68217A' },
  { title: 'REST API', issuer: 'HackerRank', id: 'f9551c26cca3', icon: TbApi, color: '#4F46E5' },
  { title: 'JavaScript', issuer: 'HackerRank', id: '3ea42ccb599b', icon: SiJavascript, color: '#C9B100' },
  { title: 'SQL (Basic)', issuer: 'HackerRank', id: 'bbae284bbe4b', icon: TbSql, color: '#00758F' },
  { title: 'Certified SPA Supervisor', issuer: 'CSS', id: 'bbb6cf528', icon: TbCertificate, color: '#B45309' },
]
