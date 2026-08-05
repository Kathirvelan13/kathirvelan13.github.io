/* ==========================================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
   ==========================================================================
   You don't need to know JavaScript to use this. Everything below is a
   list of items in { curly braces }. To add a new one:
     1. Copy an existing { ... } block (including the comma after it)
     2. Paste it right above or below, inside the same [ ] list
     3. Change the text inside the quotes " " to your new content
     4. Save the file — that's it, no other file needs to change.

   Keep the quotes " " around every piece of text.
   ========================================================================== */


/* --------------------------------------------------------------------
   1. EXPERIENCE / PROJECTS — one block per campaign or project
   -------------------------------------------------------------------- */
const caseStudies = [
  {
    title: "Anohga Yoga Studio — Thiruvanmiyur, Chennai",
    tag: "Meta Ads · Click-to-WhatsApp",
    description:
      "Ran Click-to-WhatsApp (CTWA) lead campaigns for an aerial yoga workshop — The Meta ad campaigns was ran for 13 days with the budget of rupees 500 per day.",
    stats: [
      { value: "₹6,128.37", label: "Ad spend (13-day campaign)" },
      { value: "159", label: "Messaging conversations started" },
      { value: "30", label: "Workshop bookings" },
      { value: "3", label: "Targeting iterations to fix radius" }
    ],
    lessons:
      "Learned that significant edits (new creative, budget swings over 20%) reset Meta's learning phase — and that CTWA campaigns need to be read on \"Messaging conversations started,\" not at the Leads column, which doesn't populate for this ad type.",
     
      // optional: add a path like "images/project-1.jpg" once you upload one
      image: "Anohga A W - Final Result.png",
      imageAlt: "Meta Ads"
  },

  /* Add your next project here — copy the block above this line. */
];

/* --------------------------------------------------------------------
   1.5. SEO EXPERIENCE — gained from building this portfolio itself
   -------------------------------------------------------------------- */
const seoExperience = {
  intro:
    "I had built this entire portfolio you are currently looking to get real hands-on experience instead of just theory. Every part of this portfolio is built from planning to publishing on proper SEO standards.",
  points: [
    {
      heading: "Competitor Research",
      text: "Before starting, I checked how other freelance digital marketers had built their own websites like their domain authority, page authority, backlinks and whether they had any blogs. This helped me understand what a strong marketer's site should look like, so I could build mine better."
    },
    {
      heading: "Keyword Research & On-Page SEO",
      text: "I had find out the most relevant keywords with medium and low competition which fits for my content, then used them to write my meta titles, meta descriptions and the page content itself - without stuffing keywords unnaturally. I also added proper alt text for every image on this portfolio site."
    },
    {
      heading: "Technical SEO",
      text: "Done integration of Google Analytics and Google Search Console to check whether my pages were getting indexed or not. I set up an XML sitemap and an image sitemap, added a robots.txt file to stop unnecessary pages from being crawled, added FAQ schema so Google can show my FAQs directly in search results, and added a canonical tag to avoid duplicate content issues."
    },
    {
      heading: "Off-Page SEO",
      text: "Finally, I submitted my portfolio link by answering relevant questions on Quora and Reddit, which helps to bring organic traffic from real conversations."
    }
  ]
};


/* --------------------------------------------------------------------
   2. SKILLS — grouped by category, shown at equal level
   -------------------------------------------------------------------- */
