// Default image used when no image has been set via Admin yet
// (e.g., first load on GitHub Pages fresh origin).
const DEFAULT_FALLBACK_IMAGE = 'assets/placeholders/placeholder-landscape.jpg';

const ORIENTATION_FALLBACKS = Object.freeze({
  portrait: 'assets/placeholders/placeholder-portrait.jpg',
  tall: 'assets/placeholders/placeholder-portrait.jpg',
  square: 'assets/placeholders/placeholder-square.jpg',
  landscape: DEFAULT_FALLBACK_IMAGE,
  wide: 'assets/placeholders/placeholder-wide.jpg',
});

const SLOT_ORIENTATION_OVERRIDES = Object.freeze({
  'about-cta-backdrop': 'wide',
  'about-hero-banner': 'wide',
  'about-impact-primary': 'portrait',
  'about-impact-secondary': 'square',
  'about-impact-tertiary': 'square',
  'about-pillar-one': 'landscape',
  'about-pillar-two': 'landscape',
  'blog-card-1': 'landscape',
  'blog-card-2': 'landscape',
  'blog-card-3': 'landscape',
  'blog-education-hero': 'portrait',
  'blog-hero-feature': 'portrait',
  'blog-malnutrition-hero': 'portrait',
  'blog-newsletter-image': 'portrait',
  'blog-renewable-hero': 'portrait',
  'cause-education-hero': 'portrait',
  'cause-empowerment': 'landscape',
  'cause-health': 'landscape',
  'cause-healthcare-hero': 'portrait',
  'cause-livelihoods-hero': 'portrait',
  'cause-women': 'landscape',
  'causes-cta-backdrop': 'wide',
  'causes-focus-one': 'landscape',
  'causes-focus-three': 'landscape',
  'causes-focus-two': 'landscape',
  'causes-hero-primary': 'portrait',
  'causes-hero-secondary': 'square',
  'causes-programmes-primary': 'portrait',
  'contact-hero-image': 'portrait',
  'contact-support-image': 'landscape',
  'donate-hero-image': 'portrait',
  'donate-image': 'portrait',
  'donate-impact-image': 'portrait',
  'focus-education': 'landscape',
  'focus-health': 'landscape',
  'focus-livelihoods': 'landscape',
  'gallery-1': 'landscape',
  'gallery-2': 'landscape',
  'gallery-3': 'landscape',
  'gallery-4': 'landscape',
  'gallery-5': 'landscape',
  'gallery-6': 'landscape',
  'hero-primary': 'portrait',
  'hero-secondary': 'square',
  'mission-image': 'portrait',
  'story-education': 'landscape',
  'story-energy': 'landscape',
  'story-health': 'landscape',
  'volunteer-image': 'landscape',
  'volunteer-page-hero': 'portrait',
  'volunteer-stories-image': 'landscape',
  'why-hero': 'wide',
});

const API_BASE = (() => {
  if (typeof window !== 'undefined' && window.NVDS_API_BASE) {
    return window.NVDS_API_BASE.replace(/\/$/, '');
  }
  try {
    const origin = window.location.origin && window.location.origin !== 'null'
      ? window.location.origin
      : 'http://localhost:4000';
    return `${origin.replace(/\/$/, '')}/api`;
  } catch (error) {
    console.warn('Falling back to localhost API base.', error);
    return 'http://localhost:4000/api';
  }
})();

const API_ORIGIN = (() => {
  try {
    const fallbackOrigin = (typeof window !== 'undefined'
      && window.location
      && window.location.origin
      && window.location.origin !== 'null')
      ? window.location.origin
      : 'http://localhost:4000';
    return new URL(API_BASE, fallbackOrigin).origin;
  } catch (error) {
    console.warn('Unable to resolve API origin for assets.', error);
    return '';
  }
})();

const IMAGE_ROOT = (() => {
  if (typeof window !== 'undefined' && window.NVDS_IMAGE_ROOT) {
    return window.NVDS_IMAGE_ROOT.replace(/\/$/, '');
  }
  return '';
})();

let remoteContent = {};
let remoteImages = {};

