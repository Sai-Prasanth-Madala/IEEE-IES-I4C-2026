import guest1 from "./components/guests/guest1.jpg"
import guest2 from "./components/guests/guest2.jpeg"
import speaker1 from "./components/Speakers/Speaker1.jpeg"
import speaker2 from "./components/Speakers/Speaker2.jpeg"
import speaker3 from "./components/Speakers/Speaker3.jpg"
import speaker4 from "./components/Speakers/Speaker4.jpeg"
import speaker5 from "./components/Speakers/Speaker5.jpeg"
import speaker6 from "./components/Speakers/Speaker6.jpg"
import speaker7 from "./components/Speakers/Speaker7.jpg"
import speaker8 from "./components/Speakers/Speaker8.jpeg"
export const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScF8Q1hEmqXrXALNGPCnLkEq8-RKQP8jCcERgl6EToDsxq9Ag/viewform'

export const chiefGuests = [
  {
    name: 'Prof. Juan José Rodríguez-Andina',
    role: 'President, IEEE Industrial Electronics Society (IEEE IES)',
    org: 'Professor, Dept of Electronic Technology, University of Vigo, Spain',
    image : guest1,
  },
  {
    name: 'Dr. Stamatis Karnouskos',
    role: 'Vice President, Industrial Activities, IEEE IES',
    org: 'Expert / Research & Technology Professional SAP, Germany',
    image : guest2,
  },
]

export const speakers = [
  { name: 'Dr. P. Balakrishna', role: 'Senior Engineer', org: 'GE ENERGY, Hyderabad', image: speaker1 },
  { name: 'Mr. Rajesh Sura', role: 'CEO & Co-Founder', org: 'Dynolt Technologies, Bengaluru', image: speaker2 },
  { name: 'Dr. Sankarara Rao Mutyala', role: 'Director & CTO', org: 'Nanosol Energy Pvt. Ltd., Hyderabad', image: speaker3 },
  { name: 'Dr. Deepak Ronank', role: 'Assistant Professor Dept. of Engineering Design', org: 'IIT Madras', image: speaker4 },
  { name: 'Dr. Gowtham Vegireddy', role: 'Manager – R&D', org: 'IFB Industries Limited, Bengaluru', image: speaker5 },
  { name: 'Dr. Srinivasa Rao Perla', role: 'Director', org: 'Technical Training at Cyient, Hyderabad', image: speaker6 },
  { name: 'Mrs. Ponnaganti Chandana', role: 'Product Manager', org: 'MathWorks ARKANCE IN Pvt. Ltd, Bengaluru', image: speaker7 },
  { name: 'Kavinga Upul Ekanayake', role: 'Member IEEE IES IAC', org: 'Head of Hardware Engineering at ACCELR, Colombo', image: speaker8 },
]

export const highlights = [
  'Expert Talks & Keynotes',
  'Industry–Academia Interaction',
  'Technology Exhibition & Live Demonstrations',
  'Hands-on Workshops',
  'Speed Mentoring',
  'IES Connect',
  'Panel Discussions',
  'Networking with Industry Leaders',
  'Internship & Career Opportunities',
]

export const areasOfInterest = [
  { code: 'SM-01', label: 'Smart Manufacturing & Industry 5.0' },
  { code: 'PE-02', label: 'Intelligent Power Electronics & Industrial Drives' },
  { code: 'EV-03', label: 'Electric Vehicles & Smart Mobility' },
  { code: 'BT-04', label: 'Battery Technologies & Charging' },
  { code: 'RG-05', label: 'Renewable Energy & Smart Grid' },
  { code: 'HF-06', label: 'Hydrogen & Fuel Cell Technologies' },
  { code: 'AI-07', label: 'Artificial Intelligence for Industry' },
  { code: 'DT-08', label: 'Digital Twins' },
]

export const tracks = [
  {
    n: '01',
    title: 'Insightful Sessions',
    body: 'Expert keynotes and technical sessions from IEEE IES leaders, academia, and industry, highlighting emerging trends in electrification, automation, AI, and industrial innovation.',
  },
  {
    n: '02',
    title: 'Network & Collaborate',
    body: 'Dynamic mentoring and IES Connect sessions that bridge students, researchers, and industry professionals, transforming meaningful conversations into opportunities for research, internships, collaborations, and startups.',
  },
  {
    n: '03',
    title: 'Industry Expo',
    body: 'An immersive technology exhibition featuring live demonstrations, innovative student projects, and cutting-edge industrial solutions.',
  },
]

export const schedule = [
  {
    day: 'Day 01',
    date: '22 Sept 2026',
    items: [
      { time: '09:00', label: 'Registration & Inauguration' },
      { time: '10:00', label: 'Keynote — Prof. Juan José Rodríguez-Andina' },
      { time: '11:30', label: 'Technical Sessions — Track A & B' },
      { time: '14:00', label: 'Hands-on Workshops' },
      { time: '16:00', label: 'Technology Exhibition Opens' },
    ],
  },
  {
    day: 'Day 02',
    date: '23 Sept 2026',
    items: [
      { time: '09:30', label: 'Keynote — Dr. Stamatis Karnouskos' },
      { time: '11:00', label: 'Panel Discussion — Industry 5.0 & Smart Mobility' },
      { time: '13:00', label: 'Speed Mentoring & IES Connect' },
      { time: '15:00', label: 'Industry Tours' },
      { time: '17:00', label: 'Valedictory & Closing' },
    ],
  },
]
