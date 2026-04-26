/* ==========================================
   SMART SEARCH ENGINE ON PAGE
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const btnBuscar = document.getElementById('btn-buscar'); 

    if (searchInput && btnBuscar) {
        const diccionarioSecciones = {
            'home': 'hero', 'inicio': 'hero',
            'description': 'description', 'descripcion': 'description', 'startup': 'description',
            'goals': 'goals', 'objetivos': 'goals', 'mission': 'goals',
            'pricing': 'service', 'precios': 'service', 'planes': 'service',
            'impact': 'reviews', 'testimonios': 'reviews', 'reviews': 'reviews',
            'iot': 'device', 'sistemas': 'device', 'smartwatch': 'device',
            'contact': 'contact', 'contacto': 'contact', 'support': 'contact'
        };

        const realizarBusqueda = () => {
            const termino = searchInput.value.toLowerCase().trim();
            if (termino === '') return; 
            let seccionEncontrada = null;
            for (const [clave, idSeccion] of Object.entries(diccionarioSecciones)) {
                if (termino.includes(clave)) {
                    seccionEncontrada = document.getElementById(idSeccion);
                    break; 
                }
            }
            if (seccionEncontrada) {
                seccionEncontrada.scrollIntoView({ behavior: 'smooth' });
                searchInput.value = ''; 
            } else {
                alert(`No results found for "${termino}".`);
            }
        };

        btnBuscar.addEventListener('click', realizarBusqueda);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); realizarBusqueda(); }
        });
    }
});

/* ==========================================
   TRANSLATION SYSTEM (i18n)
   ========================================== */
