/**
 * YOU Skin & Laser Clinic | Dr. Rasha Hamed
 * Interactive Features & Bilingual Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initStickyHeader();
  initMobileMenu();
  initTreatmentFilters();
  initBeforeAfterSlider();
  initQuiz();
  initFAQ();
  initBookingModal();
});

/* ==========================================================================
   Bilingual System (English / Arabic)
   ========================================================================== */
const translations = {
  en: {
    /* Top Bar */
    "topbar.valu": "0% Interest Installments Available via valU & NBE",
    "topbar.locations": "New Cairo & Nasr City Branches",
    "topbar.hours": "Sat - Thu: 10:00 AM - 9:00 PM (Friday Closed)",
    "topbar.call": "Call Clinic",

    /* Header Nav */
    "nav.about": "Dr. Rasha Hamed",
    "nav.treatments": "Treatments",
    "nav.transformations": "Results",
    "nav.quiz": "Treatment Quiz",
    "nav.instagram": "Instagram",
    "nav.reviews": "Reviews",
    "nav.locations": "Branches",
    "nav.faq": "FAQ",
    "nav.book": "Book VIP Consultation",
    "lang.toggle": "العربية",

    /* Hero */
    "hero.badge": "Elite Aesthetic Dermatology • Cairo",
    "hero.title": "The Art of Natural Enhancement & Skin Radiance",
    "hero.desc": "Egypt's premier aesthetic clinic led by Dr. Rasha Hamed. Experience bespoke medical rejuvenation, advanced Ultraformer MPT lifting, signature natural lip artistry, and non-surgical body contouring.",
    "hero.cta.book": "Book VIP Consultation",
    "hero.cta.explore": "Explore Treatments",
    "hero.cta.whatsapp": "WhatsApp Hotline",
    "hero.stat.rating": "4.9 ★★★★★ Rating",
    "hero.stat.rating_sub": "380+ Verified Google Reviews",
    "hero.stat.patients": "15,000+ Happy Patients",
    "hero.stat.patients_sub": "Natural & Refined Results",
    "hero.stat.consultant": "Board Certified Consultant",
    "hero.stat.consultant_sub": "American Academy of Aesthetic Med",

    /* Trust Strip */
    "trust.fda": "100% Original FDA-Approved Products",
    "trust.ultraformer": "Certified Ultraformer MPT Center",
    "trust.bespoke": "Personalized Non-Surgical Protocols",
    "trust.valu": "Flexible ValU Installments",

    /* Doctor Spotlight */
    "doctor.badge": "Meet The Medical Director",
    "doctor.title": "Dr. Rasha Hamed",
    "doctor.role": "Consultant Dermatologist, Laser & Aesthetic Medicine Specialist",
    "doctor.quote": "\"We believe aesthetic medicine should elevate and harmonize your innate beauty—never alter your identity. Natural elegance is our medical signature.\"",
    "doctor.cred1": "Master's Degree in Dermatology & Venereology",
    "doctor.cred2": "American Diploma in Aesthetic Medicine & Member of AAAM",
    "doctor.cred3": "Certified Laser Specialist by Laser Institute of America",
    "doctor.cred4": "Pioneer in Non-Surgical Facial Contouring & Regenerative Dermatology in Egypt",
    "doctor.badge_card": "10+ Years of Aesthetic Excellence",
    "doctor.cta_consult": "Book Private Consultation",

    /* Treatments */
    "treatments.badge": "World-Class Procedures",
    "treatments.title": "Comprehensive Aesthetic & Laser Care",
    "treatments.desc": "Every treatment is scientifically customized to your facial anatomy, skin tone, and aesthetic goals using gold-standard technologies.",
    "filter.all": "All Treatments",
    "filter.inject": "Injectables & Contouring",
    "filter.skin": "Skin Rejuvenation",
    "filter.laser": "Laser & Non-Surgical Lift",
    "filter.body": "Body Contouring",

    /* Treatment Cards */
    "t1.tag": "Signature Lift",
    "t1.title": "Ultraformer MPT Non-Surgical Face & Neck Lift",
    "t1.desc": "Next-generation High Intensity Focused Ultrasound (HIFU) targeting deep SMAS layers to sculpt the jawline, lift cheeks, and tighten double chin with zero downtime.",
    "t1.perk": "Immediate + Progressive Lift",

    "t2.tag": "Natural Artistry",
    "t2.title": "Signature Natural Lip Contouring & Russian Lips",
    "t2.desc": "Subtle, perfectly proportioned lip enhancement using premium hyaluronic acid fillers. Enhances volume and contour while respecting natural anatomy.",
    "t2.perk": "Soft, Natural Pout",

    "t3.tag": "Cellular Glow",
    "t3.title": "Skin Boosters & Profhilo Bio-Remodeling",
    "t3.desc": "Pure hyaluronic acid biostimulators injected into bio-aesthetic points to boost deep dermal hydration, trigger neocollagenesis, and impart glass skin radiance.",
    "t3.perk": "Luminous Dewy Glow",

    "t4.tag": "Definition",
    "t4.title": "Jawline Definition & Texas Facial Contouring",
    "t4.desc": "Precision dermal filler placement along mandibular angles and chin to create a sleek, sculpted silhouette and elegant facial balance.",
    "t4.perk": "Crisp Chiseled Contour",

    "t5.tag": "Skin Resurfacing",
    "t5.title": "Vivace Fractional RF Microneedling",
    "t5.desc": "Combines microneedles with radiofrequency energy and LED light therapy to shrink pores, eliminate stubborn acne scars, and firm lax skin.",
    "t5.perk": "Refined Texture & Pores",

    "t6.tag": "Precision Wrinkles",
    "t6.title": "Botox Anti-Aging & Hyperhidrosis Care",
    "t6.desc": "Micro-dosing technique smoothing forehead lines, crow's feet, and frown lines without frozen expressions. Also effectively treats excessive underarm sweating.",
    "t6.perk": "Fresh & Rested Expression",

    "t7.tag": "Body Sculpting",
    "t7.title": "Clatuu Alpha 360° Non-Surgical Fat Freezing",
    "t7.desc": "Advanced cryolipolysis that freezes and permanently eliminates stubborn fat cells on the abdomen, flanks, arms, and thighs without surgery.",
    "t7.perk": "Permanent Fat Reduction",

    "t8.tag": "Painless Laser",
    "t8.title": "Medical Triple-Wavelength Laser Hair Removal",
    "t8.desc": "State-of-the-art cooling laser technology effective on all Egyptian skin tones. Experience silky smooth skin with maximum safety and zero pain.",
    "t8.perk": "Safe for All Skin Types",

    "t9.tag": "Eyelid Tightening",
    "t9.title": "Plasma Energy Non-Surgical Blepharoplasty",
    "t9.desc": "Sublimation plasma technology that contracts hooded eyelids and softens delicate eye bags without cutting or surgical anesthesia.",
    "t9.perk": "Non-Invasive Eye Rejuvenation",

    "card.book": "Book Treatment",

    /* Transformation Slider */
    "trans.badge": "Real Results",
    "trans.title": "Visible Transformations",
    "trans.desc": "Witness authentic clinical results achieved through Dr. Rasha Hamed's precise protocols.",
    "trans.tab1": "Ultraformer MPT Lift",
    "trans.tab2": "Natural Lip Harmony",
    "trans.tab3": "Skin Booster Glow",
    "trans.before": "Before",
    "trans.after": "After",
    "trans.caption1": "Jawline definition & mid-face lift after 1 session of Ultraformer MPT.",
    "trans.caption2": "Natural volume restoration and contour enhancement with 1.0ml premium filler.",
    "trans.caption3": "Intense cellular hydration and restored luminosity after 2 sessions of Profhilo.",

    /* Quiz */
    "quiz.badge": "Smart Recommendation",
    "quiz.title": "Find Your Personalized Aesthetic Protocol",
    "quiz.desc": "Answer 3 quick questions to discover which treatment plan best suits your skin and beauty goals.",
    "quiz.step1.title": "What is your primary aesthetic focus?",
    "quiz.step1.desc": "Select the concern you would like Dr. Rasha Hamed's team to address.",
    "quiz.step2.title": "What is your preferred recovery and approach?",
    "quiz.step2.desc": "Choose how you'd like your treatment schedule to look.",
    "quiz.step3.title": "Which Cairo branch is most convenient for you?",
    "quiz.step3.desc": "Our team will arrange your appointment at your preferred location.",
    "quiz.opt1_1": "Skin Sagging & Jawline Laxity",
    "quiz.opt1_1_sub": "Cheeks, jowls, neck tightening",
    "quiz.opt1_2": "Dullness, Large Pores & Texture",
    "quiz.opt1_2_sub": "Deep hydration, acne scars, glow",
    "quiz.opt1_3": "Facial Contouring & Volume Loss",
    "quiz.opt1_3_sub": "Lips, jawline, wrinkles, tear troughs",
    "quiz.opt1_4": "Stubborn Body Fat & Contouring",
    "quiz.opt1_4_sub": "Flanks, abdomen, thigh sculpting",
    "quiz.opt2_1": "Zero Downtime (Back to work immediately)",
    "quiz.opt2_1_sub": "No redness or peeling",
    "quiz.opt2_2": "Deep Remodeling (1-2 days mild recovery)",
    "quiz.opt2_2_sub": "Maximum collagen stimulation",
    "quiz.opt3_1": "New Cairo (Fifth Settlement)",
    "quiz.opt3_1_sub": "North 90th St. - Well Care Building",
    "quiz.opt3_2": "Nasr City",
    "quiz.opt3_2_sub": "Omar Ibn El Khattab - Front of Citystars",
    "quiz.btn.back": "Back",
    "quiz.btn.next": "Next Step",
    "quiz.result.badge": "Your Tailored Protocol",
    "quiz.result.cta": "Book This Protocol on WhatsApp",

    /* Instagram Section */
    "insta.badge": "Social Community",
    "insta.title": "Live from @youclinic.eg",
    "insta.desc": "Follow our daily cases, patient stories, Dr. Rasha's skincare advice, and exclusive monthly packages on Instagram.",
    "insta.follow": "Follow @youclinic.eg",
    "insta.handle": "YOU Skin & Laser Clinic",
    "insta.followers": "Official Clinic Page • Dr. Rasha Hamed",
    "insta.p1": "Immediate jawline lifting results with Ultraformer MPT 💫 #UltraformerMPT #YouClinic",
    "insta.p2": "The secret behind the natural Russian Lips technique 💋 #LipFiller #DrRashaHamed",
    "insta.p3": "Profhilo injection points: How cellular remodeling works from within ✨ #SkinBooster",
    "insta.p4": "Non-surgical fat freezing results with Clatuu Alpha 360 ❄️ #ClatuuAlpha #BodyContour",

    /* Reviews Section */
    "reviews.badge": "Patient Satisfaction",
    "reviews.title": "Loved by Over 15,000 Patients",
    "reviews.desc": "Verified feedback from patients who entrusted their skin and beauty to Dr. Rasha Hamed.",
    "google.badge_text": "Overall Rating on Google Maps",
    "google.badge_sub": "Based on 380+ Verified Patient Reviews",
    "google.btn": "View on Google Maps",

    "rev1.name": "Nouran El-Shazly",
    "rev1.tag": "Ultraformer MPT & Skin Boosters",
    "rev1.text": "Dr. Rasha is exceptional! Her hands are extremely gentle and she truly values natural results. I had Ultraformer done for my lower face and the lifting effect was noticeable immediately and kept improving over the weeks. The clinic in New Cairo is gorgeous and very hygienic.",

    "rev2.name": "Mariam Abdel-Fattah",
    "rev2.tag": "Lip Contouring & Botox",
    "rev2.text": "I was very nervous about doing lip fillers for the first time, but Dr. Rasha listened carefully to what I wanted and gave me the most natural, beautiful contour. No duck lips at all! Everyone at the Nasr City branch is professional and friendly.",

    "rev3.name": "Heba Mansour",
    "rev3.tag": "Vivace RF & Scars",
    "rev3.text": "Best clinic in Cairo for skincare! My acne scars and open pores improved drastically after my Vivace microneedling sessions. The ValU installment option made it super convenient to finish my full treatment course smoothly.",

    /* Branches */
    "locations.badge": "Convenient Access",
    "locations.title": "Our Cairo Clinics",
    "locations.desc": "Visit us at our luxury clinics situated in prime Cairo medical destinations.",
    "b1.city": "New Cairo (Tagamoa)",
    "b1.name": "Fifth Settlement Clinic",
    "b1.address": "164 North 90th Street, Well Care Medical Center (Behind Air Specialized Hospital)",
    "b1.hours": "Saturday – Thursday: 10:00 AM – 9:00 PM (Friday Closed)",
    "b1.phone": "01092979050",
    "b1.gmaps": "Open in Google Maps",
    "b1.call": "Call Branch",

    "b2.city": "Nasr City",
    "b2.name": "Citystars Branch",
    "b2.address": "12 Omar Ibn El Khattab St., Ramo Buildings (Directly in front of Citystars Main Gate)",
    "b2.hours": "Saturday – Thursday: 10:00 AM – 9:00 PM (Friday Closed)",
    "b2.phone": "01111150517",
    "b2.gmaps": "Open in Google Maps",
    "b2.call": "Call Branch",

    /* FAQ */
    "faq.badge": "Common Questions",
    "faq.title": "Frequently Asked Questions",
    "faq.desc": "Everything you need to know about booking, recovery, and financing your treatments.",
    "faq.q1": "How does Dr. Rasha Hamed ensure natural results with fillers?",
    "faq.a1": "Dr. Rasha practices conservative aesthetic medicine. During your consultation, facial proportions and dynamic expressions are analyzed to place precise micro-droplets of premium hyaluronic acid, ensuring facial movement remains soft and completely natural.",
    "faq.q2": "What is the downtime after an Ultraformer MPT session?",
    "faq.a2": "Ultraformer MPT utilizes focused ultrasound that bypasses the epidermis without causing surface wounds. There is virtually zero downtime—you can apply makeup and resume normal social activities immediately after the session.",
    "faq.q3": "Can I pay for my treatments in installments?",
    "faq.a3": "Yes! YOU Skin & Laser Clinic provides flexible 0% interest and installment plans through valU as well as National Bank of Egypt (NBE) credit cards, making full transformation packages accessible and hassle-free.",
    "faq.q4": "How many sessions of laser hair removal do I need?",
    "faq.a4": "Most patients achieve 85–95% permanent hair reduction within 6 to 8 sessions spaced 4–6 weeks apart, depending on hair thickness and hormonal balance. Our triple-wavelength laser features advanced contact cooling for a virtually painless experience.",
    "faq.q5": "How do I schedule an appointment?",
    "faq.a5": "You can easily book online using our VIP booking form, call our New Cairo (01092979050) or Nasr City (01111150517) desks, or message our coordinators directly on WhatsApp for immediate confirmation.",

    /* Modal */
    "modal.title": "Reserve VIP Consultation",
    "modal.label.name": "Full Name",
    "modal.label.phone": "Phone / WhatsApp Number",
    "modal.label.branch": "Select Branch",
    "modal.label.treatment": "Select Treatment of Interest",
    "modal.label.notes": "Preferred Date or Additional Notes",
    "modal.btn.confirm": "Confirm & Send via WhatsApp",
    "modal.branch.opt1": "New Cairo (Well Care Building, 90th St.)",
    "modal.branch.opt2": "Nasr City (In front of Citystars)",

    /* Footer */
    "footer.desc": "YOU Skin & Laser Clinic by Dr. Rasha Hamed is Cairo's signature address for natural facial aesthetics, regenerative dermatology, and high-tech body contouring.",
    "footer.quicklinks": "Quick Links",
    "footer.procedures": "Top Procedures",
    "footer.contact": "Clinic Hotlines",
    "footer.copyright": "© 2026 YOU Skin & Laser Clinic | Dr. Rasha Hamed. All rights reserved."
  },

  ar: {
    /* Top Bar */
    "topbar.valu": "إمكانية التقسيط بدون فوائد عبر ڤاليو وبنك مصر والأهلي",
    "topbar.locations": "فرعا التجمع الخامس ومدينة نصر",
    "topbar.hours": "السبت - الخميس: 10:00 ص - 9:00 م (الجمعة مغلق)",
    "topbar.call": "اتصل بالعيادة",

    /* Header Nav */
    "nav.about": "د. رشا حامد",
    "nav.treatments": "الخدمات والعلاجات",
    "nav.transformations": "النتائج",
    "nav.quiz": "اختبار خطتك",
    "nav.instagram": "إنستغرام",
    "nav.reviews": "الآراء والتقييمات",
    "nav.locations": "الفروع",
    "nav.faq": "الأسئلة الشائعة",
    "nav.book": "حجز موعد VIP",
    "lang.toggle": "English",

    /* Hero */
    "hero.badge": "العيادة الرائدة للجلدية والتجميل والليزر • القاهرة",
    "hero.title": "فن الجمال الطبيعي والتألق الراقي بدون مبالغة",
    "hero.desc": "وجهتك الأولى للتجميل غير الجراحي والعناية بالبشرة تحت إشراف د. رشا حامد. أحدث تقنيات شد الوجه ألترافورمر MPT، حقن الفيلر الطبيعي، وعلاجات نضارة وتنسيق القوام بأعلى المعايير الطبية العالمية.",
    "hero.cta.book": "حجز استشارة خاصة",
    "hero.cta.explore": "استكشاف العلاجات",
    "hero.cta.whatsapp": "واتساب العيادة المباشر",
    "hero.stat.rating": "تقييم 4.9 ★★★★★",
    "hero.stat.rating_sub": "أكثر من 380 تقييم معتمد على خرائط جوجل",
    "hero.stat.patients": "+15,000 عميلة سعيدة",
    "hero.stat.patients_sub": "نتائج طبيعية ومتقنة بدون تغيير الملامح",
    "hero.stat.consultant": "استشاري أمراض جلدية وتجميل",
    "hero.stat.consultant_sub": "عضو الجمعية الأمريكية لطب التجميل",

    /* Trust Strip */
    "trust.fda": "مواد أصلية 100% معتمدة من FDA",
    "trust.ultraformer": "مركز معتمد لجهاز Ultraformer MPT",
    "trust.bespoke": "بروتوكولات مخصصة لكل ملامح وبشرة",
    "trust.valu": "خطط تقسيط ميسرة مع ڤاليو",

    /* Doctor Spotlight */
    "doctor.badge": "المشرف الطبي للعيادة",
    "doctor.title": "د. رشا حامد",
    "doctor.role": "استشاري الأمراض الجلدية والتجميل والليزر",
    "doctor.quote": "«نؤمن بأن الطب التجميلي وُجد لإبراز وتناغم جمالكِ الطبيعي الداخلي، وليس لتغيير هويتك وملامحك. الأناقة الطبيعية هي بصمتنا الطبية.»",
    "doctor.cred1": "ماجستير الأمراض الجلدية والتناسلية",
    "doctor.cred2": "الدبلومة الأمريكية في طب التجميل وعضو الجمعية الأمريكية (AAAM)",
    "doctor.cred3": "شهادة متقدمة في تطبيقات الليزر من معهد الليزر الأمريكي",
    "doctor.cred4": "خبرة رائدة في نحت الملامح غير الجراحي والتجميل التجديدي في مصر",
    "doctor.badge_card": "+10 سنوات من التميز والاحترافية",
    "doctor.cta_consult": "حجز كشف مع د. رشا حامد",

    /* Treatments */
    "treatments.badge": "خدمات وإجراءات متكاملة",
    "treatments.title": "علاجات متطورة للجلدية والتجميل والليزر",
    "treatments.desc": "نصمم كل جلسة بدقة متناهية لتلائم تشريح وجهك ونوعية بشرتك، باستخدام أحدث الأجهزة والمواد التجميلية العالمية.",
    "filter.all": "جميع الخدمات",
    "filter.inject": "الحقن التجميلي وتنسيق الملامح",
    "filter.skin": "جلسات النضارة والريجوفينيشن",
    "filter.laser": "الليزر وشد الترهلات",
    "filter.body": "نحت وتنسيق القوام",

    /* Treatment Cards */
    "t1.tag": "الشد الرائد",
    "t1.title": "شد الوجه والرقبة بجهاز Ultraformer MPT",
    "t1.desc": "أحدث تقنية هايفو متطورة لتحفيز الكولاجين في الطبقات العميقة، ورفع الخدود وتحديد الفك واللغلوغ بدون جراحة وبدون فترة نقاهة.",
    "t1.perk": "نتيجة فورية وتراكمية مستمرة",

    "t2.tag": "لمسة طبيعية",
    "t2.title": "فيلر الشفايف الطبيعي وتقنية الروسي",
    "t2.desc": "تحديد وتعبئة الشفاه بأجود أنواع حمض الهيالورونيك بمظهر متناسق وجذاب يحافظ على حركة الشفاه الطبيعية بدون أي مبالغة.",
    "t2.perk": "امتلاء ناعم ومظهر ممتلئ طبيعي",

    "t3.tag": "نضارة خلوية",
    "t3.title": "سكين بوستر وبروفايلو للترطيب العميق",
    "t3.desc": "حقن حمض الهيالورونيك النقي في نقاط حيوية لتعزيز الترطيب الداخلي، تحفيز الإيلاستين، ومنح البشرة لمعاناً ونضارة زجاجية ساحرة.",
    "t3.perk": "نضارة وإشراقة تدوم طويلاً",

    "t4.tag": "تحديد الملامح",
    "t4.title": "تحديد الفك والذقن (تقنية التكساس)",
    "t4.desc": "تحديد زوايا الفك السفلي والذقن بحقن الفيلر التجميلي لمنح الوجه إطاراً مشدوداً وجمالاً جذاباً بتناسق متناهي مع ملامحك.",
    "t4.perk": "تحديد مثالي لخط الفك",

    "t5.tag": "تجديد البشرة",
    "t5.title": "ڤيڤاتشي RF مايكرونيدلينج لشد المسام",
    "t5.desc": "دمج ترددات الراديو مع الإبر الدقيقة وعلاج الضوء لتحفيز الكولاجين، تضييق المسام الواسعة، وعلاج آثار وندبات حب الشباب المستعصية.",
    "t5.perk": "بشرة ملساء ومسام مصقولة",

    "t6.tag": "نعومة التجاعيد",
    "t6.title": "حقن البوتوكس للتجاعيد وعلاج التعرق الزائد",
    "t6.desc": "علاج دقيق لتنعيم خطوط الجبهة وما بين الحاجبين وحول العينين مع الحفاظ على التعبيرات الطبيعية للوجه، بالإضافة لعلاج فرط التعرق.",
    "t6.perk": "إطلالة مرتاحة وشابة",

    "t7.tag": "نحت القوام",
    "t7.title": "تجميد الدهون كلاتو ألفا Clatuu Alpha 360",
    "t7.desc": "تفتيت وتجميد الخلايا الدهنية العنيدة في البطن والخواصر والأذرع بتقنية الكرايو المتطورة بزاوية 360 درجة بدون ألم أو جراحة.",
    "t7.perk": "تخلص دائم من الدهون الموضعية",

    "t8.tag": "ليزر بدون ألم",
    "t8.title": "إزالة الشعر بأحدث أجهزة الليزر الطبية",
    "t8.desc": "أحدث تقنية ليزر ثلاثية الأطوال الموجية مع نظام تبريد فائق مناسب لجميع درجات البشرة في مصر لنتائج فائقة النعومة وبأمان تام.",
    "t8.perk": "مناسب وآمن لجميع أنواع البشرة",

    "t9.tag": "شد الجفون",
    "t9.title": "شد الجفون غير الجراحي بتقنية البلازما",
    "t9.desc": "تقنية الطاقة البلازمية لشد الجلد المترهل في الجفن العلوي وتخفيف الهالات والتجاعيد الدقيقة بدون تخدير كلي أو جراحة.",
    "t9.perk": "نظرة شابة بدون جراحة",

    "card.book": "احجزي هذا الإجراء",

    /* Transformation Slider */
    "trans.badge": "نتائج حقيقية",
    "trans.title": "تحولات ملموسة وواقعية",
    "trans.desc": "شاهدي نتائج حقيقية تم تحقيقها من خلال بروتوكولات د. رشا حامد الدقيقة في عيادات يو كلينيك.",
    "trans.tab1": "شد ألترافورمر MPT",
    "trans.tab2": "فيلر الشفايف الطبيعي",
    "trans.tab3": "نضارة السكين بوستر",
    "trans.before": "قبل",
    "trans.after": "بعد",
    "trans.caption1": "تحديد خط الفك ورفع منتصف الوجه بعد جلسة واحدة من ألترافورمر MPT.",
    "trans.caption2": "استعادة الامتلاء وتنسيق الشفاه بشكل طبيعي وأنيق بحقن 1.0 مل فيلر.",
    "trans.caption3": "ترطيب عميق واستعادة النضارة والإشراق بعد جلستين من البروفايلو.",

    /* Quiz */
    "quiz.badge": "التوصية الذكية",
    "quiz.title": "اكتشفي البروتوكول الأنسب لبشرتكِ",
    "quiz.desc": "أجيبي عن 3 أسئلة سريعة لنحدد لكِ أنسب خطة علاجية وتجميلية تحقق أهدافكِ بأعلى كفاءة.",
    "quiz.step1.title": "ما هو هدفكِ التجميلي الأساسي؟",
    "quiz.step1.desc": "اختاري الأمر الذي ترغبين في علاجه مع فريق د. رشا حامد.",
    "quiz.step2.title": "ما هي طبيعة التعافي والجدول المفضل لديكِ؟",
    "quiz.step2.desc": "اختاري ما يناسب روتينكِ اليومي ومواعيدكِ.",
    "quiz.step3.title": "أي فرع في القاهرة هو الأقرب إليكِ؟",
    "quiz.step3.desc": "سنقوم بتنظيم حجزك وتجهيز ملفكِ في الفرع الأنسب لكِ.",
    "quiz.opt1_1": "ترهل البشرة وتحديد خط الفك والرقبة",
    "quiz.opt1_1_sub": "رفع الخدود وتحديد الفك واللغلوغ",
    "quiz.opt1_2": "شحوب البشرة، المسام الواسعة والندبات",
    "quiz.opt1_2_sub": "نضارة زجاجية، ترطيب عميق، تصبغات",
    "quiz.opt1_3": "تحديد الملامح وتعبئة الفراغات",
    "quiz.opt1_3_sub": "شفايف طبيعية، تكساس، علاج التجاعيد",
    "quiz.opt1_4": "الدهون الموضعية ونحت القوام",
    "quiz.opt1_4_sub": "البطن، الخواصر، وتنسيق القوام بدون جراحة",
    "quiz.opt2_1": "بدون فترة نقاهة نهائياً (عودة فورية للعمل)",
    "quiz.opt2_1_sub": "لا يوجد أي احمرار أو تقشير واضح",
    "quiz.opt2_2": "تجديد عميق (يوم إلى يومين راحة بسيطة)",
    "quiz.opt2_2_sub": "أقصى تحفيز ممكن للكولاجين",
    "quiz.opt3_1": "التجمع الخامس (القاهرة الجديدة)",
    "quiz.opt3_1_sub": "شارع التسعين الشمالي - مبنى ويل كير",
    "quiz.opt3_2": "مدينة نصر",
    "quiz.opt3_2_sub": "شارع عمر بن الخطاب - أمام سيتي ستارز",
    "quiz.btn.back": "السابق",
    "quiz.btn.next": "الخطوة التالية",
    "quiz.result.badge": "البروتوكول المقترح لكِ",
    "quiz.result.cta": "حجز هذا البروتوكول مباشرة عبر واتساب",

    /* Instagram Section */
    "insta.badge": "مجتمعنا على التواصل الاجتماعي",
    "insta.title": "مباشر من حسابنا @youclinic.eg",
    "insta.desc": "تابعي حالاتنا اليومية، تجارب عميلاتنا، نصائح د. رشا للعناية بالبشرة، وأقوى العروض الشهرية الحصرية على إنستغرام.",
    "insta.follow": "متابعة @youclinic.eg",
    "insta.handle": "YOU Skin & Laser Clinic",
    "insta.followers": "الصفحة الرسمية للعيادة • د. رشا حامد",
    "insta.p1": "نتيجة فورية لتحديد الفك بجهاز Ultraformer MPT 💫 #UltraformerMPT #YouClinic",
    "insta.p2": "سر تقنية الروسي في فيلر الشفايف الطبيعي 💋 #LipFiller #DrRashaHamed",
    "insta.p3": "نقاط حقن البروفايلو وكيف يجدد البشرة من الأعماق ✨ #SkinBooster",
    "insta.p4": "نتائج تجميد ونحت الدهون بجهاز كلاتو ألفا 360 ❄️ #ClatuuAlpha #BodyContour",

    /* Reviews Section */
    "reviews.badge": "ثقة مرضانا",
    "reviews.title": "أكثر من 15,000 عميلة وثقن بنا",
    "reviews.desc": "آراء وتقييمات حقيقية من مريضات شاركن تجربتهن بعد زيارة عيادات يو كلينيك.",
    "google.badge_text": "التقييم العام على خرائط جوجل",
    "google.badge_sub": "بناءً على أكثر من 380 تقييم معتمد",
    "google.btn": "مشاهدة التقييمات على جوجل مابس",

    "rev1.name": "نوران الشاذلي",
    "rev1.tag": "ألترافورمر MPT وسكين بوستر",
    "rev1.text": "دكتورة رشا ممتازة وإيدها خفيفة جداً، وبتفهم في التجميل الطبيعي ومش مبالغة. عملت جلسة الألترافورمر للفك وكان الشد واضح من أول يوم وفضل يتحسن كل أسبوع. فرع التجمع راقي ونظيف جداً.",

    "rev2.name": "مريم عبد الفتاح",
    "rev2.tag": "فيلر شفايف وبوتوكس",
    "rev2.text": "كنت خايفة جداً أعمل فيلر لأول مرة، لكن د. رشا سمعتني كويس وعملتلي شفايف طبيعية جداً وجميلة ومفيهاش أي نفخ مصطنع. والتعامل في فرع مدينة نصر مريح ومحترم جداً.",

    "rev3.name": "هبة منصور",
    "rev3.tag": "ڤيڤاتشي RF لعلاج الندبات",
    "rev3.text": "أحسن عيادة في القاهرة لعلاج مشاكل البشرة. المسام وآثار الحبوب اتحسنت بنسبة 80% بعد جلسات الفيڤاتشي. وكمان إمكانية التقسيط مع ڤاليو سهلت عليا جداً إكمال الكورس بدون ضغط.",

    /* Branches */
    "locations.badge": "مواقع عياداتنا",
    "locations.title": "فروعنا في القاهرة",
    "locations.desc": "نسعد باستقبالكِ في فروعنا الفاخرة المجهزة بأحدث التقنيات الطبية.",
    "b1.city": "القاهرة الجديدة (التجمع الخامس)",
    "b1.name": "فرع التجمع الخامس",
    "b1.address": "164 شارع التسعين الشمالي، مبنى ويل كير الطبي (خلف المستشفى الجوي التخصصي)",
    "b1.hours": "السبت – الخميس: 10:00 ص – 9:00 م (الجمعة مغلق)",
    "b1.phone": "01092979050",
    "b1.gmaps": "فتح الموقع في خرائط جوجل",
    "b1.call": "الاتصال بالفرع",

    "b2.city": "مدينة نصر",
    "b2.name": "فرع مدينة نصر (سيتي ستارز)",
    "b2.address": "12 شارع عمر بن الخطاب، عمارات رامو (أمام البوابة الرئيسية لمول سيتي ستارز مباشرة)",
    "b2.hours": "السبت – الخميس: 10:00 ص – 9:00 م (الجمعة مغلق)",
    "b2.phone": "01111150517",
    "b2.gmaps": "فتح الموقع في خرائط جوجل",
    "b2.call": "الاتصال بالفرع",

    /* FAQ */
    "faq.badge": "إجابات لاستفساراتكِ",
    "faq.title": "الأسئلة الشائعة",
    "faq.desc": "كل ما يهمك معرفته عن مواعيد الحجز، الإجراءات، وفترة التعافي وطرق الدفع بالتقسيط.",
    "faq.q1": "كيف تضمن د. رشا حامد الحصول على نتائج فيلر طبيعية وغير مبالغ فيها؟",
    "faq.a1": "تعتمد د. رشا مبدأ التجميل التحفظي المدروس، حيث يتم فحص التناسق التشريحي وحركة الوجه بدقة وحقن كميات دقيقة من الهيالورونيك عالي الجودة لدعم الملامح بدون إحداث انتفاخات غير طبيعية.",
    "faq.q2": "هل جلسة ألترافورمر MPT تحتاج إلى فترة نقاهة؟",
    "faq.a2": "لا توجد فترة نقاهة على الإطلاق! جهاز ألترافورمر MPT يعتمد على الموجات فوق الصوتية المركزة التي تخترق الطبقات العميقة بدون جروح في سطح الجلد، ويمكنك العودة لعملك ومناسباتك فور انتهاء الجلسة.",
    "faq.q3": "هل متاح تقسيط تكلفة الجلسات والباقات التجميلية؟",
    "faq.a3": "نعم، تتيح عيادات يو كلينيك أنظمة تقسيط مرنة بدون فوائد وبأقساط ميسرة عبر تطبيق ڤاليو (valU) وكذلك لحاملي بطاقات البنك الأهلي وبنك مصر الائتمانية.",
    "faq.q4": "كم عدد جلسات ليزر إزالة الشعر التي أحتاجها للحصول على نتيجة مثالية؟",
    "faq.a4": "تحتاج معظم الحالات من 6 إلى 8 جلسات بفاصل 4 إلى 6 أسابيع للوصول لتراجع دائم في نمو الشعر بنسبة 85-95%. أجهزتنا مزودة بأنظمة تبريد قوية لضمان جلسة مريحة وبدون ألم.",
    "faq.q5": "كيف يمكنني حجز موعد استشارة؟",
    "faq.a5": "يمكنك الحجز بسهولة عبر نموذج الحجز السريع في الموقع، أو الاتصال مباشرة بفرع التجمع (01092979050) أو فرع مدينة نصر (01111150517)، أو مراسلتنا فوراً عبر الواتساب لتأكيد الموعد.",

    /* Modal */
    "modal.title": "حجز موعد كشف VIP",
    "modal.label.name": "الاسم بالكامل",
    "modal.label.phone": "رقم الهاتف / الواتساب",
    "modal.label.branch": "اختيار الفرع الأقرب",
    "modal.label.treatment": "الإجراء المطلوب",
    "modal.label.notes": "الموعد المفضل أو أي ملاحظات",
    "modal.btn.confirm": "تأكيد وإرسال عبر واتساب العيادة",
    "modal.branch.opt1": "فرع التجمع الخامس (مبنى ويل كير، شارع التسعين)",
    "modal.branch.opt2": "فرع مدينة نصر (عمارات رامو، أمام سيتي ستارز)",

    /* Footer */
    "footer.desc": "عيادات يو كلينيك بإشراف د. رشا حامد هي عنوان الجمال الطبيعي، العلاج التجديدي للبشرة، ونحت القوام غير الجراحي بأحدث الأجهزة العالمية في القاهرة.",
    "footer.quicklinks": "روابط سريعة",
    "footer.procedures": "أبرز الخدمات",
    "footer.contact": "أرقام التواصل",
    "footer.copyright": "© 2026 عيادات يو كلينيك | د. رشا حامد. جميع الحقوق محفوظة."
  }
};