function resolveImageUrl(value) {
  if (!value) return null;
  if (value.startsWith('data:') || /^https?:\/\//i.test(value)) {
    return value;
  }
  if (IMAGE_ROOT) {
    const needsSlash = value.startsWith('/') ? '' : '/';
    return `${IMAGE_ROOT}${needsSlash}${value}`;
  }
  if (API_ORIGIN) {
    try {
      return new URL(value, API_ORIGIN).toString();
    } catch (error) {
      console.warn('Unable to resolve relative image URL from API origin.', error);
    }
  }
  return value;
}

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
  'stories.card1.linkHref': 'blog-education.html',
  'stories.card2.title': 'Health clinics for all',
  'stories.card2.description': 'Pop-up clinics reduce travel time, making essential care accessible and affordable.',
  'stories.card2.linkLabel': 'Our approach',
  'stories.card2.linkHref': 'blog-malnutrition.html',
  'stories.card3.title': 'Sustainable futures through clean energy',
  'stories.card3.description': 'Solar cooperatives power small businesses and keep families safe after sunset.',
  'stories.card3.linkLabel': 'See the impact',
  'stories.card3.linkHref': 'blog-renewable-energy.html',
  'donate.title': 'Make a difference: Donate today',
  'donate.buttonLabel': 'Contribute',
  'quote.text': '"NVDS has truly changed lives with their dedication and support. Their efforts have given hope to so many."',
  'quote.attribution': '- Emily Carter, Volunteer Coordinator',
  'footer.tagline': 'Driving community-led development throughout Nepal.',
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
  'causes.focus.card1.linkHref': 'cause-healthcare.html',
  'causes.focus.card2.title': 'Education & skills',
  'causes.focus.card2.description':
    'Scholarships, literacy groups, and technical training support lifelong learning for children, youth, and caregivers.',
  'causes.focus.card2.linkLabel': 'Volunteer your expertise',
  'causes.focus.card2.linkHref': 'cause-education.html',
  'causes.focus.card3.title': 'Livelihood resilience',
  'causes.focus.card3.description':
    'Cooperative farming, savings groups, and clean energy solutions help households thrive and weather change.',
  'causes.focus.card3.linkLabel': 'See fund priorities',
  'causes.focus.card3.linkHref': 'cause-livelihoods.html',
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
  'blog.hero.feature.linkHref': 'blog-renewable-energy.html',
  'blog.grid.title': 'Latest from the blog',
  'blog.grid.description':
    "Discover what's new across health, education, livelihood, and climate resilience programmes.",
  'blog.grid.card1.category': 'Health & wellness',
  'blog.grid.card1.title': 'Mobile clinics reach 1,200 families with preventive care',
  'blog.grid.card1.summary':
    'Volunteer doctors and local nurses worked side-by-side to provide screenings, vaccinations, and nutrition coaching across five wards.',
  'blog.grid.card1.linkLabel': 'Continue reading',
  'blog.grid.card1.linkHref': 'blog-malnutrition.html',
  'blog.grid.card2.category': 'Education',
  'blog.grid.card2.title': 'Community classrooms open doors for first-generation learners',
  'blog.grid.card2.summary':
    'Parents and mentors share how flexible schedules and peer groups are helping students stay in school and dream bigger.',
  'blog.grid.card2.linkLabel': 'View programme',
  'blog.grid.card2.linkHref': 'blog-education.html',
  'blog.grid.card3.category': 'Climate resilience',
  'blog.grid.card3.title': 'Solar cooperatives empower women entrepreneurs',
  'blog.grid.card3.summary':
    'Clean energy kiosks are powering tailoring businesses, spice cooperatives, and cold storage for fresh produce.',
  'blog.grid.card3.linkLabel': 'See the impact',
  'blog.grid.card3.linkHref': 'blog-renewable-energy.html',
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

function orientationFallbackForSlot(slotId) {
  if (!slotId) return null;
  const key = SLOT_ORIENTATION_OVERRIDES[slotId];
  return key ? ORIENTATION_FALLBACKS[key] || null : null;
}

function inferOrientationFallback(element) {
  const classList = element?.classList;
  if (!classList) return null;
  if (classList.contains('image-frame--portrait') || classList.contains('image-frame--tall')) {
    return ORIENTATION_FALLBACKS.portrait;
  }
  if (classList.contains('image-frame--square')) {
    return ORIENTATION_FALLBACKS.square;
  }
  if (
    classList.contains('image-frame--wide') ||
    classList.contains('image-frame--banner') ||
    classList.contains('image-frame--panorama')
  ) {
    return ORIENTATION_FALLBACKS.wide;
  }
  if (classList.contains('image-frame--landscape')) {
    return ORIENTATION_FALLBACKS.landscape;
  }
  if (classList.contains('slider__card') || classList.contains('blog-card__image') || classList.contains('card__image')) {
    return ORIENTATION_FALLBACKS.landscape;
  }
  return null;
}

function resolveFallbackImage(element, slotId, nestedDefault) {
  if (nestedDefault) return nestedDefault;
  const elementDefault = element?.dataset?.defaultSrc;
  if (elementDefault) return elementDefault;
  const slotFallback = orientationFallbackForSlot(slotId);
  if (slotFallback) return slotFallback;
  const classFallback = inferOrientationFallback(element);
  if (classFallback) return classFallback;
  return DEFAULT_FALLBACK_IMAGE;
}

function applyImageToElement(element, dataUrl) {
  if (!element) return;

  const slotId = element.dataset ? element.dataset.imageSlot : undefined;
  const isImgElement = element.tagName === 'IMG';
  const nestedImage = isImgElement ? element : element.querySelector('[data-slot-image]');
  const hasBackgroundTarget = !nestedImage || isImgElement;
  const fallbackSrc = resolveFallbackImage(element, slotId, nestedImage?.dataset?.defaultSrc);

  if (dataUrl) {
    if (nestedImage) {
      nestedImage.src = dataUrl;
      nestedImage.hidden = false;
    }
    element.classList.remove('is-empty');
    if (hasBackgroundTarget) {
      element.style.backgroundImage = `url("${dataUrl}")`;
    } else {
      element.style.removeProperty('background-image');
    }
    return;
  }

  if (nestedImage) {
    if (fallbackSrc) {
      nestedImage.src = fallbackSrc;
      nestedImage.hidden = false;
      element.classList.remove('is-empty');
      if (hasBackgroundTarget && !isImgElement) {
        element.style.backgroundImage = `url("${fallbackSrc}")`;
      } else {
        element.style.removeProperty('background-image');
      }
    } else {
      nestedImage.removeAttribute('src');
      nestedImage.hidden = true;
      element.classList.add('is-empty');
      element.style.removeProperty('background-image');
    }
    return;
  }

  if (fallbackSrc) {
    element.classList.remove('is-empty');
    element.style.backgroundImage = `url("${fallbackSrc}")`;
  } else {
    element.classList.add('is-empty');
    element.style.removeProperty('background-image');
  }
}

