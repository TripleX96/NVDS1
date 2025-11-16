const IMAGE_STORAGE_PREFIX = 'nvds_images_';
const CONTENT_STORAGE_KEY = 'nvds_content';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const DEFAULT_CONTENT = {
  'nav.logoText': 'NVDS',
  'nav.logoLink': 'index.html#home',
  'nav.home': 'Home',
  'nav.homeLink': 'index.html#home',
  'nav.about': 'About',
  'nav.aboutLink': 'about.html',
  'nav.causes': 'Causes',
  'nav.causesLink': 'causes.html',
  'nav.blog': 'Blog',
  'nav.blogLink': 'blog.html',
  'nav.volunteer': 'Volunteer',
  'nav.volunteerLink': 'volunteer.html',
  'nav.contact': 'Contact',
  'nav.contactLink': 'contact.html',
  'nav.donate': 'Donate Now',
  'nav.donateLink': 'donate.html',
  'chat.buttonLabel': 'Chat',
  'chat.title': "Let's chat",
  'chat.subtitle': 'Select a question or send us a message.',
  'chat.intro': 'How can we help you today?',
  'chat.quickLabel': 'Quick questions',
  'chat.quickQuestion1': 'How can I volunteer?',
  'chat.quickQuestion2': 'Where do donations go?',
  'chat.quickQuestion3': 'How to start a project?',
  'chat.quickQuestion4': 'Can I visit the villages?',
  'chat.inputLabel': 'Your message',
  'chat.inputPlaceholder': 'Type your message...',
  'chat.sendLabel': 'Send',
  'chat.successMessage': 'Thanks! We will get back to you soon.',
  'hero.badge': 'Nepal Village Development Service',
  'hero.headingLead': 'Empowering rural',
  'hero.headingEmphasis': 'communities',
  'hero.headingTrail': 'in Nepal',
  'hero.description': "Partner with us to bring sustainable change across Nepal's rural heartlands. We empower families with education, health, and resilient livelihoods.",
  'hero.primaryButtonLabel': 'Join us',
  'hero.primaryButtonLink': 'donate.html',
  'hero.secondaryButtonLabel': 'Admin panel',
  'mission.title': 'Every initiative sparks lasting impact',
  'mission.paragraphOne': 'Each programme is co-designed with communities, so support travels further. Volunteers and donors ensure that rural families have the tools to thrive.',
  'mission.paragraphTwo': 'From seed banks to classrooms, from health camps to safe water, we carry hope into every village we serve.',
  'mission.linkLabel': 'See the stories',
  'mission.linkHref': 'blog.html',
  'causes.title': 'Our Key Causes',
  'causes.card1.title': 'Community Empowerment',
  'causes.card1.description': 'Leadership development, cooperatives, and village-led planning put voice and choice in local hands.',
  'causes.card1.linkLabel': 'Learn more',
  'causes.card1.linkHref': 'cause-livelihoods.html',
  'causes.card2.title': 'Health & Well-being',
  'causes.card2.description': "Mobile clinics, preventive care, and women's health outreach bring medical support within reach.",
  'causes.card2.linkLabel': 'See programmes',
  'causes.card2.linkHref': 'cause-healthcare.html',
  'causes.card3.title': 'Women & Youth Empowerment',
  'causes.card3.description': 'Scholarships, skill training, and mentorship spark opportunity for the next generation of leaders.',
  'causes.card3.linkLabel': 'Get involved',
  'causes.card3.linkHref': 'cause-education.html',
  'volunteer.title': 'Become a Volunteer',
  'volunteer.paragraphOne': 'Share your time, skills, and compassion in programmes that uplift rural families. From field visits to mentoring, there is a place for every heart.',
  'volunteer.paragraphTwo': 'Your presence powers resilience. Together, we build bridges to opportunity.',
  'volunteer.buttonLabel': 'Sign up',
  'volunteer.buttonLink': 'donate.html',
  'why.title': 'Why Choose us?',
  'why.card1.title': 'Making a real impact',
  'why.card1.description': 'We co-create solutions with communities and measure outcomes to ensure every resource counts.',
  'why.card2.title': 'Transparency you can trust',
  'why.card2.description': 'Clear reporting, community audits, and open communication keep supporters in the loop.',
  'why.card3.title': 'Stronger together',
  'why.card3.description': 'We grow resilient networks of women, youth, and changemakers who uplift one another.',
  'stories.title': 'Stories and insights',
  'stories.card1.title': 'Lighting the path to education',
  'stories.card1.description': 'Community classrooms now welcome 200+ children with inclusive learning materials.',
  'stories.card1.linkLabel': 'Continue reading',
  'stories.card1.linkHref': '#',
  'stories.card2.title': 'Health clinics for all',
  'stories.card2.description': 'Pop-up clinics reduce travel time, making essential care accessible and affordable.',
  'stories.card2.linkLabel': 'Our approach',
  'stories.card2.linkHref': '#',
  'stories.card3.title': 'Sustainable futures through clean energy',
  'stories.card3.description': 'Solar cooperatives power small businesses and keep families safe after sunset.',
  'stories.card3.linkLabel': 'See the impact',
  'stories.card3.linkHref': '#',
  'donate.title': 'Make a difference: Donate today',
  'donate.buttonLabel': 'Contribute',
  'footer.tagline': 'Driving community-led development throughout Nepal.',
  'quote.text': '"NVDS has truly changed lives with their dedication and support. Their efforts have given hope to so many."',
  'quote.attribution': '- Emily Carter, Volunteer Coordinator',
  'footer.navWork': 'Our work',
  'footer.navVolunteer': 'Volunteer',
  'footer.navStories': 'Stories',
  'footer.navDonate': 'Donate',
  'footer.copyright': 'Nepal Village Development Service. All rights reserved.',
  'about.hero.headingLead': 'Creating a',
  'about.hero.headingEmphasis': 'Better Tomorrow',
  'about.hero.storyTitle': 'Our History & Goal.',
  'about.hero.storyBody':
    'Founded in 2009, Nepal Village Development Society (NVDS) has been dedicated to uplifting rural communities through health awareness, education, and development programs. From reproductive health campaigns and HIV/AIDS awareness in Kavrepalanchok to COVID-19 relief efforts with vaccination drives and food distribution, we have always stood by vulnerable groups. Building on this foundation, our goal is to create healthier, self-reliant, and empowered communities by addressing poverty, malnutrition, and educational barriers through sustainable and inclusive programs.',
  'about.hero.storyBodySecondary':
    'Across every initiative, we listen first, collaborate closely, and invest in long-term partnerships so that each program reflects the hopes and ambitions of the people we serve.',
  'about.impact.title': 'The meaningful ways we create lasting positive impact',
  'about.impact.description':
    'Every programme is rooted in community leadership, blending local wisdom with resources that ensure families thrive for generations.',
  'about.impact.badge': 'Creating lasting change',
  'about.impact.cardTitle': 'Creating Lasting Change',
  'about.impact.cardBody':
    'Our goal is to empower rural communities by improving health, education, and livelihoods while promoting renewable energy and environmental sustainability, building a future that is healthy, self-reliant, and resilient.',
  'about.impact.cardButtonLabel': 'Donate Now',
  'about.impact.cardButtonHref': 'index.html#donate',
  'about.cta.tagline': 'Join us in making a difference',
  'about.cta.title': 'Join us in making a difference',
  'about.cta.description':
    'Your support can help change lives and transform communities. Whether through donations, volunteering, or spreading awareness, every action counts.',
  'about.cta.buttonLabel': 'Join us Today',
  'about.cta.buttonHref': 'index.html#donate',
  'about.quote.text': 'Our mission is to create a lasting impact by driving real change and improving lives.',
  'about.quote.attribution': 'Nepal Village Development Society',
  'about.pillars.title': 'Our mission in action',
  'about.pillars.description':
    'Guided by community leaders and local partners, we design initiatives that respond to immediate needs while building resilience for the future.',
  'about.pillars.card1.number': '01',
  'about.pillars.card1.title': 'Enhance access to quality healthcare, education, and livelihood opportunities.',
  'about.pillars.card1.description':
    'Ensuring rural communities become self-reliant, resilient, and capable of breaking the cycle of poverty.',
  'about.pillars.card2.number': '02',
  'about.pillars.card2.title': 'Drive initiatives in renewable energy, environmental conservation, and sustainable practices.',
  'about.pillars.card2.description':
    'Protect natural resources while fostering long-term community development and climate resilience.',
  'causes.hero.badge': 'Our causes',
  'causes.hero.heading': 'Programmes that uplift every generation',
  'causes.hero.description':
    'We partner with rural communities to meet urgent needs while building the foundations for long-term resilience. Explore how each initiative moves us closer to lasting opportunity.',
  'causes.hero.primaryButtonLabel': 'Support a cause',
  'causes.hero.primaryButtonHref': 'donate.html',
  'causes.hero.secondaryButtonLabel': 'Become a volunteer',
  'causes.hero.secondaryButtonHref': 'volunteer.html',
  'causes.hero.stat1.label': 'Health camps',
  'causes.hero.stat1.value': '56+',
  'causes.hero.stat2.label': 'Communities served',
  'causes.hero.stat2.value': '32',
  'causes.hero.stat3.label': 'Women trained',
  'causes.hero.stat3.value': '1,100',
  'causes.focus.title': 'Where your support makes the greatest impact',
  'causes.focus.description':
    'Each programme responds to local priorities identified by the community. Together we create pathways to wellbeing, opportunity, and dignity.',
  'causes.focus.card1.title': 'Healthcare access',
  'causes.focus.card1.description':
    'Mobile health clinics, maternal care, and wellness education ensure families receive the support they need close to home.',
  'causes.focus.card1.linkLabel': 'Partner with us',
  'causes.focus.card1.linkHref': 'contact.html',
  'causes.focus.card2.title': 'Education & skills',
  'causes.focus.card2.description':
    'Scholarships, literacy groups, and technical training support lifelong learning for children, youth, and caregivers.',
  'causes.focus.card2.linkLabel': 'Volunteer your expertise',
  'causes.focus.card2.linkHref': 'volunteer.html',
  'causes.focus.card3.title': 'Livelihood resilience',
  'causes.focus.card3.description':
    'Cooperative farming, savings groups, and clean energy solutions help households thrive and weather change.',
  'causes.focus.card3.linkLabel': 'See fund priorities',
  'causes.focus.card3.linkHref': 'donate.html',
  'causes.programmes.eyebrow': 'How we work',
  'causes.programmes.title': 'Community-led programmes that transform futures',
  'causes.programmes.description':
    'Our teams co-design initiatives alongside village leaders. Every project passes through three guiding stages that keep solutions rooted in local wisdom and measurable outcomes.',
  'causes.programmes.step1.title': 'Listen & map priorities',
  'causes.programmes.step1.description':
    'We gather insights through household visits, focus groups, and youth councils to understand emerging needs.',
  'causes.programmes.step2.title': 'Build capacity together',
  'causes.programmes.step2.description':
    'Local facilitators receive training, resources, and mentorship so programmes remain community-owned.',
  'causes.programmes.step3.title': 'Measure & share impact',
  'causes.programmes.step3.description':
    'We track outcomes with the community, celebrate milestones, and revise plans to keep momentum strong.',
  'causes.cta.title': 'Ready to champion a cause?',
  'causes.cta.description':
    'Bring your voice to rural Nepal. Sponsor a programme, lead a fundraiser, or share your skills with our partner communities.',
  'causes.cta.primaryButtonLabel': 'Fund a project',
  'causes.cta.primaryButtonHref': 'donate.html',
  'causes.cta.secondaryButtonLabel': 'Talk to our team',
  'causes.cta.secondaryButtonHref': 'contact.html',
  'blog.hero.badge': 'Stories & insights',
  'blog.hero.heading': "Real stories from Nepal's rural changemakers",
  'blog.hero.description':
    'Follow the journeys of families, youth leaders, and volunteers transforming their communities through NVDS programmes.',
  'blog.hero.primaryButtonLabel': 'Pitch a story',
  'blog.hero.primaryButtonHref': 'contact.html',
  'blog.hero.secondaryButtonLabel': 'Support our work',
  'blog.hero.secondaryButtonHref': 'donate.html',
  'blog.hero.feature.category': 'Field update',
  'blog.hero.feature.title': "Women's cooperatives launch new seed bank",
  'blog.hero.feature.summary':
    'A new partnership is helping three women-led cooperatives preserve climate-resilient seeds while expanding income opportunities.',
  'blog.hero.feature.linkLabel': 'Read full story',
  'blog.hero.feature.linkHref': '#',
  'blog.grid.title': 'Latest from the blog',
  'blog.grid.description':
    "Discover what's new across health, education, livelihood, and climate resilience programmes.",
  'blog.grid.card1.category': 'Health & wellness',
  'blog.grid.card1.title': 'Mobile clinics reach 1,200 families with preventive care',
  'blog.grid.card1.summary':
    'Volunteer doctors and local nurses worked side-by-side to provide screenings, vaccinations, and nutrition coaching across five wards.',
  'blog.grid.card1.linkLabel': 'Continue reading',
  'blog.grid.card1.linkHref': '#',
  'blog.grid.card2.category': 'Education',
  'blog.grid.card2.title': 'Community classrooms open doors for first-generation learners',
  'blog.grid.card2.summary':
    'Parents and mentors share how flexible schedules and peer groups are helping students stay in school and dream bigger.',
  'blog.grid.card2.linkLabel': 'View programme',
  'blog.grid.card2.linkHref': '#',
  'blog.grid.card3.category': 'Climate resilience',
  'blog.grid.card3.title': 'Solar cooperatives empower women entrepreneurs',
  'blog.grid.card3.summary':
    'Clean energy kiosks are powering tailoring businesses, spice cooperatives, and cold storage for fresh produce.',
  'blog.grid.card3.linkLabel': 'See the impact',
  'blog.grid.card3.linkHref': '#',
  'blog.newsletter.title': 'Get stories delivered to your inbox',
  'blog.newsletter.description':
    'Stay updated with quarterly highlights, volunteer opportunities, and ways to take action with NVDS.',
  'blog.newsletter.fieldLabel': 'Email address',
  'blog.newsletter.buttonLabel': 'Subscribe',
  'contact.hero.badge': 'Connect with NVDS',
  'contact.hero.heading': "We're here to collaborate, support, and listen",
  'contact.hero.description':
    "Reach out to discuss partnerships, volunteer opportunities, press inquiries, or any question about our work across Nepal.",
  'contact.hero.detail1.label': 'Visit us',
  'contact.hero.detail1.value': 'New Baneshwor, Kathmandu, Nepal',
  'contact.hero.detail2.label': 'Call',
  'contact.hero.detail2.value': '+977-9841479048',
  'contact.hero.detail3.label': 'Email',
  'contact.hero.detail3.value': 'nvideso@gmail.com',
  'contact.form.title': 'Send us a message',
  'contact.form.description':
    "Share a few details and our team will respond within two working days. We're grateful for your interest in powering rural-led development.",
  'contact.form.highlight1': 'Collaborate on community programmes',
  'contact.form.highlight2': 'Plan a visit to project sites',
  'contact.form.highlight3': 'Request fundraising resources',
  'contact.form.nameLabel': 'Name',
  'contact.form.namePlaceholder': 'Your name',
  'contact.form.emailLabel': 'Email',
  'contact.form.emailPlaceholder': 'you@example.com',
  'contact.form.phoneLabel': 'Phone',
  'contact.form.phonePlaceholder': '+977...',
  'contact.form.messageLabel': 'How can we help?',
  'contact.form.messagePlaceholder': 'Share your message',
  'contact.form.buttonLabel': 'Send message',
  'contact.support.title': 'Media & partnerships',
  'contact.support.description':
    'For speaking engagements, interviews, or collaboration requests, connect with our communications lead directly.',
  'contact.support.linkLabel': 'Email our team',
  'contact.support.linkHref': 'mailto:nvideso@gmail.com',
  'volunteerPage.hero.badge': 'Volunteer with purpose',
  'volunteerPage.hero.heading': 'Stand beside rural leaders shaping tomorrow',
  'volunteerPage.hero.description':
    'From remote field visits to remote mentoring, volunteers fuel NVDS programmes with expertise, empathy, and dedication.',
  'volunteerPage.hero.primaryButtonLabel': 'Apply now',
  'volunteerPage.hero.primaryButtonHref': 'contact.html',
  'volunteerPage.hero.secondaryButtonLabel': 'Explore programmes',
  'volunteerPage.hero.secondaryButtonHref': 'causes.html',
  'volunteerPage.hero.highlight1': 'Health camps & wellness outreach',
  'volunteerPage.hero.highlight2': 'Education, mentoring & youth clubs',
  'volunteerPage.hero.highlight3': 'Community research & storytelling',
  'volunteerPage.steps.title': 'Your volunteer journey in three stages',
  'volunteerPage.steps.description':
    'We ensure every volunteer is prepared, supported, and celebrated throughout their placement.',
  'volunteerPage.steps.card1.title': 'Discover your fit',
  'volunteerPage.steps.card1.description':
    "Share your interests and availability. We'll recommend roles ranging from field outreach to digital storytelling.",
  'volunteerPage.steps.card2.title': 'Prepare & learn',
  'volunteerPage.steps.card2.description':
    'Participate in orientation sessions, receive cultural guidance, and connect with your programme mentor.',
  'volunteerPage.steps.card3.title': 'Create impact together',
  'volunteerPage.steps.card3.description':
    'Collaborate with local teams, measure results, and share reflections that inspire future changemakers.',
  'volunteerPage.stories.eyebrow': 'Volunteer voices',
  'volunteerPage.stories.title': '"I saw the power of community-led change up close."',
  'volunteerPage.stories.quote':
    '"During my time with NVDS, I supported a literacy circle in Kavrepalanchok. Mothers who once feared reading now lead storytelling circles for their children. The pride on their faces stays with me."',
  'volunteerPage.stories.attribution': '- Sita, education volunteer',
  'volunteerPage.stories.linkLabel': 'Read more stories',
  'volunteerPage.stories.linkHref': 'blog.html',
  'volunteerPage.cta.title': "Let's design a volunteer role that fits you",
  'volunteerPage.cta.description':
    "Tell us about your skills, cause areas, and availability. We'll follow up with opportunities that match your interests.",
  'volunteerPage.cta.primaryButtonLabel': 'Start a conversation',
  'volunteerPage.cta.primaryButtonHref': 'contact.html',
  'volunteerPage.cta.secondaryButtonLabel': 'Support programmes',
  'volunteerPage.cta.secondaryButtonHref': 'donate.html',
  'donatePage.hero.badge': 'Support NVDS',
  'donatePage.hero.heading': 'Your generosity powers rural resilience',
  'donatePage.hero.description':
    "Every contribution helps deliver healthcare, education, and sustainable livelihoods to families across Nepal's villages.",
  'donatePage.hero.primaryButtonLabel': 'Give monthly',
  'donatePage.hero.primaryButtonHref': '#',
  'donatePage.hero.secondaryButtonLabel': 'Make a one-time gift',
  'donatePage.hero.secondaryButtonHref': '#',
  'donatePage.hero.point1': 'Transparent reporting with quarterly updates',
  'donatePage.hero.point2': 'Community-led governance for every project',
  'donatePage.hero.point3': 'Tax-deductible receipts provided on request',
  'donatePage.options.title': "Choose the giving option that's right for you",
  'donatePage.options.description':
    'Whether you donate monthly or once, your support ensures programmes can respond to urgent needs while planning for long-term impact.',
  'donatePage.options.card1.title': 'Monthly giving circle',
  'donatePage.options.card1.description':
    'Sustain healthcare outreach, literacy clubs, and livelihood cooperatives with reliable funding.',
  'donatePage.options.card1.benefit1': 'Exclusive quarterly briefings',
  'donatePage.options.card1.benefit2': 'Spotlight stories from programme leads',
  'donatePage.options.card1.buttonLabel': 'Join the circle',
  'donatePage.options.card1.buttonHref': '#',
  'donatePage.options.card2.title': 'One-time gift',
  'donatePage.options.card2.description':
    'Fund a specific project or respond to emergency needs caused by natural disasters and health crises.',
  'donatePage.options.card2.benefit1': 'Immediate confirmation and impact update',
  'donatePage.options.card2.benefit2': 'Custom acknowledgement for your records',
  'donatePage.options.card2.buttonLabel': 'Give today',
  'donatePage.options.card2.buttonHref': '#',
  'donatePage.options.card3.title': 'Corporate & group giving',
  'donatePage.options.card3.description':
    'Partner with NVDS through matching campaigns, CSR grants, or employee engagement programmes.',
  'donatePage.options.card3.benefit1': 'Co-branded impact reports',
  'donatePage.options.card3.benefit2': 'Volunteer days and storytelling workshops',
  'donatePage.options.card3.buttonLabel': 'Start a partnership',
  'donatePage.options.card3.buttonHref': 'contact.html',
  'donatePage.impact.eyebrow': 'Impact in focus',
  'donatePage.impact.title': 'How your donation travels through NVDS',
  'donatePage.impact.description':
    'Funds are allocated with community committees and audited annually. We prioritise transparency and measurable progress.',
  'donatePage.impact.breakdown1.label': '62% Programmes',
  'donatePage.impact.breakdown1.description':
    'Health camps, education initiatives, livelihood training, and climate resilience projects.',
  'donatePage.impact.breakdown2.label': '24% Community capacity',
  'donatePage.impact.breakdown2.description':
    'Leadership development, monitoring, and mentorship for local facilitators.',
  'donatePage.impact.breakdown3.label': '14% Stewardship',
  'donatePage.impact.breakdown3.description':
    'Operations, accountability systems, and storytelling that keep supporters informed.',
  'donatePage.form.title': 'Send your pledge',
  'donatePage.form.description':
    "Fill in the form and we'll share secure transfer details for domestic or international donors.",
  'donatePage.form.nameLabel': 'Name',
  'donatePage.form.namePlaceholder': 'Your name',
  'donatePage.form.emailLabel': 'Email',
  'donatePage.form.emailPlaceholder': 'you@example.com',
  'donatePage.form.amountLabel': 'Pledge amount',
  'donatePage.form.amountPlaceholder': 'NPR 10,000',
  'donatePage.form.messageLabel': 'Message',
  'donatePage.form.messagePlaceholder': "Tell us how you'd like to direct your support",
  'donatePage.form.buttonLabel': 'Submit pledge',
};

