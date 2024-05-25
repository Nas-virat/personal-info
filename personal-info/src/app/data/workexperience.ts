import { WorkExperience } from '../interface/workexperience';
const BASE_IMG_URL = '/assets';

export const AllWorkElement: WorkExperience[] = [
  {
    id: 4,
    role: 'DevOps Engineer',
    company: 'ExxonMobil Limited',
    date: 'Nov 2023 - May 2024',
    description: [
      '- Create Datadog dashboard to monitor pod utilization, latency of endpoint, error rate, Redis hit rate, Kafka metric.',
      '- Create custom Prometheus metric into Spring Boot Application with Micrometer.',
      '- Create alert systems, trigger alert when their is an error occurs in application.',
    ],
    skills: '- skills : Datadog, Openshift, Spring Boot, Micrometer',
    image: BASE_IMG_URL + '/ExxonMobil.png',
    link: 'https://corporate.exxonmobil.com/',
  },
  {
    id: 3,
    role: 'Internship Software Engineer',
    company: 'ExxonMobil Limited',
    date: 'Aug 2023 - Nov 2023',
    description: [
      '- Internship as a Software Developer at ExxonMobil IT within the Customer Experience Products Team.',
      '- Prepare a dataset for email sentence classification, distinguishing between regular sentences and disclaimer sentences.',
      '- Build an machine Learning LSTM model to automatically remove the header and footer from email text. Build a algorithm to detect Personally Identifiable Information (PII) and anonymize those text.',
    ],
    skills:
      '- skills : LSTM, Natural Language Processing, Machine Learning, Data Science',
    image: BASE_IMG_URL + '/ExxonMobil.png',
    link: 'https://corporate.exxonmobil.com/',
  },
  {
    id: 2,
    role: 'Internship Software Engineer',
    company: 'Mitr Phol Group,United Standard Terminal Co.,Ltd.',
    date: 'Jun 2023 - July 2023',
    description: [
      '- responsible on fair-fast analytics project. Create a map marker dashboard web using leaflet.js,google map api to monitor the location and route of truck in the system.',
      '- responsible on fair-fast booking project. Create a pop up announcement of fair fast booking by using Next.js for front end part,for the backend part use Restful API Node.js framework ',
      '- responsible on creating Annual Investment Budget Dashboard and Account Receivable Dashboard using Power BI for account team ',
    ],
    skills:
      '- skills : Next.js,leaflet.js,Google Map API,React,Node.js,Restful API,Power BI',
    image: BASE_IMG_URL + '/fairfast.png',
    link: 'https://www.fairfast.in.th/',
  },
  {
    id: 1,
    role: 'Internship Frontend Developer',
    company: 'BornToDev Inc.',
    date: 'Nov 2022 - Jan 2023',
    description: [
      '- Internship at BorntoDev as Front End Developer and responsible for Front End Development features and improvement of Devlab website. Devlab is a website for user to practice solving coding problem in many language such as C, CPP,Python,JavaScript and etc. Devlab has more than ten thousand client users. ',
      '- Create a modal feature in Devlab website, Tutorial feature in Devlab website',
    ],
    skills: '- skills : Git,GitHub,Web Development, Tailwind CSS, React',
    image: BASE_IMG_URL + '/BornDevlab.png',
    link: 'https://www.borntodev.com/intro-devlab-3-pro/',
  },
];