const skillCategories = [
  {
    category: "Paid Media",
    items: [
      { name: "Meta Ads (Facebook & Instagram)", note: "From picking the right campaign objective to tracking website engagement using Pixel and aslo specialized in optimizing the ad, by reading the metrics." },
      { name: "Google Ads", note: "Keyword Research, Right campaign type - Search, Performance Max, or Shopping, Tracking conversions with Google Tag Manager." },
      { name: "LinkedIn Ads", note: "Built the solid fundamentals of campaign objectives, audience targeting by job title and industry, and Lead Gen Forms." },
    ]
  },
  {
    category: "SEO & Content",
    items: [
      { name: "SEO", note: "Specialized in On-page SEO, technical SEO and Off-page SEO for Wordpress as well as coding based sites - page audits, metadata, site speed, and search visibility improvements." },
      { name: "Content Writing", note: "Writing scripts for short-form video content - crafting the first 2-3 seconds as a hook that stops the scroll, structuring the middle to hold attention, and closing with a clear call-to-action." },
      { name: "Copywriting", note: "Specialized in writing AD copy, what audience actually searches and feels using Word Cloud Techniques." },
    ]
  },
  {
    category: "Creative",
    items: [
      { name: "Poster Design", note: "Eye-catching promotional graphics that stop the scroll, design for campaigns in the angel of offers based, FOMO based, Pain Based and Proof based." },
      { name: "Video Editing (CapCut PC)", note: "AI-generated videos with natural dialogues, Reels editing with a scroll-stopping hook in the first few seconds,Sharp cuts, sound, and effects with attentive vedio output. " },
    ]
  },
];


/* --------------------------------------------------------------------
   3. CERTIFICATIONS
   -------------------------------------------------------------------- */
const certifications = [
  {
    name: "The High Paying Clients",
    issuer: "Through the High Paying Clients certification course, I learned practically how to run paid ad campaigns that are built around real business outcomes, not just clicks and impressions. Also learned how to read campaign data properly — cost per result (CPR), frequency, click through rate (CTR). By using those metrics to make smarter decisions for Scaling.",
    date: "", // replace with your actual completion date
    image: "Certificate - 100 Days Challenge Digital Marketing.png", // put your certificate image filename here once uploaded
    imageAlt: "Digital Marketing"
  },

  /* Add another certification here — copy the block above this line. */
];

/* --------------------------------------------------------------------
   3.5. BLOG POSTS — one block per article
   -------------------------------------------------------------------- */
const blogPosts = [
  {
    title: "Already Did SEO but Still Not Ranked on Google? Here's Why",
    tag: "SEO",
    hook: "You can read your website easily. But can Google? If Google can't properly read your site, it won't rank it. Let's find out why.",
    cover: "blog-seo-not-ranked.png",
    coverAlt: "SEO not ranking on Google",
    sections: [
      { heading: "Sometimes You Need Some Patience", text: "You did proper SEO from top to end for your website, but your site may be new, or you did SEO just a day before. Google actually needs some time to read your site and decide whether to rank it or not. Better to give it some time before drawing conclusions." },
      { heading: "Is Your Content Solving a Problem?", text: "Sometimes proper SEO without problem-solving content doesn't work. Google won't rank your site if people are searching for something and your site isn't solving it. Writing content from a problem-solving angle is what you need to check and fix." },
      { heading: "Submitting a Sitemap Doesn't Mean Instant Ranking", text: "Just because you submitted your sitemap to Google Search Console doesn't mean Google will rank your website. Submitting a sitemap only tells Google \u201chere are my URLs, please check them.\u201d Google still needs time to crawl your site and check if each URL is set up properly. This can take days or even weeks, not minutes." },
      { heading: "How to Check If Every Page Is Indexed on Google", text: "To know if every page is indexed, go to Google Search Console and open the URL Inspection tool. Paste the page's URL and hit enter. Google will tell you if that page is indexed or not. Do this for every important page on your site — homepage, service pages, and blog posts." }
    ],
    conclusionHeading: "Still Need Personal Assistance?",
    conclusionText: "If your pages still aren't indexed after trying this, don't worry — it happens to a lot of websites. Reach out to me by email, and I'll personally check your sitemap and indexing issues, then tell you exactly what's wrong and how to fix it.",
    cover: "already seo.png",
    coverAlt: "SEO"
  },
  {
    title: "Are You Getting Clicks on Meta Ads, but No Sales?",
    tag: "Meta Ads",
    hook: "Same thing happened to my client. It may be a small thing in the strategy you missed.",
    cover: "blog-meta-ads-no-sales.png",
    coverAlt: "Meta Ads getting clicks but no sales",
    sections: [
      { heading: "An Offer Can Convert Your Clicks Into Sales", text: "One right offer can entirely change your clicks into a huge amount of sales. Make sure the offer gives profit to both your business and your customers." },
      { heading: "Are You Targeting the Right People?", text: "Targeting too broad for a new ad account may get you unrelated leads or sales. Target only the audience you actually want instead of going broad.\n\nFor example, if you're running Meta Ads for an aerial yoga workshop, targeting everyone interested in \u201cFitness\u201d is too broad.\n\nInstead, target the people who are actually looking to join:\n\u2022 Women aged 25\u201340\n\u2022 Interested in Yoga & Wellness\n\u2022 Living near your studio\n\u2022 Already searching for healthy lifestyle activities\n\nThe more relevant your audience, the better your chances of getting real enquiries instead of random clicks." },
      { heading: "The Problem May Be After the Click", text: "Imagine clicking an ad you're interested in, but you land on a slow website or a landing page with a lot of unnecessary information. Sometimes the ad doesn't fail — the landing page does. Build your landing page content around solving the customer's problem." },
      { heading: "What to Fix", text: "If your Facebook Ads are getting clicks but not sales, don't stop running ads. Instead, ask yourself these three questions:\n1. Am I targeting the right audience?\n2. Is my offer clear?\n3. What happens after someone clicks?" }
    ],
    conclusionHeading: "Thinking Personal Assistance Would Help?",
    conclusionText: "Feel free to reach out to me on WhatsApp. I'll help you turn your clicks into real sales.",
    cover: "Meta Ads - clicks no sales.png",
    coverAlt: "Meta ads"
  },

  /* Add your next blog post here — copy a block above this line. */
];