async function loadRemoteImages() {
  try {
    const res = await fetch(`${API_BASE}/images`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Image manifest request failed: ${res.status}`);
    const payload = await res.json();
    const manifest = payload && typeof payload.images === 'object' ? payload.images : {};
    remoteImages = {};
    Object.entries(manifest).forEach(([slotId, url]) => {
      if (typeof url === 'string') {
        remoteImages[slotId] = resolveImageUrl(url);
      }
    });
  } catch (error) {
    remoteImages = {};
    console.error('Unable to fetch remote images, using placeholders.', error);
  }

  const slots = document.querySelectorAll('[data-image-slot]');
  slots.forEach((slot) => {
    const slotId = slot.dataset.imageSlot;
    if (!slotId) return;
    const stored = remoteImages[slotId];
    applyImageToElement(slot, stored || null);
  });
}

async function loadRemoteContent() {
  try {
    const res = await fetch(`${API_BASE}/content`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Content request failed: ${res.status}`);
    const payload = await res.json();
    if (payload && typeof payload.content === 'object') {
      remoteContent = payload.content;
    } else {
      remoteContent = {};
    }
  } catch (error) {
    remoteContent = {};
    console.error('Unable to fetch remote content, using defaults.', error);
  }
  return getCurrentContent();
}

function getCurrentContent() {
  return { ...DEFAULT_CONTENT, ...remoteContent };
}

function applyContentToPage() {
  const content = getCurrentContent();

  document.querySelectorAll('[data-content-key]').forEach((element) => {
    const key = element.dataset.contentKey;
    if (!key) return;
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      element.textContent = content[key];
    }
  });

  // Footer fallbacks for pages that don't yet have data-content-key set
  try {
    const footerDesc = document.querySelector('.footer__desc');
    if (footerDesc && Object.prototype.hasOwnProperty.call(content, 'footer.tagline')) {
      footerDesc.textContent = content['footer.tagline'];
    }

    const footerCopyWrap = document.querySelector('.footer__bottom-inner p');
    if (footerCopyWrap && Object.prototype.hasOwnProperty.call(content, 'footer.copyright')) {
      footerCopyWrap.innerHTML = `&copy; <span id="year"></span> ${content['footer.copyright']}`;
    }

    // Update footer email/phone everywhere
    const emailVal = content['contact.hero.detail3.value'];
    if (emailVal) {
      const footerEmail = document.querySelector('.footer__contact a[href^="mailto:"]');
      if (footerEmail) {
        footerEmail.textContent = emailVal;
        footerEmail.setAttribute('href', `mailto:${emailVal}`);
      }
    }

    const phoneVal = content['contact.hero.detail2.value'];
    if (phoneVal) {
      const footerPhone = document.querySelector('.footer__contact a[href^="tel:"]');
      if (footerPhone) {
        footerPhone.textContent = phoneVal;
        const telHref = phoneVal.replace(/[^+\d]/g, '');
        footerPhone.setAttribute('href', `tel:${telHref}`);
      }
    }
  } catch {}

  // Home page: latest blog cards section (no data attributes in index.html)
  try {
    const homeBlog = document.querySelector('section.blog-cards');
    if (homeBlog) {
      const heading = homeBlog.querySelector('h2');
      if (heading && Object.prototype.hasOwnProperty.call(content, 'blog.grid.title')) {
        heading.textContent = content['blog.grid.title'];
      }

      const cards = homeBlog.querySelectorAll('.blog-card');
      const map = [
        {
          category: 'blog.grid.card1.category',
          title: 'blog.grid.card1.title',
          summary: 'blog.grid.card1.summary',
          linkLabel: 'blog.grid.card1.linkLabel',
          linkHref: 'blog.grid.card1.linkHref'
        },
        {
          category: 'blog.grid.card2.category',
          title: 'blog.grid.card2.title',
          summary: 'blog.grid.card2.summary',
          linkLabel: 'blog.grid.card2.linkLabel',
          linkHref: 'blog.grid.card2.linkHref'
        },
        {
          category: 'blog.grid.card3.category',
          title: 'blog.grid.card3.title',
          summary: 'blog.grid.card3.summary',
          linkLabel: 'blog.grid.card3.linkLabel',
          linkHref: 'blog.grid.card3.linkHref'
        }
      ];

      cards.forEach((card, i) => {
        const conf = map[i];
        if (!conf) return;
        const catEl = card.querySelector('.blog-card__eyebrow');
        const titleLink = card.querySelector('.blog-card__title a');
        const excerptEl = card.querySelector('.blog-card__excerpt');
        const ctaLink = card.querySelector('.blog-card__link');
        const imageLink = card.querySelector('.blog-card__image');

        if (catEl && Object.prototype.hasOwnProperty.call(content, conf.category)) {
          catEl.textContent = content[conf.category];
        }
        if (titleLink && Object.prototype.hasOwnProperty.call(content, conf.title)) {
          const t = content[conf.title];
          titleLink.textContent = t;
          if (imageLink) imageLink.setAttribute('aria-label', `Read: ${t}`);
        }
        if (titleLink && Object.prototype.hasOwnProperty.call(content, conf.linkHref)) {
          titleLink.setAttribute('href', content[conf.linkHref]);
        }
        if (excerptEl && Object.prototype.hasOwnProperty.call(content, conf.summary)) {
          excerptEl.textContent = content[conf.summary];
        }
        if (ctaLink) {
          if (Object.prototype.hasOwnProperty.call(content, conf.linkLabel)) {
            ctaLink.textContent = content[conf.linkLabel];
          }
          if (Object.prototype.hasOwnProperty.call(content, conf.linkHref)) {
            ctaLink.setAttribute('href', content[conf.linkHref]);
          }
        }
      });
    }
  } catch {}

  document.querySelectorAll('[data-content-href-key]').forEach((element) => {
    const key = element.dataset.contentHrefKey;
    if (!key) return;
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      element.setAttribute('href', content[key]);
    } else if (Object.prototype.hasOwnProperty.call(DEFAULT_CONTENT, key)) {
      element.setAttribute('href', DEFAULT_CONTENT[key]);
    }
  });

  document.querySelectorAll('[data-content-placeholder-key]').forEach((element) => {
    const key = element.dataset.contentPlaceholderKey;
    if (!key) return;
    const value = Object.prototype.hasOwnProperty.call(content, key)
      ? content[key]
      : DEFAULT_CONTENT[key];
    if (typeof value === 'string') {
      element.setAttribute('placeholder', value);
    }
  });

  updateChatContent(content);
}