let currentLang = 'en';

function initLanguage() {
  const savedLang = localStorage.getItem('youclinic_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
    currentLang = savedLang;
  } else {
    currentLang = 'en';
  }
  applyLanguage(currentLang);

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem('youclinic_lang', currentLang);
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update language toggle buttons text
  document.querySelectorAll('.lang-btn .lang-btn-text').forEach(el => {
    el.textContent = t['lang.toggle'] || (lang === 'en' ? 'العربية' : 'English');
  });

  // Re-run quiz result translation if on step 4
  const quizActiveStep = document.querySelector('.quiz-step.active');
  if (quizActiveStep && quizActiveStep.id === 'quiz-step-4') {
    renderQuizResult();
  }
}

/* ==========================================================================
   Sticky Header & Scroll Effects
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   Mobile Menu Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   Treatment Filter Tabs
   ========================================================================== */
function initTreatmentFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.treatment-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Before & After Transformation Slider
   ========================================================================== */
const transformationData = [
  {
    id: 'tab-1',
    beforeImg: 'assets/images/ultraformer_treatment.jpg',
    afterImg: 'assets/images/clinic_hero_banner.jpg',
    captionEn: 'Jawline definition & mid-face lift after 1 session of Ultraformer MPT.',
    captionAr: 'تحديد خط الفك ورفع منتصف الوجه بعد جلسة واحدة من ألترافورمر MPT.'
  },
  {
    id: 'tab-2',
    beforeImg: 'https://images.unsplash.com/photo-1512290900672-1f41d9c2cb2f?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Natural volume restoration and contour enhancement with 1.0ml premium filler.',
    captionAr: 'استعادة الامتلاء وتنسيق الشفاه بشكل طبيعي وأنيق بحقن 1.0 مل فيلر.'
  },
  {
    id: 'tab-3',
    beforeImg: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Intense cellular hydration and restored luminosity after 2 sessions of Profhilo.',
    captionAr: 'ترطيب عميق واستعادة النضارة والإشراق بعد جلستين من البروفايلو.'
  }
];