const CONTENT_SECTIONS = [
  {
    id: 'navigation',
    title: 'Header & navigation',
    description: 'Update the logo text, navigation items, and donate button.',
    fields: [
      { key: 'nav.logoText', label: 'Logo text', type: 'text' },
      { key: 'nav.logoLink', label: 'Logo link', type: 'text' },
      { key: 'nav.home', label: 'Navigation: Home label', type: 'text' },
      { key: 'nav.homeLink', label: 'Navigation: Home link', type: 'text' },
      { key: 'nav.about', label: 'Navigation: About label', type: 'text' },
      { key: 'nav.aboutLink', label: 'Navigation: About link', type: 'text' },
      { key: 'nav.causes', label: 'Navigation: Causes label', type: 'text' },
      { key: 'nav.causesLink', label: 'Navigation: Causes link', type: 'text' },
      { key: 'nav.blog', label: 'Navigation: Blog label', type: 'text' },
      { key: 'nav.blogLink', label: 'Navigation: Blog link', type: 'text' },
      { key: 'nav.volunteer', label: 'Navigation: Volunteer label', type: 'text' },
      { key: 'nav.volunteerLink', label: 'Navigation: Volunteer link', type: 'text' },
      { key: 'nav.contact', label: 'Navigation: Contact label', type: 'text' },
      { key: 'nav.contactLink', label: 'Navigation: Contact link', type: 'text' },
      { key: 'nav.donate', label: 'Donate button text', type: 'text' },
      { key: 'nav.donateLink', label: 'Donate button link', type: 'text' },
    ],
    images: ['nav-logo'],
  },
  {
    id: 'favicon',
    title: 'Site favicon',
    description: 'Upload the PNG icon used in the browser tab.',
    fields: [],
    images: ['site-favicon'],
  },
  {
    id: 'chat',
    title: 'Chat assistant',
    description: 'Manage the chat button, prompts, and confirmation message.',
    fields: [
      { key: 'chat.buttonLabel', label: 'Chat toggle label', type: 'text' },
      { key: 'chat.title', label: 'Chat panel title', type: 'text' },
      { key: 'chat.subtitle', label: 'Chat panel subtitle', type: 'textarea' },
      { key: 'chat.intro', label: 'Intro message', type: 'textarea' },
      { key: 'chat.quickLabel', label: 'Quick questions heading', type: 'text' },
      { key: 'chat.quickQuestion1', label: 'Quick question 1', type: 'text' },
      { key: 'chat.quickQuestion2', label: 'Quick question 2', type: 'text' },
      { key: 'chat.quickQuestion3', label: 'Quick question 3', type: 'text' },
      { key: 'chat.quickQuestion4', label: 'Quick question 4', type: 'text' },
      { key: 'chat.inputLabel', label: 'Input label (screen readers)', type: 'text' },
      { key: 'chat.inputPlaceholder', label: 'Input placeholder', type: 'text' },
      { key: 'chat.sendLabel', label: 'Send button label', type: 'text' },
      { key: 'chat.successMessage', label: 'Confirmation message', type: 'textarea' },
    ],
  },
  {
    id: 'hero',
    title: 'Hero section',
    description: 'Update the headline, badge, description, and main call-to-action.',
    fields: [
      { key: 'hero.badge', label: 'Badge text', type: 'text' },
      { key: 'hero.headingLead', label: 'Heading lead', type: 'text' },
      { key: 'hero.headingEmphasis', label: 'Heading emphasis', type: 'text' },
      { key: 'hero.headingTrail', label: 'Heading trail', type: 'text' },
      { key: 'hero.description', label: 'Description', type: 'textarea' },
      { key: 'hero.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'hero.primaryButtonLink', label: 'Primary button link', type: 'text' },
      { key: 'hero.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
    ],
    images: ['hero-primary', 'hero-secondary', 'hero-tertiary'],
  },
  {
    id: 'mission',
    title: 'Mission section',
    description: 'Control the supporting copy and link in the mission segment.',
    fields: [
      { key: 'mission.title', label: 'Title', type: 'text' },
      { key: 'mission.paragraphOne', label: 'Paragraph one', type: 'textarea' },
      { key: 'mission.paragraphTwo', label: 'Paragraph two', type: 'textarea' },
      { key: 'mission.linkLabel', label: 'Link label', type: 'text' },
      { key: 'mission.linkHref', label: 'Link URL', type: 'text' },
    ],
    images: ['mission-image'],
  },
  {
    id: 'causes',
    title: 'Key causes',
    description: 'Edit the headline and each cause card.',
    fields: [
      { key: 'causes.title', label: 'Section title', type: 'text' },
      { key: 'causes.card1.title', label: 'Cause one title', type: 'text' },
      { key: 'causes.card1.description', label: 'Cause one description', type: 'textarea' },
      { key: 'causes.card1.linkLabel', label: 'Cause one link label', type: 'text' },
      { key: 'causes.card1.linkHref', label: 'Cause one link URL', type: 'text' },
      { key: 'causes.card2.title', label: 'Cause two title', type: 'text' },
      { key: 'causes.card2.description', label: 'Cause two description', type: 'textarea' },
      { key: 'causes.card2.linkLabel', label: 'Cause two link label', type: 'text' },
      { key: 'causes.card2.linkHref', label: 'Cause two link URL', type: 'text' },
      { key: 'causes.card3.title', label: 'Cause three title', type: 'text' },
      { key: 'causes.card3.description', label: 'Cause three description', type: 'textarea' },
      { key: 'causes.card3.linkLabel', label: 'Cause three link label', type: 'text' },
      { key: 'causes.card3.linkHref', label: 'Cause three link URL', type: 'text' },
    ],
    images: ['cause-empowerment', 'cause-health', 'cause-women'],
  },
  {
    id: 'volunteer',
    title: 'Volunteer section',
    description: 'Update volunteer messaging and button.',
    fields: [
      { key: 'volunteer.title', label: 'Title', type: 'text' },
      { key: 'volunteer.paragraphOne', label: 'Paragraph one', type: 'textarea' },
      { key: 'volunteer.paragraphTwo', label: 'Paragraph two', type: 'textarea' },
      { key: 'volunteer.buttonLabel', label: 'Button label', type: 'text' },
      { key: 'volunteer.buttonLink', label: 'Button link', type: 'text' },
    ],
    images: ['volunteer-image'],
  },
  {
    id: 'why',
    title: 'Why choose us',
    description: 'Adjust the section title and supporting feature cards.',
    fields: [
      { key: 'why.title', label: 'Section title', type: 'text' },
      { key: 'why.card1.title', label: 'Feature one title', type: 'text' },
      { key: 'why.card1.description', label: 'Feature one description', type: 'textarea' },
      { key: 'why.card2.title', label: 'Feature two title', type: 'text' },
      { key: 'why.card2.description', label: 'Feature two description', type: 'textarea' },
      { key: 'why.card3.title', label: 'Feature three title', type: 'text' },
      { key: 'why.card3.description', label: 'Feature three description', type: 'textarea' },
    ],
    images: ['why-hero'],
  },
  
  {
    id: 'donate',
    title: 'Donate panel',
    description: 'Update the donation call-to-action copy.',
    fields: [
      { key: 'donate.title', label: 'Title', type: 'text' },
      { key: 'donate.buttonLabel', label: 'Button label', type: 'text' },
    ],
    images: ['donate-image'],
  },
  {
    id: 'about-hero',
    title: 'About page â€" Hero',
    description: 'Manage the introductory heading and history copy.',
    fields: [
      { key: 'about.hero.headingLead', label: 'Heading lead', type: 'text' },
      { key: 'about.hero.headingEmphasis', label: 'Heading emphasis', type: 'text' },
      { key: 'about.hero.storyTitle', label: 'Story heading', type: 'text' },
      { key: 'about.hero.storyBody', label: 'Story body', type: 'textarea' },
      { key: 'about.hero.storyBodySecondary', label: 'Supporting paragraph', type: 'textarea' },
    ],
    images: ['about-hero-banner'],
  },
  {
    id: 'about-impact',
    title: 'About page â€" Impact section',
    description: 'Edit the impact heading, description, and supporting call-to-action.',
    fields: [
      { key: 'about.impact.title', label: 'Section title', type: 'text' },
      { key: 'about.impact.description', label: 'Section description', type: 'textarea' },
      { key: 'about.impact.badge', label: 'Badge label', type: 'text' },
      { key: 'about.impact.cardTitle', label: 'Card title', type: 'text' },
      { key: 'about.impact.cardBody', label: 'Card description', type: 'textarea' },
      { key: 'about.impact.cardButtonLabel', label: 'Button label', type: 'text' },
      { key: 'about.impact.cardButtonHref', label: 'Button link', type: 'text' },
    ],
    images: ['about-impact-primary', 'about-impact-secondary', 'about-impact-tertiary'],
  },
  {
    id: 'about-cta',
    title: 'About page â€" Call to action',
    description: 'Update the support invitation and button.',
    fields: [
      { key: 'about.cta.tagline', label: 'Card tagline', type: 'text' },
      { key: 'about.cta.title', label: 'Heading', type: 'text' },
      { key: 'about.cta.description', label: 'Description', type: 'textarea' },
      { key: 'about.cta.buttonLabel', label: 'Button label', type: 'text' },
      { key: 'about.cta.buttonHref', label: 'Button link', type: 'text' },
    ],
    images: ['about-cta-backdrop'],
  },
  {
    id: 'about-quote',
    title: 'About page â€" Mission quote',
    description: 'Control the quote and attribution highlight.',
    fields: [
      { key: 'about.quote.text', label: 'Quote', type: 'textarea' },
      { key: 'about.quote.attribution', label: 'Attribution', type: 'text' },
    ],
  },
  {
    id: 'about-pillars',
    title: 'About page â€" Impact pillars',
    description: 'Edit the closing section headline and guiding pillars.',
    fields: [
      { key: 'about.pillars.title', label: 'Section title', type: 'text' },
      { key: 'about.pillars.description', label: 'Section description', type: 'textarea' },
      { key: 'about.pillars.card1.number', label: 'Pillar one number', type: 'text' },
      { key: 'about.pillars.card1.title', label: 'Pillar one title', type: 'text' },
      { key: 'about.pillars.card1.description', label: 'Pillar one description', type: 'textarea' },
      { key: 'about.pillars.card2.number', label: 'Pillar two number', type: 'text' },
      { key: 'about.pillars.card2.title', label: 'Pillar two title', type: 'text' },
      { key: 'about.pillars.card2.description', label: 'Pillar two description', type: 'textarea' },
    ],
    images: ['about-pillar-one', 'about-pillar-two'],
  },
  {
    id: 'causes-hero',
    title: 'Causes page â€" Hero',
    description: 'Edit the hero heading, stats, and calls-to-action for the causes page.',
    fields: [
      { key: 'causes.hero.badge', label: 'Badge text', type: 'text' },
      { key: 'causes.hero.heading', label: 'Heading', type: 'text' },
      { key: 'causes.hero.description', label: 'Description', type: 'textarea' },
      { key: 'causes.hero.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'causes.hero.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'causes.hero.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'causes.hero.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
      { key: 'causes.hero.stat1.label', label: 'Stat one label', type: 'text' },
      { key: 'causes.hero.stat1.value', label: 'Stat one value', type: 'text' },
      { key: 'causes.hero.stat2.label', label: 'Stat two label', type: 'text' },
      { key: 'causes.hero.stat2.value', label: 'Stat two value', type: 'text' },
      { key: 'causes.hero.stat3.label', label: 'Stat three label', type: 'text' },
      { key: 'causes.hero.stat3.value', label: 'Stat three value', type: 'text' },
    ],
    images: ['causes-hero-primary', 'causes-hero-secondary'],
  },
  {
    id: 'causes-focus',
    title: 'Causes page â€" Focus areas',
    description: 'Update the focus section heading and featured cards.',
    fields: [
      { key: 'causes.focus.title', label: 'Section title', type: 'text' },
      { key: 'causes.focus.description', label: 'Section description', type: 'textarea' },
      { key: 'causes.focus.card1.title', label: 'Card one title', type: 'text' },
      { key: 'causes.focus.card1.description', label: 'Card one description', type: 'textarea' },
      { key: 'causes.focus.card1.linkLabel', label: 'Card one link label', type: 'text' },
      { key: 'causes.focus.card1.linkHref', label: 'Card one link URL', type: 'text' },
      { key: 'causes.focus.card2.title', label: 'Card two title', type: 'text' },
      { key: 'causes.focus.card2.description', label: 'Card two description', type: 'textarea' },
      { key: 'causes.focus.card2.linkLabel', label: 'Card two link label', type: 'text' },
      { key: 'causes.focus.card2.linkHref', label: 'Card two link URL', type: 'text' },
      { key: 'causes.focus.card3.title', label: 'Card three title', type: 'text' },
      { key: 'causes.focus.card3.description', label: 'Card three description', type: 'textarea' },
      { key: 'causes.focus.card3.linkLabel', label: 'Card three link label', type: 'text' },
      { key: 'causes.focus.card3.linkHref', label: 'Card three link URL', type: 'text' },
    ],
    images: ['causes-focus-one', 'causes-focus-two', 'causes-focus-three'],
  },
  {
    id: 'causes-programmes',
    title: 'Causes page â€" Programme stages',
    description: 'Control the "How we work" copy and step details.',
    fields: [
      { key: 'causes.programmes.eyebrow', label: 'Eyebrow label', type: 'text' },
      { key: 'causes.programmes.title', label: 'Heading', type: 'text' },
      { key: 'causes.programmes.description', label: 'Description', type: 'textarea' },
      { key: 'causes.programmes.step1.title', label: 'Step one title', type: 'text' },
      { key: 'causes.programmes.step1.description', label: 'Step one description', type: 'textarea' },
      { key: 'causes.programmes.step2.title', label: 'Step two title', type: 'text' },
      { key: 'causes.programmes.step2.description', label: 'Step two description', type: 'textarea' },
      { key: 'causes.programmes.step3.title', label: 'Step three title', type: 'text' },
      { key: 'causes.programmes.step3.description', label: 'Step three description', type: 'textarea' },
    ],
    images: ['causes-programmes-primary'],
  },
  {
    id: 'causes-cta',
    title: 'Causes page â€" Call to action',
    description: 'Update the closing invitation and buttons.',
    fields: [
      { key: 'causes.cta.title', label: 'Heading', type: 'text' },
      { key: 'causes.cta.description', label: 'Description', type: 'textarea' },
      { key: 'causes.cta.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'causes.cta.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'causes.cta.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'causes.cta.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
    ],
    images: ['causes-cta-backdrop'],
  },
  {
    id: 'blog-hero',
    title: 'Blog page â€" Hero',
    description: 'Manage the blog hero copy and featured story.',
    fields: [
      { key: 'blog.hero.badge', label: 'Badge text', type: 'text' },
      { key: 'blog.hero.heading', label: 'Heading', type: 'text' },
      { key: 'blog.hero.description', label: 'Description', type: 'textarea' },
      { key: 'blog.hero.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'blog.hero.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'blog.hero.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'blog.hero.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
      { key: 'blog.hero.feature.category', label: 'Feature category', type: 'text' },
      { key: 'blog.hero.feature.title', label: 'Feature title', type: 'text' },
      { key: 'blog.hero.feature.summary', label: 'Feature summary', type: 'textarea' },
      { key: 'blog.hero.feature.linkLabel', label: 'Feature link label', type: 'text' },
      { key: 'blog.hero.feature.linkHref', label: 'Feature link URL', type: 'text' },
    ],
    images: ['blog-hero-feature'],
  },
  {
    id: 'blog-grid',
    title: 'Blog page â€" Latest cards',
    description: 'Edit the blog listing heading and each story card.',
    fields: [
      { key: 'blog.grid.title', label: 'Section title', type: 'text' },
      { key: 'blog.grid.description', label: 'Section description', type: 'textarea' },
      { key: 'blog.grid.card1.category', label: 'Card one category', type: 'text' },
      { key: 'blog.grid.card1.title', label: 'Card one title', type: 'text' },
      { key: 'blog.grid.card1.summary', label: 'Card one summary', type: 'textarea' },
      { key: 'blog.grid.card1.linkLabel', label: 'Card one link label', type: 'text' },
      { key: 'blog.grid.card1.linkHref', label: 'Card one link URL', type: 'text' },
      { key: 'blog.grid.card2.category', label: 'Card two category', type: 'text' },
      { key: 'blog.grid.card2.title', label: 'Card two title', type: 'text' },
      { key: 'blog.grid.card2.summary', label: 'Card two summary', type: 'textarea' },
      { key: 'blog.grid.card2.linkLabel', label: 'Card two link label', type: 'text' },
      { key: 'blog.grid.card2.linkHref', label: 'Card two link URL', type: 'text' },
      { key: 'blog.grid.card3.category', label: 'Card three category', type: 'text' },
      { key: 'blog.grid.card3.title', label: 'Card three title', type: 'text' },
      { key: 'blog.grid.card3.summary', label: 'Card three summary', type: 'textarea' },
      { key: 'blog.grid.card3.linkLabel', label: 'Card three link label', type: 'text' },
      { key: 'blog.grid.card3.linkHref', label: 'Card three link URL', type: 'text' },
    ],
    images: ['blog-card-1', 'blog-card-2', 'blog-card-3'],
  },
  {
    id: 'blog-newsletter',
    title: 'Blog page â€" Newsletter',
    description: 'Adjust the newsletter invitation and button.',
    fields: [
      { key: 'blog.newsletter.title', label: 'Heading', type: 'text' },
      { key: 'blog.newsletter.description', label: 'Description', type: 'textarea' },
      { key: 'blog.newsletter.fieldLabel', label: 'Field label', type: 'text' },
      { key: 'blog.newsletter.buttonLabel', label: 'Button label', type: 'text' },
    ],
    images: ['blog-newsletter-image'],
  },
  {
    id: 'contact-hero',
    title: 'Contact page â€" Hero',
    description: 'Update the contact hero copy and details.',
    fields: [
      { key: 'contact.hero.badge', label: 'Badge text', type: 'text' },
      { key: 'contact.hero.heading', label: 'Heading', type: 'text' },
      { key: 'contact.hero.description', label: 'Description', type: 'textarea' },
      { key: 'contact.hero.detail1.label', label: 'Detail one label', type: 'text' },
      { key: 'contact.hero.detail1.value', label: 'Detail one value', type: 'text' },
      { key: 'contact.hero.detail2.label', label: 'Detail two label', type: 'text' },
      { key: 'contact.hero.detail2.value', label: 'Detail two value', type: 'text' },
      { key: 'contact.hero.detail3.label', label: 'Detail three label', type: 'text' },
      { key: 'contact.hero.detail3.value', label: 'Detail three value', type: 'text' },
    ],
    images: ['contact-hero-image'],
  },
  {
    id: 'contact-form',
    title: 'Contact page â€" Form',
    description: 'Edit the form description, prompts, and button.',
    fields: [
      { key: 'contact.form.title', label: 'Heading', type: 'text' },
      { key: 'contact.form.description', label: 'Description', type: 'textarea' },
      { key: 'contact.form.highlight1', label: 'Highlight one', type: 'text' },
      { key: 'contact.form.highlight2', label: 'Highlight two', type: 'text' },
      { key: 'contact.form.highlight3', label: 'Highlight three', type: 'text' },
      { key: 'contact.form.nameLabel', label: 'Name label', type: 'text' },
      { key: 'contact.form.namePlaceholder', label: 'Name placeholder', type: 'text' },
      { key: 'contact.form.emailLabel', label: 'Email label', type: 'text' },
      { key: 'contact.form.emailPlaceholder', label: 'Email placeholder', type: 'text' },
      { key: 'contact.form.phoneLabel', label: 'Phone label', type: 'text' },
      { key: 'contact.form.phonePlaceholder', label: 'Phone placeholder', type: 'text' },
      { key: 'contact.form.messageLabel', label: 'Message label', type: 'text' },
      { key: 'contact.form.messagePlaceholder', label: 'Message placeholder', type: 'text' },
      { key: 'contact.form.buttonLabel', label: 'Button label', type: 'text' },
    ],
  },
  {
    id: 'contact-support',
    title: 'Contact page â€" Support card',
    description: 'Manage the media and partnership contact information.',
    fields: [
      { key: 'contact.support.title', label: 'Heading', type: 'text' },
      { key: 'contact.support.description', label: 'Description', type: 'textarea' },
      { key: 'contact.support.linkLabel', label: 'Link label', type: 'text' },
      { key: 'contact.support.linkHref', label: 'Link URL', type: 'text' },
    ],
    images: ['contact-support-image'],
  },
  {
    id: 'volunteer-hero',
    title: 'Volunteer page â€" Hero',
    description: 'Adjust the volunteer hero content and highlights.',
    fields: [
      { key: 'volunteerPage.hero.badge', label: 'Badge text', type: 'text' },
      { key: 'volunteerPage.hero.heading', label: 'Heading', type: 'text' },
      { key: 'volunteerPage.hero.description', label: 'Description', type: 'textarea' },
      { key: 'volunteerPage.hero.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'volunteerPage.hero.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'volunteerPage.hero.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'volunteerPage.hero.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
      { key: 'volunteerPage.hero.highlight1', label: 'Highlight one', type: 'text' },
      { key: 'volunteerPage.hero.highlight2', label: 'Highlight two', type: 'text' },
      { key: 'volunteerPage.hero.highlight3', label: 'Highlight three', type: 'text' },
    ],
    images: ['volunteer-page-hero'],
  },
  {
    id: 'volunteer-steps',
    title: 'Volunteer page â€" Journey steps',
    description: 'Update the three-step volunteer journey.',
    fields: [
      { key: 'volunteerPage.steps.title', label: 'Section title', type: 'text' },
      { key: 'volunteerPage.steps.description', label: 'Section description', type: 'textarea' },
      { key: 'volunteerPage.steps.card1.title', label: 'Step one title', type: 'text' },
      { key: 'volunteerPage.steps.card1.description', label: 'Step one description', type: 'textarea' },
      { key: 'volunteerPage.steps.card2.title', label: 'Step two title', type: 'text' },
      { key: 'volunteerPage.steps.card2.description', label: 'Step two description', type: 'textarea' },
      { key: 'volunteerPage.steps.card3.title', label: 'Step three title', type: 'text' },
      { key: 'volunteerPage.steps.card3.description', label: 'Step three description', type: 'textarea' },
    ],
  },
  {
    id: 'volunteer-stories',
    title: 'Volunteer page â€" Story highlight',
    description: 'Edit the volunteer testimonial and link.',
    fields: [
      { key: 'volunteerPage.stories.eyebrow', label: 'Eyebrow label', type: 'text' },
      { key: 'volunteerPage.stories.title', label: 'Quote heading', type: 'text' },
      { key: 'volunteerPage.stories.quote', label: 'Quote body', type: 'textarea' },
      { key: 'volunteerPage.stories.attribution', label: 'Attribution', type: 'text' },
      { key: 'volunteerPage.stories.linkLabel', label: 'Link label', type: 'text' },
      { key: 'volunteerPage.stories.linkHref', label: 'Link URL', type: 'text' },
    ],
    images: ['volunteer-stories-image'],
  },
  {
    id: 'volunteer-cta',
    title: 'Volunteer page â€" Call to action',
    description: 'Adjust the closing volunteer invitation and buttons.',
    fields: [
      { key: 'volunteerPage.cta.title', label: 'Heading', type: 'text' },
      { key: 'volunteerPage.cta.description', label: 'Description', type: 'textarea' },
      { key: 'volunteerPage.cta.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'volunteerPage.cta.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'volunteerPage.cta.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'volunteerPage.cta.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
    ],
  },
  {
    id: 'donate-hero',
    title: 'Donate page â€" Hero',
    description: 'Edit the donation hero content and key points.',
    fields: [
      { key: 'donatePage.hero.badge', label: 'Badge text', type: 'text' },
      { key: 'donatePage.hero.heading', label: 'Heading', type: 'text' },
      { key: 'donatePage.hero.description', label: 'Description', type: 'textarea' },
      { key: 'donatePage.hero.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'donatePage.hero.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'donatePage.hero.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'donatePage.hero.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
      { key: 'donatePage.hero.point1', label: 'Point one', type: 'text' },
      { key: 'donatePage.hero.point2', label: 'Point two', type: 'text' },
      { key: 'donatePage.hero.point3', label: 'Point three', type: 'text' },
    ],
    images: ['donate-hero-image'],
  },
  {
    id: 'donate-options',
    title: 'Donate page â€" Giving options',
    description: 'Update the giving options and associated benefits.',
    fields: [
      { key: 'donatePage.options.title', label: 'Section title', type: 'text' },
      { key: 'donatePage.options.description', label: 'Section description', type: 'textarea' },
      { key: 'donatePage.options.card1.title', label: 'Option one title', type: 'text' },
      { key: 'donatePage.options.card1.description', label: 'Option one description', type: 'textarea' },
      { key: 'donatePage.options.card1.benefit1', label: 'Option one benefit 1', type: 'text' },
      { key: 'donatePage.options.card1.benefit2', label: 'Option one benefit 2', type: 'text' },
      { key: 'donatePage.options.card1.buttonLabel', label: 'Option one button label', type: 'text' },
      { key: 'donatePage.options.card1.buttonHref', label: 'Option one button link', type: 'text' },
      { key: 'donatePage.options.card2.title', label: 'Option two title', type: 'text' },
      { key: 'donatePage.options.card2.description', label: 'Option two description', type: 'textarea' },
      { key: 'donatePage.options.card2.benefit1', label: 'Option two benefit 1', type: 'text' },
      { key: 'donatePage.options.card2.benefit2', label: 'Option two benefit 2', type: 'text' },
      { key: 'donatePage.options.card2.buttonLabel', label: 'Option two button label', type: 'text' },
      { key: 'donatePage.options.card2.buttonHref', label: 'Option two button link', type: 'text' },
      { key: 'donatePage.options.card3.title', label: 'Option three title', type: 'text' },
      { key: 'donatePage.options.card3.description', label: 'Option three description', type: 'textarea' },
      { key: 'donatePage.options.card3.benefit1', label: 'Option three benefit 1', type: 'text' },
      { key: 'donatePage.options.card3.benefit2', label: 'Option three benefit 2', type: 'text' },
      { key: 'donatePage.options.card3.buttonLabel', label: 'Option three button label', type: 'text' },
      { key: 'donatePage.options.card3.buttonHref', label: 'Option three button link', type: 'text' },
    ],
  },
  {
    id: 'donate-impact',
    title: 'Donate page â€" Impact breakdown',
    description: 'Adjust the impact overview and allocation breakdown.',
    fields: [
      { key: 'donatePage.impact.eyebrow', label: 'Eyebrow label', type: 'text' },
      { key: 'donatePage.impact.title', label: 'Heading', type: 'text' },
      { key: 'donatePage.impact.description', label: 'Description', type: 'textarea' },
      { key: 'donatePage.impact.breakdown1.label', label: 'Breakdown one label', type: 'text' },
      { key: 'donatePage.impact.breakdown1.description', label: 'Breakdown one description', type: 'textarea' },
      { key: 'donatePage.impact.breakdown2.label', label: 'Breakdown two label', type: 'text' },
      { key: 'donatePage.impact.breakdown2.description', label: 'Breakdown two description', type: 'textarea' },
      { key: 'donatePage.impact.breakdown3.label', label: 'Breakdown three label', type: 'text' },
      { key: 'donatePage.impact.breakdown3.description', label: 'Breakdown three description', type: 'textarea' },
    ],
    images: ['donate-impact-image'],
  },
  {
    id: 'donate-form',
    title: 'Donate page â€" Pledge form',
    description: 'Update the pledge form copy, placeholders, and button.',
    fields: [
      { key: 'donatePage.form.title', label: 'Heading', type: 'text' },
      { key: 'donatePage.form.description', label: 'Description', type: 'textarea' },
      { key: 'donatePage.form.nameLabel', label: 'Name label', type: 'text' },
      { key: 'donatePage.form.namePlaceholder', label: 'Name placeholder', type: 'text' },
      { key: 'donatePage.form.emailLabel', label: 'Email label', type: 'text' },
      { key: 'donatePage.form.emailPlaceholder', label: 'Email placeholder', type: 'text' },
      { key: 'donatePage.form.amountLabel', label: 'Pledge amount label', type: 'text' },
      { key: 'donatePage.form.amountPlaceholder', label: 'Pledge amount placeholder', type: 'text' },
      { key: 'donatePage.form.messageLabel', label: 'Message label', type: 'text' },
      { key: 'donatePage.form.messagePlaceholder', label: 'Message placeholder', type: 'text' },
      { key: 'donatePage.form.buttonLabel', label: 'Button label', type: 'text' },
    ],
  },
  {
    id: 'footer',
    title: 'Footer',
    description: 'Keep navigation items and tagline current.',
    fields: [
      { key: 'footer.tagline', label: 'Tagline', type: 'textarea' },
      { key: 'footer.navWork', label: 'Navigation: Our work', type: 'text' },
      { key: 'footer.navVolunteer', label: 'Navigation: Volunteer', type: 'text' },
      { key: 'footer.navStories', label: 'Navigation: Stories', type: 'text' },
      { key: 'footer.navDonate', label: 'Navigation: Donate', type: 'text' },
      { key: 'footer.copyright', label: 'Copyright notice', type: 'textarea' },
    ],
  },
  {
    id: 'gallery',
    title: 'Home – Image slider gallery',
    description: 'Upload the six images used in the homepage slider.',
    fields: [],
    images: ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6'],
  },
  {
    id: 'image-cards',
    title: 'Home – Image cards',
    description: 'Update the four image cards near the footer.',
    fields: [],
    images: ['card-1', 'card-2', 'card-3', 'card-4'],
  },
  {
    id: 'highlights-focus',
    title: 'Highlights – Focus areas',
    description: 'Images for Healthcare, Education & Skills, and Livelihood resilience cards.',
    fields: [],
    images: ['focus-health', 'focus-education', 'focus-livelihoods'],
  },
  {
    id: 'highlights-stories',
    title: 'Highlights – Story cards',
    description: 'Images for story highlights on the highlights page.',
    fields: [],
    images: ['story-health', 'story-education', 'story-energy'],
  },
  {
    id: 'blog-articles-heroes',
    title: 'Blog articles – Hero images',
    description: 'Hero images for Education, Malnutrition, and Renewable Energy posts.',
    fields: [],
    images: ['blog-education-hero', 'blog-malnutrition-hero', 'blog-renewable-hero'],
  },
  {
    id: 'cause-detail-heroes',
    title: 'Cause detail pages – Hero images',
    description: 'Hero images for the Education, Healthcare, and Livelihoods cause pages.',
    fields: [],
    images: ['cause-education-hero', 'cause-healthcare-hero', 'cause-livelihoods-hero'],
  },
  {
    id: 'blog-articles',
    label: 'Blog articles',
    heading: 'Blog articles',
    description: 'Upload hero images for each article page.',
    intro: 'Set hero images for Education, Malnutrition, and Renewable Energy posts.',
    note: {
      title: 'Tip',
      body: 'Use consistent aspect ratios so the hero looks clean on all devices.',
    },
    sections: ['blog-articles-heroes'],
  },
  {
    id: 'highlights',
    label: 'Highlights page',
    heading: 'Highlights page controls',
    description: 'Manage focus area cards and story cards on the highlights page.',
    intro: 'Set images for focus areas and story highlights.',
    note: {
      title: 'Tip',
      body: 'Choose images that clearly identify the theme of each card.',
    },
    sections: ['highlights-focus', 'highlights-stories'],
  },
  {
    id: 'cause-details',
    label: 'Cause detail pages',
    heading: 'Cause detail pages',
    description: 'Upload hero images for education, healthcare, and livelihoods cause pages.',
    intro: 'Set the large hero banner for each cause detail page.',
    sections: ['cause-detail-heroes'],
  },
  {
    id: 'blog-hero-simple',
    title: 'Blog page – Hero',
    description: 'Manage the blog hero copy and main image (no overlay card).',
    fields: [
      { key: 'blog.hero.badge', label: 'Badge text', type: 'text' },
      { key: 'blog.hero.heading', label: 'Heading', type: 'text' },
      { key: 'blog.hero.description', label: 'Description', type: 'textarea' },
      { key: 'blog.hero.primaryButtonLabel', label: 'Primary button label', type: 'text' },
      { key: 'blog.hero.primaryButtonHref', label: 'Primary button link', type: 'text' },
      { key: 'blog.hero.secondaryButtonLabel', label: 'Secondary button label', type: 'text' },
      { key: 'blog.hero.secondaryButtonHref', label: 'Secondary button link', type: 'text' },
    ],
    images: ['blog-hero-feature'],
  },
  {
    id: 'home-quote',
    title: 'Homepage quote',
    description: 'Edit the large testimonial quote and attribution.',
    fields: [
      { key: 'quote.text', label: 'Quote text', type: 'textarea' },
      { key: 'quote.attribution', label: 'Attribution', type: 'text' },
    ],
  },
];
const PAGE_GROUPS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    heading: 'Dashboard overview',
    description: 'Get a snapshot of every editable NVDS page in one place.',
    intro: 'Select any page from the navigation to begin editing its content.',
    note: {
      title: 'Before you start',
      body: 'Edits are stored in this browser only. Keep image uploads under 1.5 MB and refresh the public site after saving to view your changes.',
    },
    sections: [],
  },
  {
    id: 'global',
    label: 'Global elements',
    heading: 'Global elements',
    description: 'Manage navigation, chat assistant, and footer details shared across the site.',
    intro: 'Update links, chat prompts, and footer text that appear on every page.',
    note: {
      title: 'Tip',
      body: 'Check external links after updating to ensure each destination opens in a new tab if needed.',
    },
    sections: ['navigation', 'favicon', 'chat', 'footer'],
  },
  {
    id: 'home',
    label: 'Home page',
    heading: 'Home page controls',
    description: 'Shape the homepage story, including hero copy, causes, gallery, and volunteer call-outs.',
    intro: 'Tune the hero headline, supporting sections, gallery slider, and homepage calls to action.',
    note: {
      title: 'Content suggestion',
      body: 'Keep hero copy concise so the main message stays readable on smaller screens.',
    },
        sections: ['hero', 'mission', 'causes', 'volunteer', 'why', 'stories', 'gallery', 'image-cards', 'donate', 'home-quote'],
  },
  {
    id: 'about',
    label: 'About page',
    heading: 'About page controls',
    description: 'Share the organisation history, impact highlights, and guiding pillars.',
    intro: 'Edit the about page hero, impact stories, and support invitation.',
    note: {
      title: 'Tip',
      body: 'Link to recent reports or case studies to show current impact.',
    },
    sections: ['about-hero', 'about-impact', 'about-cta', 'about-quote', 'about-pillars'],
  },
  {
    id: 'causes',
    label: 'Causes page',
    heading: 'Causes page controls',
    description: 'Update focus areas, programme stages, and call-to-action messaging.',
    intro: 'Refresh the causes hero, focus cards, and supporter callouts.',
    note: {
      title: 'Content suggestion',
      body: 'Use consistent verbs in each focus card so supporters can compare programs quickly.',
    },
    sections: ['causes-hero', 'causes-focus', 'causes-programmes', 'causes-cta'],
  },
  {
    id: 'blog',
    label: 'Blog page',
    heading: 'Blog page controls',
    description: 'Introduce new stories, adjust the featured post, and fine-tune newsletter copy.',
    intro: 'Highlight recent stories and manage newsletter messaging.',
    note: {
      title: 'Tip',
      body: 'Rotate the featured story regularly to keep returning visitors engaged.',
    },
    sections: ['blog-hero-simple', 'blog-grid', 'blog-newsletter'],
  },
  {
    id: 'contact',
    label: 'Contact page',
    heading: 'Contact page controls',
    description: 'Keep contact details, highlights, and inquiry form copy up to date.',
    intro: 'Update contact channels, office details, and support messaging.',
    note: {
      title: 'Tip',
      body: 'Confirm phone numbers and email addresses after editing to avoid missed messages.',
    },
    sections: ['contact-hero', 'contact-form', 'contact-support'],
  },
  {
    id: 'volunteer',
    label: 'Volunteer page',
    heading: 'Volunteer page controls',
    description: 'Guide prospective volunteers through the journey and success stories.',
    intro: 'Share volunteer highlights, journey steps, and testimonials.',
    note: {
      title: 'Content suggestion',
      body: 'Highlight specific skills or roles to attract a wider mix of volunteers.',
    },
    sections: ['volunteer-hero', 'volunteer-steps', 'volunteer-stories', 'volunteer-cta'],
  },
  {
    id: 'donate',
    label: 'Donate page',
    heading: 'Donate page controls',
    description: 'Keep donation messaging, giving options, and pledge form aligned.',
    intro: 'Explain the impact of each contribution and keep the form inviting.',
    note: {
      title: 'Tip',
      body: 'Mention tangible outcomes for each giving level to improve conversions.',
    },
    sections: ['donate-hero', 'donate-options', 'donate-impact', 'donate-form'],
  },
];

const IMAGE_SLOTS = [
  {
    id: 'nav-logo',
    label: 'Header logo',
    note: 'Square logo shown in the top navigation.',
    sizeHint: 'Square (min 96 x 96)',
  },
  {
    id: 'site-favicon',
    label: 'Site favicon',
    note: 'PNG icon used in the browser tab.',
    sizeHint: 'Square (min 96 x 96)',
  },
  {
    id: 'hero-primary',
    label: 'Hero - Primary image',
    note: 'Tall portrait image displayed at the top right of the homepage.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'hero-secondary',
    label: 'Hero - Secondary image',
    note: 'Square image shown beneath the primary hero image.',
    sizeHint: 'Square',
  },
  {
    id: 'hero-tertiary',
    label: 'Hero - Accent image',
    note: 'Square image shown alongside the secondary hero image.',
    sizeHint: 'Square',
  },
  {
    id: 'mission-image',
    label: 'Mission section image',
    note: 'Portrait image next to the "Every initiative" text block.',
    sizeHint: 'Portrait 4:5',
  },
  {
    id: 'cause-empowerment',
    label: 'Cause - Community Empowerment',
    note: 'Square image for the first cause card.',
    sizeHint: 'Horizontal 4:3',
  },
  {
    id: 'cause-health',
    label: 'Cause - Health & Well-being',
    note: 'Square image for the second cause card.',
    sizeHint: 'Horizontal 4:3',
  },
  {
    id: 'cause-women',
    label: 'Cause - Women & Youth Empowerment',
    note: 'Square image for the third cause card.',
    sizeHint: 'Horizontal 4:3',
  },
  {
    id: 'volunteer-image',
    label: 'Volunteer section image',
    note: 'Landscape image displayed beside the volunteer text block.',
    sizeHint: 'Landscape 16:9',
  },
  {
    id: 'why-hero',
    label: 'Why choose us - Banner image',
    note: 'Wide image appearing below the "Why choose us?" heading.',
    sizeHint: 'Wide 21:9',
  },
  {
    id: 'story-one',
    label: 'Stories - Card one',
    note: 'Image for the first story card.',
    sizeHint: 'Horizontal 4:3',
  },
  {
    id: 'story-two',
    label: 'Stories - Card two',
    note: 'Image for the second story card.',
    sizeHint: 'Horizontal 4:3',
  },
  {
    id: 'story-three',
    label: 'Stories - Card three',
    note: 'Image for the third story card.',
    sizeHint: 'Horizontal 4:3',
  },
  {
    id: 'donate-image',
    label: 'Donate section image',
    note: 'Portrait image alongside the donation form.',
    sizeHint: 'Portrait 2:3',
  },
  {
    id: 'about-hero-banner',
    label: 'About hero image',
    note: 'Wide banner image displayed beneath the About page introduction.',
    sizeHint: 'Wide 16:9',
  },
  {
    id: 'about-impact-primary',
    label: 'About impact - Primary image',
    note: 'Tall portrait image anchoring the impact section.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'about-impact-secondary',
    label: 'About impact - Secondary image',
    note: 'Square supporting image beside the impact copy.',
    sizeHint: 'Square',
  },
  {
    id: 'about-impact-tertiary',
    label: 'About impact - Tertiary image',
    note: 'Square supporting image within the impact gallery.',
    sizeHint: 'Square',
  },
  {
    id: 'about-cta-backdrop',
    label: 'About call-to-action background',
    note: 'Wide backdrop image behind the support invitation card.',
    sizeHint: 'Wide 16:9',
  },
  {
    id: 'about-pillar-one',
    label: 'About pillars - Card one',
    note: 'Landscape image for the first pillar card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'about-pillar-two',
    label: 'About pillars - Card two',
    note: 'Landscape image for the second pillar card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'causes-hero-primary',
    label: 'Causes hero - Primary image',
    note: 'Tall portrait image used in the causes hero section.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'causes-hero-secondary',
    label: 'Causes hero - Secondary image',
    note: 'Square supporting image placed beside the hero copy.',
    sizeHint: 'Square',
  },
  {
    id: 'causes-focus-one',
    label: 'Causes focus - Card one',
    note: 'Image shown on the first focus card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'causes-focus-two',
    label: 'Causes focus - Card two',
    note: 'Image shown on the second focus card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'causes-focus-three',
    label: 'Causes focus - Card three',
    note: 'Image shown on the third focus card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'causes-programmes-primary',
    label: 'Causes programmes image',
    note: 'Portrait image featured next to the programme steps.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'causes-cta-backdrop',
    label: 'Causes call-to-action backdrop',
    note: 'Wide image appearing behind the causes CTA card.',
    sizeHint: 'Wide 16:9',
  },
  {
    id: 'blog-hero-feature',
    label: 'Blog hero feature image',
    note: 'Image shown beside the featured blog story.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'blog-card-1',
    label: 'Blog card one image',
    note: 'Image for the first blog listing card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'blog-card-2',
    label: 'Blog card two image',
    note: 'Image for the second blog listing card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'blog-card-3',
    label: 'Blog card three image',
    note: 'Image for the third blog listing card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'blog-newsletter-image',
    label: 'Blog newsletter image',
    note: 'Portrait image alongside the newsletter sign-up panel.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'contact-hero-image',
    label: 'Contact hero image',
    note: 'Portrait image used in the contact page hero.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'contact-support-image',
    label: 'Contact support image',
    note: 'Landscape image displayed beside the media support card.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'volunteer-page-hero',
    label: 'Volunteer hero image',
    note: 'Portrait image featured in the volunteer hero section.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'volunteer-stories-image',
    label: 'Volunteer stories image',
    note: 'Landscape image accompanying the volunteer story highlight.',
    sizeHint: 'Landscape 4:3',
  },
  {
    id: 'donate-hero-image',
    label: 'Donate hero image',
    note: 'Portrait image shown in the donate page hero.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'donate-impact-image',
    label: 'Donate impact image',
    note: 'Tall image displayed beside the impact breakdown.',
    sizeHint: 'Portrait 3:4',
  },
  {
    id: 'gallery-1',
    label: 'Home gallery – Image 1',
    note: 'First image in the homepage slider.',
    sizeHint: 'Landscape 16:9',
  },
  { id: 'gallery-2', label: 'Home gallery – Image 2', note: 'Second image in the homepage slider.', sizeHint: 'Landscape 16:9' },
  { id: 'gallery-3', label: 'Home gallery – Image 3', note: 'Third image in the homepage slider.', sizeHint: 'Landscape 16:9' },
  { id: 'gallery-4', label: 'Home gallery – Image 4', note: 'Fourth image in the homepage slider.', sizeHint: 'Landscape 16:9' },
  { id: 'gallery-5', label: 'Home gallery – Image 5', note: 'Fifth image in the homepage slider.', sizeHint: 'Landscape 16:9' },
  { id: 'gallery-6', label: 'Home gallery – Image 6', note: 'Sixth image in the homepage slider.', sizeHint: 'Landscape 16:9' },
  { id: 'card-1', label: 'Homepage image card 1', note: 'Image for the first card near the footer.', sizeHint: 'Landscape 4:3' },
  { id: 'card-2', label: 'Homepage image card 2', note: 'Image for the second card near the footer.', sizeHint: 'Landscape 4:3' },
  { id: 'card-3', label: 'Homepage image card 3', note: 'Image for the third card near the footer.', sizeHint: 'Landscape 4:3' },
  { id: 'card-4', label: 'Homepage image card 4', note: 'Image for the fourth card near the footer.', sizeHint: 'Landscape 4:3' },
  { id: 'blog-education-hero', label: 'Blog article – Education hero', note: 'Hero image for the Education article page.', sizeHint: 'Landscape 16:9' },
  { id: 'blog-malnutrition-hero', label: 'Blog article – Malnutrition hero', note: 'Hero image for the Malnutrition article page.', sizeHint: 'Landscape 16:9' },
  { id: 'blog-renewable-hero', label: 'Blog article – Renewable Energy hero', note: 'Hero image for the Renewable Energy article page.', sizeHint: 'Landscape 16:9' },
  { id: 'cause-education-hero', label: 'Cause detail – Education hero', note: 'Hero image for the Education cause detail page.', sizeHint: 'Landscape 16:9' },
  { id: 'cause-healthcare-hero', label: 'Cause detail – Healthcare hero', note: 'Hero image for the Healthcare cause detail page.', sizeHint: 'Landscape 16:9' },
  { id: 'cause-livelihoods-hero', label: 'Cause detail – Livelihoods hero', note: 'Hero image for the Livelihoods cause detail page.', sizeHint: 'Landscape 16:9' },
  { id: 'focus-health', label: 'Highlights – Focus Healthcare', note: 'Focus card image: Healthcare access.', sizeHint: 'Landscape 4:3' },
  { id: 'focus-education', label: 'Highlights – Focus Education', note: 'Focus card image: Education & skills.', sizeHint: 'Landscape 4:3' },
  { id: 'focus-livelihoods', label: 'Highlights – Focus Livelihoods', note: 'Focus card image: Livelihood resilience.', sizeHint: 'Landscape 4:3' },
  { id: 'story-health', label: 'Highlights – Story Health', note: 'Story card image: Health & wellness.', sizeHint: 'Landscape 4:3' },
  { id: 'story-education', label: 'Highlights – Story Education', note: 'Story card image: Education.', sizeHint: 'Landscape 4:3' },
  { id: 'story-energy', label: 'Highlights – Story Energy', note: 'Story card image: Clean energy.', sizeHint: 'Landscape 4:3' },
];

const imageSlotLookup = new Map(IMAGE_SLOTS.map((slot) => [slot.id, slot]));
const sectionLookup = new Map(CONTENT_SECTIONS.map((section) => [section.id, section]));
const pageLookup = new Map(PAGE_GROUPS.map((page) => [page.id, page]));

function getPageIdFromHash() {
  try {
    const h = (location.hash || '').replace('#', '').trim();
    if (h && pageLookup.has(h)) return h;
  } catch {}
  return null;
}

let contentState = {};
const fieldElements = new Map();
const sectionStatus = new Map();
const dirtySections = new Set();
let activePage = 'dashboard';

async function importFromReadme() {
  try {
    const res = await fetch('read.md', { cache: 'no-store' });
    if (!res.ok) throw new Error(String(res.status));
    const md = await res.text();

    function extractJson(mdText) {
      const startMarker = '<!-- nvds-content:start -->';
      const endMarker = '<!-- nvds-content:end -->';
      let block = '';
      const s = mdText.indexOf(startMarker);
      const e = mdText.indexOf(endMarker);
      if (s !== -1 && e !== -1 && e > s) {
        block = mdText.slice(s, e);
      }
      if (!block) {
        const m = mdText.match(/```json([\s\S]*?)```/i);
        if (m) block = m[1];
      }
      if (!block) return null;
      block = block.replace(/^json\s*/i, '');
      try { return JSON.parse(block); } catch (err) { return null; }
    }

    const payload = extractJson(md);
    if (!payload || typeof payload !== 'object') {
      window.alert('No nvds-content JSON found in read.md.');
      return;
    }

    contentState = { ...contentState, ...payload };
    const diff = (function computeDiff(obj, defaults){
      const out = {};
      Object.keys(obj).forEach((k)=>{ if (defaults[k] !== obj[k]) out[k] = obj[k]; });
      return out;
    })(contentState, DEFAULT_CONTENT);

    if (Object.keys(diff).length === 0) {
      localStorage.removeItem(CONTENT_STORAGE_KEY);
    } else {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(diff));
    }

    syncContentFields();
    CONTENT_SECTIONS.forEach((s)=> markSectionSaved(s.id));
    refreshActivePageBadge();
    updatePendingChangesMetric();
    window.alert('Imported content from README successfully.');
  } catch (error) {
    console.error('Import from README failed', error);
    window.alert('Could not import from read.md');
  }
}

function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => fn(...args), delay);
  };
}

function isStorageAvailable() {
  try {
    const testKey = '__nvds_test__';
    localStorage.setItem(testKey, '1');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.error('Local storage unavailable:', error);
    return false;
  }
}

function readStoredContent() {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch (error) {
    console.warn('Unable to parse stored content, using defaults.', error);
    return {};
  }
}

function buildDiff(state) {
  const diff = {};
  Object.keys(state).forEach((key) => {
    const value = state[key];
    if (!Object.prototype.hasOwnProperty.call(DEFAULT_CONTENT, key) || DEFAULT_CONTENT[key] !== value) {
      diff[key] = value;
    }
  });
  return diff;
}

function persistContentImmediate() {
  const diff = buildDiff(contentState);
  if (Object.keys(diff).length === 0) {
    localStorage.removeItem(CONTENT_STORAGE_KEY);
  } else {
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(diff));
  }
}

const schedulePersist = debounce(() => {
  const pending = Array.from(dirtySections);
  if (pending.length === 0) return;
  try {
    persistContentImmediate();
    pending.forEach(markSectionSaved);
    dirtySections.clear();
    refreshActivePageBadge();
    updatePendingChangesMetric();
  } catch (error) {
    console.error('Unable to save content.', error);
    pending.forEach(markSectionError);
    refreshActivePageBadge();
    updatePendingChangesMetric();
  }
}, 400);

function markSectionDirty(sectionId) {
  const status = sectionStatus.get(sectionId);
  if (!status) return;
  status.textContent = 'Unsaved changes';
  status.classList.add('is-dirty');
  status.classList.remove('is-error');
  refreshActivePageBadge();
  updatePendingChangesMetric();
}

function markSectionSaved(sectionId) {
  const status = sectionStatus.get(sectionId);
  if (!status) return;
  status.textContent = 'Saved';
  status.classList.remove('is-dirty');
  status.classList.remove('is-error');
  refreshActivePageBadge();
  updatePendingChangesMetric();
}

function markSectionError(sectionId) {
  const status = sectionStatus.get(sectionId);
  if (!status) return;
  status.textContent = 'Save failed';
  status.classList.add('is-error');
  refreshActivePageBadge();
  updatePendingChangesMetric();
}

function handleFieldInput(sectionId, key, value) {
  if (contentState[key] === value) return;
  contentState[key] = value;
  dirtySections.add(sectionId);
  markSectionDirty(sectionId);
  schedulePersist();
}

function syncContentFields() {
  fieldElements.forEach((element, key) => {
    const nextValue = Object.prototype.hasOwnProperty.call(contentState, key) ? contentState[key] : '';
    if (element.value !== nextValue) {
      element.value = nextValue;
    }
  });
}

function renderContentControls(sections) {
  const container = document.getElementById('content-controls');
  const sectionTemplate = document.getElementById('content-control-template');
  const fieldTemplate = document.getElementById('content-field-template');
  const imageTemplate = document.getElementById('content-image-template');
  const contentWrapper = document.querySelector('.admin-content');

  if (!container || !sectionTemplate || !fieldTemplate) return;

  container.innerHTML = '';
  fieldElements.clear();
  sectionStatus.clear();

  if (!Array.isArray(sections) || sections.length === 0) {
    if (contentWrapper) {
      contentWrapper.classList.add('admin-content--empty');
    }
    return;
  }

  if (contentWrapper) {
    contentWrapper.classList.remove('admin-content--empty');
  }

  sections.forEach((section) => {
    if (!section) return;
    const card = sectionTemplate.content.firstElementChild.cloneNode(true);
    const header = card.querySelector('h3');
    const description = card.querySelector('.content-card__description');
    const form = card.querySelector('.content-card__form');
    const status = card.querySelector('.content-card__status');
    const media = card.querySelector('.content-card__media');
    const mediaList = card.querySelector('.content-card__media-list');

    header.textContent = section.title;
    description.textContent = section.description;
    sectionStatus.set(section.id, status);

    section.fields.forEach((field) => {
      const fieldNode = fieldTemplate.content.firstElementChild.cloneNode(true);
      const label = fieldNode.querySelector('.content-field__label');
      let input = fieldNode.querySelector('input');

      label.textContent = field.label;

      if (field.type === 'textarea') {
        const textarea = document.createElement('textarea');
        textarea.rows = 4;
        textarea.dataset.contentKey = field.key;
        fieldNode.replaceChild(textarea, input);
        input = textarea;
      } else {
        input.type = 'text';
        input.dataset.contentKey = field.key;
      }

      const initialValue = Object.prototype.hasOwnProperty.call(contentState, field.key)
        ? contentState[field.key]
        : '';
      input.value = initialValue;
      fieldElements.set(field.key, input);

      input.addEventListener('input', (event) => {
        handleFieldInput(section.id, field.key, event.target.value);
      });

      form.appendChild(fieldNode);
    });

    if (media && mediaList && Array.isArray(section.images) && section.images.length > 0 && imageTemplate) {
      media.hidden = false;
      section.images.forEach((slotId) => {
        const slot = imageSlotLookup.get(slotId);
        if (!slot) return;
        const imageNode = imageTemplate.content.firstElementChild.cloneNode(true);
        const imageTitle = imageNode.querySelector('h4');
        const note = imageNode.querySelector('.content-image__note');
        const dimensions = imageNode.querySelector('.content-image__dimensions');
        const preview = imageNode.querySelector('.slot-card__preview');
        const fileInput = imageNode.querySelector('input[type="file"]');
        const removeButton = imageNode.querySelector('button');

        imageTitle.textContent = slot.label;
        note.textContent = slot.note;
        dimensions.textContent = slot.sizeHint;
        preview.dataset.slotId = slot.id;

        const stored = localStorage.getItem(`${IMAGE_STORAGE_PREFIX}${slot.id}`);
        if (stored === '__IDB__' || stored === null) {
          idbGetImage(slot.id)
            .then((data) => updatePreview(preview, data || null))
            .catch(() => updatePreview(preview, null));
        } else {
          updatePreview(preview, stored);
        }

        fileInput.addEventListener('change', (event) => {
          handleFileUpload(event.target.files[0], slot.id, preview, fileInput);
        });

        removeButton.addEventListener('click', () => {
          clearSlot(slot.id, preview);
        });

        mediaList.appendChild(imageNode);
      });
    } else if (media) {
      media.remove();
    }

    container.appendChild(card);
    if (dirtySections.has(section.id)) {
      markSectionDirty(section.id);
    } else {
      markSectionSaved(section.id);
    }
  });
}

function getSectionsForPage(pageId) {
  const page = pageLookup.get(pageId);
  if (!page || !Array.isArray(page.sections)) return [];
  return page.sections
    .map((sectionId) => sectionLookup.get(sectionId))
    .filter(Boolean);
}

function getPendingCountForPage(pageId) {
  const page = pageLookup.get(pageId);
  if (!page || !Array.isArray(page.sections)) return 0;
  return page.sections.reduce((count, sectionId) => (dirtySections.has(sectionId) ? count + 1 : count), 0);
}

function updateDashboardMetric(metricId, value) {
  const valueNode = document.querySelector(`.insight-card[data-metric-id="${metricId}"] .insight-card__value`);
  if (!valueNode) return;
  valueNode.textContent = value;
}

function updatePendingChangesMetric() {
  updateDashboardMetric('pending', dirtySections.size);
}

function refreshActivePageBadge() {
  const badge = document.getElementById('active-page-label');
  if (!badge) return;
  const page = pageLookup.get(activePage);
  if (!page) return;

  const isDashboard = page.id === 'dashboard';
  let pendingCount = 0;
  if (Array.isArray(page.sections) && page.sections.length > 0) {
    pendingCount = getPendingCountForPage(page.id);
  } else if (isDashboard) {
    pendingCount = dirtySections.size;
  }

  let badgeText = page.label;
  if (pendingCount > 0) {
    badgeText = `${badgeText} - ${pendingCount} pending`;
    badge.classList.add('has-pending');
  } else {
    badge.classList.remove('has-pending');
  }

  badge.textContent = badgeText;
}

function renderDashboard() {
  const container = document.getElementById('dashboard-cards');
  if (!container) return;

  const editablePages = PAGE_GROUPS.filter((page) => Array.isArray(page.sections) && page.sections.length > 0).length;
  const totalSections = CONTENT_SECTIONS.length;
  const totalImageSlots = IMAGE_SLOTS.length;
  const insights = [
    { id: 'pages', label: 'Pages with controls', value: editablePages },
    { id: 'sections', label: 'Editable sections', value: totalSections },
    { id: 'media', label: 'Image slots', value: totalImageSlots },
    { id: 'pending', label: 'Pending changes', value: dirtySections.size },
  ];

  container.innerHTML = '';
  insights.forEach(({ id, label, value }) => {
    const card = document.createElement('article');
    card.className = 'insight-card';
    card.dataset.metricId = id;

    const valueNode = document.createElement('span');
    valueNode.className = 'insight-card__value';
    valueNode.textContent = value;

    const labelNode = document.createElement('span');
    labelNode.className = 'insight-card__label';
    labelNode.textContent = label;

    card.appendChild(valueNode);
    card.appendChild(labelNode);
    container.appendChild(card);
  });
}

function renderNavigation() {
  const nav = document.getElementById('page-nav');
  if (!nav) return;

  nav.innerHTML = '';
  PAGE_GROUPS.forEach((page) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'admin-nav__item';
    button.dataset.pageId = page.id;
    button.textContent = page.label;
    if (page.id === activePage) {
      button.classList.add('is-active');
    }
    button.addEventListener('click', () => {
      if (activePage === page.id) return;
      activatePage(page.id);
    });
    nav.appendChild(button);
  });
}

