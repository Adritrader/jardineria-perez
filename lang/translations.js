// Sistema de traducciones multiidioma
const translations = {
    es: {
        // Navegación
        nav_services: "Servicios",
        nav_gallery: "Galería", 
        nav_testimonials: "Testimonios",
        nav_contact: "Contacto",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Cuidado integral de jardines y piscinas durante todo el año",
        hero_description: "Especialistas en mantenimiento de jardines, poda, limpieza y diseño de espacios verdes en Dénia y la Marina Alta.",
        hero_cta: "Solicitar Presupuesto",
        
        // About section
        about_title: "Sobre Nosotros",
        about_description: "En Jardinería Pérez, contamos con más de 15 años de experiencia ofreciendo servicios profesionales de jardinería en Dénia y en toda la Marina Alta. Nuestro equipo de expertos se especializa en el mantenimiento de jardines, la creación de espacios verdes personalizados y el cuidado integral de áreas ajardinadas. Utilizamos técnicas sostenibles y productos de alta calidad para garantizar jardines sanos, bonitos y duraderos durante todo el año. Confía en nosotros para dar vida y color a tu jardín.",
        
        // Servicios
        services_title: "Nuestros Servicios",
        service_garden_title: "Mantenimiento de Jardines",
        service_garden_desc: "Ofrecemos un servicio integral de mantenimiento de jardines en Dénia y alrededores, incluyendo corte de césped, poda, fertilización y control de plagas. Adaptamos cada servicio a las necesidades específicas de tu espacio verde.",
        service_pools_title: "Limpieza de Piscinas",
        service_pools_desc: "Ofrecemos servicios profesionales de limpieza y mantenimiento de piscinas en Dénia. Eliminamos hojas, algas y residuos, instalación de cloro salino y control de pH, análisis del agua, cloración y depuración para garantizar una piscina limpia, segura y lista para disfrutar.",
        service_design_title: "Diseño de Jardines",
        service_design_desc: "Creamos jardines únicos combinando funcionalidad y estética. Nuestro servicio de diseño de jardines en la Marina Alta transforma tu espacio exterior en un entorno armonioso y natural.",
        service_pruning_title: "Poda de Palmeras",
        service_pruning_desc: "Expertos en poda de palmeras en Dénia. Eliminamos hojas secas y ramas dañadas para mantener tus palmeras saludables y libres de plagas. Servicio seguro y profesional.",
        service_irrigation_title: "Sistemas de Riego",
        service_irrigation_desc: "Instalamos sistemas de riego automático eficientes que optimizan el consumo de agua y aseguran la salud de tus plantas, ideal para jardines residenciales y comunidades en Dénia y alrededores.",
        
        // Galería
        gallery_title: "Galería de Trabajos",
        gallery_subtitle: "Algunos de nuestros proyectos realizados",
        
        // Testimonios
        testimonials_title: "Lo que dicen nuestros clientes",
        testimonial_toggle: "Ver más",
        testimonial_toggle_less: "Ver menos",
        
        // Contacto
        contact_title: "Contáctanos",
        contact_subtitle: "¿Necesitas nuestros servicios? Ponte en contacto y te daremos presupuesto sin compromiso",
        contact_phone: "Teléfono",
        contact_email: "Email",
        contact_address: "Dirección",
        contact_hours: "Horario",
        contact_hours_text: "Lunes a Viernes: 8:00 - 18:00",
        contact_cta: "Solicitar Presupuesto Gratis",
        
        // Blog
        blog_title: "Blog de Jardinería",
        blog_read_more: "Leer más",
        
        // Footer
        footer_rights: "© 2025 Jardinería Pérez. Todos los derechos reservados.",
        footer_legal: "Información Legal",
        
        // About section features
        about_feature_1: "Técnicas de riego sostenibles",
        about_feature_2: "Diseños personalizados", 
        about_feature_3: "Mantenimiento integral",
        about_feature_4: "Asesoramiento técnico gratuito",
        
        // Testimonios content
        testimonial_1: "Magníficos profesionales. Serios y eficaces, trabajo con Miguel hace años y lo recomiendo sin duda. Conoce muy bien su oficio y no solo mantiene el jardín y la piscina perfectos, sino también diseñan y organizan los nuevos espacios con inteligencia y buen gusto. Mi casa ha mejorado mucho gracias a su trabajo.",
        testimonial_2: "Contenta con Miguel, buen jardinero... hace tiempo que viene a casa y la verdad que el jardín parece otro. Pendiente de todo, buena persona... todo perfecto. Lo recomiendo.",
        testimonial_3: "Un buen trabajador y muy responsable. Y un trato excelente.",
        
        // Gallery items
        gallery_pool_modern_title: "Piscina Moderna",
        gallery_pool_modern_desc: "Diseño contemporáneo - Urbanización",
        gallery_pool_category: "Piscinas",
        gallery_garden_mediterranean_title: "Jardín Mediterráneo",
        gallery_garden_mediterranean_desc: "Diseño con plantas autóctonas",
        gallery_garden_category: "Jardines",
        gallery_equipment_title: "Equipo Profesional",
        gallery_equipment_desc: "Servicio a domicilio - Marina Alta",
        gallery_maintenance_category: "Mantenimiento",
        
        // Contact form
        contact_form_title: "Formulario de Contacto",
        contact_form_name: "Nombre Completo",
        contact_form_name_placeholder: "Tu nombre",
        contact_form_email: "Correo Electrónico",
        contact_form_email_placeholder: "tu@correo.com",
        contact_form_message: "Tu Mensaje",
        contact_form_message_placeholder: "Escríbenos tu consulta...",
        contact_form_submit: "Enviar Mensaje",
        contact_form_note: "* Responderemos en menos de 24 horas",
        
        // Service cards additional
        service_repair_title: "Rejuntes y Reparación de Piscinas",
        service_repair_desc: "Especialistas en rejuntes de piscinas, reparación de coronas y tapar grietas en Dénia. Realizamos colocación de gresite, vaciados completos, instalación de cloro salino y pH, cambios de sondas, cambio de células, cambio de inyectores, reparación de filtraciones y averías de motores.",
        service_repair_description: "Nos especializamos en rejuntes de piscinas, reparación de coronas y solución de grietas en Dénia y Marina Alta. Nuestros servicios incluyen colocación de gresite, vaciados completos, instalación de sistemas de cloro salino y control de pH, cambios de sondas, sustitución de células y células de electrólisis, cambio de inyectores, reparación de filtraciones y reparación de averías de motores de piscina. Contamos con personal especializado y materiales de primera calidad para garantizar reparaciones duraderas.",
        
        // Urbanizaciones section
        urbanizations_title: "Soluciones para Urbanizaciones",
        urbanizations_desc_1: "En Jardinería Pérez ofrecemos soluciones integrales para urbanizaciones en Dénia y la Marina Alta, especializándonos en el mantenimiento de zonas verdes, poda de palmeras y árboles, diseño y limpieza de jardines. Nuestro equipo de jardineros profesionales garantiza un cuidado eficiente y sostenible, incluyendo instalación y mantenimiento de sistemas de riego automático para mantener sus jardines siempre verdes.",
        urbanizations_desc_2: "También brindamos servicios especializados en piscinas, desde la limpieza y mantenimiento hasta análisis y tratamiento del agua, asegurando espacios exteriores perfectos para disfrutar todo el año. Confíe en nosotros para la poda de palmeras en Dénia y Marina Alta, control de plagas y fertilización de césped natural o artificial.",
        urbanizations_desc_3: "Contamos con amplia experiencia en el mantenimiento de urbanizaciones, ofreciendo un servicio integral que mejora la estética y funcionalidad de sus áreas comunes con soluciones adaptadas a sus necesidades. Jardinería Pérez es su aliado para un entorno exterior cuidado, saludable y sostenible.",
        
        // Urbanization cards
        urban_planning_title: "Planificación Verde",
        urban_planning_desc: "Diseñamos espacios sostenibles que mejoran la calidad de vida en urbanizaciones.",
        urban_irrigation_title: "Riego Inteligente", 
        urban_irrigation_desc: "Implementamos sistemas de riego automatizados que optimizan el consumo de agua.",
        urban_maintenance_title: "Mantenimiento Integral",
        urban_maintenance_desc: "Servicios regulares de limpieza, poda y cuidado de zonas comunes.",
        urban_pools_title: "Piscinas en Urbanizaciones",
        urban_pools_desc: "Cuidado, mantenimiento y rehabilitación de piscinas comunitarias.",
        
        // Footer and cookies
        footer_copyright: "Esta web ha sido diseñada con ❤️ por VaporWeb Designs © · Todos los derechos reservados",
        cookie_text: "Usamos cookies propias y de terceros para mejorar nuestros servicios. Si continuas navegando en esta página, aceptas nuestra",
        cookie_policy: "política de cookies",
        
        // Separadores parallax
        parallax_garden_title: "Transformamos espacios verdes",
        parallax_garden_desc: "Especialistas en crear y mantener jardines únicos en la Costa Blanca",
        parallax_pools_title: "Piscinas cristalinas todo el año",
        parallax_pools_desc: "Mantenimiento profesional y tratamiento especializado del agua",
        parallax_maintenance_title: "Herramientas y experiencia profesional",
        parallax_maintenance_desc: "Más de 15 años cuidando jardines en Dénia y Marina Alta",
        parallax_services_title: "Experiencia y calidad en cada servicio",
        parallax_services_desc: "Más de 15 años especializándose en el cuidado integral de jardines y piscinas",
        
        // Gallery section
        gallery_title_main: "Nuestros Proyectos",
        gallery_subtitle_main: "Descubre la excelencia en cada proyecto",
        gallery_description: "Explora nuestra galería de trabajos realizados en jardines y piscinas por toda la Marina Alta. Cada imagen cuenta la historia de espacios transformados con pasión y experiencia profesional.",
        
        // Footer additional
        footer_company_desc: "Especialistas en diseño y mantenimiento de espacios verdes desde 2009",
        footer_services_title: "Servicios",
        footer_design: "Diseño de Jardines",
        footer_maintenance: "Mantenimiento Profesional",
        footer_irrigation: "Sistemas de Riego",
        footer_urbanizations: "Urbanizaciones",
        footer_legal_title: "Legal",
        footer_privacy: "Política de Privacidad",
        footer_terms: "Términos y Condiciones",
        footer_cookies: "Cookies",
        footer_contact_title: "Contacto",
        
        // Meta descriptions para SEO
        meta_description: "🌿 Jardinería Pérez Dénia ⭐ Especialistas en mantenimiento de jardines y piscinas desde 2009. Diseño, poda, riego automático y limpieza profesional. ✅ Presupuesto gratuito ☎️ 658 64 51 02"
    },
    
    en: {
        // Navigation
        nav_services: "Services",
        nav_gallery: "Gallery",
        nav_testimonials: "Testimonials", 
        nav_contact: "Contact",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Comprehensive garden and pool care throughout the year",
        hero_description: "Specialists in garden maintenance, pruning, cleaning and green space design in Dénia and Marina Alta.",
        hero_cta: "Request Quote",
        
        // About section
        about_title: "About Us",
        about_description: "At Jardinería Pérez, we have over 15 years of experience providing professional gardening services in Dénia and throughout Marina Alta. Our team of experts specializes in garden maintenance, creating personalized green spaces and comprehensive care of landscaped areas. We use sustainable techniques and high-quality products to ensure healthy, beautiful and durable gardens throughout the year. Trust us to bring life and color to your garden.",
        
        // Services
        services_title: "Our Services",
        service_garden_title: "Garden Maintenance",
        service_garden_desc: "We offer comprehensive garden maintenance services in Dénia and surroundings, including lawn mowing, pruning, fertilization and pest control. We adapt each service to the specific needs of your green space.",
        service_pools_title: "Pool Cleaning",
        service_pools_desc: "We offer professional pool cleaning and maintenance services in Dénia. We remove leaves, algae and debris, install saline chlorine and pH control, water analysis, chlorination and purification to ensure a clean, safe pool ready to enjoy.",
        service_design_title: "Garden Design",
        service_design_desc: "We create unique gardens combining functionality and aesthetics. Our garden design service in Marina Alta transforms your outdoor space into a harmonious and natural environment.",
        service_pruning_title: "Palm Tree Pruning",
        service_pruning_desc: "Experts in palm tree pruning in Dénia. We remove dry leaves and damaged branches to keep your palm trees healthy and pest-free. Safe and professional service.",
        service_irrigation_title: "Irrigation Systems",
        service_irrigation_desc: "We install efficient automatic irrigation systems that optimize water consumption and ensure the health of your plants, ideal for residential gardens and communities in Dénia and surroundings.",
        
        // About section features
        about_feature_1: "Sustainable irrigation techniques",
        about_feature_2: "Personalized designs",
        about_feature_3: "Comprehensive maintenance",
        about_feature_4: "Free technical advice",
        
        // Testimonios content
        testimonial_1: "Magnificent professionals. Serious and efficient, I have been working with Miguel for years and I recommend him without a doubt. He knows his trade very well and not only keeps the garden and pool perfect, but also designs and organizes new spaces with intelligence and good taste. My house has improved a lot thanks to his work.",
        testimonial_2: "Happy with Miguel, good gardener... he has been coming to my house for a long time and the truth is that the garden looks different. Attentive to everything, good person... everything perfect. I recommend him.",
        testimonial_3: "A good worker and very responsible. And excellent treatment.",
        
        // Gallery items
        gallery_pool_modern_title: "Modern Pool",
        gallery_pool_modern_desc: "Contemporary design - Urbanization",
        gallery_pool_category: "Pools",
        gallery_garden_mediterranean_title: "Mediterranean Garden",
        gallery_garden_mediterranean_desc: "Design with native plants",
        gallery_garden_category: "Gardens",
        gallery_equipment_title: "Professional Equipment",
        gallery_equipment_desc: "Home service - Marina Alta",
        gallery_maintenance_category: "Maintenance",
        
        // Contact form
        contact_form_title: "Contact Form",
        contact_form_name: "Full Name",
        contact_form_name_placeholder: "Your name",
        contact_form_email: "Email Address",
        contact_form_email_placeholder: "your@email.com",
        contact_form_message: "Your Message",
        contact_form_message_placeholder: "Write us your inquiry...",
        contact_form_submit: "Send Message",
        contact_form_note: "* We will respond within 24 hours",
        
        // Service cards additional
        service_repair_title: "Pool Grouting and Repair",
        service_repair_desc: "Specialists in pool grouting, crown repair and crack sealing in Dénia. We perform tile installation, complete draining, saline chlorine and pH installation, probe changes, cell changes, injector changes, leak repair and motor breakdowns.",
        service_repair_description: "We specialize in pool grouting, crown repair and crack solutions in Dénia and Marina Alta. Our services include tile installation, complete draining, saline chlorine systems and pH control installation, probe changes, cell and electrolysis cell replacement, injector changes, leak repair and pool motor breakdown repair. We have specialized staff and top quality materials to guarantee long-lasting repairs.",
        
        // Urbanizaciones section
        urbanizations_title: "Solutions for Urbanizations",
        urbanizations_desc_1: "At Jardinería Pérez we offer comprehensive solutions for urbanizations in Dénia and Marina Alta, specializing in green area maintenance, palm and tree pruning, garden design and cleaning. Our team of professional gardeners guarantees efficient and sustainable care, including installation and maintenance of automatic irrigation systems to keep your gardens always green.",
        urbanizations_desc_2: "We also provide specialized pool services, from cleaning and maintenance to water analysis and treatment, ensuring perfect outdoor spaces to enjoy all year round. Trust us for palm pruning in Dénia and Marina Alta, pest control and natural or artificial grass fertilization.",
        urbanizations_desc_3: "We have extensive experience in urbanization maintenance, offering a comprehensive service that improves the aesthetics and functionality of your common areas with solutions adapted to your needs. Jardinería Pérez is your ally for a well-cared, healthy and sustainable outdoor environment.",
        
        // Urbanization cards
        urban_planning_title: "Green Planning",
        urban_planning_desc: "We design sustainable spaces that improve quality of life in urbanizations.",
        urban_irrigation_title: "Smart Irrigation",
        urban_irrigation_desc: "We implement automated irrigation systems that optimize water consumption.",
        urban_maintenance_title: "Comprehensive Maintenance", 
        urban_maintenance_desc: "Regular cleaning, pruning and common area care services.",
        urban_pools_title: "Urbanization Pools",
        urban_pools_desc: "Care, maintenance and rehabilitation of community pools.",
        
        // Footer and cookies
        footer_copyright: "This website has been designed with ❤️ by VaporWeb Designs © · All rights reserved",
        cookie_text: "We use our own and third-party cookies to improve our services. If you continue browsing this page, you accept our",
        cookie_policy: "cookie policy",
        
        // Gallery
        gallery_title: "Work Gallery",
        gallery_subtitle: "Some of our completed projects",
        
        // Testimonials
        testimonials_title: "What our clients say",
        testimonial_toggle: "Read more",
        testimonial_toggle_less: "Read less",
        
        // Contact
        contact_title: "Contact Us",
        contact_subtitle: "Need our services? Get in touch and we'll give you a quote without obligation",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_address: "Address",
        contact_hours: "Hours",
        contact_hours_text: "Monday to Friday: 8:00 - 18:00",
        contact_cta: "Request Free Quote",
        
        // Blog
        blog_title: "Gardening Blog",
        blog_read_more: "Read more",
        
        // Footer
        footer_rights: "© 2025 Jardinería Pérez. All rights reserved.",
        footer_legal: "Legal Information",
        
        // Separadores parallax
        parallax_garden_title: "Transforming green spaces",
        parallax_garden_desc: "Specialists in creating and maintaining unique gardens on the Costa Blanca",
        parallax_pools_title: "Crystal clear pools all year round",
        parallax_pools_desc: "Professional maintenance and specialized water treatment",
        parallax_maintenance_title: "Professional tools and experience",
        parallax_maintenance_desc: "Over 15 years caring for gardens in Dénia and Marina Alta",
        parallax_services_title: "Experience and quality in every service",
        parallax_services_desc: "Over 15 years specializing in comprehensive garden and pool care",
        
        // Gallery section
        gallery_title_main: "Our Projects",
        gallery_subtitle_main: "Discover excellence in every project",
        gallery_description: "Explore our gallery of work done in gardens and pools throughout Marina Alta. Each image tells the story of spaces transformed with passion and professional experience.",
        
        // Footer additional
        footer_company_desc: "Specialists in green space design and maintenance since 2009",
        footer_services_title: "Services",
        footer_design: "Garden Design",
        footer_maintenance: "Professional Maintenance",
        footer_irrigation: "Irrigation Systems",
        footer_urbanizations: "Urbanizations",
        footer_legal_title: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms and Conditions",
        footer_cookies: "Cookies",
        footer_contact_title: "Contact",
        
        // Meta descriptions para SEO
        meta_description: "🌿 Jardinería Pérez Dénia ⭐ Garden and pool maintenance specialists since 2009. Design, pruning, automatic irrigation and professional cleaning. ✅ Free quote ☎️ 658 64 51 02"
    },
    
    de: {
        // Navigation
        nav_services: "Dienstleistungen",
        nav_gallery: "Galerie",
        nav_testimonials: "Referenzen",
        nav_contact: "Kontakt",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Ganzjährige umfassende Garten- und Poolpflege",
        hero_description: "Spezialisten für Gartenpflege, Beschneidung, Reinigung und Gestaltung von Grünflächen in Dénia und Marina Alta.",
        hero_cta: "Angebot anfordern",
        
        // About section
        about_title: "Über Uns",
        about_description: "Bei Jardinería Pérez haben wir über 15 Jahre Erfahrung in der Bereitstellung professioneller Gartendienstleistungen in Dénia und der gesamten Marina Alta. Unser Expertenteam spezialisiert sich auf Gartenpflege, die Schaffung personalisierter Grünflächen und die umfassende Pflege von Landschaftsbereichen. Wir verwenden nachhaltige Techniken und hochwertige Produkte, um gesunde, schöne und langlebige Gärten das ganze Jahr über zu gewährleisten. Vertrauen Sie uns, um Leben und Farbe in Ihren Garten zu bringen.",
        
        // Services
        services_title: "Unsere Dienstleistungen",
        service_garden_title: "Gartenpflege",
        service_garden_desc: "Wir bieten umfassende Gartenpflegedienste in Dénia und Umgebung an, einschließlich Rasenmähen, Beschneidung, Düngung und Schädlingsbekämpfung. Wir passen jeden Service an die spezifischen Bedürfnisse Ihres Grünbereichs an.",
        service_pools_title: "Pool-Reinigung",
        service_pools_desc: "Wir bieten professionelle Pool-Reinigungs- und Wartungsdienste in Dénia an. Wir entfernen Blätter, Algen und Rückstände, installieren Salzchlor und pH-Kontrolle, Wasseranalyse, Chlorierung und Aufbereitung, um einen sauberen, sicheren Pool zu gewährleisten, der bereit zum Genießen ist.",
        service_design_title: "Gartengestaltung",
        service_design_desc: "Wir schaffen einzigartige Gärten, die Funktionalität und Ästhetik kombinieren. Unser Gartengestaltungsservice in Marina Alta verwandelt Ihren Außenbereich in eine harmonische und natürliche Umgebung.",
        service_pruning_title: "Palmenbeschneidung",
        service_pruning_desc: "Experten für Palmenbeschneidung in Dénia. Wir entfernen trockene Blätter und beschädigte Äste, um Ihre Palmen gesund und schädlingsfrei zu halten. Sicherer und professioneller Service.",
        service_irrigation_title: "Bewässerungssysteme",
        service_irrigation_desc: "Wir installieren effiziente automatische Bewässerungssysteme, die den Wasserverbrauch optimieren und die Gesundheit Ihrer Pflanzen gewährleisten, ideal für Wohngärten und Gemeinden in Dénia und Umgebung.",
        
        // About section features
        about_feature_1: "Nachhaltige Bewässerungstechniken",
        about_feature_2: "Personalisierte Designs",
        about_feature_3: "Umfassende Wartung",
        about_feature_4: "Kostenlose technische Beratung",
        
        // Separadores parallax
        parallax_garden_title: "Transformation von Grünflächen",
        parallax_garden_desc: "Spezialisten für die Gestaltung und Pflege einzigartiger Gärten an der Costa Blanca",
        parallax_pools_title: "Kristallklare Pools das ganze Jahr über",
        parallax_pools_desc: "Professionelle Wartung und spezialisierte Wasserbehandlung",
        parallax_maintenance_title: "Professionelle Werkzeuge und Erfahrung",
        parallax_maintenance_desc: "Über 15 Jahre Gartenpflege in Dénia und Marina Alta",
        parallax_services_title: "Erfahrung und Qualität in jedem Service",
        parallax_services_desc: "Über 15 Jahre spezialisiert auf umfassende Garten- und Poolpflege",
        
        // Gallery section
        gallery_title_main: "Unsere Projekte",
        gallery_subtitle_main: "Entdecken Sie Exzellenz in jedem Projekt",
        gallery_description: "Erkunden Sie unsere Galerie der Arbeiten in Gärten und Pools in ganz Marina Alta. Jedes Bild erzählt die Geschichte von Räumen, die mit Leidenschaft und beruflicher Erfahrung verwandelt wurden.",
        
        // Footer additional
        footer_company_desc: "Spezialisten für Grünflächengestaltung und -pflege seit 2009",
        footer_services_title: "Dienstleistungen",
        footer_design: "Gartengestaltung",
        footer_maintenance: "Professionelle Wartung",
        footer_irrigation: "Bewässerungssysteme",
        footer_urbanizations: "Urbanisationen",
        footer_legal_title: "Rechtliches",
        footer_privacy: "Datenschutzrichtlinie",
        footer_terms: "Allgemeine Geschäftsbedingungen",
        footer_cookies: "Cookies",
        footer_contact_title: "Kontakt",
        
        // Testimonios content
        testimonial_1: "Großartige Profis. Seriös und effizient, ich arbeite seit Jahren mit Miguel und empfehle ihn ohne Zweifel. Er kennt sein Handwerk sehr gut und hält nicht nur den Garten und Pool perfekt, sondern entwirft und organisiert auch neue Räume mit Intelligenz und gutem Geschmack. Mein Haus hat sich dank seiner Arbeit sehr verbessert.",
        testimonial_2: "Zufrieden mit Miguel, guter Gärtner... er kommt schon lange zu mir nach Hause und die Wahrheit ist, dass der Garten anders aussieht. Aufmerksam für alles, gute Person... alles perfekt. Ich empfehle ihn.",
        testimonial_3: "Ein guter Arbeiter und sehr verantwortlich. Und ausgezeichnete Behandlung.",
        
        // Gallery items
        gallery_pool_modern_title: "Moderner Pool",
        gallery_pool_modern_desc: "Zeitgenössisches Design - Urbanisation",
        gallery_pool_category: "Pools",
        gallery_garden_mediterranean_title: "Mediterraner Garten",
        gallery_garden_mediterranean_desc: "Design mit einheimischen Pflanzen",
        gallery_garden_category: "Gärten",
        gallery_equipment_title: "Professionelle Ausrüstung",
        gallery_equipment_desc: "Hausservice - Marina Alta",
        gallery_maintenance_category: "Wartung",
        
        // Contact form
        contact_form_title: "Kontaktformular",
        contact_form_name: "Vollständiger Name",
        contact_form_name_placeholder: "Ihr Name",
        contact_form_email: "E-Mail-Adresse",
        contact_form_email_placeholder: "ihre@email.com",
        contact_form_message: "Ihre Nachricht",
        contact_form_message_placeholder: "Schreiben Sie uns Ihre Anfrage...",
        contact_form_submit: "Nachricht senden",
        contact_form_note: "* Wir antworten innerhalb von 24 Stunden",
        
        // Service cards additional
        service_repair_title: "Pool-Fugenmörtel und Reparatur",
        service_repair_desc: "Spezialisten für Pool-Fugenmörtel, Kronenreparatur und Rissverschließung in Dénia. Wir führen Fliesenverlegung, komplette Entleerung, Salz-Chlor- und pH-Installation, Sondenwechsel, Zellenwechsel, Injektorenwechsel, Leckreparatur und Motorpannen durch.",
        service_repair_description: "Wir spezialisieren uns auf Pool-Fugenmörtel, Kronenreparatur und Risslösungen in Dénia und Marina Alta. Unsere Dienstleistungen umfassen Fliesenverlegung, komplette Entleerung, Installation von Salz-Chlor-Systemen und pH-Kontrolle, Sondenwechsel, Austausch von Zellen und Elektrolysezellen, Injektorenwechsel, Leckreparatur und Reparatur von Pool-Motor-Pannen. Wir verfügen über spezialisiertes Personal und hochwertige Materialien, um langlebige Reparaturen zu gewährleisten.",
        
        // Urbanizaciones section
        urbanizations_title: "Lösungen für Urbanisationen",
        urbanizations_desc_1: "Bei Jardinería Pérez bieten wir umfassende Lösungen für Urbanisationen in Dénia und Marina Alta, spezialisiert auf Grünflächenpflege, Palmen- und Baumschnitt, Gartengestaltung und -reinigung. Unser Team professioneller Gärtner garantiert eine effiziente und nachhaltige Pflege, einschließlich Installation und Wartung automatischer Bewässerungssysteme, um Ihre Gärten immer grün zu halten.",
        urbanizations_desc_2: "Wir bieten auch spezialisierte Pool-Dienstleistungen, von Reinigung und Wartung bis hin zu Wasseranalyse und -behandlung, um perfekte Außenbereiche zu gewährleisten, die das ganze Jahr über genossen werden können. Vertrauen Sie uns für Palmenschnitt in Dénia und Marina Alta, Schädlingsbekämpfung und Düngung von natürlichem oder künstlichem Rasen.",
        urbanizations_desc_3: "Wir haben umfangreiche Erfahrung in der Urbanisationspflege und bieten einen umfassenden Service, der die Ästhetik und Funktionalität Ihrer Gemeinschaftsbereiche mit an Ihre Bedürfnisse angepassten Lösungen verbessert. Jardinería Pérez ist Ihr Verbündeter für eine gepflegte, gesunde und nachhaltige Außenumgebung.",
        
        // Urbanization cards
        urban_planning_title: "Grüne Planung",
        urban_planning_desc: "Wir entwerfen nachhaltige Räume, die die Lebensqualität in Urbanisationen verbessern.",
        urban_irrigation_title: "Intelligente Bewässerung",
        urban_irrigation_desc: "Wir implementieren automatisierte Bewässerungssysteme, die den Wasserverbrauch optimieren.",
        urban_maintenance_title: "Umfassende Wartung",
        urban_maintenance_desc: "Regelmäßige Reinigungs-, Beschneidungs- und Gemeinschaftsbereichspflegedienste.",
        urban_pools_title: "Urbanisations-Pools",
        urban_pools_desc: "Pflege, Wartung und Rehabilitierung von Gemeinschaftspools.",
        
        // Footer and cookies
        footer_copyright: "Diese Website wurde mit ❤️ von VaporWeb Designs © entworfen · Alle Rechte vorbehalten",
        cookie_text: "Wir verwenden eigene Cookies und Cookies von Drittanbietern, um unsere Dienste zu verbessern. Wenn Sie weiter auf dieser Seite surfen, akzeptieren Sie unsere",
        cookie_policy: "Cookie-Richtlinie",
        
        // Gallery
        gallery_title: "Arbeitsgalerie",
        gallery_subtitle: "Einige unserer abgeschlossenen Projekte",
        
        // Testimonials
        testimonials_title: "Was unsere Kunden sagen",
        testimonial_toggle: "Mehr lesen",
        testimonial_toggle_less: "Weniger lesen",
        
        // Contact
        contact_title: "Kontaktieren Sie uns",
        contact_subtitle: "Brauchen Sie unsere Dienste? Kontaktieren Sie uns und wir erstellen Ihnen ein unverbindliches Angebot",
        contact_phone: "Telefon",
        contact_email: "E-Mail",
        contact_address: "Adresse",
        contact_hours: "Öffnungszeiten",
        contact_hours_text: "Montag bis Freitag: 8:00 - 18:00",
        contact_cta: "Kostenloses Angebot anfordern",
        
        // Blog
        blog_title: "Gartenblog",
        blog_read_more: "Mehr lesen",
        
        // Footer
        footer_rights: "© 2025 Jardinería Pérez. Alle Rechte vorbehalten.",
        footer_legal: "Rechtliche Informationen",
        
        // Separadores parallax
        parallax_garden_title: "Grünflächen transformieren",
        parallax_garden_desc: "Spezialisten für die Schaffung und Pflege einzigartiger Gärten an der Costa Blanca",
        parallax_pools_title: "Kristallklare Pools das ganze Jahr",
        parallax_pools_desc: "Professionelle Wartung und spezialisierte Wasserbehandlung",
        parallax_maintenance_title: "Professionelle Werkzeuge und Erfahrung",
        parallax_maintenance_desc: "Über 15 Jahre Gartenpflege in Dénia und Marina Alta",
        
        // Meta descriptions para SEO
        meta_description: "🌿 Jardinería Pérez Dénia ⭐ Garten- und Poolpflege-Spezialisten seit 2009. Design, Beschneidung, automatische Bewässerung und professionelle Reinigung. ✅ Kostenloser Kostenvoranschlag ☎️ 658 64 51 02"
    },
    
    fr: {
        // Navigation
        nav_services: "Services",
        nav_gallery: "Galerie",
        nav_testimonials: "Témoignages",
        nav_contact: "Contact",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Soins complets des jardins et piscines toute l'année",
        hero_description: "Spécialistes en entretien de jardins, élagage, nettoyage et conception d'espaces verts à Dénia et Marina Alta.",
        hero_cta: "Demander un devis",
        
        // About section
        about_title: "À Propos de Nous",
        about_description: "Chez Jardinería Pérez, nous avons plus de 15 ans d'expérience dans la fourniture de services de jardinage professionnels à Dénia et dans toute la Marina Alta. Notre équipe d'experts se spécialise dans l'entretien de jardins, la création d'espaces verts personnalisés et les soins complets des zones paysagées. Nous utilisons des techniques durables et des produits de haute qualité pour garantir des jardins sains, beaux et durables toute l'année. Faites-nous confiance pour donner vie et couleur à votre jardin.",
        
        // Services
        services_title: "Nos Services",
        service_garden_title: "Entretien de Jardins",
        service_garden_desc: "Nous offrons un service complet d'entretien de jardins à Dénia et environs, incluant la tonte de pelouse, l'élagage, la fertilisation et le contrôle des parasites. Nous adaptons chaque service aux besoins spécifiques de votre espace vert.",
        service_pools_title: "Nettoyage de Piscines",
        service_pools_desc: "Nous offrons des services professionnels de nettoyage et d'entretien de piscines à Dénia. Nous éliminons les feuilles, algues et résidus, installation de chlore salin et contrôle du pH, analyse de l'eau, chloration et épuration pour garantir une piscine propre, sûre et prête à profiter.",
        service_design_title: "Conception de Jardins",
        service_design_desc: "Nous créons des jardins uniques combinant fonctionnalité et esthétique. Notre service de conception de jardins à Marina Alta transforme votre espace extérieur en un environnement harmonieux et naturel.",
        service_pruning_title: "Élagage de Palmiers",
        service_pruning_desc: "Experts en élagage de palmiers à Dénia. Nous éliminons les feuilles sèches et les branches endommagées pour maintenir vos palmiers en bonne santé et exempts de parasites. Service sûr et professionnel.",
        service_irrigation_title: "Systèmes d'Irrigation",
        service_irrigation_desc: "Nous installons des systèmes d'irrigation automatique efficaces qui optimisent la consommation d'eau et assurent la santé de vos plantes, idéal pour les jardins résidentiels et les communautés à Dénia et environs.",
        
        // About section features
        about_feature_1: "Techniques d'irrigation durables",
        about_feature_2: "Conceptions personnalisées",
        about_feature_3: "Maintenance complète",
        about_feature_4: "Conseils techniques gratuits",
        
        // Testimonios content
        testimonial_1: "Professionnels magnifiques. Sérieux et efficaces, je travaille avec Miguel depuis des années et je le recommande sans aucun doute. Il connaît très bien son métier et non seulement maintient le jardin et la piscine parfaits, mais conçoit et organise également de nouveaux espaces avec intelligence et bon goût. Ma maison s'est beaucoup améliorée grâce à son travail.",
        testimonial_2: "Contente de Miguel, bon jardinier... il vient chez moi depuis longtemps et la vérité est que le jardin semble différent. Attentif à tout, bonne personne... tout parfait. Je le recommande.",
        testimonial_3: "Un bon travailleur et très responsable. Et un excellent traitement.",
        
        // Gallery items
        gallery_pool_modern_title: "Piscine Moderne",
        gallery_pool_modern_desc: "Design contemporain - Urbanisation",
        gallery_pool_category: "Piscines",
        gallery_garden_mediterranean_title: "Jardin Méditerranéen",
        gallery_garden_mediterranean_desc: "Design avec plantes indigènes",
        gallery_garden_category: "Jardins",
        gallery_equipment_title: "Équipement Professionnel",
        gallery_equipment_desc: "Service à domicile - Marina Alta",
        gallery_maintenance_category: "Maintenance",
        
        // Contact form
        contact_form_title: "Formulaire de Contact",
        contact_form_name: "Nom Complet",
        contact_form_name_placeholder: "Votre nom",
        contact_form_email: "Adresse Email",
        contact_form_email_placeholder: "votre@email.com",
        contact_form_message: "Votre Message",
        contact_form_message_placeholder: "Écrivez-nous votre demande...",
        contact_form_submit: "Envoyer le Message",
        contact_form_note: "* Nous répondrons dans les 24 heures",
        
        // Service cards additional
        service_repair_title: "Rejointoiement et Réparation de Piscines",
        service_repair_desc: "Spécialistes du rejointoiement de piscines, réparation de couronnes et colmatage de fissures à Dénia. Nous effectuons la pose de carrelage, vidanges complètes, installation de chlore salin et pH, changements de sondes, changement de cellules, changement d'injecteurs, réparation de fuites et pannes de moteurs.",
        service_repair_description: "Nous nous spécialisons dans le rejointoiement de piscines, la réparation de couronnes et les solutions de fissures à Dénia et Marina Alta. Nos services incluent la pose de carrelage, vidanges complètes, installation de systèmes de chlore salin et contrôle du pH, changements de sondes, remplacement de cellules et cellules d'électrolyse, changement d'injecteurs, réparation de fuites et réparation de pannes de moteurs de piscine. Nous disposons de personnel spécialisé et de matériaux de première qualité pour garantir des réparations durables.",
        
        // Urbanizaciones section
        urbanizations_title: "Solutions pour Urbanisations",
        urbanizations_desc_1: "Chez Jardinería Pérez, nous offrons des solutions complètes pour les urbanisations à Dénia et Marina Alta, spécialisés dans l'entretien des espaces verts, l'élagage de palmiers et d'arbres, la conception et le nettoyage de jardins. Notre équipe de jardiniers professionnels garantit un soin efficace et durable, incluant l'installation et la maintenance de systèmes d'irrigation automatique pour maintenir vos jardins toujours verts.",
        urbanizations_desc_2: "Nous fournissons également des services spécialisés de piscines, du nettoyage et de la maintenance à l'analyse et au traitement de l'eau, assurant des espaces extérieurs parfaits pour profiter toute l'année. Faites-nous confiance pour l'élagage de palmiers à Dénia et Marina Alta, le contrôle des parasites et la fertilisation de gazon naturel ou artificiel.",
        urbanizations_desc_3: "Nous avons une vaste expérience dans la maintenance d'urbanisations, offrant un service complet qui améliore l'esthétique et la fonctionnalité de vos espaces communs avec des solutions adaptées à vos besoins. Jardinería Pérez est votre allié pour un environnement extérieur soigné, sain et durable.",
        
        // Urbanization cards
        urban_planning_title: "Planification Verte",
        urban_planning_desc: "Nous concevons des espaces durables qui améliorent la qualité de vie dans les urbanisations.",
        urban_irrigation_title: "Irrigation Intelligente",
        urban_irrigation_desc: "Nous mettons en place des systèmes d'irrigation automatisés qui optimisent la consommation d'eau.",
        urban_maintenance_title: "Maintenance Complète",
        urban_maintenance_desc: "Services réguliers de nettoyage, élagage et soin des espaces communs.",
        urban_pools_title: "Piscines d'Urbanisations",
        urban_pools_desc: "Soin, maintenance et réhabilitation de piscines communautaires.",
        
        // Footer and cookies
        footer_copyright: "Ce site web a été conçu avec ❤️ par VaporWeb Designs © · Tous droits réservés",
        cookie_text: "Nous utilisons nos propres cookies et ceux de tiers pour améliorer nos services. Si vous continuez à naviguer sur cette page, vous acceptez notre",
        cookie_policy: "politique de cookies",
        
        // Gallery
        gallery_title: "Galerie de Travaux",
        gallery_subtitle: "Quelques-uns de nos projets réalisés",
        
        // Testimonials
        testimonials_title: "Ce que disent nos clients",
        testimonial_toggle: "Lire plus",
        testimonial_toggle_less: "Lire moins",
        
        // Contact
        contact_title: "Contactez-nous",
        contact_subtitle: "Besoin de nos services ? Contactez-nous et nous vous donnerons un devis sans engagement",
        contact_phone: "Téléphone",
        contact_email: "Email",
        contact_address: "Adresse",
        contact_hours: "Horaires",
        contact_hours_text: "Lundi au Vendredi : 8h00 - 18h00",
        contact_cta: "Demander un Devis Gratuit",
        
        // Blog
        blog_title: "Blog de Jardinage",
        blog_read_more: "Lire plus",
        
        // Footer
        footer_rights: "© 2025 Jardinería Pérez. Tous droits réservés.",
        footer_legal: "Informations Légales",
        
        // Separadores parallax
        parallax_garden_title: "Transformer les espaces verts",
        parallax_garden_desc: "Spécialistes de la création et de l'entretien de jardins uniques sur la Costa Blanca",
        parallax_pools_title: "Piscines cristallines toute l'année",
        parallax_pools_desc: "Maintenance professionnelle et traitement spécialisé de l'eau",
        parallax_maintenance_title: "Outils professionnels et expérience",
        parallax_maintenance_desc: "Plus de 15 ans à prendre soin des jardins à Dénia et Marina Alta",
        parallax_services_title: "Expérience et qualité dans chaque service",
        parallax_services_desc: "Plus de 15 ans spécialisés dans les soins complets de jardins et piscines",
        
        // Gallery section
        gallery_title_main: "Nos Projets",
        gallery_subtitle_main: "Découvrez l'excellence dans chaque projet",
        gallery_description: "Explorez notre galerie de travaux réalisés dans les jardins et piscines de toute la Marina Alta. Chaque image raconte l'histoire d'espaces transformés avec passion et expérience professionnelle.",
        
        // Footer additional
        footer_company_desc: "Spécialistes en conception et entretien d'espaces verts depuis 2009",
        footer_services_title: "Services",
        footer_design: "Conception de Jardins",
        footer_maintenance: "Entretien Professionnel",
        footer_irrigation: "Systèmes d'Irrigation",
        footer_urbanizations: "Urbanisations",
        footer_legal_title: "Légal",
        footer_privacy: "Politique de Confidentialité",
        footer_terms: "Conditions Générales",
        footer_cookies: "Cookies",
        footer_contact_title: "Contact",
        parallax_maintenance_title: "Outils et expérience professionnels",
        parallax_maintenance_desc: "Plus de 15 ans d'entretien de jardins à Dénia et Marina Alta",
        
        // Meta descriptions para SEO
        meta_description: "🌿 Jardinería Pérez Dénia ⭐ Spécialistes de l'entretien de jardins et piscines depuis 2009. Design, élagage, irrigation automatique et nettoyage professionnel. ✅ Devis gratuit ☎️ 658 64 51 02"
    },
    
    nl: {
        // Navigation
        nav_services: "Diensten",
        nav_gallery: "Galerij",
        nav_testimonials: "Getuigenissen",
        nav_contact: "Contact",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Uitgebreide tuin- en zwembadverzorging het hele jaar door",
        hero_description: "Specialisten in tuinonderhoud, snoeien, schoonmaken en ontwerp van groene ruimtes in Dénia en Marina Alta.",
        hero_cta: "Offerte aanvragen",
        
        // About section
        about_title: "Over Ons",
        about_description: "Bij Jardinería Pérez hebben we meer dan 15 jaar ervaring met het leveren van professionele tuinierdiensten in Dénia en in de hele Marina Alta. Ons team van experts specialiseert zich in tuinonderhoud, het creëren van gepersonaliseerde groene ruimtes en uitgebreide verzorging van aangelegde gebieden. We gebruiken duurzame technieken en hoogwaardige producten om gezonde, mooie en duurzame tuinen het hele jaar door te garanderen. Vertrouw op ons om leven en kleur aan uw tuin te geven.",
        
        // Services
        services_title: "Onze Diensten",
        service_garden_title: "Tuinonderhoud",
        service_garden_desc: "We bieden uitgebreide tuinonderhoudsdiensten in Dénia en omgeving, inclusief grasmaaien, snoeien, bemesting en ongediertebestrijding. We passen elke service aan de specifieke behoeften van uw groene ruimte aan.",
        service_pools_title: "Zwembadreiniging",
        service_pools_desc: "We bieden professionele zwembadreinigings- en onderhoudsdiensten in Dénia. We verwijderen bladeren, algen en resten, installeren zoutchloor en pH-controle, wateranalyse, chlorering en zuivering om een schoon, veilig zwembad te garanderen dat klaar is om van te genieten.",
        service_design_title: "Tuinontwerp",
        service_design_desc: "We creëren unieke tuinen die functionaliteit en esthetiek combineren. Onze tuinontwerpdienst in Marina Alta transformeert uw buitenruimte in een harmonieuze en natuurlijke omgeving.",
        service_pruning_title: "Palmboomsnoei",
        service_pruning_desc: "Experts in palmboomsnoei in Dénia. We verwijderen droge bladeren en beschadigde takken om uw palmbomen gezond en ongediertevrij te houden. Veilige en professionele service.",
        service_irrigation_title: "Irrigatiesystemen",
        service_irrigation_desc: "We installeren efficiënte automatische irrigatiesystemen die het waterverbruik optimaliseren en de gezondheid van uw planten waarborgen, ideaal voor residentiële tuinen en gemeenschappen in Dénia en omgeving.",
        
        // About section features
        about_feature_1: "Duurzame irrigatietechnieken",
        about_feature_2: "Gepersonaliseerde ontwerpen",
        about_feature_3: "Uitgebreid onderhoud",
        about_feature_4: "Gratis technisch advies",
        
        // Testimonios content
        testimonial_1: "Prachtige professionals. Serieus en efficiënt, ik werk al jaren met Miguel en raad hem zonder twijfel aan. Hij kent zijn vak heel goed en houdt niet alleen de tuin en het zwembad perfect, maar ontwerpt en organiseert ook nieuwe ruimtes met intelligentie en goede smaak. Mijn huis is veel verbeterd dankzij zijn werk.",
        testimonial_2: "Tevreden met Miguel, goede tuinman... hij komt al een tijdje bij mij thuis en de waarheid is dat de tuin er anders uitziet. Aandacht voor alles, goed persoon... alles perfect. Ik raad hem aan.",
        testimonial_3: "Een goede werker en zeer verantwoordelijk. En uitstekende behandeling.",
        
        // Gallery items
        gallery_pool_modern_title: "Modern Zwembad",
        gallery_pool_modern_desc: "Eigentijds ontwerp - Urbanisatie",
        gallery_pool_category: "Zwembaden",
        gallery_garden_mediterranean_title: "Mediterrane Tuin",
        gallery_garden_mediterranean_desc: "Ontwerp met inheemse planten",
        gallery_garden_category: "Tuinen",
        gallery_equipment_title: "Professionele Uitrusting",
        gallery_equipment_desc: "Thuisservice - Marina Alta",
        gallery_maintenance_category: "Onderhoud",
        
        // Contact form
        contact_form_title: "Contactformulier",
        contact_form_name: "Volledige Naam",
        contact_form_name_placeholder: "Uw naam",
        contact_form_email: "E-mailadres",
        contact_form_email_placeholder: "uw@email.com",
        contact_form_message: "Uw Bericht",
        contact_form_message_placeholder: "Schrijf ons uw vraag...",
        contact_form_submit: "Bericht Verzenden",
        contact_form_note: "* We reageren binnen 24 uur",
        
        // Service cards additional
        service_repair_title: "Zwembad Voegwerk en Reparatie",
        service_repair_desc: "Specialisten in zwembadvoegwerk, kroonreparatie en scheuren dichten in Dénia. We voeren tegelplaatsing uit, complete lediging, installatie van zoutchlorering en pH, sondewisselingen, celwisselingen, injectorwisselingen, lekreparatie en motorstoringen.",
        service_repair_description: "We specialiseren ons in zwembadvoegwerk, kroonreparatie en scheurenoplossingen in Dénia en Marina Alta. Onze diensten omvatten tegelplaatsing, complete lediging, installatie van zoutchloreringssystemen en pH-controle, sondewisselingen, vervanging van cellen en elektrolysecellen, injectorwisselingen, lekreparatie en reparatie van zwembadmotorstoringen. We hebben gespecialiseerd personeel en eersteklas materialen om duurzame reparaties te garanderen.",
        
        // Urbanizaciones section
        urbanizations_title: "Oplossingen voor Urbanisaties",
        urbanizations_desc_1: "Bij Jardinería Pérez bieden we uitgebreide oplossingen voor urbanisaties in Dénia en Marina Alta, gespecialiseerd in onderhoud van groene gebieden, palm- en boomsnoei, tuinontwerp en -reiniging. Ons team van professionele tuinmannen garandeert efficiënte en duurzame zorg, inclusief installatie en onderhoud van automatische irrigatiesystemen om uw tuinen altijd groen te houden.",
        urbanizations_desc_2: "We bieden ook gespecialiseerde zwembaddiensten, van reiniging en onderhoud tot wateranalyse en -behandeling, om perfecte buitenruimtes te garanderen om het hele jaar van te genieten. Vertrouw op ons voor palmsnoei in Dénia en Marina Alta, ongediertebestrijding en bemesting van natuurlijk of kunstgras.",
        urbanizations_desc_3: "We hebben uitgebreide ervaring in urbanisatie-onderhoud en bieden een uitgebreide service die de esthetiek en functionaliteit van uw gemeenschappelijke ruimtes verbetert met oplossingen aangepast aan uw behoeften. Jardinería Pérez is uw bondgenoot voor een goed verzorgde, gezonde en duurzame buitenomgeving.",
        
        // Urbanization cards
        urban_planning_title: "Groene Planning",
        urban_planning_desc: "We ontwerpen duurzame ruimtes die de levenskwaliteit in urbanisaties verbeteren.",
        urban_irrigation_title: "Slimme Irrigatie",
        urban_irrigation_desc: "We implementeren geautomatiseerde irrigatiesystemen die het waterverbruik optimaliseren.",
        urban_maintenance_title: "Uitgebreid Onderhoud",
        urban_maintenance_desc: "Regelmatige schoonmaak-, snoei- en onderhoudsdiensten voor gemeenschappelijke ruimtes.",
        urban_pools_title: "Urbanisatie Zwembaden",
        urban_pools_desc: "Zorg, onderhoud en rehabilitatie van gemeenschappelijke zwembaden.",
        
        // Footer and cookies
        footer_copyright: "Deze website is ontworpen met ❤️ door VaporWeb Designs © · Alle rechten voorbehouden",
        cookie_text: "We gebruiken onze eigen cookies en die van derden om onze diensten te verbeteren. Als u doorgaat met browsen op deze pagina, accepteert u ons",
        cookie_policy: "cookiebeleid",
        
        // Gallery
        gallery_title: "Werkgalerij",
        gallery_subtitle: "Enkele van onze voltooide projecten",
        
        // Testimonials
        testimonials_title: "Wat onze klanten zeggen",
        testimonial_toggle: "Meer lezen",
        testimonial_toggle_less: "Minder lezen",
        
        // Contact
        contact_title: "Neem contact op",
        contact_subtitle: "Heeft u onze diensten nodig? Neem contact op en wij geven u een vrijblijvende offerte",
        contact_phone: "Telefoon",
        contact_email: "Email",
        contact_address: "Adres",
        contact_hours: "Openingstijden",
        contact_hours_text: "Maandag tot Vrijdag: 8:00 - 18:00",
        contact_cta: "Gratis Offerte Aanvragen",
        
        // Blog
        blog_title: "Tuinblog",
        blog_read_more: "Meer lezen",
        
        // Footer
        footer_rights: "© 2025 Jardinería Pérez. Alle rechten voorbehouden.",
        footer_legal: "Juridische Informatie",
        
        // Separadores parallax
        parallax_garden_title: "Groene ruimtes transformeren",
        parallax_garden_desc: "Specialisten in het creëren en onderhouden van unieke tuinen aan de Costa Blanca",
        parallax_pools_title: "Kristalheldere zwembaden het hele jaar",
        parallax_pools_desc: "Professioneel onderhoud en gespecialiseerde waterbehandeling",
        parallax_maintenance_title: "Professionele gereedschappen en ervaring",
        parallax_maintenance_desc: "Meer dan 15 jaar tuinonderhoud in Dénia en Marina Alta",
        parallax_services_title: "Ervaring en kwaliteit in elke service",
        parallax_services_desc: "Meer dan 15 jaar gespecialiseerd in uitgebreide tuin- en zwembadzorg",
        
        // Gallery section
        gallery_title_main: "Onze Projecten",
        gallery_subtitle_main: "Ontdek excellentie in elk project",
        gallery_description: "Verken onze galerij van uitgevoerde werken in tuinen en zwembaden in heel Marina Alta. Elke afbeelding vertelt het verhaal van ruimtes getransformeerd met passie en professionele ervaring.",
        
        // Footer additional
        footer_company_desc: "Specialisten in ontwerp en onderhoud van groene ruimtes sinds 2009",
        footer_services_title: "Diensten",
        footer_design: "Tuinontwerp",
        footer_maintenance: "Professioneel Onderhoud",
        footer_irrigation: "Irrigatiesystemen",
        footer_urbanizations: "Urbanisaties",
        footer_legal_title: "Juridisch",
        footer_privacy: "Privacybeleid",
        footer_terms: "Algemene Voorwaarden",
        footer_cookies: "Cookies",
        footer_contact_title: "Contact",
        
        // Meta descriptions para SEO
        meta_description: "🌿 Jardinería Pérez Dénia ⭐ Tuin- en zwembadonderhoud specialisten sinds 2009. Ontwerp, snoeien, automatische irrigatie en professionele reiniging. ✅ Gratis offerte ☎️ 658 64 51 02"
    }
};

