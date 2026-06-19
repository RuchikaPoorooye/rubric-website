// Central content for the Rubric site — sourced from rubric.co.za and the brand guide.

export const company = {
  name: 'Rubric Consulting (Pty) Ltd',
  tagline: 'Helping our customers deliver better software, faster.',
  founded: 2007,
  headquarters: 'Johannesburg, South Africa',
  engineers: '180+',
  sectors: ['Financial Services', 'Telecommunications', 'Logistics'],
  address: 'Rubric House, Block 1, Fourways Manor Office Park, 3 Macbeth Avenue, Fourways, Johannesburg 2191',
  website: 'rubric.co.za',
}

export const vision =
  'As our customer’s preferred partner, we shall be the industry leader in assisting them deliver the highest quality software that aligns with their business objectives.'

export const mission =
  'To deliver tailored software quality assurance solutions — comprising appropriate practices, processes and technologies — that enhance our clients’ delivery effectiveness and create lasting value for their stakeholders.'

export const values = [
  { title: 'Respect', body: 'We respect our colleagues, our clients and the work we do together.' },
  { title: 'Understanding', body: 'We understand industry standards and the goals behind every engagement.' },
  { title: 'Being Different', body: 'We stay innovative and client-centric in how we solve problems.' },
  { title: 'Reliable', body: 'We are reliable in our promises and accountable for our delivery.' },
  { title: 'Integrity', body: 'We act with responsibility and honesty in everything we do.' },
  { title: 'Communication', body: 'We foster open collaboration with our clients and each other.' },
]

export const peopleStatement =
  'Rubric’s business is people. It’s our people that have the loyalty, commitment and drive to be part of the best software quality company on the planet.'

// slug is used for service detail anchors / routing
export const services = [
  {
    slug: 'it-qa-and-testing-assessments',
    title: 'IT QA & Testing Assessments',
    summary: 'Independent assessment of your QA maturity, processes and tooling.',
    body: 'We benchmark your quality assurance maturity against industry standards, identify gaps and risks, and deliver a clear, prioritised roadmap to raise the quality of your software delivery.',
  },
  {
    slug: 'quality-assurance-and-test-process-consulting',
    title: 'QA & Test Process Consulting',
    summary: 'Practical consulting to strengthen quality assurance and test processes.',
    body: 'Our consultants help you design and embed effective test processes — from strategy and governance to day-to-day practices — tailored to your teams, tools and delivery model.',
  },
  {
    slug: 'specialist-technical-consulting',
    title: 'Specialist Technical Consulting',
    summary: 'Deep expertise across automation, mobile, performance and security.',
    body: 'Access specialist skills across test automation, mobile applications, performance engineering and security testing to tackle your most demanding technical challenges.',
  },
  {
    slug: 'staff-augmentation',
    title: 'Staff Augmentation',
    summary: 'Skilled QA and engineering specialists to scale your teams.',
    body: 'Augment your teams with experienced software quality engineers who integrate quickly, add capacity where you need it, and uphold Rubric’s standards of quality.',
  },
  {
    slug: 'managed-testing-services',
    title: 'Managed Testing Services',
    summary: 'End-to-end testing delivered and managed on your behalf.',
    body: 'We take ownership of your testing function as a managed service — people, process and tooling — giving you predictable quality outcomes without the overhead of building it in-house.',
  },
  {
    slug: 'mauritius-based-outsourcing',
    title: 'Mauritius Based Outsourcing',
    summary: 'Cost-effective, near-shore delivery from our Mauritius teams.',
    body: 'Leverage our Mauritius-based delivery capability for cost-effective, time-zone-friendly near-shore testing and engineering, backed by the same quality engineering culture.',
  },
  {
    slug: 'authorised-software-support',
    title: 'Authorised Software Support',
    summary: 'Authorised support to keep your platforms reliable and current.',
    body: 'As an authorised partner we provide licensing, administration and ongoing support so your tooling stays reliable, secure and up to date.',
  },
  {
    slug: 'research-and-development',
    title: 'Research & Development',
    summary: 'Exploring new approaches, tooling and accelerators for quality.',
    body: 'Our R&D continually explores new approaches, frameworks and accelerators — so the quality practices we bring to you keep pace with a fast-moving industry.',
  },
  {
    slug: 'training',
    title: 'Training',
    summary: 'Empowering teams with the skills to test and build with confidence.',
    body: 'We empower your people through practical, hands-on training in quality assurance, test automation and the tools that power modern software delivery.',
  },
]

// Brand department architecture — impact colours from the Rubric colour system.
export const departments = [
  { code: 'QA', tagline: 'Precision. Quality. Assurance.', color: '#E53935' },
  { code: 'ITSM', tagline: 'Service. Continuity. Enablement.', color: '#FFB020' },
  { code: 'DEV', tagline: 'Build. Scale. Innovate.', color: '#2563EB' },
  { code: 'CONSULTING', tagline: 'Advise. Transform. Lead.', color: '#7C3AED' },
  { code: 'TRAINING', tagline: 'Empower. Learn. Grow.', color: '#14B8A6' },
]

export const stats = [
  { value: 2007, label: 'Established', plain: true },
  { value: 180, suffix: '+', label: 'Software Quality Engineers' },
  { value: 9, label: 'Specialist service lines' },
  { value: 3, label: 'Core industry sectors' },
]

// Atlassian Expert Partner
export const atlassian = {
  status: 'Atlassian Expert Partner',
  intro:
    'Rubric is an Atlassian Expert Partner, offering the complete Atlassian product suite. We guide organisations through software delivery improvements — from Waterfall to Agile to DevOps — helping you understand, use and tweak Atlassian tools.',
  offering:
    'Our Senior Consultants partner with you in an advisory role, or at roots level as part of your team, to deliver the tools, teams, processes and know-how that enable faster, cheaper software delivery. This includes consulting, implementation, administration, training, licensing management and ongoing support.',
  products: [
    { name: 'Jira', use: 'Project & issue tracking' },
    { name: 'Confluence', use: 'Team collaboration & docs' },
    { name: 'Bitbucket', use: 'Git source control' },
    { name: 'Bamboo', use: 'CI / CD automation' },
    { name: 'Crowd', use: 'Single sign-on & access' },
    { name: 'Jira Service Management', use: 'IT service desk' },
    { name: 'Fisheye', use: 'Source code search' },
    { name: 'Crucible', use: 'Peer code review' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Partners', to: '/partners' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]
