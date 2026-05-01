export interface JuryMember {
  id: string;
  name: string;
  role: string;
  imagePlaceholder?: boolean;
  socialStats?: string;
}

export const juryMembers: JuryMember[] = [
  {
    id: '1',
    name: 'Mr. Sai Kumar Sharma',
    role: 'Jury Chair · Chef Competition',
    imagePlaceholder: false,
  },
  {
    id: '2',
    name: 'Mr. Anil',
    role: 'Celebrity Chef TV Personality',
    imagePlaceholder: false,
  },
  {
    id: '3',
    name: 'Mr. Michael',
    role: '1.4M Instagram · 900K YouTube',
    imagePlaceholder: false,
  },
  {
    id: '4',
    name: 'Mr. Harish',
    role: 'Executive Chef 5-Star Property',
    imagePlaceholder: false,
  },
];

export interface StarAwardCategory {
  icon: string;
  title: string;
  count: string;
}

export const starAwardCategories: StarAwardCategory[] = [
  { icon: '/icon1-star.png', title: 'Dining Excellence', count: '8 Categories' },
  { icon: '/icon2-star.png', title: 'Talent & People', count: '3 Categories' },
  { icon: '/icon3-star.png', title: 'Supplier Excellence', count: '4 Categories' },
  { icon: '/icon4-star.png', title: 'Innovation', count: '1 Category' },
];