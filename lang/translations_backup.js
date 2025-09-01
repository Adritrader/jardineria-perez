// Sistema de traducciones simplificado para evitar problemas de carga
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
        about_feature_1: "Técnicas de riego sostenibles",
        about_feature_2: "Diseños personalizados",
        about_feature_3: "Mantenimiento integral",
        about_feature_4: "Asesoramiento técnico gratuito",
        
        // Parallax
        parallax_garden_title: "Transformamos espacios verdes",
        parallax_garden_desc: "Especialistas en crear y mantener jardines únicos en la Costa Blanca",
        
        // Servicios
        services_title: "Nuestros Servicios",
        service_design_title: "Diseño de Jardines",
        service_design_description: "Creamos jardines únicos combinando funcionalidad y estética mediterránea. Nuestro servicio de diseño de jardines en la Marina Alta transforma tu espacio exterior en un entorno armonioso y natural, adaptado al clima de Dénia. Utilizamos plantas autóctonas, sistemas de riego eficientes y materiales sostenibles para crear espacios verdes que requieren mínimo mantenimiento y máximo impacto visual.",
        service_garden_title: "Mantenimiento de Jardines",
        service_garden_description: "Ofrecemos un servicio integral de mantenimiento de jardines en Dénia y alrededores, incluyendo corte de césped profesional, poda especializada, fertilización orgánica y control integrado de plagas. Adaptamos cada servicio a las necesidades específicas de tu espacio verde, desde jardines residenciales hasta zonas comunitarias y comerciales, garantizando un cuidado sostenible durante todo el año.",
        service_pruning_title: "Poda de Palmeras",
        service_pruning_description: "Expertos en poda de palmeras en Dénia y Marina Alta. Realizamos poda técnica especializada eliminando hojas secas, inflorescencias y frutos, manteniéndolas saludables y libres de plagas como el picudo rojo. Servicio seguro con equipos profesionales, respetando los ciclos naturales de crecimiento y siguiendo las normativas municipales para preservar la belleza y salud de estas emblemáticas especies mediterráneas.",
        service_pools_title: "Limpieza de Piscinas",
        service_cleaning_description: "Ofrecemos servicios profesionales de limpieza y mantenimiento de piscinas en Dénia. Eliminamos hojas, algas y residuos, realizamos instalación de cloro salino y control de pH automático, análisis completo del agua, cloración y depuración especializada. Mantenimiento preventivo de equipos, limpieza de filtros y sistemas, para garantizar una piscina cristalina, segura y lista para disfrutar todo el año.",
        service_irrigation_title: "Sistemas de Riego",
        service_irrigation_description: "Instalamos y mantenemos sistemas de riego automático de alta eficiencia que optimizan el consumo de agua y aseguran la salud de tus plantas. Tecnología de riego inteligente con sensores de humedad, programadores avanzados y riego por goteo localizado. Ideal para jardines residenciales, urbanizaciones y espacios comerciales en Dénia y alrededores, contribuyendo al ahorro hídrico y sostenibilidad ambiental.",
        service_repair_title: "Rejuntes y Reparación de Piscinas",
        service_repair_description: "Nos especializamos en rejuntes de piscinas, reparación de coronas y solución de grietas en Dénia y Marina Alta. Nuestros servicios incluyen colocación de gresite, vaciados completos, instalación de sistemas de cloro salino y control de pH, cambios de sondas, sustitución de células y células de electrólisis, cambio de inyectores, reparación de filtraciones y reparación de averías de motores de piscina.",
        
        // Secciones Parallax
        parallax_services_title: "Experiencia y calidad en cada servicio",
        parallax_services_desc: "Más de 15 años especializándose en el cuidado integral de jardines y piscinas",
        parallax_pools_title: "Piscinas cristalinas todo el año",
        parallax_pools_desc: "Mantenimiento profesional y tratamiento especializado del agua",
        parallax_maintenance_title: "Herramientas y experiencia profesional",
        parallax_maintenance_desc: "Más de 15 años cuidando jardines en Dénia y Marina Alta",
        
        // Urbanizaciones
        urbanizations_title: "Soluciones para Urbanizaciones",
        urbanizations_desc_1: "En Jardinería Pérez ofrecemos soluciones integrales para urbanizaciones en Dénia y la Marina Alta, especializándonos en el mantenimiento de áreas comunes, jardines y espacios verdes.",
        urbanizations_desc_2: "También brindamos servicios especializados en piscinas, desde la limpieza y mantenimiento hasta análisis y tratamiento del agua, garantizando espacios seguros y atractivos.",
        urbanizations_desc_3: "Contamos con amplia experiencia en el mantenimiento de urbanizaciones, ofreciendo un servicio integral que mejora la estética y funcionalidad de las zonas comunes.",
        urban_planning_title: "Planificación Verde",
        urban_planning_desc: "Diseñamos espacios sostenibles que mejoran la calidad de vida en urbanizaciones.",
        urban_irrigation_title: "Riego Inteligente",
        urban_irrigation_desc: "Implementamos sistemas de riego automatizados que optimizan el consumo de agua.",
        urban_maintenance_title: "Mantenimiento Integral",
        urban_maintenance_desc: "Servicios regulares de limpieza, poda y cuidado de zonas comunes.",
        urban_pools_title: "Piscinas en Urbanizaciones",
        urban_pools_desc: "Cuidado, mantenimiento y rehabilitación de piscinas comunitarias.",
        
        // Testimonios
        testimonial_1: "Magníficos profesionales. Serios y eficaces, trabajo con Miguel hace años y lo recomiendo sin duda. Conoce muy bien su oficio y no solo mantiene el jardín y la piscina perfectos, sino también diseñan y organizan los nuevos espacios con inteligencia y buen gusto.",
        testimonial_2: "Contenta con Miguel, buen jardinero... hace tiempo que viene a casa y la verdad que el jardín parece otro. Pendiente de todo, buena persona... todo perfecto. Lo recomiendo.",
        testimonial_3: "Un buen trabajador y muy responsable. Y un trato excelente.",
        testimonial_toggle: "Leer más",
        
        // Galería
        gallery_title: "Galería de Trabajos",
        gallery_subtitle: "Algunos de nuestros proyectos realizados",
        gallery_pool_modern_title: "Piscina Moderna",
        gallery_pool_modern_desc: "Diseño contemporáneo - Urbanización",
        gallery_pool_category: "Piscinas",
        gallery_garden_mediterranean_title: "Jardín Mediterráneo",
        gallery_garden_mediterranean_desc: "Diseño con plantas autóctonas",
        gallery_garden_category: "Jardines",
        gallery_equipment_title: "Equipo Profesional",
        gallery_equipment_desc: "Servicio a domicilio - Marina Alta",
        gallery_maintenance_category: "Mantenimiento",
        
        // Testimonios
        testimonials_title: "Lo que dicen nuestros clientes",
        
        // Contacto
        contact_title: "Contáctanos",
        contact_subtitle: "¿Necesitas un presupuesto? Contáctanos",
        contact_form_title: "Formulario de Contacto",
        contact_form_name: "Nombre Completo",
        contact_form_name_placeholder: "Tu nombre",
        contact_form_email: "Correo Electrónico",
        contact_form_email_placeholder: "tu@correo.com",
        contact_form_message: "Tu Mensaje",
        contact_form_message_placeholder: "Escríbenos tu consulta...",
        contact_form_submit: "Enviar Mensaje",
        contact_form_note: "* Responderemos en menos de 24 horas",
        contact_name: "Nombre",
        contact_phone: "Teléfono",
        contact_email: "Email",
        contact_service: "Servicio",
        contact_message: "Mensaje",
        contact_send: "Enviar Mensaje",
        contact_info_title: "Información de Contacto",
        contact_address: "Dirección",
        contact_phone_label: "Teléfono",
        contact_email_label: "Email",
        contact_hours: "Horario",
        
        // Footer
        footer_title: "Jardinería Pérez",
        footer_subtitle: "Tu socio de confianza en jardinería",
        footer_company_desc: "Especialistas en diseño y mantenimiento de espacios verdes desde 2009",
        footer_services_title: "Servicios",
        footer_design: "Diseño de Jardines",
        footer_maintenance: "Mantenimiento Profesional",
        footer_irrigation: "Sistemas de Riego",
        footer_urbanizations: "Urbanizaciones",
        footer_legal_title: "Legal",
        footer_contact_title: "Contacto",
        footer_copyright: "Esta web ha sido diseñada con ❤️ por profesionales",
        footer_description: "Especialistas en mantenimiento de jardines, poda de palmeras y limpieza de piscinas en Dénia y Marina Alta.",
        footer_services: "Servicios",
        footer_quick_links: "Enlaces Rápidos",
        footer_legal: "Legal",
        footer_contact_info: "Información de Contacto",
        footer_rights: "Todos los derechos reservados.",
        footer_privacy: "Política de Privacidad",
        footer_terms: "Términos y Condiciones",
        footer_cookies: "Política de Cookies",
        
        // Cookies
        cookie_text: "Usamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra",
        cookie_policy: "política de cookies"
    },
    en: {
        // Navegación
        nav_services: "Services",
        nav_gallery: "Gallery", 
        nav_testimonials: "Testimonials",
        nav_contact: "Contact",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Comprehensive garden and pool care all year round",
        hero_description: "Specialists in garden maintenance, pruning, cleaning and design of green spaces in Dénia and Marina Alta.",
        hero_cta: "Request Quote",
        
        // About section
        about_title: "About Us",
        about_description: "At Jardinería Pérez, we have over 15 years of experience offering professional gardening services in Dénia and throughout Marina Alta. Our team of experts specializes in garden maintenance, creating personalized green spaces and comprehensive care of landscaped areas. We use sustainable techniques and high-quality products to ensure healthy, beautiful and long-lasting gardens all year round. Trust us to bring life and color to your garden.",
        about_feature_1: "Sustainable irrigation techniques",
        about_feature_2: "Personalized designs",
        about_feature_3: "Comprehensive maintenance",
        about_feature_4: "Free technical advice",
        
        // Parallax
        parallax_garden_title: "We transform green spaces",
        parallax_garden_desc: "Specialists in creating and maintaining unique gardens on the Costa Blanca",
        
        // Servicios
        services_title: "Our Services",
        service_design_title: "Garden Design",
        service_design_description: "We create unique gardens combining functionality and Mediterranean aesthetics. Our garden design service in Marina Alta transforms your outdoor space into a harmonious and natural environment, adapted to Dénia's climate. We use native plants, efficient irrigation systems and sustainable materials to create green spaces that require minimal maintenance and maximum visual impact.",
        service_garden_title: "Garden Maintenance",
        service_garden_description: "We offer comprehensive garden maintenance service in Dénia and surroundings, including professional lawn mowing, specialized pruning, organic fertilization and integrated pest control. We adapt each service to the specific needs of your green space, from residential gardens to community and commercial areas, ensuring sustainable care throughout the year.",
        service_pruning_title: "Palm Tree Pruning",
        service_pruning_description: "Experts in palm tree pruning in Dénia and Marina Alta. We perform specialized technical pruning removing dry leaves, inflorescences and fruits, keeping them healthy and free from pests like the red weevil. Safe service with professional equipment, respecting natural growth cycles and following municipal regulations to preserve the beauty and health of these emblematic Mediterranean species.",
        service_pools_title: "Pool Cleaning",
        service_cleaning_description: "We offer professional pool cleaning and maintenance services in Dénia. We remove leaves, algae and debris, install saline chlorine and automatic pH control, complete water analysis, chlorination and specialized purification. Preventive equipment maintenance, filter and system cleaning, to guarantee a crystal-clear, safe pool ready to enjoy all year round.",
        service_irrigation_title: "Irrigation Systems",
        service_irrigation_description: "We install and maintain high-efficiency automatic irrigation systems that optimize water consumption and ensure plant health. Smart irrigation technology with humidity sensors, advanced programmers and localized drip irrigation. Ideal for residential gardens, urbanizations and commercial spaces in Dénia and surroundings, contributing to water savings and environmental sustainability.",
        service_repair_title: "Pool Grouting and Repair",
        service_repair_description: "We specialize in pool grouting, crown repair and crack solutions in Dénia and Marina Alta. Our services include tile installation, complete drainage, installation of saline chlorine systems and pH control, probe changes, cell and electrolysis cell replacement, injector changes, leak repair and pool motor breakdown repair.",
        
        // Secciones Parallax
        parallax_services_title: "Experience and quality in every service",
        parallax_services_desc: "Over 15 years specializing in comprehensive garden and pool care",
        parallax_pools_title: "Crystal clear pools all year round",
        parallax_pools_desc: "Professional maintenance and specialized water treatment",
        parallax_maintenance_title: "Professional tools and experience",
        parallax_maintenance_desc: "Over 15 years caring for gardens in Dénia and Marina Alta",
        
        // Urbanizaciones
        urbanizations_title: "Solutions for Urbanizations",
        urbanizations_desc_1: "At Jardinería Pérez we offer comprehensive solutions for urbanizations in Dénia and Marina Alta, specializing in the maintenance of common areas, gardens and green spaces.",
        urbanizations_desc_2: "We also provide specialized pool services, from cleaning and maintenance to water analysis and treatment, guaranteeing safe and attractive spaces.",
        urbanizations_desc_3: "We have extensive experience in urbanization maintenance, offering a comprehensive service that improves the aesthetics and functionality of common areas.",
        urban_planning_title: "Green Planning",
        urban_planning_desc: "We design sustainable spaces that improve quality of life in urbanizations.",
        urban_irrigation_title: "Smart Irrigation",
        urban_irrigation_desc: "We implement automated irrigation systems that optimize water consumption.",
        urban_maintenance_title: "Comprehensive Maintenance",
        urban_maintenance_desc: "Regular cleaning, pruning and care services for common areas.",
        urban_pools_title: "Urbanization Pools",
        urban_pools_desc: "Care, maintenance and rehabilitation of community pools.",
        
        // Testimonios
        testimonial_1: "Magnificent professionals. Serious and efficient, I've worked with Miguel for years and I recommend him without doubt. He knows his trade very well and not only maintains the garden and pool perfectly, but also designs and organizes new spaces with intelligence and good taste.",
        testimonial_2: "Happy with Miguel, good gardener... he's been coming to the house for a while and the truth is the garden looks different. Attentive to everything, good person... everything perfect. I recommend him.",
        testimonial_3: "A good worker and very responsible. And excellent treatment.",
        testimonial_toggle: "Read more",
        
        // Galería
        gallery_title: "Work Gallery",
        gallery_subtitle: "Some of our completed projects",
        gallery_pool_modern_title: "Modern Pool",
        gallery_pool_modern_desc: "Contemporary design - Urbanization",
        gallery_pool_category: "Pools",
        gallery_garden_mediterranean_title: "Mediterranean Garden",
        gallery_garden_mediterranean_desc: "Design with native plants",
        gallery_garden_category: "Gardens",
        gallery_equipment_title: "Professional Equipment",
        gallery_equipment_desc: "Home service - Marina Alta",
        gallery_maintenance_category: "Maintenance",
        
        // Testimonios
        testimonials_title: "What our clients say",
        
        // Contacto
        contact_title: "Contact Us",
        contact_subtitle: "Need a quote? Contact us",
        contact_form_title: "Contact Form",
        contact_form_name: "Full Name",
        contact_form_name_placeholder: "Your name",
        contact_form_email: "Email Address",
        contact_form_email_placeholder: "your@email.com",
        contact_form_message: "Your Message",
        contact_form_message_placeholder: "Write your inquiry...",
        contact_form_submit: "Send Message",
        contact_form_note: "* We will respond within 24 hours",
        contact_name: "Name",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_service: "Service",
        contact_message: "Message",
        contact_send: "Send Message",
        contact_info_title: "Contact Information",
        contact_address: "Address",
        contact_phone_label: "Phone",
        contact_email_label: "Email",
        contact_hours: "Hours",
        
        // Footer
        footer_title: "Jardinería Pérez",
        footer_subtitle: "Your trusted partner in gardening",
        footer_company_desc: "Specialists in design and maintenance of green spaces since 2009",
        footer_services_title: "Services",
        footer_design: "Garden Design",
        footer_maintenance: "Professional Maintenance",
        footer_irrigation: "Irrigation Systems",
        footer_urbanizations: "Urbanizations",
        footer_legal_title: "Legal",
        footer_contact_title: "Contact",
        footer_copyright: "This website has been designed with ❤️ by professionals",
        footer_description: "Specialists in garden maintenance, palm tree pruning and pool cleaning in Dénia and Marina Alta.",
        footer_services: "Services",
        footer_quick_links: "Quick Links",
        footer_legal: "Legal",
        footer_contact_info: "Contact Information",
        footer_rights: "All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms and Conditions",
        footer_cookies: "Cookie Policy",
        
        // Cookies
        cookie_text: "We use our own and third-party cookies to improve our services. If you continue browsing, we consider that you accept their use. You can get more information in our",
        cookie_policy: "cookie policy"
    },
    de: {
        // Navegación
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
        about_title: "Über uns",
        about_description: "Bei Jardinería Pérez haben wir über 15 Jahre Erfahrung in der Bereitstellung professioneller Gartenbaudienstleistungen in Dénia und in der gesamten Marina Alta. Unser Expertenteam spezialisiert sich auf Gartenpflege, die Schaffung personalisierter Grünflächen und die umfassende Pflege von Landschaftsbereichen. Wir verwenden nachhaltige Techniken und hochwertige Produkte, um gesunde, schöne und langlebige Gärten das ganze Jahr über zu gewährleisten. Vertrauen Sie uns, um Leben und Farbe in Ihren Garten zu bringen.",
        about_feature_1: "Nachhaltige Bewässerungstechniken",
        about_feature_2: "Personalisierte Designs",
        about_feature_3: "Umfassende Wartung",
        about_feature_4: "Kostenlose technische Beratung",
        
        // Parallax
        parallax_garden_title: "Wir verwandeln Grünflächen",
        parallax_garden_desc: "Spezialisten für die Schaffung und Pflege einzigartiger Gärten an der Costa Blanca",
        
        // Servicios
        services_title: "Unsere Dienstleistungen",
        service_design_title: "Gartengestaltung",
        service_design_description: "Wir schaffen einzigartige Gärten, die Funktionalität und mediterrane Ästhetik kombinieren. Unser Gartengestaltungsservice in Marina Alta verwandelt Ihren Außenbereich in eine harmonische und natürliche Umgebung, angepasst an das Klima von Dénia. Wir verwenden einheimische Pflanzen, effiziente Bewässerungssysteme und nachhaltige Materialien, um Grünflächen zu schaffen, die minimale Wartung und maximale visuelle Wirkung erfordern.",
        service_garden_title: "Gartenpflege",
        service_garden_description: "Wir bieten umfassende Gartenpflegedienste in Dénia und Umgebung, einschließlich professionellem Rasenmähen, spezialisiertem Beschneiden, organischer Düngung und integrierter Schädlingsbekämpfung. Wir passen jeden Service an die spezifischen Bedürfnisse Ihrer Grünfläche an, von Wohngärten bis hin zu Gemeinschafts- und Gewerbebereichen, und gewährleisten nachhaltige Pflege das ganze Jahr über.",
        service_pruning_title: "Palmenbeschneidung",
        service_pruning_description: "Experten für Palmenbeschneidung in Dénia und Marina Alta. Wir führen spezialisierte technische Beschneidung durch, entfernen trockene Blätter, Blütenstände und Früchte und halten sie gesund und frei von Schädlingen wie dem roten Rüsselkäfer. Sicherer Service mit professioneller Ausrüstung, unter Beachtung natürlicher Wachstumszyklen und unter Einhaltung kommunaler Vorschriften zum Erhalt der Schönheit und Gesundheit dieser emblematischen mediterranen Arten.",
        service_pools_title: "Poolreinigung",
        service_cleaning_description: "Wir bieten professionelle Poolreinigungs- und Wartungsdienste in Dénia. Wir entfernen Blätter, Algen und Ablagerungen, installieren Salzchlor und automatische pH-Kontrolle, komplette Wasseranalyse, Chlorierung und spezialisierte Reinigung. Präventive Gerätewartung, Filter- und Systemreinigung, um einen kristallklaren, sicheren Pool zu gewährleisten, der das ganze Jahr über genossen werden kann.",
        
        // Galería
        gallery_title: "Arbeitsgalerie",
        gallery_subtitle: "Einige unserer abgeschlossenen Projekte",
        
        // Testimonios
        testimonials_title: "Was unsere Kunden sagen",
        
        // Contacto
        contact_title: "Kontakt",
        contact_subtitle: "Benötigen Sie ein Angebot? Kontaktieren Sie uns",
        contact_name: "Name",
        contact_phone: "Telefon",
        contact_email: "E-Mail",
        contact_service: "Service",
        contact_message: "Nachricht",
        contact_send: "Nachricht senden",
        contact_info_title: "Kontaktinformationen",
        contact_address: "Adresse",
        contact_phone_label: "Telefon",
        contact_email_label: "E-Mail",
        contact_hours: "Öffnungszeiten",
        
        // Footer
        footer_title: "Jardinería Pérez",
        footer_subtitle: "Ihr vertrauensvoller Partner im Gartenbau",
        footer_description: "Spezialisten für Gartenpflege, Palmenbeschneidung und Poolreinigung in Dénia und Marina Alta.",
        footer_services: "Dienstleistungen",
        footer_quick_links: "Schnelle Links",
        footer_legal: "Rechtliches",
        footer_contact_info: "Kontaktinformationen",
        footer_rights: "Alle Rechte vorbehalten.",
        footer_privacy: "Datenschutzrichtlinie",
        footer_terms: "Geschäftsbedingungen",
        footer_cookies: "Cookie-Richtlinie"
    },
    fr: {
        // Navegación
        nav_services: "Services",
        nav_gallery: "Galerie", 
        nav_testimonials: "Témoignages",
        nav_contact: "Contact",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Soins complets de jardins et piscines toute l'année",
        hero_description: "Spécialistes en entretien de jardins, élagage, nettoyage et conception d'espaces verts à Dénia et Marina Alta.",
        hero_cta: "Demander un devis",
        
        // About section
        about_title: "À propos de nous",
        about_description: "Chez Jardinería Pérez, nous avons plus de 15 ans d'expérience offrant des services professionnels de jardinage à Dénia et dans toute la Marina Alta. Notre équipe d'experts se spécialise dans l'entretien de jardins, la création d'espaces verts personnalisés et les soins complets des zones paysagées. Nous utilisons des techniques durables et des produits de haute qualité pour garantir des jardins sains, beaux et durables toute l'année. Faites-nous confiance pour donner vie et couleur à votre jardin.",
        about_feature_1: "Techniques d'irrigation durables",
        about_feature_2: "Designs personnalisés",
        about_feature_3: "Maintenance complète",
        about_feature_4: "Conseils techniques gratuits",
        
        // Parallax
        parallax_garden_title: "Nous transformons les espaces verts",
        parallax_garden_desc: "Spécialistes en création et entretien de jardins uniques sur la Costa Blanca",
        
        // Servicios
        services_title: "Nos Services",
        service_design_title: "Conception de Jardins",
        service_design_description: "Nous créons des jardins uniques combinant fonctionnalité et esthétique méditerranéenne. Notre service de conception de jardins à Marina Alta transforme votre espace extérieur en un environnement harmonieux et naturel, adapté au climat de Dénia. Nous utilisons des plantes indigènes, des systèmes d'irrigation efficaces et des matériaux durables pour créer des espaces verts qui nécessitent un minimum d'entretien et un maximum d'impact visuel.",
        service_garden_title: "Entretien de Jardins",
        service_garden_description: "Nous offrons un service complet d'entretien de jardins à Dénia et environs, incluant la tonte professionnelle, l'élagage spécialisé, la fertilisation organique et le contrôle intégré des ravageurs. Nous adaptons chaque service aux besoins spécifiques de votre espace vert, des jardins résidentiels aux zones communautaires et commerciales, garantissant des soins durables toute l'année.",
        service_pruning_title: "Élagage de Palmiers",
        service_pruning_description: "Experts en élagage de palmiers à Dénia et Marina Alta. Nous effectuons un élagage technique spécialisé en supprimant les feuilles sèches, inflorescences et fruits, les maintenant en bonne santé et libres de ravageurs comme le charançon rouge. Service sûr avec équipement professionnel, respectant les cycles naturels de croissance et suivant les réglementations municipales pour préserver la beauté et la santé de ces espèces méditerranéennes emblématiques.",
        service_pools_title: "Nettoyage de Piscines",
        service_cleaning_description: "Nous offrons des services professionnels de nettoyage et entretien de piscines à Dénia. Nous éliminons les feuilles, algues et débris, installons le chlore salin et contrôle automatique du pH, analyse complète de l'eau, chloration et purification spécialisée. Maintenance préventive des équipements, nettoyage des filtres et systèmes, pour garantir une piscine cristalline, sûre et prête à être appréciée toute l'année.",
        
        // Galería
        gallery_title: "Galerie de Travaux",
        gallery_subtitle: "Quelques-uns de nos projets réalisés",
        
        // Testimonios
        testimonials_title: "Ce que disent nos clients",
        
        // Contacto
        contact_title: "Contact",
        contact_subtitle: "Besoin d'un devis ? Contactez-nous",
        contact_name: "Nom",
        contact_phone: "Téléphone",
        contact_email: "Email",
        contact_service: "Service",
        contact_message: "Message",
        contact_send: "Envoyer le message",
        contact_info_title: "Informations de contact",
        contact_address: "Adresse",
        contact_phone_label: "Téléphone",
        contact_email_label: "Email",
        contact_hours: "Horaires",
        
        // Footer
        footer_title: "Jardinería Pérez",
        footer_subtitle: "Votre partenaire de confiance en jardinage",
        footer_description: "Spécialistes en entretien de jardins, élagage de palmiers et nettoyage de piscines à Dénia et Marina Alta.",
        footer_services: "Services",
        footer_quick_links: "Liens rapides",
        footer_legal: "Légal",
        footer_contact_info: "Informations de contact",
        footer_rights: "Tous droits réservés.",
        footer_privacy: "Politique de confidentialité",
        footer_terms: "Termes et conditions",
        footer_cookies: "Politique de cookies"
    },
    nl: {
        // Navegación
        nav_services: "Diensten",
        nav_gallery: "Galerij", 
        nav_testimonials: "Getuigenissen",
        nav_contact: "Contact",
        nav_blog: "Blog",
        
        // Hero Section
        hero_title: "Jardinería Pérez",
        hero_subtitle: "Uitgebreide tuin- en zwembadzorg het hele jaar door",
        hero_description: "Specialisten in tuinonderhoud, snoeien, schoonmaken en ontwerpen van groene ruimtes in Dénia en Marina Alta.",
        hero_cta: "Offerte aanvragen",
        
        // About section
        about_title: "Over ons",
        about_description: "Bij Jardinería Pérez hebben we meer dan 15 jaar ervaring in het aanbieden van professionele tuinierdiensten in Dénia en in heel Marina Alta. Ons team van experts specialiseert zich in tuinonderhoud, het creëren van gepersonaliseerde groene ruimtes en uitgebreide zorg voor aangelegde gebieden. We gebruiken duurzame technieken en hoogwaardige producten om gezonde, mooie en duurzame tuinen het hele jaar door te garanderen. Vertrouw op ons om leven en kleur aan uw tuin te geven.",
        about_feature_1: "Duurzame irrigatietechnieken",
        about_feature_2: "Gepersonaliseerde ontwerpen",
        about_feature_3: "Uitgebreid onderhoud",
        about_feature_4: "Gratis technisch advies",
        
        // Parallax
        parallax_garden_title: "We transformeren groene ruimtes",
        parallax_garden_desc: "Specialisten in het creëren en onderhouden van unieke tuinen aan de Costa Blanca",
        
        // Servicios
        services_title: "Onze Diensten",
        service_design_title: "Tuinontwerp",
        service_design_description: "We creëren unieke tuinen die functionaliteit en mediterrane esthetiek combineren. Onze tuinontwerpdienst in Marina Alta transformeert uw buitenruimte in een harmonieuze en natuurlijke omgeving, aangepast aan het klimaat van Dénia. We gebruiken inheemse planten, efficiënte irrigatiesystemen en duurzame materialen om groene ruimtes te creëren die minimaal onderhoud en maximale visuele impact vereisen.",
        service_garden_title: "Tuinonderhoud",
        service_garden_description: "We bieden uitgebreide tuinonderhoudsdiensten in Dénia en omgeving, inclusief professioneel gras maaien, gespecialiseerd snoeien, organische bemesting en geïntegreerde plaagbestrijding. We passen elke dienst aan de specifieke behoeften van uw groene ruimte aan, van residentiële tuinen tot gemeenschappelijke en commerciële gebieden, waarbij we duurzame zorg het hele jaar door garanderen.",
        service_pruning_title: "Palmbomen snoeien",
        service_pruning_description: "Experts in het snoeien van palmbomen in Dénia en Marina Alta. We voeren gespecialiseerde technische snoei uit door droge bladeren, bloeiwijzen en vruchten te verwijderen, ze gezond te houden en vrij van plagen zoals de rode snuitkever. Veilige service met professionele apparatuur, waarbij natuurlijke groeicycli worden gerespecteerd en gemeentelijke regelgeving wordt gevolgd om de schoonheid en gezondheid van deze emblematische mediterrane soorten te behouden.",
        service_pools_title: "Zwembadreiniging",
        service_cleaning_description: "We bieden professionele zwembadreiniging en onderhoudsdiensten in Dénia. We verwijderen bladeren, algen en puin, installeren zoutchloor en automatische pH-controle, complete wateranalyse, chlorering en gespecialiseerde zuivering. Preventief onderhoud van apparatuur, reiniging van filters en systemen, om een kristalhelder, veilig zwembad te garanderen dat het hele jaar door kan worden genoten.",
        
        // Galería
        gallery_title: "Werkgalerij",
        gallery_subtitle: "Enkele van onze voltooide projecten",
        
        // Testimonios
        testimonials_title: "Wat onze klanten zeggen",
        
        // Contacto
        contact_title: "Contact",
        contact_subtitle: "Heeft u een offerte nodig? Neem contact met ons op",
        contact_name: "Naam",
        contact_phone: "Telefoon",
        contact_email: "Email",
        contact_service: "Service",
        contact_message: "Bericht",
        contact_send: "Bericht verzenden",
        contact_info_title: "Contactinformatie",
        contact_address: "Adres",
        contact_phone_label: "Telefoon",
        contact_email_label: "Email",
        contact_hours: "Openingstijden",
        
        // Footer
        footer_title: "Jardinería Pérez",
        footer_subtitle: "Uw vertrouwde partner in tuinieren",
        footer_description: "Specialisten in tuinonderhoud, palmbomen snoeien en zwembadreiniging in Dénia en Marina Alta.",
        footer_services: "Diensten",
        footer_quick_links: "Snelle links",
        footer_legal: "Juridisch",
        footer_contact_info: "Contactinformatie",
        footer_rights: "Alle rechten voorbehouden.",
        footer_privacy: "Privacybeleid",
        footer_terms: "Voorwaarden",
        footer_cookies: "Cookiebeleid"
    }
};