/* --------------------------------------------------------------------
   4. FAQ — question and answer pairs
   -------------------------------------------------------------------- */
const faqs = [
  {
    question: "What does a digital marketer actually do?",
    answer: "A digital marketer plans and runs campaigns across platforms like Meta, Google and LinkedIn to bring the right people to a business, then uses SEO strategies to keep that traffic growing organically over time."
  },
  {
    question: "Which platforms do you specialize in?",
    answer: "I mainly work with Meta Ads and Google Ads for paid campaigns also have a strong foundation on LinkedIn Ads, then builds a hands-on experience in SEO — keyword research, on-page optimization, technical SEO and search visibilty knowledge."
  },
  {
    question: "How do you measure if a campaign is actually working?",
    answer: "By Measuring the Metrics of Cost per lead, click-through rate, and frequency are my core numbers, we can decide whether a campaign is working or not by seeing them almost."
  },
  {
    question: "Do you have real campaign experience?",
    answer: "I have managed live Meta ad campaigns for real businesses, handled everything from audience targeting to Ad optimization by reading the Metrics. I learn best by doing, not just studying."
  },
  {
    question: "Are you open to full-time opportunities?",
    answer: "Yes — I'm actively looking to join a team where I can apply my knowledge and grow with the organization."
  },
  {
    question: "How do you decide between Google Ads and Meta Ads for a campaign?",
    answer: "It depends up on the Products or Services. Google Ads works well when people are actively searching for something — that's high intent. Meta Ads is stronger for warm up, engagement, and visual storytelling when the audience isn't searching yet but they are our targeted audience."
  },
  {
    question: "What made you choose digital marketing as a career?",
    answer: "I always loved creating content — writing scripts, acting in them, and seeing the audience enjoy it. Digital marketing let me use that same skill, but now to promote a product or service and get real results."
  },
];



/* ==========================================================================
   Below this line is rendering code — you don't need to edit it.
   ========================================================================== */

document.getElementById("year").textContent = new Date().getFullYear();