const translations = {
    es: {
        nav_tagline: "Monitoreo inteligente para un bienestar seguro",
        nav_home: "Inicio", nav_desc: "Descripción", nav_goals: "Objetivos", 
        nav_plans: "Planes", nav_reviews: "Testimonios", nav_iot: "Sistemas IoT",
        nav_support: "Soporte", nav_login: "Únete",
        
        hero_badge: "La Salud Importa",
        hero_title: "Protegiendo a quienes nos <span class='highlight'>protegen.</span>",
        hero_subtitle: "El primer sistema de monitoreo de estrés y burnout en tiempo real para profesionales de la salud.",
        
        desc_title: "Descripción de la Start-Up",
        desc_text1: "SyncedHealth es una startup conformada por estudiantes de la facultad de ingeniería de la Universidad Peruana de Ciencias Aplicadas (UPC). La compañía nace con el objetivo de mejorar y optimizar el sistema de salud mediante una correcta gestión de los horarios de trabajo del personal médico.",
        desc_text2: "A través de la integración de dispositivos IoT avanzados, monitoreamos biomarcadores críticos como los niveles de cortisol y la variabilidad de la frecuencia cardíaca para prevenir el agotamiento profesional (burnout), garantizando la seguridad del paciente.",
        
        goals_title: "Nuestros Objetivos",
        goals_text: "La misión de SyncedHealth es salvaguardar el bienestar del personal sanitario, sustituyendo la fatiga crónica por un monitoreo preventivo basado en datos reales. Aspiramos a ser el estándar global en el monitoreo de la salud ocupacional médica.",
        
        plans_title: "Planes de Bienestar",
        plans_subtitle: "Elige el plan que mejor se adapte a tu clínica o necesidad personal.",
        plan_free_name: "Plan Residente", plan_free_price: "S/ 19 <span>/mes</span>", plan_free_desc: "Monitoreo individual para estudiantes y residentes.",
        plan_free_li1: "1 Wearable CortiSense", plan_free_li2: "Cortisol/HRV en tiempo real", plan_free_li3: "App Básica de Bienestar",
        plan_ent_name: "Plan Hospitalario", plan_ent_price: "A Medida", plan_ent_desc: "Gestión completa para hospitales y equipos.",
        plan_ent_li1: "Wearables Ilimitados", plan_ent_li2: "Dashboard de Riesgos", plan_ent_li3: "Soporte Clínico 24/7",
        
        reviews_title: "Lo que dicen nuestros usuarios:",
        review_1: '"La precisión de los wearables de SyncedHealth es increíble. Conocer mis niveles de estrés en tiempo real me ayudó a evitar el burnout total durante mis guardias."',
        review_author1: "— Dr. Ricardo M., Cirujano de Emergencias",
        review_2: '"Poder monitorear la fatiga de nuestro equipo ha reducido los errores clínicos. Ahora gestionamos los turnos con datos científicos, no solo con intuición."',
        review_author2: "— Elena S., Directora de Hospital",
        review_3: '"Implementamos los smartwatches en toda la UCI. El dashboard nos dice exactamente quién necesita un descanso obligatorio antes de un procedimiento crítico."',
        review_author3: "— Jorge L., Administrador de RR.HH.",
        
        device_title: "Sistemas I.O.T. de SyncedHealth",
        device_subtitle: "Wearables Avanzados a tu alcance",
        
        footer_desc: "El primer sistema de monitoreo de estrés y burnout en tiempo real para profesionales de la salud.", 
        footer_contact: "Contáctanos", 
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_tagline: "Intelligent monitoring for safe well-being",
        nav_home: "Home", nav_desc: "Description", nav_goals: "Goals", 
        nav_plans: "Pricing", nav_reviews: "Impact", nav_iot: "IoT Systems",
        nav_support: "Support", nav_login: "Join Us",
        
        hero_badge: "Health Matters",
        hero_title: "Protecting those who <span class='highlight'>protect us.</span>",
        hero_subtitle: "The first real-time stress and burnout monitoring system for healthcare professionals.",
        
        desc_title: "Start-Up Description",
        desc_text1: "SyncedHealth is a health-tech startup founded by engineering students from the Universidad Peruana de Ciencias Aplicadas (UPC). We were born with the objective of improving and optimizing the healthcare system through proper management of medical staff work schedules.",
        desc_text2: "Through the integration of advanced IoT devices, we monitor critical biomarkers such as cortisol levels and heart rate variability (HRV) to prevent professional burnout. This ensures better performance during working hours and guarantees patient safety.",
        
        goals_title: "Our Goals",
        goals_text: "Our mission is to safeguard healthcare workers' well-being by replacing chronic fatigue with data-driven preventive monitoring. We envision becoming the global standard in occupational health monitoring, eradicating chronic stress in medical personnel.",
        
        plans_title: "Wellness Plans",
        plans_subtitle: "Choose the plan that best fits your medical facility or personal needs.",
        plan_free_name: "Resident Plan", plan_free_price: "S/ 19 <span>/mo</span>", plan_free_desc: "Individual monitoring for medical students and residents.",
        plan_free_li1: "1 CortiSense Wearable", plan_free_li2: "Real-time Cortisol/HRV", plan_free_li3: "Basic Wellness App",
        plan_ent_name: "Hospital Enterprise", plan_ent_price: "Custom", plan_ent_desc: "Full management for hospitals and clinical teams.",
        plan_ent_li1: "Unlimited Wearables", plan_ent_li2: "Admin Risk Dashboard", plan_ent_li3: "24/7 Clinical Support",
        
        reviews_title: "What our clients say:",
        review_1: '"The precision of SyncedHealth\'s wearables is incredible. Knowing my stress levels in real-time helped me avoid total burnout during my shifts."',
        review_author1: "— Dr. Ricardo M., ER Surgeon",
        review_2: '"Being able to monitor our medical team\'s fatigue has reduced clinical errors. We now manage shifts with scientific data, not just intuition."',
        review_author2: "— Elena S., Hospital Director",
        review_3: '"We implemented the smartwatches across the ICU. The dashboard tells us exactly who needs a mandatory break before a critical procedure."',
        review_author3: "— Jorge L., HR Administrator",
        
        device_title: "SyncedHealth I.O.T. Systems",
        device_subtitle: "Advanced Wearables at your fingertips",
        
        footer_desc: "The first real-time stress and burnout monitoring system for healthcare professionals.", 
        footer_contact: "Contact Us", 
        footer_rights: "All Rights Reserved."
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = currentLanguage === 'en' ? "Search insights or features" : "Buscar funcionalidad o dato";
    document.getElementById('lang-text').innerText = currentLanguage === 'en' ? 'ES' : 'EN';
}