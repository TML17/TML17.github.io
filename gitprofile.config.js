// gitprofile.config.js

const config = {
  github: {
    username: 'TML17', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'chenxing-liu-916730204',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://TML17.github.io',
    phone: '',
    email: 'liuchenxing9@gmail.com',
  },
  resume: {
    fileUrl:
      'Chenxing_Liu_Resume.pdf', // Empty fileUrhttps://github.com/TML17/CSC324_Individual_Projectl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'JavaScript',
    'React.js',
    'Node.js',
    'C++',
    'MySQL',
    'C',
    'Git',
    'HTML',
    'CSS',
    'R & RShint',
    'Tensorflow',
    'Pytorch',
  ],
  experiences: [
    {
      company: 'Elbica Lab, Grinnell College',
      position: 'Research Assistant',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: 'https://elbica.cs.grinnell.edu',
    },
    {
      company: 'Pattern Learning and Mining(PALM) Lab, Southeast University',
      position: 'Research Assistant',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://palm.seu.edu.cn',
    },
    {
      company: 'Democratic System Inc.',
      position: 'Software Engineer Intern',
      from: 'September 2023',
      to: 'December 2023',
      companyLink: 'https://https://democraticsystems.org',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Grinnell College',
      degree: 'Bachelors of Arts',
      from: 'August 2021',
      to: 'Present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Greenhouse Gas Emission Visualization',
      description:
        'Developed a robust data visualization application and implemented user-friendly interactive controls, using R and Shiny to dynamically represent greenhouse gas emissions by countries and Instituted a clean and modern web interface design, ensuring an engaging user experience with dynamic hover effects and transparency settings.',
      imageUrl: '/images/img1.png',
      link: 'https://tml17.shinyapps.io/csc324_individual_project/',
    },
    {
      title: 'DSI Performance-Tool',
      description:
        'The DSI-Performance-Tool represents a joint project carried out by a five-member team, crafted using Python and Flask, and is designed for analyzing food security policies. This tool is notable for its strong data processing abilities and its capacity for generating dynamic charts. My role mainly involved front-end development, concentrating on improving the user interface and overall user experience. This effort ensured that the tool was not only analytically robust but also intuitive and easy to use',
      imageUrl: '/images/img2.png',
      link: 'https://github.com/DemocraticSystemsIncorporated/DSI-Performance-Tool/tree/all_years',
    },
    {
      title: 'Contrastive Canonical Correlation Analysis (cCCA) Development',
      description:
        'Addressed the limitation of CCA by integrating principles from Contrastive Learning to emphasize differential features. Then introduced concepts of target datasets and background datasets, allowing cCCA to maximize correlation and intra-view variance of target data while minimizing background data variance. Developed an algorithm and conducted experiments on an artificially synthesized dataset and two real datasets using Python, showcasing superior effectiveness of the cCCA algorithm.',
      imageUrl: '/images/img3.png',
      link: 'Canonical__Correlation_Analysis_based_on_Contrastive_Learning.pdf',
    },
    {
      title: 'Mixed-effects Logistic Regression Model on Fosterage Children',
      description:
        'Systematically built and evaluated mixed-effects logistic regression models. Manually processing stepwise regression with varying predictor combinations, using the AIC for optimal model selection. In the process of development, I implemented parallel processing techniques for efficient computation during model evaluation, handling the computational complexity of evaluating numerous model combinations.',
      imageUrl: '/images/img4.png',
      link: 'https://github.com/TML17/Dominican-Republic-Foster-Children',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
};

export default config;