// Sistema de gestión de idiomas simplificado
class SimpleLanguageManager {
    constructor() {
        this.currentLanguage = 'es';
        this.initialize();
    }

    initialize() {
        console.log('Initializing language system...');
        // Cargar idioma preferido o español por defecto
        const savedLang = localStorage.getItem('preferred-language') || 'es';
        this.loadLanguage(savedLang);
        this.setupEventListeners();
        
        // Remover clase de carga después de un breve delay
        setTimeout(() => {
            document.body.classList.remove('language-loading');
            document.body.classList.add('language-loaded');
            console.log('Language system initialized successfully');
        }, 100);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        // Event listener para el selector de idiomas
        document.addEventListener('click', (e) => {
            // Selector de idiomas con estructura de dropdown
            if (e.target.closest('.lang-option[data-lang]')) {
                e.preventDefault();
                const lang = e.target.closest('.lang-option[data-lang]').getAttribute('data-lang');
                console.log('Language option clicked:', lang);
                this.changeLanguage(lang);
            }
            
            // Toggle dropdown del selector de idiomas
            if (e.target.closest('.lang-current')) {
                e.preventDefault();
                console.log('Language dropdown toggled');
                const dropdown = document.querySelector('.lang-dropdown');
                const options = document.querySelector('.lang-options');
                if (dropdown && options) {
                    dropdown.classList.toggle('open');
                    options.classList.toggle('open');
                }
            }
            
            // Cerrar dropdown si se hace click fuera
            if (!e.target.closest('#language-selector')) {
                const dropdown = document.querySelector('.lang-dropdown');
                const options = document.querySelector('.lang-options');
                if (dropdown && options && options.classList.contains('open')) {
                    dropdown.classList.remove('open');
                    options.classList.remove('open');
                }
            }
        });
        console.log('Event listeners configured');
    }

    changeLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('preferred-language', lang);
            this.loadLanguage(lang);
            this.updateLanguageSelector(lang);
        }
    }

    loadLanguage(lang) {
        const langData = translations[lang] || translations['es'];
        
        // Traducir todos los elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = langData[key];
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        this.currentLanguage = lang;
    }

    updateLanguageSelector(selectedLang) {
        // Actualizar el selector de idiomas si existe
        const currentLangText = document.querySelector('#current-lang-text');
        const currentFlag = document.querySelector('#current-flag');
        
        if (currentLangText) {
            const langNames = {
                'es': 'ES',
                'en': 'EN',
                'de': 'DE',
                'fr': 'FR',
                'nl': 'NL'
            };
            currentLangText.textContent = langNames[selectedLang] || 'ES';
        }
        
        if (currentFlag) {
            // Actualizar la bandera
            currentFlag.className = 'flag-icon';
            const flagClasses = {
                'es': 'flag-es',
                'en': 'flag-gb',
                'de': 'flag-de',
                'fr': 'flag-fr',
                'nl': 'flag-nl'
            };
            currentFlag.classList.add(flagClasses[selectedLang] || 'flag-es');
        }
        
        // Cerrar el dropdown después de seleccionar
        const dropdown = document.querySelector('.lang-dropdown');
        const options = document.querySelector('.lang-options');
        if (dropdown && options) {
            dropdown.classList.remove('open');
            options.classList.remove('open');
        }
    }
}

// Inicialización automática cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase de carga temporalmente
    document.body.classList.add('language-loading');
    
    // Crear instancia del gestor de idiomas
    window.langManager = new SimpleLanguageManager();
});

// Funciones globales para compatibilidad
window.changeLanguage = function(lang) {
    console.log('Global changeLanguage called with:', lang);
    if (window.langManager) {
        window.langManager.changeLanguage(lang);
    }
};

window.initLanguageSystem = function() {
    if (!window.langManager) {
        window.langManager = new SimpleLanguageManager();
    }
};

// Función de debug para probar cambio de idioma
window.testLanguageChange = function(lang) {
    console.log('Testing language change to:', lang);
    if (window.langManager) {
        window.langManager.changeLanguage(lang);
    } else {
        console.log('Language manager not initialized');
    }
};