// Simple horizontal slider controls with arrows and keyboard
function setupSliders() {
  const sliders = document.querySelectorAll('[data-slider]');
  sliders.forEach((slider) => {
    const track = slider.querySelector('[data-slider-track]');
    const viewport = slider.querySelector('[data-slider-viewport]') || track?.parentElement;
    const prev = slider.querySelector('[data-slider-prev]');
    const next = slider.querySelector('[data-slider-next]');
    if (!track || !viewport) return;

    function getGap() {
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || '24');
      return Number.isFinite(gap) ? gap : 24;
    }

    function scrollByCard(dir) {
      const item = track.querySelector('.slider__item');
      const width = item ? item.getBoundingClientRect().width : 300;
      track.scrollBy({ left: (width + getGap()) * dir, behavior: 'smooth' });
    }

    prev && prev.addEventListener('click', () => scrollByCard(-1));
    next && next.addEventListener('click', () => scrollByCard(1));

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') scrollByCard(-1);
      if (e.key === 'ArrowRight') scrollByCard(1);
    });

    // Autoplay marquee-style scroll
    if (slider.hasAttribute('data-autoplay')) {
      const pxPerSecond = parseFloat(slider.getAttribute('data-speed') || '60');
      let rafId; let lastTs;

      // Ensure content is wide enough to loop smoothly by cloning children
      (function ensureClones() {
        const originals = Array.from(track.children);
        let safety = 0;
        while (track.scrollWidth < track.clientWidth * 2 && safety < 6) {
          originals.forEach((n) => track.appendChild(n.cloneNode(true)));
          safety += 1;
        }
      })();

      const step = (ts) => {
        if (lastTs == null) lastTs = ts;
        const dt = (ts - lastTs) / 1000;
        lastTs = ts;
        track.scrollLeft += pxPerSecond * dt; // left -> right
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
          track.scrollLeft = 0;
        }
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);

      const pause = () => { if (rafId) { cancelAnimationFrame(rafId); rafId = 0; } };
      const resume = () => { if (!rafId) { lastTs = undefined; rafId = requestAnimationFrame(step); } };
      track.addEventListener('mouseenter', pause);
      track.addEventListener('mouseleave', resume);
      slider.addEventListener('focusin', pause);
      slider.addEventListener('focusout', resume);
    }
  });
}