function activatePage(pageId) {
  const page = pageLookup.get(pageId);
  if (!page) return;

  activePage = pageId;

  const nav = document.getElementById('page-nav');
  if (nav) {
    Array.from(nav.querySelectorAll('.admin-nav__item')).forEach((button) => {
      button.classList.toggle('is-active', button.dataset.pageId === pageId);
    });
  }

  const heading = document.getElementById('page-heading');
  if (heading) {
    heading.textContent = page.heading;
  }

  const description = document.getElementById('page-description');
  if (description) {
    description.textContent = page.description;
  }

  const intro = document.getElementById('content-intro');
  if (intro) {
    intro.textContent = page.intro;
  }

  const noteSection = document.getElementById('page-note');
  const noteTitle = document.getElementById('page-note-title');
  const noteBody = document.getElementById('page-note-body');
  if (page.note && noteSection && noteTitle && noteBody) {
    noteTitle.textContent = page.note.title;
    noteBody.textContent = page.note.body;
    noteSection.hidden = false;
  } else if (noteSection) {
    noteSection.hidden = true;
  }

  const insights = document.getElementById('dashboard-insights');
  if (insights) {
    insights.hidden = page.id !== 'dashboard';
  }

  if (page.id === 'dashboard') {
    renderDashboard();
    renderContentControls([]);
  } else {
    renderContentControls(getSectionsForPage(page.id));
  }

  refreshActivePageBadge();
}