function initBeforeAfterSlider() {
  const container = document.querySelector('.ba-slider-container');
  const beforeLayer = document.querySelector('.ba-before-layer');
  const handle = document.querySelector('.ba-handle');
  const captionEl = document.querySelector('.ba-caption-text');
  const tabs = document.querySelectorAll('.ba-tab-btn');

  if (!container || !beforeLayer || !handle) return;

  let isDragging = false;

  function updateSlider(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    beforeLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Pointer / Mouse / Touch events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Tab Switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-target');
      const data = transformationData.find(d => d.id === targetId);

      if (data) {
        const beforeImg = beforeLayer.querySelector('img');
        const afterImg = container.querySelector('.ba-after-layer img');
        if (beforeImg) beforeImg.src = data.beforeImg;
        if (afterImg) afterImg.src = data.afterImg;

        if (captionEl) {
          captionEl.textContent = currentLang === 'ar' ? data.captionAr : data.captionEn;
        }

        // Reset handle to center
        beforeLayer.style.width = '50%';
        handle.style.left = '50%';
      }
    });
  });
}

/* ==========================================================================
   Virtual Skin & Treatment Assessment Quiz
   ========================================================================== */
let quizAnswers = {
  concern: '',
  recovery: '',
  branch: ''
};

function initQuiz() {
  const stepDots = document.querySelectorAll('.quiz-step-dot');
  const steps = document.querySelectorAll('.quiz-step');
  const progressFill = document.querySelector('.quiz-progress-fill');
  let currentStep = 1;

  function goToStep(stepNum) {
    currentStep = stepNum;
    steps.forEach(s => s.classList.remove('active'));
    stepDots.forEach(d => d.classList.remove('active'));

    const activeStepEl = document.getElementById(`quiz-step-${stepNum}`);
    if (activeStepEl) activeStepEl.classList.add('active');

    for (let i = 1; i <= Math.min(stepNum, 3); i++) {
      const dot = document.getElementById(`dot-${i}`);
      if (dot) dot.classList.add('active');
    }

    if (progressFill) {
      if (stepNum === 1) progressFill.style.width = '33.33%';
      else if (stepNum === 2) progressFill.style.width = '66.66%';
      else progressFill.style.width = '100%';
    }

    if (stepNum === 4) {
      renderQuizResult();
    }
  }

  // Option selections
  document.querySelectorAll('.quiz-step-1 .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.quiz-step-1 .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      quizAnswers.concern = card.getAttribute('data-value');
    });
  });

  document.querySelectorAll('.quiz-step-2 .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.quiz-step-2 .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      quizAnswers.recovery = card.getAttribute('data-value');
    });
  });

  document.querySelectorAll('.quiz-step-3 .quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.quiz-step-3 .quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      quizAnswers.branch = card.getAttribute('data-value');
    });
  });

  // Next / Back buttons
  const next1 = document.getElementById('quiz-next-1');
  if (next1) {
    next1.addEventListener('click', () => {
      if (!quizAnswers.concern) {
        alert(currentLang === 'ar' ? 'يرجى اختيار هدفك التجميلي أولاً' : 'Please select your primary aesthetic focus first');
        return;
      }
      goToStep(2);
    });
  }

  const next2 = document.getElementById('quiz-next-2');
  if (next2) {
    next2.addEventListener('click', () => {
      if (!quizAnswers.recovery) {
        alert(currentLang === 'ar' ? 'يرجى اختيار طبيعة التعافي المفضلة' : 'Please choose your preferred recovery approach');
        return;
      }
      goToStep(3);
    });
  }

  const submitQuiz = document.getElementById('quiz-submit');
  if (submitQuiz) {
    submitQuiz.addEventListener('click', () => {
      if (!quizAnswers.branch) {
        alert(currentLang === 'ar' ? 'يرجى اختيار الفرع الأنسب لكِ' : 'Please choose your preferred branch');
        return;
      }
      goToStep(4);
    });
  }

  const back2 = document.getElementById('quiz-back-2');
  if (back2) back2.addEventListener('click', () => goToStep(1));

  const back3 = document.getElementById('quiz-back-3');
  if (back3) back3.addEventListener('click', () => goToStep(2));
}

