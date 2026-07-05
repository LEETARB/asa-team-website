export const translations = {
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      founder: "Founder",
      work: "Work",
      services: "What We Do",
      achievements: "Achievements",
      contact: "Contact",
    },
    common: {
      brand: "ASA TEAM",
      exploreWork: "Explore Our Work",
      contactTeam: "Contact ASA TEAM",
      viewProject: "View Project",
      viewMedia: "View Media",
      visitSite: "Visit Live Site",
      liveBadge: "Live",
      close: "Close",
      previous: "Previous",
      next: "Next",
      demoVideo: "Demo Video",
    },
    hero: {
      headline: "Smart Digital Solutions for Real Business Problems.",
      subtext:
        "ASA TEAM builds modern web systems, automation platforms, backend solutions, and cloud-ready digital products for organizations that need practical, reliable technology.",
    },
    about: {
      kicker: "About ASA TEAM",
      title: "A tech solutions company built for practical results.",
      text: "ASA TEAM is a technology solutions team focused on turning real operational problems into clear, usable, and scalable digital systems. We design and build web platforms, internal management systems, automation tools, and cloud-ready solutions with a strong focus on reliability, clean user experience, and practical business value.",
      highlights: [
        "Custom Digital Systems",
        "Automation Platforms",
        "Backend & APIs",
        "Cloud-Ready Deployments",
        "Practical Business Value",
      ],
    },
    founder: {
      kicker: "Founder",
      title: "Founded by technical execution and real project experience.",
      name: "Ali Alaa",
      text: "ASA TEAM was founded by Ali Alaa, an Information Technology graduate from Karbala, Iraq, with hands-on experience in web systems, backend development, cloud deployment, Linux servers, Docker, Nginx, and real-world automation projects. His work focuses on building useful technical solutions that solve actual problems, not just visual interfaces.",
      highlights: [
        "IT Graduate",
        "AWS Certified Solutions Architect Associate",
        "Cloud & DevOps Focus",
        "Backend Systems",
        "Real Project Experience",
      ],
    },
    services: {
      kicker: "What We Can Do For You",
      title: "Technical work that turns operations into systems.",
      cards: [
        {
          title: "Custom Web Systems",
          text: "We build tailored web platforms for organizations, departments, stores, and internal teams.",
        },
        {
          title: "Automation Platforms",
          text: "We convert manual paperwork and repeated processes into organized digital workflows.",
        },
        {
          title: "Backend & APIs",
          text: "We design reliable backend systems, databases, dashboards, and REST APIs.",
        },
        {
          title: "Cloud & Deployment",
          text: "We deploy systems using Linux servers, Docker, Nginx, and cloud platforms such as AWS.",
        },
        {
          title: "Business Dashboards",
          text: "We create dashboards, reports, statistics, exports, and admin panels that help teams make decisions.",
        },
        {
          title: "Technical Consulting",
          text: "We help plan technical solutions, choose the right architecture, and prepare systems for real use.",
        },
      ],
    },
    work: {
      kicker: "Work",
      title: "Real systems, media, and implementation evidence.",
      description: "Explore selected ASA TEAM projects with screenshots, features, stack, and demo media.",
      featuresTitle: "Core capabilities",
      detailsTitle: "Inside the build",
      metricsTitle: "By the numbers",
      mediaTitle: "Project media",
      projectMedia: "Project media",
      projectCount: "Project",
      projects: [
        {
          title: "Tajriba — تجربة",
          category: "Brand Platform · Storefront & Operations System",
          liveUrl: "https://tajrubaiq.com",
          description:
            "A complete Iraqi education & lifestyle brand platform delivered end-to-end: a fully Arabic, right-to-left cinematic marketing site, a cash-on-delivery ordering system, an automated subscriber & marketing funnel, and a secure admin operations backend — deployed to production on the brand's own domain and email.",
          achievement:
            "Delivered the entire product — design, development, and deployment — now live at tajrubaiq.com, with a zero-touch subscriber pipeline, instant order notifications, and an 8× lighter, faster asset payload.",
          features: [
            "Arabic-first RTL design system",
            "Cinematic animated hero",
            "Cash-on-delivery ordering",
            "Instant WhatsApp order alerts",
            "Automated email + WhatsApp funnel",
            "Secure JWT admin backend",
            "Order-status workflow",
            "Product catalog CRUD",
            "8× lighter asset payload",
          ],
          stack: ["React", "Vite", "Node.js", "Express", "Supabase", "PostgreSQL", "Zod", "Twilio", "Resend", "Vercel", "Railway"],
          details: [
            {
              title: "Public website",
              points: [
                "Bespoke Arabic-first, fully RTL design system with custom brand typography on a token-based CSS foundation",
                "Cinematic hero: auto-playing slideshow of brand video, imagery and an animated wordmark, with touch-swipe and dot controls",
                "Animated glassmorphism brand story (“منو تجربة؟”)",
                "Immersive 3D-perspective product showcase with depth, blur and focus states",
                "Premium “جدول السادس” schedule preview with a free-subscription call-to-action",
                "Responsive, mobile-first, with a full favicon/touch-icon set and social-share metadata",
              ],
            },
            {
              title: "Ordering system",
              points: [
                "Live products served from the database (active only)",
                "In-page checkout modal with real-world validation: Iraqi phone (07XXXXXXXXX), governorate and nearest-landmark",
                "Every order is server-validated against the live catalog before it is stored",
                "Instant WhatsApp alert to the admin with the full order summary and a Baghdad-time timestamp",
                "Fire-and-forget notifications never block the customer flow",
              ],
            },
            {
              title: "Subscription & marketing funnel",
              points: [
                "Free study-schedule subscription: validated form → database → branded welcome email → WhatsApp channel invite",
                "Fully branded, RTL, dark-themed welcome email with the brand logo and a join button",
                "Idempotent, rate-limited and fault-tolerant (a duplicate email is a graceful success)",
              ],
            },
            {
              title: "Admin & operations backend",
              points: [
                "JWT password login (7-day expiry) with bearer-token middleware on every management route",
                "Order workflow: pending → confirmed → shipped → delivered → cancelled",
                "Automatic WhatsApp confirmation to the customer (with the IQD price) on confirmation",
                "Full product CRUD with soft-delete to preserve order history and referential integrity",
              ],
            },
            {
              title: "Communications & engineering",
              points: [
                "Transactional email via Resend from the brand's own verified domain (SPF/DKIM/DMARC)",
                "Twilio WhatsApp with Iraqi number normalization to E.164 (+964) and Baghdad-timezone formatting",
                "Layered backend (routes → middleware → services → DB) with Zod validation and localized Arabic errors",
                "Graceful degradation: a provider outage can never break an order or a signup",
              ],
            },
          ],
          metrics: [
            { value: "8×", label: "Lighter asset payload (11 MB → 1.4 MB)" },
            { value: "366 KB", label: "Hero video, re-encoded from 6.7 MB" },
            { value: "20/min", label: "Rate-limited public write endpoints" },
            { value: "100%", label: "Arabic, RTL, Baghdad time & IQD" },
          ],
        },
        {
          title: "ITPC Management System",
          category: "Government Automation System",
          description:
            "A full government department automation system built to digitize contracts, payments, organizations, provider companies, service subscriptions, reports, statistics, user roles, PDF/Excel exports, and activity history.",
          achievement:
            "A practical digital transformation project that moved real department workflows into a structured electronic platform.",
          features: [
            "Contract management",
            "Payment tracking",
            "Organization management",
            "Provider company management",
            "Service suspension",
            "Reports and statistics",
            "PDF / Excel export",
            "Admin and user roles",
            "Activity history",
          ],
          stack: ["React", "Flask", "PostgreSQL", "Docker", "Nginx", "AWS EC2"],
          details: [
            {
              title: "Modules",
              points: [
                "Contract lifecycle management with linked payments",
                "Organization and provider-company directories",
                "Service subscription and suspension handling",
                "Role-based access for admins and users",
                "Full activity history and audit trail",
              ],
            },
            {
              title: "Reporting & exports",
              points: [
                "Dashboards with reports and statistics",
                "One-click PDF and Excel exports for records and summaries",
              ],
            },
            {
              title: "Deployment",
              points: [
                "Dockerized services behind Nginx",
                "Deployed on an AWS EC2 Linux server",
              ],
            },
          ],
          metrics: [
            { value: "PDF/Excel", label: "One-click document exports" },
            { value: "Role-based", label: "Admin and user permissions" },
            { value: "AWS EC2", label: "Dockerized production deployment" },
          ],
        },
      ],
    },
    achievements: {
      kicker: "Achievements & Real Work",
      title: "Updates, field work, and real delivery moments.",
      text: "A space for ASA TEAM to share achievements, implementation progress, demos, delivery moments, and real work evidence from different projects and technical activities.",
      videoTitle: "Latest media update",
      galleryTitle: "Real work gallery",
      cards: [
        "Project progress and delivery updates",
        "Real implementation evidence",
        "Demos, previews, and technical milestones",
        "Field work and deployment moments",
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Have a system idea or business problem? Let's turn it into a working digital solution.",
      description: "Contact ASA TEAM to discuss a practical web system, automation platform, backend, or deployment plan.",
      labels: {
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
      },
      email: "ali.alaa.saoudi@gmail.com",
      phone: "07812000495",
      linkedin: "ali-alaa-it",
      form: {
        name: "Your name",
        email: "Email address",
        message: "System idea or business problem",
        button: "Send Message",
      },
    },
    footer: {
      built: "Tech solutions and development company",
      copyright: "All rights reserved.",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      founder: "المؤسس",
      work: "الأعمال",
      services: "ما نقدمه",
      achievements: "الإنجازات",
      contact: "التواصل",
    },
    common: {
      brand: "ASA TEAM",
      exploreWork: "استكشف أعمالنا",
      contactTeam: "تواصل مع ASA TEAM",
      viewProject: "عرض المشروع",
      viewMedia: "عرض الوسائط",
      visitSite: "زيارة الموقع المباشر",
      liveBadge: "مباشر",
      close: "إغلاق",
      previous: "السابق",
      next: "التالي",
      demoVideo: "فيديو توضيحي",
    },
    hero: {
      headline: "حلول رقمية ذكية لمشاكل الأعمال الحقيقية.",
      subtext:
        "ASA TEAM تبني أنظمة ويب حديثة، منصات أتمتة، حلول باك إند، ومنتجات رقمية جاهزة للسحابة للجهات التي تحتاج تقنية عملية وموثوقة.",
    },
    about: {
      kicker: "عن ASA TEAM",
      title: "شركة حلول تقنية مبنية للنتائج العملية.",
      text: "ASA TEAM هو فريق حلول تقنية يركز على تحويل المشاكل التشغيلية الواقعية إلى أنظمة رقمية واضحة، قابلة للاستخدام، وقابلة للتوسع. نقوم بتصميم وبناء منصات ويب، أنظمة إدارة داخلية، أدوات أتمتة، وحلول جاهزة للسحابة مع التركيز على الموثوقية، تجربة المستخدم الواضحة، والقيمة العملية.",
      highlights: [
        "أنظمة رقمية مخصصة",
        "منصات أتمتة",
        "باك إند و APIs",
        "نشر جاهز للسحابة",
        "قيمة عملية للأعمال",
      ],
    },
    founder: {
      kicker: "المؤسس",
      title: "تأسست على خبرة تقنية وتنفيذ مشاريع واقعية.",
      name: "علي علاء",
      text: "تأسست ASA TEAM على يد علي علاء، خريج تقنية معلومات من كربلاء، العراق، لديه خبرة عملية في أنظمة الويب، تطوير الباك إند، النشر السحابي، سيرفرات لينكس، Docker، Nginx، ومشاريع الأتمتة الواقعية. يركز عمله على بناء حلول تقنية مفيدة تحل مشاكل فعلية، وليس مجرد واجهات شكلية.",
      highlights: [
        "خريج تقنية معلومات",
        "AWS Certified Solutions Architect Associate",
        "تركيز على الحوسبة السحابية و DevOps",
        "أنظمة الباك إند",
        "خبرة في مشاريع حقيقية",
      ],
    },
    services: {
      kicker: "كيف يمكننا مساعدتك",
      title: "عمل تقني يحول العمليات إلى أنظمة.",
      cards: [
        {
          title: "أنظمة ويب مخصصة",
          text: "نبني أنظمة ويب مخصصة للجهات، الأقسام، المتاجر، والفرق الداخلية.",
        },
        {
          title: "منصات أتمتة",
          text: "نحوّل الأعمال الورقية والعمليات المتكررة إلى مسارات عمل رقمية منظمة.",
        },
        {
          title: "الباك إند و APIs",
          text: "نصمم أنظمة باك إند موثوقة، قواعد بيانات، لوحات تحكم، و REST APIs.",
        },
        {
          title: "النشر والسحابة",
          text: "ننشر الأنظمة باستخدام سيرفرات لينكس، Docker، Nginx، ومنصات سحابية مثل AWS.",
        },
        {
          title: "لوحات الأعمال",
          text: "ننشئ لوحات تحكم، تقارير، إحصائيات، تصدير ملفات، ولوحات إدارة تساعد الفرق على اتخاذ القرار.",
        },
        {
          title: "الاستشارات التقنية",
          text: "نساعد في تخطيط الحلول التقنية، اختيار البنية المناسبة، وتجهيز الأنظمة للاستخدام الحقيقي.",
        },
      ],
    },
    work: {
      kicker: "الأعمال",
      title: "أنظمة واقعية ووسائط تثبت التنفيذ.",
      description: "استعرض مشاريع ASA TEAM المختارة مع الصور، المميزات، التقنيات، ووسائط العرض.",
      featuresTitle: "القدرات الأساسية",
      detailsTitle: "داخل المشروع",
      metricsTitle: "بالأرقام",
      mediaTitle: "وسائط المشروع",
      projectMedia: "وسائط المشروع",
      projectCount: "مشروع",
      projects: [
        {
          title: "تجربة — Tajriba",
          category: "منصة علامة تجارية · متجر ونظام عمليات",
          liveUrl: "https://tajrubaiq.com",
          description:
            "منصة متكاملة لعلامة تعليمية وحياتية عراقية تم تسليمها من الألف إلى الياء: موقع تسويقي عربي بالكامل بتصميم سينمائي (RTL)، نظام طلبات بالدفع عند الاستلام، قمع اشتراك وتسويق آلي، ولوحة إدارة وعمليات آمنة — منشورة على نطاق العلامة وبريدها الخاص.",
          achievement:
            "تسليم المنتج بالكامل — تصميماً وتطويراً ونشراً — وهو الآن مباشر على tajrubaiq.com، مع خط اشتراك آلي بالكامل، تنبيهات طلبات فورية، وحجم أصول أخف وأسرع بثمانية أضعاف.",
          features: [
            "نظام تصميم عربي (RTL) أولاً",
            "واجهة رئيسية سينمائية متحركة",
            "طلبات بالدفع عند الاستلام",
            "تنبيهات طلبات فورية عبر واتساب",
            "قمع بريد وواتساب آلي",
            "لوحة إدارة آمنة عبر JWT",
            "مسار حالات الطلب",
            "إدارة كاملة للمنتجات (CRUD)",
            "أصول أخف بثمانية أضعاف",
          ],
          stack: ["React", "Vite", "Node.js", "Express", "Supabase", "PostgreSQL", "Zod", "Twilio", "Resend", "Vercel", "Railway"],
          details: [
            {
              title: "الموقع العام",
              points: [
                "نظام تصميم عربي أولاً بالكامل (RTL) بخطوط علامة مخصصة وأساس CSS قائم على المتغيرات",
                "واجهة رئيسية سينمائية: عرض شرائح تلقائي يجمع فيديو العلامة والصور وشعاراً متحركاً، مع سحب باللمس ونقاط تحكم",
                "قصة العلامة “منو تجربة؟” بأسلوب زجاجي (glassmorphism) متحرك",
                "عرض منتجات ثلاثي الأبعاد غامر بعمق وضبابية وحالات تركيز",
                "معاينة مميزة لـ “جدول السادس” مع دعوة للاشتراك المجاني",
                "تصميم متجاوب يركّز على الهاتف أولاً، مع مجموعة أيقونات كاملة وبيانات مشاركة اجتماعية",
              ],
            },
            {
              title: "نظام الطلبات",
              points: [
                "منتجات حية تُعرض من قاعدة البيانات (الفعّالة فقط)",
                "نافذة إتمام طلب داخل الصفحة بتحقق واقعي: هاتف عراقي (07XXXXXXXXX)، المحافظة، وأقرب نقطة دالة",
                "كل طلب يُتحقق منه في الخادم مقابل الكتالوج الحي قبل حفظه",
                "تنبيه واتساب فوري للمدير بملخص الطلب الكامل وتوقيت بغداد",
                "الإشعارات لا تعيق تجربة الزبون إطلاقاً (fire-and-forget)",
              ],
            },
            {
              title: "قمع الاشتراك والتسويق",
              points: [
                "اشتراك مجاني بجدول الدراسة: نموذج مُتحقق → قاعدة بيانات → بريد ترحيبي بهوية العلامة → دعوة قناة واتساب",
                "بريد ترحيبي كامل الهوية (RTL، داكن) مع شعار العلامة وزر الانضمام",
                "متسامح مع التكرار ومحدود المعدل ومقاوم للأعطال (التكرار = نجاح سلس)",
              ],
            },
            {
              title: "لوحة الإدارة والعمليات",
              points: [
                "تسجيل دخول عبر JWT (صلاحية 7 أيام) مع حماية bearer-token لكل مسارات الإدارة",
                "مسار حالات الطلب: قيد الانتظار → مؤكد → مشحون → مُسلّم → ملغى",
                "تأكيد واتساب تلقائي للزبون (مع السعر بالدينار العراقي) عند التأكيد",
                "إدارة كاملة للمنتجات مع حذف ناعم للحفاظ على سجل الطلبات وسلامة البيانات",
              ],
            },
            {
              title: "الاتصالات والهندسة",
              points: [
                "بريد معاملات عبر Resend من نطاق العلامة الموثّق (SPF/DKIM/DMARC)",
                "واتساب عبر Twilio مع تطبيع الأرقام العراقية إلى E.164 (+964) وتنسيق توقيت بغداد",
                "خلفية طبقية (routes → middleware → services → DB) مع تحقق Zod ورسائل خطأ عربية",
                "تدهور رشيق: انقطاع أي مزوّد لا يمكن أن يُعطّل طلباً أو اشتراكاً",
              ],
            },
          ],
          metrics: [
            { value: "8×", label: "أصول أخف (11 ميغابايت ← 1.4 ميغابايت)" },
            { value: "366 كيلوبايت", label: "فيديو الواجهة بعد إعادة الترميز من 6.7 ميغابايت" },
            { value: "20/دقيقة", label: "حد معدل لنقاط الكتابة العامة" },
            { value: "100%", label: "عربي، RTL، توقيت بغداد والدينار العراقي" },
          ],
        },
        {
          title: "ITPC Management System",
          category: "نظام أتمتة حكومي",
          description:
            "نظام أتمتة متكامل لدائرة حكومية تم بناؤه لرقمنة العقود، الدفعات، الجهات، الشركات المزودة، اشتراكات الخدمات، التقارير، الإحصائيات، صلاحيات المستخدمين، تصدير PDF/Excel، وسجل النشاطات.",
          achievement:
            "مشروع تحول رقمي عملي نقل إجراءات دائرة واقعية إلى منصة إلكترونية منظمة.",
          features: [
            "إدارة العقود",
            "تتبع الدفعات",
            "إدارة الجهات",
            "إدارة الشركات المزودة",
            "إيقاف الخدمات",
            "التقارير والإحصائيات",
            "تصدير PDF / Excel",
            "صلاحيات المدير والمستخدم",
            "سجل النشاطات",
          ],
          stack: ["React", "Flask", "PostgreSQL", "Docker", "Nginx", "AWS EC2"],
          details: [
            {
              title: "الوحدات",
              points: [
                "إدارة دورة حياة العقود مع ربط الدفعات",
                "أدلة الجهات والشركات المزوّدة",
                "إدارة اشتراك وإيقاف الخدمات",
                "صلاحيات حسب الدور للمدير والمستخدم",
                "سجل نشاطات ومسار تدقيق كامل",
              ],
            },
            {
              title: "التقارير والتصدير",
              points: [
                "لوحات تحكم بتقارير وإحصائيات",
                "تصدير PDF و Excel للسجلات والملخصات بنقرة واحدة",
              ],
            },
            {
              title: "النشر",
              points: [
                "خدمات موزّعة بـ Docker خلف Nginx",
                "منشور على خادم لينكس AWS EC2",
              ],
            },
          ],
          metrics: [
            { value: "PDF/Excel", label: "تصدير مستندات بنقرة واحدة" },
            { value: "صلاحيات", label: "أدوار المدير والمستخدم" },
            { value: "AWS EC2", label: "نشر إنتاجي بحاويات Docker" },
          ],
        },
      ],
    },
    achievements: {
      kicker: "إنجازات وعمل واقعي",
      title: "تحديثات، عمل ميداني، ولحظات إنجاز حقيقية.",
      text: "مساحة تشارك فيها ASA TEAM الإنجازات، تقدم التنفيذ، العروض التجريبية، لحظات التسليم، وأدلة العمل الواقعي من مشاريع وأنشطة تقنية مختلفة.",
      videoTitle: "آخر تحديث مرئي",
      galleryTitle: "معرض العمل الواقعي",
      cards: [
        "تحديثات تقدم وتسليم المشاريع",
        "أدلة تنفيذ واقعية",
        "عروض وتجارب ومراحل تقنية",
        "عمل ميداني ولحظات نشر",
      ],
    },
    contact: {
      kicker: "التواصل",
      title: "لديك فكرة نظام أو مشكلة عمل؟ لنحوّلها إلى حل رقمي قابل للعمل.",
      description: "تواصل مع ASA TEAM لمناقشة نظام ويب عملي، منصة أتمتة، باك إند، أو خطة نشر.",
      labels: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        linkedin: "لينكدإن",
      },
      email: "ali.alaa.saoudi@gmail.com",
      phone: "07812000495",
      linkedin: "ali-alaa-it",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "فكرة النظام أو مشكلة العمل",
        button: "إرسال الرسالة",
      },
    },
    footer: {
      built: "شركة حلول تقنية وتطوير",
      copyright: "جميع الحقوق محفوظة.",
    },
  },
};