// Expose for fallback inline links
try { window.activatePage = activatePage; } catch(_) {}

function updatePreview(preview, dataUrl) {
  const frame = preview.querySelector('.image-frame');
  if (dataUrl) {
    preview.classList.add('has-image');
    frame.style.backgroundImage = `url("${dataUrl}")`;
  } else {
    preview.classList.remove('has-image');
    frame.style.backgroundImage = 'none';
  }
}

async function handleFileUpload(file, slotId, preview, input) {
  if (!file) return;
  if (file.size > MAX_FILE_SIZE) {
    window.alert(`"${file.name}" is larger than ${(MAX_FILE_SIZE / (1024 * 1024)).toFixed(1)} MB. Please choose a smaller image.`);
    input.value = '';
    return;
  }

  try {
    // Optimize image (resize + compress) to reduce storage footprint
    const dataUrl = await optimizeImageFile(file, slotId);
    const key = `${IMAGE_STORAGE_PREFIX}${slotId}`;
    try {
      localStorage.setItem(key, dataUrl);
      updatePreview(preview, dataUrl);
    } catch (error) {
      const isQuota = error && (error.name === 'QuotaExceededError' || error.code === 22 || error.code === 1014);
      if (isQuota) {
        try {
          await idbSetImage(slotId, dataUrl);
          // Store a tiny marker so other tabs know to read from IndexedDB
          localStorage.setItem(key, '__IDB__');
          updatePreview(preview, dataUrl);
        } catch (idbErr) {
          console.error('Unable to store image in IndexedDB.', idbErr);
          window.alert('Storage is full and fallback failed. Please remove older images or use a smaller file.');
        }
      } else {
        console.error('Unable to store image.', error);
        window.alert('Could not store the image. Try clearing older images first.');
      }
    }
  } catch (readErr) {
    console.error('Failed processing the selected image.', readErr);
    window.alert('Could not read the selected image file.');
  } finally {
    input.value = '';
  }
}