document.addEventListener('DOMContentLoaded', async () => {
  await loadRemoteContent();
  applyContentToPage();
  await loadRemoteImages();
  setupSliders();
  setupChatWidget();

  // Mobile navigation toggle (hamburger)
  const navToggle = document.querySelector('[data-nav-toggle]');
  const headerEl = document.querySelector('.site-header');
  const primaryNav = document.getElementById('primary-nav');
  if (navToggle && headerEl && primaryNav) {
    navToggle.addEventListener('click', () => {
      const open = !headerEl.classList.contains('is-nav-open');
      headerEl.classList.toggle('is-nav-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });

    primaryNav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') {
        headerEl.classList.remove('is-nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) {
        headerEl.classList.remove('is-nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Intercept contact form submit to avoid redirect
  const contactForm = document.querySelector('form.contact-form__fields');
  if (contactForm) {
    // Lightweight toast for success message
    const ensureToast = () => {
      let container = document.getElementById('nvds-toast');
      if (!container) {
        container = document.createElement('div');
        container.id = 'nvds-toast';
        container.className = 'nvds-toast is-hidden';
        container.innerHTML = `
          <div class="nvds-toast__box" role="status" aria-live="polite">
            <span class="nvds-toast__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span class="nvds-toast__text">Thank you! We will contact you soon.</span>
          </div>`;
        document.body.appendChild(container);
      }
      return container;
    };

    const showSuccessToast = (text) => {
      const container = ensureToast();
      const textEl = container.querySelector('.nvds-toast__text');
      if (textEl) textEl.textContent = text;
      container.classList.remove('is-hidden');
      // Auto-hide after a short delay
      window.clearTimeout(container.__hideTimer);
      container.__hideTimer = window.setTimeout(() => {
        container.classList.add('is-hidden');
      }, 3200);
    };

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      try {
        const formData = new FormData(contactForm);
        const endpoint = contactForm.getAttribute('action') || 'https://api.web3forms.com/submit';
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        const result = await response.json().catch(() => ({}));
        if (response.ok && (result.success === undefined || result.success === true)) {
          showSuccessToast('Thank you! We will contact you soon.');
          contactForm.reset();
        } else {
          alert('Sorry, there was a problem sending your message. Please try again.');
        }
      } catch (err) {
        alert('Network error. Please try again later.');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // Intercept blog newsletter form to avoid redirect and show same toast
  const newsletterForm = document.querySelector('form.blog-newsletter__form');
  if (newsletterForm) {
    const ensureToast = () => {
      let container = document.getElementById('nvds-toast');
      if (!container) {
        container = document.createElement('div');
        container.id = 'nvds-toast';
        container.className = 'nvds-toast is-hidden';
        container.innerHTML = `
          <div class="nvds-toast__box" role="status" aria-live="polite">
            <span class="nvds-toast__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span class="nvds-toast__text">Thank you! We will contact you soon.</span>
          </div>`;
        document.body.appendChild(container);
      }
      return container;
    };
    const showSuccessToast = (text) => {
      const container = ensureToast();
      const textEl = container.querySelector('.nvds-toast__text');
      if (textEl) textEl.textContent = text;
      container.classList.remove('is-hidden');
      window.clearTimeout(container.__hideTimer);
      container.__hideTimer = window.setTimeout(() => {
        container.classList.add('is-hidden');
      }, 3200);
    };

    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      try {
        const formData = new FormData(newsletterForm);
        const endpoint = newsletterForm.getAttribute('action') || 'https://api.web3forms.com/submit';
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        const result = await response.json().catch(() => ({}));
        if (response.ok && (result.success === undefined || result.success === true)) {
          showSuccessToast('Thank you! We will contact you soon.');
          newsletterForm.reset();
        } else {
          alert('Sorry, there was a problem. Please try again.');
        }
      } catch (err) {
        alert('Network error. Please try again later.');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // Intercept donate form (with file upload) to avoid redirect
  const donateForm = document.querySelector('form.donate-form__fields');
  if (donateForm) {
    const ensureToast = () => {
      let container = document.getElementById('nvds-toast');
      if (!container) {
        container = document.createElement('div');
        container.id = 'nvds-toast';
        container.className = 'nvds-toast is-hidden';
        container.innerHTML = `
          <div class="nvds-toast__box" role="status" aria-live="polite">
            <span class="nvds-toast__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span class="nvds-toast__text">Thank you! We will contact you soon.</span>
          </div>`;
        document.body.appendChild(container);
      }
      return container;
    };
    const showSuccessToast = (text) => {
      const container = ensureToast();
      const textEl = container.querySelector('.nvds-toast__text');
      if (textEl) textEl.textContent = text;
      container.classList.remove('is-hidden');
      window.clearTimeout(container.__hideTimer);
      container.__hideTimer = window.setTimeout(() => {
        container.classList.add('is-hidden');
      }, 3200);
    };

    // Custom file button wiring
    const fileBtn = donateForm.querySelector('[data-file-trigger]');
    const fileInput = donateForm.querySelector('input[type="file"]');
    const fileNames = donateForm.querySelector('[data-file-names]');
    if (fileBtn && fileInput) {
      fileBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        if (!fileInput.files || fileInput.files.length === 0) {
          if (fileNames) fileNames.textContent = '';
        } else {
          const names = Array.from(fileInput.files).map(f => f.name).join(', ');
          if (fileNames) fileNames.textContent = names;
        }
      });
    }

    donateForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = donateForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      try {
        const formData = new FormData(donateForm);
        const endpoint = donateForm.getAttribute('action') || 'https://api.web3forms.com/submit';
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        const result = await response.json().catch(() => ({}));
        if (response.ok && (result.success === undefined || result.success === true)) {
          showSuccessToast('Thanks! Your pledge has been submitted.');
          donateForm.reset();
        } else {
          alert('Sorry, there was a problem submitting your pledge. Please try again.');
        }
      } catch (err) {
        alert('Network error. Please try again later.');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

});

let chatElements;
let chatInitialized = false;
let chatSuccessTimeout;

function setupChatWidget() {
  if (chatInitialized) return;

  const widget = document.querySelector('[data-chat-widget]');
  if (!widget) return;

  const panel = widget.querySelector('[data-chat-panel]');
  const innerToggle = widget.querySelector('[data-chat-toggle]');
  const closeButtons = widget.querySelectorAll('[data-chat-close]');
  const quickButtons = widget.querySelectorAll('[data-chat-quick]');
  const form = widget.querySelector('[data-chat-form]');
  const input = widget.querySelector('[data-chat-input]');
  const messages = widget.querySelector('[data-chat-messages]');
  const success = widget.querySelector('[data-chat-success]');

  if (!panel || !form || !input || !messages) return;

  widget.hidden = false;
  panel.hidden = true;

  const externalToggles = Array.from(document.querySelectorAll('[data-chat-toggle]')).filter(
    (toggle) => toggle !== innerToggle
  );

  function setExpanded(value) {
    [...externalToggles, innerToggle].forEach((toggle) => {
      if (!toggle) return;
      toggle.setAttribute('aria-expanded', String(value));
    });
  }

  function toggleChat(force) {
    const shouldOpen = typeof force === 'boolean' ? force : panel.hidden;
    panel.hidden = !shouldOpen;
    widget.classList.toggle('is-open', shouldOpen);
    setExpanded(shouldOpen);
    if (shouldOpen) {
      widget.setAttribute('data-chat-open', 'true');
      if (input.value.trim()) {
        input.setSelectionRange(input.value.length, input.value.length);
      }
      input.focus();
    } else {
      widget.removeAttribute('data-chat-open');
      clearTimeout(chatSuccessTimeout);
      success.hidden = true;
    }
  }

  [...externalToggles, innerToggle].forEach((toggle) => {
    if (!toggle) return;
    toggle.addEventListener('click', () => toggleChat());
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => toggleChat(false));
  });

  function addMessage(text, variant) {
    const bubble = document.createElement('div');
    bubble.className = `chat-widget__message chat-widget__message--${variant}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    addMessage(trimmed, 'user');
    form.reset();
    input.focus();
    success.hidden = false;
    clearTimeout(chatSuccessTimeout);
    chatSuccessTimeout = window.setTimeout(() => {
      success.hidden = true;
    }, 4000);
  }

  quickButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sendMessage(button.textContent || '');
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage(input.value || '');
  });

  input.addEventListener('input', () => {
    if (success.hidden) return;
    success.hidden = true;
    clearTimeout(chatSuccessTimeout);
  });

  chatElements = {
    widget,
    panel,
    input,
    success,
  };

  chatInitialized = true;
}

function updateChatContent(content) {
  if (!chatInitialized) setupChatWidget();
  if (!chatElements) return;

  const { input, success } = chatElements;
  if (input) {
    const labelKey = 'chat.inputLabel';
    const labelElement = document.querySelector('[data-content-key="chat.inputLabel"]');
    if (labelElement) {
      labelElement.textContent = Object.prototype.hasOwnProperty.call(content, labelKey)
        ? content[labelKey]
        : DEFAULT_CONTENT[labelKey];
    }
  }

  if (success) {
    const key = 'chat.successMessage';
    success.textContent = Object.prototype.hasOwnProperty.call(content, key)
      ? content[key]
      : DEFAULT_CONTENT[key];
  }
}

// =========================
// Live Chat Widget (floating Q&A only)
// =========================
// config (defaults)
const LC_QA_ITEMS = [
  { q: 'What are your support hours?', a: 'Our team is available Monday-Friday, 9am-6pm (local time).' },
  { q: 'How can I contact sales?', a: 'Email sales@example.com and we will reply within 1 business day.' },
  { q: 'Where can I track my order?', a: 'Visit the Orders page and enter your confirmation number to track.' },
  { q: 'Do you offer refunds?', a: 'Yes - within 30 days. Please review our refund policy for details.' }
];

// Storage key for admin-edited Q&A
const LC_QA_KEY = 'nvds_chat_qa';

function lcGetQA() {
  try {
    const raw = localStorage.getItem(LC_QA_KEY);
    if (!raw) return LC_QA_ITEMS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return LC_QA_ITEMS;
    // sanitize: only keep first 4 valid items with q/a strings
    const cleaned = parsed
      .filter(it => it && typeof it.q === 'string' && typeof it.a === 'string')
      .slice(0, 4);
    return cleaned.length ? cleaned : LC_QA_ITEMS;
  } catch (_) {
    return LC_QA_ITEMS;
  }
}

(function() {
  // init after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lcInit);
  } else {
    lcInit();
  }

  function lcInit() {
    // styles
    var css = '' +
      ':root{--lc-primary:var(--color-green,#0f6a3e);--lc-header-bg:var(--color-green-dark,#0a4b2b);--lc-body-bg:var(--color-green-soft,#eaf6f1);--lc-surface:var(--color-green-soft,#eaf6f1);--lc-muted:#e5e7eb;--lc-text:#111827;--lc-shadow:0 8px 28px rgba(0,0,0,0.18),0 2px 8px rgba(0,0,0,0.12);--lc-radius:8px;--lc-gap:8px;--lc-transition:180ms cubic-bezier(.2,.7,.2,1)}' +
      '.lc-toggle{position:fixed;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:9999;width:56px;height:56px;border-radius:9999px;border:none;background:var(--lc-primary);color:#fff;display:grid;place-items:center;font:600 14px/1 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;box-shadow:var(--lc-shadow);cursor:pointer;transition:transform var(--lc-transition),box-shadow var(--lc-transition),background var(--lc-transition)}' +
      '.lc-toggle:hover{transform:translateY(-1px)}.lc-toggle:active{transform:translateY(0)}.lc-toggle:focus-visible{outline:3px solid #93c5fd;outline-offset:2px}' +
      '.lc-panel{position:fixed;right:calc(16px + env(safe-area-inset-right));bottom:calc(84px + env(safe-area-inset-bottom));z-index:9999;width:360px;max-width:calc(100vw - 24px);background:var(--lc-body-bg);border-radius:var(--lc-radius);box-shadow:var(--lc-shadow);overflow:hidden;opacity:0;transform:translateY(8px) scale(.98);visibility:hidden;pointer-events:none;transition:opacity var(--lc-transition),transform var(--lc-transition),visibility 0s linear var(--lc-transition)}' +
      '.lc-panel.is-open{opacity:1;transform:translateY(0) scale(1);visibility:visible;pointer-events:auto;transition:opacity var(--lc-transition),transform var(--lc-transition),visibility 0s}' +
      '.lc-header{background:var(--lc-header-bg);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:10px 12px}' +
      '.lc-title{font:600 15px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;margin:0}' +
      '.lc-close{appearance:none;border:none;background:transparent;color:#fff;width:32px;height:32px;border-radius:6px;cursor:pointer;display:grid;place-items:center}' +
      '.lc-close:hover{background:rgba(255,255,255,0.08)}.lc-close:focus-visible{outline:3px solid #93c5fd;outline-offset:2px}' +
      '.lc-body{background:var(--lc-surface);display:grid;grid-template-rows:1fr auto}' +
      '.lc-messages{height:300px;overflow-y:auto;padding:12px;background:var(--lc-body-bg)}' +
      '.lc-row{display:flex;margin-bottom:8px}.lc-row.user{justify-content:flex-end}.lc-row.bot{justify-content:flex-start}' +
      '.lc-msg{max-width:85%;padding:8px 10px;border-radius:14px;font:14px/1.35 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;box-shadow:0 1px 0 rgba(0,0,0,0.05)}' +
      '.lc-msg.user{background:var(--lc-primary);color:#fff;border-bottom-right-radius:4px}.lc-msg.bot{background:#f3f4f6;color:var(--lc-text);border-bottom-left-radius:4px}' +
      '.lc-msg.typing{background:#f3f4f6;color:transparent;position:relative}' +
      '.lc-msg.typing .dots{display:inline-flex;gap:4px}' +
      '.lc-msg.typing .dot{width:6px;height:6px;border-radius:50%;background:#9ca3af;opacity:.4;animation:lc-bounce 1s infinite ease-in-out}' +
      '.lc-msg.typing .dot:nth-child(2){animation-delay:.15s}.lc-msg.typing .dot:nth-child(3){animation-delay:.3s}' +
      '@keyframes lc-bounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-3px);opacity:1}}' +
      '.lc-quick{background:var(--lc-surface);border-top:1px solid var(--lc-muted);padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px}' +
      '.lc-quick button{appearance:none;border:1px solid var(--lc-muted);background:#fff;border-radius:8px;padding:8px 10px;text-align:left;cursor:pointer;font:500 13px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;color:var(--lc-text);transition:background var(--lc-transition),border-color var(--lc-transition),transform var(--lc-transition)}' +
      '.lc-quick button:hover{background:#f3f4f6}.lc-quick button:active{transform:translateY(1px)}.lc-quick button:focus-visible{outline:3px solid #93c5fd;outline-offset:2px}' +
      '@media (max-width:420px){.lc-panel{width:calc(100vw - 24px)}.lc-messages{height:min(50vh,380px)}}' +
      '@media (prefers-reduced-motion:reduce){.lc-panel,.lc-toggle{transition:none}}';

    var style = document.createElement('style');
    style.setAttribute('data-lc-style', '');
    style.textContent = css;
    document.head.appendChild(style);

    // markup
    var panel = document.createElement('div');
    panel.id = 'lc-panel';
    panel.className = 'lc-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-labelledby', 'lc-title');
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = '' +
      '<div class="lc-header">' +
      '  <h2 class="lc-title" id="lc-title">Chat</h2>' +
      '  <button type="button" class="lc-close" id="lc-close" aria-label="Close chat" title="Close chat">x</button>' +
      '</div>' +
      '<div class="lc-body">' +
      '  <div class="lc-messages" id="lc-messages" aria-live="polite" aria-atomic="false"></div>' +
      '  <div class="lc-quick" id="lc-quick"></div>' +
      '</div>';

    var toggle = document.createElement('button');
    toggle.id = 'lc-toggle';
    toggle.className = 'lc-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open chat');
    toggle.setAttribute('aria-controls', 'lc-panel');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.title = 'Open chat';
    toggle.textContent = 'Help?';

    document.body.appendChild(panel);
    document.body.appendChild(toggle);

    var closeBtn = panel.querySelector('#lc-close');
    var quick = panel.querySelector('#lc-quick');
    var messages = panel.querySelector('#lc-messages');

    var isOpen = false;
    var lastFocused = null;

    // render quick buttons
    function renderQuickButtons() {
      quick.innerHTML = '';
      var QA = lcGetQA();
      for (var i=0; i<QA.length; i++) {
        var item = QA[i];
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = item.q;
        (function(idx){ b.addEventListener('click', function(){ handleQuestionClick(idx); }); })(i);
        quick.appendChild(b);
      }
    }

    // append message
    function appendMessage(text, who) {
      var row = document.createElement('div');
      row.className = 'lc-row ' + (who === 'user' ? 'user' : 'bot');
      var msg = document.createElement('div');
      msg.className = 'lc-msg ' + (who === 'user' ? 'user' : 'bot');
      msg.textContent = text;
      row.appendChild(msg);
      messages.appendChild(row);
      messages.scrollTop = messages.scrollHeight;
    }

    // handlers
    function handleQuestionClick(index) {
      var QA = lcGetQA();
      var item = QA[index];
      if (!item) return;
      appendMessage(item.q, 'user');

      // show typing indicator then reply after 0.5s
      var typingRow = document.createElement('div');
      typingRow.className = 'lc-row bot';
      var typingMsg = document.createElement('div');
      typingMsg.className = 'lc-msg bot typing';
      var dots = document.createElement('span');
      dots.className = 'dots';
      dots.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
      typingMsg.appendChild(dots);
      typingRow.appendChild(typingMsg);
      messages.appendChild(typingRow);
      messages.scrollTop = messages.scrollHeight;

      setTimeout(function(){
        typingRow.remove();
        appendMessage(item.a, 'bot');
      }, 500);
    }

    // focus helpers
    function getFocusable(root) {
      var list = root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      var arr = [];
      for (var i=0;i<list.length;i++) {
        var el = list[i];
        if (!el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')) arr.push(el);
      }
      return arr;
    }

    // open/close
    function openPanel() {
      if (isOpen) return;
      isOpen = true;
      lastFocused = document.activeElement;
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      setTimeout(function(){
        var f = getFocusable(panel);
        (f[0] || closeBtn).focus();
      }, 0);
      document.addEventListener('keydown', handleKeydown, true);
    }
    function closePanel() {
      if (!isOpen) return;
      isOpen = false;
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', handleKeydown, true);
      if (lastFocused && typeof lastFocused.focus === 'function') { lastFocused.focus(); } else { toggle.focus(); }
    }
    function handleKeydown(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') { e.preventDefault(); closePanel(); return; }
      if (e.key === 'Tab') {
        var focusables = getFocusable(panel);
        if (focusables.length === 0) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        var active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || !panel.contains(active)) { e.preventDefault(); last.focus(); }
        } else {
          if (active === last || !panel.contains(active)) { e.preventDefault(); first.focus(); }
        }
      }
    }

    // wire up
    var openTimer = null;
    toggle.addEventListener('click', function(){
      if (isOpen) {
        clearTimeout(openTimer);
        openTimer = null;
        closePanel();
      } else {
        clearTimeout(openTimer);
        openTimer = setTimeout(openPanel, 300); // 0.3s delay before opening
      }
    });
    closeBtn.addEventListener('click', closePanel);

    // init
    renderQuickButtons();
  }
})();

// =========================
// Hero Stats Count-up (0.8s from half to full)
// =========================
(function() {
  function parseValue(text) {
    var str = (text || '').trim();
    var plus = /\+$/.test(str);
    var suffixMatch = str.match(/[a-zA-Z]+/);
    var suffix = suffixMatch ? suffixMatch[0] : '';
    var numMatch = str.match(/[\d\.]+/);
    var numStr = numMatch ? numMatch[0] : '0';
    var decimals = (numStr.indexOf('.') >= 0) ? (numStr.length - numStr.indexOf('.') - 1) : 0;
    var num = parseFloat(numStr) || 0;
    return { num: num, decimals: decimals, plus: plus, suffix: suffix };
  }

  function formatValue(value, info) {
    var v = info.decimals ? value.toFixed(info.decimals) : Math.round(value).toString();
    return v + (info.suffix || '') + (info.plus ? '+' : '');
  }

  function animateCount(el) {
    var info = parseValue(el.textContent);
    var start = info.num / 2;
    var end = info.num;
    var duration = 800; // 0.8s
    var startTime = performance.now();

    function step(now) {
      var t = Math.min(1, (now - startTime) / duration);
      var current = start + (end - start) * t;
      el.textContent = formatValue(current, info);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = formatValue(end, info);
    }
    requestAnimationFrame(step);
  }

  function initCounts() {
    var nodes = document.querySelectorAll('.hero__stat-number');
    if (!nodes.length) return;
    var run = function() {
      nodes.forEach(function(n){
        if (n.dataset.countAnimated) return;
        n.dataset.countAnimated = '1';
        animateCount(n);
      });
    };
    var container = document.querySelector('.hero__stats');
    if ('IntersectionObserver' in window && container) {
      var obs = new IntersectionObserver(function(entries){
        var e = entries && entries[0];
        if (e && e.isIntersecting) { run(); obs.disconnect(); }
      }, { threshold: 0.3 });
      obs.observe(container);
    } else {
      run();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounts);
  } else {
    initCounts();
  }
})();

