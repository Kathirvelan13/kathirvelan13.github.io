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
      image: "Anohga A W - Final Result.png"
  },

  /* Add your next project here — copy the block above this line. */
];


/* --------------------------------------------------------------------
   2. SKILLS — grouped by category, shown at equal level
   -------------------------------------------------------------------- */
const skillCategories = [
  {
    category: "Paid Media",
    items: [
      { name: "Meta Ads (Facebook & Instagram)", note: "From picking the right campaign objective to tracking website engagement using Pixel and aslo specialized in optimizing the ad, by reading the metrics." },
      { name: "Google Ads", note: "Keyword Research, Right campaign type — Search, Performance Max, or Shopping, Tracking conversions with Google Tag Manager." },
      { name: "LinkedIn Ads", note: "Built the solid fundamentals of campaign objectives, audience targeting by job title and industry, and Lead Gen Forms." },
    ]
  },
  {
    category: "SEO & Content",
    items: [
      { name: "WordPress SEO", note: "On-page and technical SEO for WordPress sites — page audits, metadata, site speed, and search visibility improvements." },
      { name: "Content Writing", note: "Writing scripts for short-form video content — crafting the first 2-3 seconds as a hook that stops the scroll, structuring the middle to hold attention, and closing with a clear call-to-action." },
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
    image: "Certificate - 100 Days Challenge Digital Marketing.png" // put your certificate image filename here once uploaded
  },

  /* Add another certification here — copy the block above this line. */
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
${c.image ? `<img class="case-image" src="${c.image}" alt="${c.title}">` : ""}
    </article>
  `).join("")
  : `<p class="published-empty">Projects will appear here.</p>`;

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
      ${c.image ? `<img class="cert-image" src="${c.image}" alt="${c.name}">` : ""}
    </div>
  `).join("")
  : `<p class="published-empty">Certifications will appear here.</p>`;

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
