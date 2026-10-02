/* ===== EDIT YOUR CONTENT HERE. Every text has { en, ar }. Empty "" values are hidden on the page. ===== */
const S = {
  name: { en: "Omar El-Hadidi", ar: "عمر الحديدي" },
  initials: "OH",                       // shown until you add assets/photo.jpg
  mainFocus: "automation",              // change to: ml | backend | web | cp  (moves that track to the centre)
  headline: { en: "I automate the repetitive work in your business.", ar: "أؤتمت الأعمال المتكررة في نشاطك." },
  pitch: {
    en: "n8n workflow developer. I turn spreadsheets, messages, reports and lead handling into automations that run on their own, with custom code and APIs when no-code isn't enough.",
    ar: "مطور أتمتة باستخدام n8n. أحوّل الجداول والرسائل والتقارير ومتابعة العملاء إلى عمليات تعمل تلقائياً، مع كود وAPI مخصص عندما لا تكفي الأدوات الجاهزة."
  },
  links: {
    mostaql: "https://mostaql.com/u/Omar_Hadidi",
    khamsat: "https://khamsat.com/user/omar_mohamed_hadidi",
    github: "https://github.com/OmarHadidi",
    linkedin: "https://www.linkedin.com/in/omar-hadidi-82a443221",
    codeforces: "https://codeforces.com/profile/Omar_Hadidi",
    telegram: "",   // e.g. "https://t.me/yourusername"
    whatsapp: "",   // e.g. "https://wa.me/20XXXXXXXXXX" (this exposes your number)
    email: "",      // e.g. "name@gmail.com"
    formAction: ""  // paste a Formspree URL to show a contact form
  },
  services: [
    { icon: "⚙", price: "", title: { en: "n8n automation", ar: "أتمتة n8n" }, text: { en: "Custom workflows that connect your tools and run 24/7.", ar: "سير عمل مخصص يربط أدواتك ويعمل على مدار الساعة." } },
    { icon: "💬", price: "", title: { en: "AI chatbots and agents", ar: "بوتات وذكاء اصطناعي" }, text: { en: "Telegram or WhatsApp bots that answer from your business info.", ar: "بوتات تيليجرام أو واتساب تجيب من معلومات نشاطك." } },
    { icon: "🔗", price: "", title: { en: "API integrations", ar: "ربط الأنظمة" }, text: { en: "Webhooks and APIs that make your apps talk to each other.", ar: "ربط تطبيقاتك ببعضها عبر Webhooks وAPI." } },
    { icon: "📊", price: "", title: { en: "Sheets, Excel and data cleaning", ar: "إكسل وتنظيف البيانات" }, text: { en: "Messy data turned into clean, organized, exportable files.", ar: "تحويل البيانات العشوائية إلى ملفات منظمة وجاهزة." } },
    { icon: "🌐", price: "", title: { en: "Also available", ar: "خدمات أخرى" }, text: { en: "Backend development, simple websites, scraping and data entry.", ar: "برمجة خلفية، مواقع بسيطة، سحب بيانات وإدخال بيانات." } }
  ],
  /* status: "done" | "progress". Add a project = copy one block. */
  projects: [
    { status: "done", title: { en: "Plants vs Zombies clone (C++)", ar: "نسخة Plants vs Zombies (C++)" },
      desc: { en: "Team project I led. Won 1st place among 140 projects at my university.", ar: "مشروع فريق قدته. حصل على المركز الأول بين 140 مشروعاً في الجامعة." },
      tags: ["C++", "Teamwork"], video: "", github: "" },
    { status: "progress", title: { en: "Scrape, summarize, report (n8n)", ar: "سحب وتلخيص وتقرير (n8n)" },
      desc: { en: "A daily automated report sent by email or Telegram. Version 1 in progress.", ar: "تقرير يومي آلي يصل بالبريد أو تيليجرام. النسخة الأولى قيد العمل." },
      tags: ["n8n", "Scraping", "Telegram"], video: "", github: "" },
    { status: "done", title: { en: "Blog website (Django)", ar: "موقع مدونة (Django)" },
      desc: { en: "Image storage on Drive with a blurry preview plus a high-quality copy, and Google or GitHub login.", ar: "تخزين الصور على درايف بنسخة منخفضة للتحميل السريع وأخرى عالية الجودة، مع دخول عبر Google أو GitHub." },
      tags: ["Django", "OAuth"], video: "", github: "" }
  ],
  tracks: [
    { id: "automation", name: { en: "Automation and AI", ar: "الأتمتة والذكاء الاصطناعي" }, caption: { en: "Workflows that save you hours every week", ar: "أنظمة توفر عليك ساعات كل أسبوع" }, skills: ["n8n", "APIs", "Webhooks", "Telegram", "Sheets"] },
    { id: "ml", name: { en: "Machine learning", ar: "تعلم الآلة" }, caption: { en: "Currently learning", ar: "أتعلمه حالياً" }, skills: ["Python", "ML basics"] },
    { id: "backend", name: { en: "Backend", ar: "البرمجة الخلفية" }, caption: { en: "Custom APIs and databases", ar: "واجهات برمجية وقواعد بيانات" }, skills: ["Node.js", "Express", "Django", "PostgreSQL"] },
    { id: "web", name: { en: "Web", ar: "الويب" }, caption: { en: "Landing pages and simple sites", ar: "صفحات هبوط ومواقع بسيطة" }, skills: ["HTML", "CSS", "JS"] },
    { id: "cp", name: { en: "Problem solving", ar: "حل المشكلات" }, caption: { en: "Fast, clean logic", ar: "منطق سريع ونظيف" }, skills: ["C++", "Codeforces"] }
  ],
  steps: [
    { t: { en: "Discuss", ar: "نناقش" }, d: { en: "You describe the task. I ask what I need to scope it.", ar: "تشرح المهمة وأسأل عما أحتاجه لتحديد نطاقها." } },
    { t: { en: "Plan", ar: "نخطط" }, d: { en: "I send a short plan, timeline and what I need from you.", ar: "أرسل خطة قصيرة وموعداً وما أحتاجه منك." } },
    { t: { en: "Build", ar: "أبني" }, d: { en: "You see progress along the way, not only at the end.", ar: "تشاهد التقدم أثناء العمل وليس في النهاية فقط." } },
    { t: { en: "Deliver and support", ar: "أسلّم وأدعم" }, d: { en: "I hand over the workflow and help you after delivery.", ar: "أسلّمك العمل وأساعدك بعد التسليم." } }
  ],
  about: {
    en: ["I'm a Computer Science student at Ain Shams University (class of 2029), focused on AI and automation. I started in backend development and still build with Node.js, Python and PostgreSQL, so I can go beyond no-code when a project needs it.",
         "I like clear communication and small, working deliveries. Outside freelancing I compete in programming contests and lead team projects."],
    ar: ["طالب علوم حاسب في جامعة عين شمس (دفعة 2029)، أركز على الذكاء الاصطناعي والأتمتة. بدأت بالبرمجة الخلفية وما زلت أبني بـ Node.js وPython وPostgreSQL، فأستطيع تجاوز الأدوات الجاهزة عندما يحتاج المشروع.",
         "أحب التواصل الواضح والتسليمات الصغيرة التي تعمل. خارج العمل الحر أشارك في مسابقات البرمجة وأقود مشاريع جماعية."]
  },
  proof: { en: ["ACM ASU medalist (#10 of ~60 finalists)", "1st place among 140 university projects", "Coursera: Django for Everybody (University of Michigan)", "ECPC Teens, twice"],
           ar: ["ميدالية ACM جامعة عين شمس (المركز 10 من نحو 60)", "المركز الأول بين 140 مشروعاً جامعياً", "كورسيرا: Django for Everybody (جامعة ميشيجان)", "ECPC للناشئين مرتين"] },
  faq: [   /* EDIT these to your real rules */
    { q: { en: "How long does a project take?", ar: "كم يستغرق المشروع؟" }, a: { en: "Small automations take 1 to 3 days. I give you a timeline after we discuss the task.", ar: "الأتمتة الصغيرة تأخذ من يوم إلى 3 أيام، وأحدد لك الموعد بعد مناقشة المهمة." } },
    { q: { en: "How much does it cost?", ar: "كم التكلفة؟" }, a: { en: "It depends on the task. Message me with the details and I'll send a quote.", ar: "تعتمد على المهمة. راسلني بالتفاصيل وسأرسل لك عرض سعر." } },
    { q: { en: "Do you include revisions?", ar: "هل تشمل التعديلات؟" }, a: { en: "Yes, adjustments to the agreed scope are included.", ar: "نعم، التعديلات ضمن النطاق المتفق عليه مشمولة." } },
    { q: { en: "What do you need from me?", ar: "ماذا تحتاج مني؟" }, a: { en: "A clear description of the task and access to the tools involved.", ar: "وصف واضح للمهمة وصلاحية الوصول للأدوات المعنية." } }
  ]
};
const UI = {
  nav: [["services", { en: "Services", ar: "الخدمات" }], ["projects", { en: "Projects", ar: "الأعمال" }], ["skills", { en: "Skills", ar: "المهارات" }], ["process", { en: "Process", ar: "طريقة العمل" }], ["about", { en: "About", ar: "نبذة" }], ["contact", { en: "Contact", ar: "تواصل" }]],
  hire: { en: "Hire me", ar: "وظفني" }, langBtn: { en: "العربية", ar: "English" },
  services: { en: "What I can build for you", ar: "ما يمكنني تنفيذه لك" },
  projects: { en: "Projects", ar: "الأعمال" }, from: { en: "From", ar: "ابتداءً من" },
  done: { en: "Done", ar: "منجز" }, progress: { en: "In progress", ar: "قيد العمل" },
  video: { en: "Watch demo", ar: "شاهد العرض" }, code: { en: "Code", ar: "الكود" },
  more: { en: "More projects are on the way.", ar: "المزيد من الأعمال قريباً." },
  skills: { en: "Skills", ar: "المهارات" }, main: { en: "Main focus", ar: "التركيز الأساسي" },
  process: { en: "How I work", ar: "طريقة العمل" }, about: { en: "About me", ar: "نبذة عني" },
  faq: { en: "Questions", ar: "أسئلة شائعة" }, contact: { en: "Let's talk about your task", ar: "لنتحدث عن مهمتك" },
  hireOn: { en: "Hire me on", ar: "وظفني عبر" }, send: { en: "Send message", ar: "إرسال" },
  fName: { en: "Your name", ar: "اسمك" }, fMail: { en: "Your email", ar: "بريدك" }, fMsg: { en: "Describe your task", ar: "اشرح مهمتك" }
};