function renderQuizResult() {
  const titleEl = document.getElementById('quiz-result-title');
  const descEl = document.getElementById('quiz-result-desc');
  const btnEl = document.getElementById('quiz-whatsapp-cta');

  let titleEn = 'Ultraformer MPT Non-Surgical Lifting Protocol';
  let titleAr = 'بروتوكول شد الوجه غير الجراحي (ألترافورمر MPT)';
  let descEn = 'Based on your goal of lifting and definition, Dr. Rasha Hamed recommends our signature Ultraformer MPT HIFU treatment paired with collagen bio-stimulation for sculpted contours with zero downtime.';
  let descAr = 'بناءً على اختيارك لشد البشرة وتحديد الملامح، توصي د. رشا حامد ببروتوكول ألترافورمر MPT المتقدم مع محفزات الكولاجين لتحقيق تحديد ونضارة بدون أي فترة نقاهة.';

  if (quizAnswers.concern === 'skin-glow') {
    titleEn = 'Profhilo & Vivace Glass-Skin Protocol';
    titleAr = 'بروتوكول النضارة الزجاجية والترطيب العميق (بروفايلو + ڤيڤاتشي)';
    descEn = 'Targeting pores and cellular radiance. This customized package infuses pure bio-remodeling hyaluronic acid and RF energy to restore luminous youthfulness.';
    descAr = 'لعلاج المسام ومنح البشرة إشراقة متجددة عبر حقن الهيالورونيك النقي والترددات الراديوية لتحفيز إنتاج الإيلاستين الطبيعي.';
  } else if (quizAnswers.concern === 'contouring') {
    titleEn = 'Natural Facial Harmony & Lip Artistry';
    titleAr = 'بروتوكول تناسق الملامح وفيلر الشفايف الطبيعي';
    descEn = 'Dr. Rasha Hamed uses micro-droplet contouring to restore volume to lips, tear troughs, or jawline with absolute subtlety and balance.';
    descAr = 'تحديد متناسق للشفايف أو الفك وتقنية الروسي الطبيعية بدون أي تغيير مصطنع في تعابير وجهك.';
  } else if (quizAnswers.concern === 'body') {
    titleEn = 'Clatuu Alpha 360° Non-Surgical Slimming Protocol';
    titleAr = 'بروتوكول نحت القوام وتجميد الدهون (كلاتو ألفا 360)';
    descEn = 'Precision cryolipolysis to permanently eliminate targeted fat pockets without incisions or anesthesia.';
    descAr = 'تجميد وتفتيت الخلايا الدهنية المستعصية بأمان تام ونتائج ملموسة بعد الجلسة الأولى.';
  }

  if (titleEl) titleEl.textContent = currentLang === 'ar' ? titleAr : titleEn;
  if (descEl) descEl.textContent = currentLang === 'ar' ? descAr : descEn;

  // Build WhatsApp Pre-filled link
  const branchName = quizAnswers.branch === 'nasr-city' ? 'Nasr City Branch' : 'New Cairo Branch';
  const branchPhone = quizAnswers.branch === 'nasr-city' ? '20111150517' : '201092979050';

  const waMsg = currentLang === 'ar'
    ? `مرحباً د. رشا حامد وعيادات يو كلينيك، قمت بعمل اختبار الخطة التجميلية في الموقع، والبروتوكول المقترح لي هو (${titleAr}) لفرع (${branchName === 'Nasr City Branch' ? 'مدينة نصر' : 'التجمع الخامس'}). أود معرفة التفاصيل وحجز موعد استشارة.`
    : `Hello YOU Skin & Laser Clinic (Dr. Rasha Hamed), I completed the online skin assessment and my recommended plan is "${titleEn}" for the ${branchName}. I would like to book a VIP consultation.`;

  if (btnEl) {
    btnEl.href = `https://wa.me/${branchPhone}?text=${encodeURIComponent(waMsg)}`;
  }
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================= */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   VIP Booking Modal
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.querySelector('.modal-close-btn');
  const treatmentSelect = document.getElementById('modal-treatment');
  const branchSelect = document.getElementById('modal-branch');
  const form = document.getElementById('booking-form');

  if (!modal) return;

  // Open modal buttons
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const preselectedTreatment = btn.getAttribute('data-treatment');
      if (preselectedTreatment && treatmentSelect) {
        treatmentSelect.value = preselectedTreatment;
      }
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Form submission -> Generate formatted WhatsApp message
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('modal-name')?.value || '';
      const phone = document.getElementById('modal-phone')?.value || '';
      const branch = branchSelect?.value || 'new-cairo';
      const treatment = treatmentSelect?.options[treatmentSelect.selectedIndex]?.text || '';
      const notes = document.getElementById('modal-notes')?.value || '';

      const targetPhone = branch === 'nasr-city' ? '20111150517' : '201092979050';
      const branchLabel = branch === 'nasr-city' ? 'فرع مدينة نصر' : 'فرع التجمع الخامس (القاهرة الجديدة)';

      const message = currentLang === 'ar'
        ? `طلب حجز موعد VIP من الموقع الإلكتروني:\n- الاسم: ${name}\n- الهاتف: ${phone}\n- الفرع المطلوب: ${branchLabel}\n- الإجراء: ${treatment}\n- ملاحظات/الموعد المفضل: ${notes || 'أقرب موعد متاح'}`
        : `VIP Consultation Booking Request:\n- Name: ${name}\n- Phone: ${phone}\n- Branch: ${branch === 'nasr-city' ? 'Nasr City' : 'New Cairo'}\n- Procedure: ${treatment}\n- Preferred Date / Notes: ${notes || 'Earliest available slot'}`;

      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      closeModal();
      form.reset();
    });
  }
}