// --- Case studies / experience ---
const caseList = document.getElementById("case-study-list");
caseList.innerHTML = caseStudies.length
  ? caseStudies.map(c => `
    <article class="case-card">
      <div class="case-card-head">
        <h3>${c.title}</h3>
        <span class="case-tag">${c.tag}</span>
      </div>
      <p class="case-desc">${c.description}</p>
<div class="case-stats">
  ${c.stats.map(s => `
    <div>
      <span class="case-stat-num">${s.value}</span>
      <span class="case-stat-label">${s.label}</span>
    </div>
  `).join("")}
</div>
<p class="case-lessons"><strong>What I learned:</strong> ${c.lessons}</p>
${c.image ? `<img class="case-image" src="${c.image}" alt="${c.imageAlt || c.title}">` : ""}   
</article>
  `).join("")
  : `<p class="published-empty">Projects will appear here.</p>`;

// --- SEO Experience ---
const seoList = document.getElementById("seo-experience-list");
seoList.innerHTML = `
  <div class="case-card seo-card">
    <p class="case-desc">${seoExperience.intro}</p>
    ${seoExperience.points.map(p => `
      <div class="seo-point">
        <h4>${p.heading}</h4>
        <p>${p.text}</p>
      </div>
    `).join("")}
  </div>
`;

// --- Skills (grouped, equal treatment) ---
const skillsContainer = document.getElementById("skills-container");
skillsContainer.innerHTML = skillCategories.map(cat => `
  <div class="skills-category">
    <div class="skills-category-title">${cat.category}</div>
    <div class="skills-grid">
      ${cat.items.map(s => `
        <div class="skill-card">
          <div class="skill-name">${s.name}</div>
          <div class="skill-note">${s.note}</div>
        </div>
      `).join("")}
    </div>
  </div>
`).join("");

// --- Certifications ---
const certList = document.getElementById("certification-list");
certList.innerHTML = certifications.length
  ? certifications.map(c => `
    <div class="cert-card">
      <div class="cert-card-head">
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-meta">${c.issuer}${c.date ? ` — ${c.date}` : ""}</div>
        </div>
        <span class="cert-badge">Completed</span>
      </div>
${c.image ? `<img class="cert-image" src="${c.image}" alt="${c.imageAlt || c.name}">` : ""}  
   </div>
  `).join("")
  : `<p class="published-empty">Certifications will appear here.</p>`;

// --- Blog ---
const blogList = document.getElementById("blog-list");
blogList.innerHTML = blogPosts.length
? `<div class="blog-list">${blogPosts.map((b, i) => `
<article class="blog-card" id="blog-${i}">
      ${b.cover ? `<img class="blog-cover" src="${b.cover}" alt="${b.coverAlt || b.title}">` : ""}
      <div class="blog-card-body">
        <span class="blog-tag">${b.tag}</span>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-hook">${b.hook}</p>
        <button class="blog-toggle" data-index="${i}">
          <span class="blog-toggle-text">Read full post</span>
          <span class="blog-toggle-icon">+</span>
        </button>
        <div class="blog-full">
          <div class="blog-full-inner">
            ${b.sections.map(s => `
              <h4>${s.heading}</h4>
              <p>${s.text.replace(/\n/g, "<br>")}</p>
            `).join("")}
            <h4>${b.conclusionHeading}</h4>
            <p>${b.conclusionText}</p>
          </div>
        </div>
      </div>
    </article>
  `).join("")}</div>`
  : `<p class="published-empty">Posts will appear here.</p>`;

blogList.querySelectorAll(".blog-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".blog-card");
    const opening = !card.classList.contains("open");
    card.classList.toggle("open");
    btn.querySelector(".blog-toggle-text").textContent = opening ? "Show less" : "Read full post";
  });
});

// --- FAQ ---
const faqList = document.getElementById("faq-list");
faqList.innerHTML = `<div class="faq-list">
  ${faqs.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" data-index="${i}">
        <span>${f.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${f.answer}</div>
      </div>
    </div>
  `).join("")}
</div>`;

faqList.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".faq-item").classList.toggle("open");
  });
});

// --------------------------------------------------------------------
// MOBILE NAV — hamburger toggle for small screens
// --------------------------------------------------------------------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close the menu whenever a link is tapped
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