// Sistema de gestión de idiomas
class LanguageManager {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.supportedLanguages = ['es', 'en', 'de', 'fr', 'nl'];
        this.languages = {
            'es': { name: 'Español', flag: 'flag-es' },
            'en': { name: 'English', flag: 'flag-gb' },
            'de': { name: 'Deutsch', flag: 'flag-de' },
            'fr': { name: 'Français', flag: 'flag-fr' },
            'nl': { name: 'Nederlands', flag: 'flag-nl' }
        };
        this.initialized = false;
        this.init();
    }
    
    detectLanguage() {
        // Prioridad: URL param > localStorage > navigator language > default español
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang && this.supportedLanguages && this.supportedLanguages.includes(urlLang)) {
            return urlLang;
        }
        
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.supportedLanguages && this.supportedLanguages.includes(savedLang)) {
            return savedLang;
        }
        
        const browserLang = navigator.language.slice(0, 2);
        if (this.supportedLanguages && this.supportedLanguages.includes(browserLang)) {
            return browserLang;
        }
        
        return 'es'; // idioma por defecto
    }
    
    init() {
        if (this.initialized) return;
        
        this.createLanguageSelector();
        this.loadLanguage(this.currentLanguage);
        this.attachEventListeners();
        this.initialized = true;
        
        console.log('LanguageManager initialized with language:', this.currentLanguage);
    }
    
    createLanguageSelector() {
        // Evitar duplicados
        const existingSelector = document.querySelector('#language-selector');
        if (existingSelector) {
            existingSelector.remove();
        }

        const selector = document.createElement('div');
        selector.id = 'language-selector';
        
        const currentLangData = this.languages[this.currentLanguage];
        selector.innerHTML = `
            <div class="lang-dropdown">
                <button class="lang-current" id="current-lang">
                    <span class="flag-icon ${currentLangData.flag}"></span>
                    <span class="lang-text">${currentLangData.name}</span>
                    <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div class="lang-options" id="lang-options">
                    ${this.supportedLanguages.map(lang => `
                        <div class="lang-option ${lang === this.currentLanguage ? 'active' : ''}" data-lang="${lang}">
                            <span class="flag-icon ${this.languages[lang].flag}"></span>
                            <span class="lang-text">${this.languages[lang].name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Insertar en el header/nav
        const nav = document.querySelector('nav.navbar ul.nav-links');
        if (nav) {
            const listItem = document.createElement('li');
            listItem.appendChild(selector);
            nav.appendChild(listItem);
        } else {
            // Fallback: añadir al body si no hay nav
            document.body.appendChild(selector);
        }
    }
    
    attachEventListeners() {
        // Usar setTimeout para asegurar que el DOM esté listo
        setTimeout(() => {
            const currentLang = document.getElementById('current-lang');
            const langOptions = document.getElementById('lang-options');
            
            if (currentLang && langOptions) {
                // Remover listeners existentes para evitar duplicados
                currentLang.removeEventListener('click', this.toggleDropdown);
                
                // Nuevo listener
                this.toggleDropdown = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    langOptions.classList.toggle('open');
                };
                
                currentLang.addEventListener('click', this.toggleDropdown);
                
                // Cerrar dropdown al hacer click fuera
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('#language-selector')) {
                        langOptions.classList.remove('open');
                    }
                });
                
                // Cambiar idioma - usar delegación de eventos
                langOptions.addEventListener('click', (e) => {
                    const langOption = e.target.closest('.lang-option');
                    if (langOption) {
                        e.preventDefault();
                        e.stopPropagation();
                        const newLang = langOption.dataset.lang;
                        console.log('Changing language to:', newLang);
                        this.changeLanguage(newLang);
                        langOptions.classList.remove('open');
                    }
                });
                
                console.log('Event listeners attached successfully');
            } else {
                console.error('Language selector elements not found');
            }
        }, 100);
    }
    
    changeLanguage(newLang) {
        console.log('changeLanguage called with:', newLang, 'current:', this.currentLanguage);
        
        if (this.supportedLanguages.includes(newLang) && newLang !== this.currentLanguage) {
            this.currentLanguage = newLang;
            localStorage.setItem('preferred-language', newLang);
            
            // Actualizar URL sin recargar
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.history.replaceState({}, '', url);
            
            this.loadLanguage(newLang);
            this.updateLanguageSelector();
            
            console.log('Language changed successfully to:', newLang);
        } else {
            console.log('Language change ignored:', newLang === this.currentLanguage ? 'same language' : 'unsupported language');
        }
    }
    
    updateLanguageSelector() {
        const currentLangBtn = document.getElementById('current-lang');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (currentLangBtn) {
            const currentLangData = this.languages[this.currentLanguage];
            currentLangBtn.innerHTML = `
                <span class="flag-icon ${currentLangData.flag}"></span>
                <span class="lang-text">${currentLangData.name}</span>
                <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
        }
        
        // Actualizar clases active
        langOptions.forEach(option => {
            const lang = option.dataset.lang;
            if (lang === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    loadLanguage(lang) {
        console.log('Loading language:', lang);
        const translation = translations[lang] || translations.es;
        
        // Añadir clase de carga
        document.body.classList.add('language-loading');
        
        // Actualizar elementos con atributo data-translate
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        console.log('Elements to translate:', elementsToTranslate.length);
        
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                // Preservar HTML interno si existe
                if (element.innerHTML.includes('<')) {
                    const htmlContent = element.innerHTML;
                    const textContent = element.textContent || element.innerText;
                    element.innerHTML = htmlContent.replace(textContent, translation[key]);
                } else {
                    element.textContent = translation[key];
                }
            } else {
                console.warn('Translation key not found:', key, 'for language:', lang);
            }
        });
        
        // Actualizar placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translation[key]) {
                element.placeholder = translation[key];
            }
        });
        
        // Actualizar títulos
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (translation[key]) {
                element.title = translation[key];
            }
        });
        
        // Actualizar meta tags
        this.updateMetaTags(lang);
        
        // Actualizar hreflang
        this.updateHrefLang(lang);
        
        // Remover clase de carga después de un pequeño retraso
        setTimeout(() => {
            document.body.classList.remove('language-loading');
            document.body.classList.add('language-loaded');
            console.log('Language loaded successfully:', lang);
        }, 100);
    }
    
    updateMetaTags(lang) {
        // Actualizar lang del html
        document.documentElement.lang = lang;
        
        // Actualizar meta description si existe traducción específica
        const metaDesc = document.querySelector('meta[name="description"]');
        const translation = translations[lang];
        
        if (metaDesc && translation.meta_description) {
            metaDesc.content = translation.meta_description;
        }
        
        // Actualizar title si tiene data-translate
        const titleElement = document.querySelector('title[data-translate]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-translate');
            if (translation[key]) {
                titleElement.textContent = translation[key];
            }
        }
    }
    
    updateHrefLang(lang) {
        // Remover hreflang existentes
        document.querySelectorAll('link[hreflang]').forEach(link => link.remove());
        
        // Añadir nuevos hreflang
        const head = document.head;
        this.supportedLanguages.forEach(supportedLang => {
            const link = document.createElement('link');
            link.rel = 'alternate';
            link.hreflang = supportedLang;
            link.href = `${window.location.origin}${window.location.pathname}?lang=${supportedLang}`;
            head.appendChild(link);
        });
        
        // Añadir x-default
        const defaultLink = document.createElement('link');
        defaultLink.rel = 'alternate';
        defaultLink.hreflang = 'x-default';
        defaultLink.href = `${window.location.origin}${window.location.pathname}`;
        head.appendChild(defaultLink);
    }
    
    // Método para obtener traducción por clave
    t(key) {
        const translation = translations[this.currentLanguage] || translations.es;
        return translation[key] || key;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Evitar inicialización múltiple
    if (window.langManager) {
        console.log('LanguageManager already exists');
        return;
    }
    
    console.log('Initializing LanguageManager...');
    window.langManager = new LanguageManager();
});
