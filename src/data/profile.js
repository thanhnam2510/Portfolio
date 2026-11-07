import cvFile from '@/assets/documents/NguyenHuuThanhNam.pdf'

/** Single source of truth for personal details; edit here, not in components. */
export const profile = {
  name: 'Nguyen Huu Thanh Nam',
  shortName: 'Thanh Nam',
  /** Shown as "{n}+ years" in the hero, About text and stats. Update manually. */
  yearsOfExperience: 5,
  avatar: `${import.meta.env.BASE_URL}image/thanhnam.jpg`,
  cv: { url: cvFile, fileName: 'NguyenHuuThanhNam.pdf' },
  email: 'namnguyenhuuthanh@gmail.com',
  phone: { display: '(+84) 898 522 510', href: 'tel:+84898522510' },
  address: 'phường Thủ Đức, Thành phố Hồ Chí Minh',
  links: {
    linkedin: 'https://www.linkedin.com/in/nam-nguyen-051a17207/',
    linkedinHandle: 'nam-nguyen-051a17207',
  },
}