async function clearSlot(slotId, preview) {
  try { await idbDeleteImage(slotId); } catch {}
  localStorage.removeItem(`${IMAGE_STORAGE_PREFIX}${slotId}`);
  updatePreview(preview, null);
}

function handleStorageContentChange(rawValue) {
  let incoming = {};
  if (rawValue) {
    try {
      const parsed = JSON.parse(rawValue);
      if (typeof parsed === 'object' && parsed !== null) {
        incoming = parsed;
      }
    } catch (error) {
      console.warn('Unable to parse incoming content payload.', error);
    }
  }
  contentState = { ...DEFAULT_CONTENT, ...incoming };
  syncContentFields();
  CONTENT_SECTIONS.forEach((section) => markSectionSaved(section.id));
  refreshActivePageBadge();
  updatePendingChangesMetric();
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isStorageAvailable()) {
    window.alert('Local storage is disabled in this browser. Content edits cannot be saved.');
    return;
  }

  const reloadButton = document.getElementById('reload-preview');
  if (reloadButton) {
    reloadButton.addEventListener('click', () => {
      window.open('index.html', '_blank');
    });
  }

  const importButton = document.getElementById('import-readme');
  if (importButton) {
    importButton.addEventListener('click', () => {
      importFromReadme();
    });
  }

  contentState = { ...DEFAULT_CONTENT, ...readStoredContent() };

  // If a hash is present and matches a known page, activate it first
  const fromHash = getPageIdFromHash();
  if (fromHash) activePage = fromHash;

  renderNavigation();
  renderDashboard();
  activatePage(activePage);

  // Keep page selection in sync with the URL hash
  window.addEventListener('hashchange', () => {
    const pid = getPageIdFromHash();
    if (pid && pid !== activePage) {
      activatePage(pid);
    }
  });

  window.addEventListener('storage', (event) => {
    if (!event.key) return;
    if (event.key === CONTENT_STORAGE_KEY) {
      handleStorageContentChange(event.newValue);
      return;
    }
    if (event.key.startsWith(IMAGE_STORAGE_PREFIX)) {
      const slotId = event.key.replace(IMAGE_STORAGE_PREFIX, '');
      const cardPreview = document.querySelector(`.slot-card__preview[data-slot-id="${slotId}"]`);
      if (!cardPreview) return;
      if (event.newValue === '__IDB__' || event.newValue === null) {
        idbGetImage(slotId)
          .then((data) => updatePreview(cardPreview, data || null))
          .catch(() => updatePreview(cardPreview, null));
      } else {
        updatePreview(cardPreview, event.newValue);
      }
    }
  });
});

