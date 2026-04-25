import type { ReactNode } from 'react';

export interface FormatCard {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export const formats: FormatCard[] = [
  {
    number: '01',
    icon: <img src="public/icon1.png" alt="🏆" />,
    title: 'Horeca Chef Competition',
    description:
      'Black Box format. 20 kitchen stations. Celebrity jury. 4 categories. Real prize money. The most honest test of a chef\'s ability.',
    tags: ['PROFESSIONAL', 'CLOUD KITCHEN', 'STUDENTS', 'BAKERY'],
  },
  {
    number: '02',
    icon: <img src="public/icon2.png" alt="🎤" />,
    title: 'Industry Sessions',
    description:
      '10 sessions. Practitioners only. If you have not done it — you do not speak about it. Real answers from real operators.',
    tags: ['SCALING', 'TECHNOLOGY', 'TALENT', 'INVESTORS'],
  },
  {
    number: '03',
    icon: <img src="public/icon3.png" alt="🏛️" />,
    title: 'Exhibition Zone',
    description:
      '50+ curated brands. 5,000+ Horeca decision-makers on the floor. Category exclusivity. Pre-scheduled B2B meetings confirmed before the event.',
    tags: ['BRANDS', 'SUPPLIERS', 'CATEGORY EXCLUSIVE'],
  },
  {
    number: '04',
    icon: <img src="public/icon4.png" alt="⭐" />,
    title: 'Star Awards',
    description:
      'India\'s first independent undercover restaurant evaluation. 16 categories. No nominations. No payments. Pure merit. Already happening across NCR.',
    tags: ['16 CATEGORIES', 'UNDERCOVER', 'INDEPENDENT'],
  },
  {
    number: '05',
    icon: <img src="public/icon5.png" alt="🤝" />,
    title: 'B2B Interaction Zones',
    description:
      'Pre-scheduled structured meetings. 8 private branded rooms. Your meeting schedule confirmed before you walk in. No waiting. No cold conversations.',
    tags: ['PRE-SCHEDULED', 'QUALIFIED BUYERS'],
  },
  {
    number: '06',
    icon: <img src="public/icon6.png" alt="🚀" />,
    title: 'Horeca Rise',
    description:
      'India\'s first Horeca investment programme. Apply for ₹1,000. Whether selected or not — your profile reaches every confirmed investor. 100 pitch live.',
    tags: ['INVESTMENT', 'LIVE PITCHES', 'INVESTORS'],
  },
  {
    number: '07',
    icon: <img src="public/icon7.png" alt="🧑‍💼" />,
    title: 'Consultant Connect',
    description:
      '15-20 Horeca specialists. Operations, technology, HR, legal, finance, growth. 20-minute slots. Pre-schedule online or walk in. Free with every delegate pass.',
    tags: ['OPERATIONS', 'FINANCE', 'LEGAL', 'FREE'],
  },
];