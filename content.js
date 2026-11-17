/*
  content.js: everything the site says about you.

  Edit the text between the quotes, save, refresh the page. There is no build step.

  - Wrap words in **double asterisks** to make them bold.
  - Delete an item and it disappears. Empty a whole list and its section disappears.
  - Add an item by copying an existing one, commas included.
  - After editing, open index.html?check to confirm nothing broke.

  Link previews (LinkedIn, WhatsApp) and search results read the <title> and
  <meta> lines at the top of index.html, not this file. Update those by hand
  if you change your name or headline.
*/
window.PORTFOLIO = {

  /* ---------- Who you are ---------- */
  name: "Syed Jawwad Raza",
  role: "Senior Backend Engineer",
  headline: "Backend engineer for fintech and AI.",
  intro: "I build the systems that move money: remittance processing, payment integrations and the controls regulators ask for. I use AI tooling to ship them faster.",
  location: "Karachi, Pakistan",

  /* ---------- How to reach you ---------- */
  email: "jawwadrizvi24@gmail.com",
  resume: "Syed-Jawwad-Raza-Resume.pdf",   // a file next to index.html. Use "" to hide the button.
  links: [
    { label: "GitHub",   url: "https://github.com/syed-jawwad-raza" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/syed-jawwad-raza" },
  ],

  /* ---------- The live line under the hero ----------
     perDay drives the "one every N seconds" sum and the running count. */
  volume: {
    perDay: 50000,
    text: "The remittance system I own at TPS processes **50,000+ remittances a day**.",
  },

  /* ---------- Results ----------
     The two bars are drawn to scale from the two values, so give both in the
     same unit (hours and hours, days and days). Visitors read the labels. */
  results: [
    {
      title: "E-statements in 1 hour instead of 10",
      how: "Moved statement processing to asynchronous, bulk operations in .NET Core, so clients could reconcile sooner.",
      where: "Avanza Solutions",
      before: { label: "10 hours", value: 10 },
      after:  { label: "1 hour",   value: 1 },
    },
    {
      title: "User onboarding in seconds instead of 8 minutes",
      how: "Removed redundant LDAP operations from Active Directory onboarding.",
      where: "TPS",
      before: { label: "8 minutes",     value: 480 },   // in seconds
      after:  { label: "a few seconds", value: 5 },     // 5 stands in for "a few"
    },
    {
      title: "Features in 5 days instead of 15",
      how: "Used generative AI tools such as GitHub Copilot and Cursor to shorten feature development cycles.",
      where: "Avanza Solutions",
      before: { label: "15 days", value: 15 },
      after:  { label: "5 days",  value: 5 },
    },
  ],

  /* ---------- What I work on ----------
     This is where you are not limited to past jobs. Say what you do and want to do. */
  focus: [
    {
      title: "Payments and remittances",
      text: "Real-time and cross-border payment processing, and integrations with rails and partners such as Raast and Western Union.",
    },
    {
      title: "Compliance and controls",
      text: "Screening, limit controls, manual review and audit trails for regulator-mandated transaction processing.",
    },
    {
      title: "Performance at volume",
      text: "Asynchronous and bulk processing, SQL tuning, and removing the slow step from systems that handle millions of transactions.",
    },
    {
      title: "Applied AI",
      text: "Generative AI in day-to-day engineering, and AI-backed automation for financial workflows.",
    },
  ],

  /* ---------- Experience (newest first) ----------
     awards are optional and print as rubber stamps on that job. */
  experience: [
    {
      company: "TPS",
      url: "https://www.tpsworldwide.com/",
      role: "Senior Backend Engineer (.NET)",
      start: "Jan 2025",
      end: "Present",
      location: "Karachi, Pakistan",
      awards: [
        { title: "Ranked #1", detail: "on KPIs" },
      ],
      points: [
        "Enabled real-time cross-border payments by integrating a .NET remittance processing system with **Raast** and global partners like **Western Union**, processing **50k+ remittances a day**.",
        "Delivered **State Bank-mandated** commercial transaction processing for a client bank: screening, limit controls and a manual review system that reduced payment rejections, cut manual effort and improved compliance and auditability across all transaction channels.",
        "Cut Active Directory user onboarding from **8 minutes to a few seconds** by eliminating redundant LDAP operations.",
        "Consistently delivered **ahead of deadlines with minimal bugs**, earning the #1 KPI ranking at TPS.",
      ],
    },
    {
      company: "Avanza Solutions",
      url: "https://avanzasolutions.com/",
      role: "Software Engineer",
      start: "Jul 2023",
      end: "Jan 2025",
      location: "Karachi, Pakistan",
      awards: [
        { title: "Star Performer", detail: "Q3 2024" },
        { title: "Team of the Quarter", detail: "Q2 2024" },
      ],
      points: [
        "Led development of a Cheque Printing System in **Node.js**, from concept to deployment.",
        "Cut E-Statement processing time by **90% (10 hours to 1 hour)** with asynchronous and bulk processing in .NET Core, enabling faster financial reconciliation for clients.",
        "Shortened feature development cycles **3x (15 days to 5)** using generative AI tools like GitHub Copilot and Cursor.",
        "Built custom middleware in **.NET Core** for comprehensive tracking of system activity.",
      ],
    },
    {
      company: "Euronet Worldwide",
      url: "https://www.euronetworldwide.com/",
      role: "Associate Software Engineer",
      start: "Nov 2022",
      end: "Jul 2023",
      location: "Karachi, Pakistan",
      points: [
        "Maintained **.NET web services** that process millions of financial transactions.",
        "Designed and optimized **SQL stored procedures** for large-scale banking applications.",
        "Contributed to Pakistan's first secure payment processing system integrated with the Thales API, using REST architectures.",
      ],
    },
    {
      company: "SkipQ",
      url: "https://www.skipq.org/",
      role: "Full-Stack Trainee",
      start: "Jun 2022",
      end: "Oct 2022",
      location: "Remote",
      points: [
        "Built full-stack applications on the MERN stack and implemented REST APIs.",
      ],
    },
  ],

  /* ---------- Projects ----------
     url is optional. Add AI and side projects here as you ship them. */
  projects: [
    {
      name: "Moneta Remittance Processing",
      role: "Technical Owner, TPS",
      text: "End-to-end ownership of a .NET remittance application: enhancements, development, testing, deployment and maintenance.",
      stack: [".NET", "Remittances"],
    },
    {
      name: "Cheque Printing System",
      role: "Project Lead, Avanza Solutions",
      text: "Led development in Node.js with an Oracle database, Dockerized deployments on AWS EC2 and ECS, and background jobs for automation such as database migrations and email alerts.",
      stack: ["Node.js", "Oracle DB", "Docker", "AWS EC2 and ECS"],
    },
    {
      name: "Supply Chain Management System",
      role: "Software Developer, Avanza Solutions",
      text: "Built the .NET Core backend for a blockchain-powered supply chain ledger.",
      stack: [".NET Core", "Blockchain"],
    },
  ],

  /* ---------- Skills ---------- */
  skills: [
    { group: "Backend",            items: ["C#", ".NET", ".NET Core", "Node.js", "REST APIs"] },
    { group: "Data",               items: ["SQL Server", "Oracle DB", "PostgreSQL", "MySQL"] },
    { group: "Cloud and delivery", items: ["AWS (EC2, ECS)", "Docker", "Linux", "GitHub", "GitLab"] },
    { group: "Frontend",           items: ["React", "Redux", "TypeScript", "JavaScript", "HTML", "CSS"] },
    { group: "AI tooling",         items: ["GitHub Copilot", "Cursor"] },
  ],

  /* ---------- Education ---------- */
  education: [
    {
      school: "National University of Sciences and Technology (NUST)",
      url: "https://nust.edu.pk/",
      degree: "Bachelor's degree",
      start: "Aug 2018",
      end: "Jun 2022",
      location: "Islamabad, Pakistan",
      notes: "Coursework: Object Oriented Programming, Digital Logic Design, Fundamentals of Programming.",
    },
  ],

  /* ---------- The cheque at the bottom ---------- */
  contact: {
    ask: "Thirty minutes of your time only",   // "The sum of" line
    amount: "30 min",                          // the amount box
    greeting: "Hi Jawwad,",                    // first line of the email draft
  },
};