// ---- IndexedDB fallback + image optimization helpers ----
let __nvds_imageDbPromise;
function openImageDb() {
  if (__nvds_imageDbPromise) return __nvds_imageDbPromise;
  __nvds_imageDbPromise = new Promise((resolve, reject) => {
    try {
      const request = indexedDB.open('nvds-admin', 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('images')) {
          db.createObjectStore('images');
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    } catch (err) {
      reject(err);
    }
  });
  return __nvds_imageDbPromise;
}

async function idbSetImage(slotId, dataUrl) {
  const db = await openImageDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.objectStore('images').put(dataUrl, slotId);
  });
}

async function idbGetImage(slotId) {
  const db = await openImageDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readonly');
    tx.onerror = () => reject(tx.error);
    const req = tx.objectStore('images').get(slotId);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function idbDeleteImage(slotId) {
  const db = await openImageDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.objectStore('images').delete(slotId);
  });
}

function getTargetLongEdge(slotId) {
  try {
    const hint = (imageSlotLookup.get(slotId)?.sizeHint || '').toLowerCase();
    if (slotId === 'nav-logo') return 256;
    if (hint.includes('square')) return 900;
    if (hint.includes('wide') || hint.includes('panorama') || hint.includes('banner')) return 2000;
    if (hint.includes('landscape')) return 1600;
    if (hint.includes('tall')) return 1700;
    if (hint.includes('portrait')) return 1400;
  } catch {}
  return 1400;
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

function canvasToDataUrl(canvas, quality) {
  try { return canvas.toDataURL('image/webp', quality); } catch { return canvas.toDataURL('image/png'); }
}

async function optimizeImageFile(file, slotId) {
  try {
    const img = await loadImageFromFile(file);
    const target = getTargetLongEdge(slotId);
    const long = Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height);
    const scale = long > target ? target / long : 1;
    const w = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
    const h = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    return canvasToDataUrl(canvas, 0.85);
  } catch (e) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}















