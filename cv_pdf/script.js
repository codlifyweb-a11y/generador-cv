// Default CV state loaded directly from the provided template image
let cvData = {
  name: "Esperanza Martinez",
  title: "Especialista en Marketplace | Análisis de Ventas | Optimización",
  location: "México",
  phone: "55 0000 0000",
  email: "contacto@correo.com",
  profile:
    "Profesional con experiencia en administración y operación de canales de marketplace, gestión de inventarios y análisis de ventas. Gestión operativa de promociones estratégicas y generación de reportes clave para apoyar la toma de decisiones comerciales. HÁbil en el manejo de herramientas como Excel, SAE y portales de clientes.",
  experiences: [
    {
      id: 1,
      company: "Le Creuset de México",
      desc: "Importación y Venta de Productos de Cocina Francesa Premium",
      role: "Asistente de Ventas",
      period: "Abril 2022 – Actualmente",
      bullets: [
        "Administración y operación de canales de Marketplace (Costco, Liverpool y Amazon Vendor Central) desde la solicitud hasta la entrega del pedido, garantizando precisión en el proceso y satisfacción del cliente.",
        "Gestión de órdenes en Amazon Vendor Central, logrando ventas de $200,000 a $300,000 MXN mediante la optimización del catálogo, sin campañas publicitarias.",
        "Gestión de Liverpool Marketplace, generando ventas de $50,000 a $100,000 MXN y fortaleciendo la marca.",
        "Análisis de ventas quincenales para 13 tiendas de Palacio de Hierro y mensuales para 3. Incremento de ventas en Costco Marketplace hasta $500,000 MXN en Buen Fin mediante estrategias promocionales.",
        "Generación de $200,000 a $300,000 MXN en Amazon Vendor Central, optimizando la presencia en el catálogo sin campañas publicitarias.",
      ],
    },
    {
      id: 2,
      company: "Kavak México",
      desc: "Compra y Venta de Autos Seminuevos",
      role: "Atención al Cliente",
      period: "Noviembre 2020 – Abril 2022",
      bullets: [
        "Atención y asesoramiento a clientes en el stand de Kavak ubicado en el Centro Comercial Patio Tlalpan, CDMX, orientándolos sobre los servicios de la marca.",
        "Captación de clientes orgánicos para showroom y oficinas, logrando generar interés en la compra y venta de vehículos.",
        "Resolución de dudas sobre planes de financiamiento, brindando información clara para la toma de decisiones.",
      ],
    },
  ],
  techSkills:
    "Análisis de datos | Generación de reportes de ventas | Gestión de inventarios | Administración de promociones en Marketplace",
  tools:
    "Excel | SAE | Portales de clientes (Amazon Vendor Central, Liverpool, Costco) | Photoshop",
  languages: "",
  education: [
    {
      id: 1,
      degree: "Bachillerato Tecnológico en Diseño Arquitectónico",
      period: "2001 - 2004",
    },
  ],
  courses: [
    {
      id: 1,
      title:
        "Análisis y presentación de datos con Power BI & DAX | AMAT | Abril - Junio 2023",
    },
    {
      id: 2,
      title: "Curso de Excel Avanzado | AMAT | Septiembre - Diciembre 2022",
    },
  ],
};

function init() {
  loadSavedSections();
  loadFormData();
  updateCV();
}

function loadFormData() {
  document.getElementById("inputName").value = cvData.name;
  document.getElementById("inputTitle").value = cvData.title;
  document.getElementById("inputLocation").value = cvData.location;
  document.getElementById("inputPhone").value = cvData.phone;
  document.getElementById("inputEmail").value = cvData.email;
  document.getElementById("inputProfile").value = cvData.profile;
  document.getElementById("inputTechSkills").value = cvData.techSkills;
  document.getElementById("inputTools").value = cvData.tools;
  document.getElementById("inputLanguages").value = cvData.languages;

  renderExperienceForm();
  renderEducationForm();
  renderCoursesForm();
}

// Render Experience form inputs
function renderExperienceForm() {
  const container = document.getElementById("experienceList");
  container.innerHTML = "";

  cvData.experiences.forEach((exp) => {
    const item = document.createElement("div");
    item.className =
      "p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 relative group";
    item.innerHTML = `
                    <button onclick="removeExperience(${exp.id})" class="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xs font-semibold flex items-center gap-1">
                        <i class="fa-solid fa-trash-can"></i> Eliminar
                    </button>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pr-16">
                        <div>
                            <label class="block text-[11px] font-semibold text-slate-600 mb-0.5">Empresa</label>
                            <input type="text" value="${escapeHtml(exp.company)}" oninput="updateExperience(${exp.id}, 'company', this.value)"
                                class="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-sky-500">
                        </div>
                        <div>
                            <label class="block text-[11px] font-semibold text-slate-600 mb-0.5">Descripción de la Empresa (Opcional)</label>
                            <input type="text" value="${escapeHtml(exp.desc)}" oninput="updateExperience(${exp.id}, 'desc', this.value)" placeholder="ej. Venta de productos..."
                                class="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-sky-500">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                            <label class="block text-[11px] font-semibold text-slate-600 mb-0.5">Cargo / Puesto</label>
                            <input type="text" value="${escapeHtml(exp.role)}" oninput="updateExperience(${exp.id}, 'role', this.value)"
                                class="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-sky-500">
                        </div>
                        <div>
                            <label class="block text-[11px] font-semibold text-slate-600 mb-0.5">Periodo (Inicio - Fin)</label>
                            <input type="text" value="${escapeHtml(exp.period)}" oninput="updateExperience(${exp.id}, 'period', this.value)"
                                class="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-sky-500">
                        </div>
                    </div>
                    <div>
                        <label class="block text-[11px] font-semibold text-slate-600 mb-0.5">Logros y Responsabilidades (1 por línea)</label>
                        <textarea rows="4" oninput="updateExperienceBullets(${exp.id}, this.value)" placeholder="Escribe cada logro en una línea separada..."
                            class="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-sky-500">${escapeHtml(exp.bullets.join("\n"))}</textarea>
                    </div>
                `;
    container.appendChild(item);
  });
}

function addExperience() {
  const newId = Date.now();
  cvData.experiences.push({
    id: newId,
    company: "Nombre de la Empresa",
    desc: "",
    role: "Nombre del Cargo",
    period: "Mes 202X - Actualmente",
    bullets: ["Descripción de logro o función desempeñada."],
  });
  renderExperienceForm();
  updateCV();
}

function removeExperience(id) {
  cvData.experiences = cvData.experiences.filter((e) => e.id !== id);
  renderExperienceForm();
  updateCV();
}

function updateExperience(id, field, value) {
  const exp = cvData.experiences.find((e) => e.id === id);
  if (exp) {
    exp[field] = value;
    updateCV();
  }
}

function updateExperienceBullets(id, value) {
  const exp = cvData.experiences.find((e) => e.id === id);
  if (exp) {
    exp.bullets = value.split("\n").filter((b) => b.trim() !== "");
    updateCV();
  }
}

// Render Education form
function renderEducationForm() {
  const container = document.getElementById("educationList");
  container.innerHTML = "";
  cvData.education.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "flex items-center gap-2";
    item.innerHTML = `
                    <input type="text" value="${escapeHtml(edu.degree)}" oninput="updateEducation(${edu.id}, 'degree', this.value)" placeholder="Título o Bachillerato" 
                        class="flex-1 text-xs p-2 border border-slate-300 rounded">
                    <input type="text" value="${escapeHtml(edu.period)}" oninput="updateEducation(${edu.id}, 'period', this.value)" placeholder="Año / Periodo" 
                        class="w-28 text-xs p-2 border border-slate-300 rounded">
                    <button onclick="removeEducation(${edu.id})" class="text-red-500 hover:text-red-700 p-2">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                `;
    container.appendChild(item);
  });
}

function addEducation() {
  cvData.education.push({
    id: Date.now(),
    degree: "Carrera / Título Académico",
    period: "20XX - 20XX",
  });
  renderEducationForm();
  updateCV();
}

function removeEducation(id) {
  cvData.education = cvData.education.filter((e) => e.id !== id);
  renderEducationForm();
  updateCV();
}

function updateEducation(id, field, value) {
  const edu = cvData.education.find((e) => e.id === id);
  if (edu) {
    edu[field] = value;
    updateCV();
  }
}

// Render Courses form
function renderCoursesForm() {
  const container = document.getElementById("coursesList");
  container.innerHTML = "";
  cvData.courses.forEach((c) => {
    const item = document.createElement("div");
    item.className = "flex items-center gap-2";
    item.innerHTML = `
                    <input type="text" value="${escapeHtml(c.title)}" oninput="updateCourse(${c.id}, this.value)" placeholder="Nombre del curso | Institución | Fecha" 
                        class="flex-1 text-xs p-2 border border-slate-300 rounded">
                    <button onclick="removeCourse(${c.id})" class="text-red-500 hover:text-red-700 p-2">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                `;
    container.appendChild(item);
  });
}

function addCourse() {
  cvData.courses.push({
    id: Date.now(),
    title: "Nombre del Curso o Taller | Institución | Periodo",
  });
  renderCoursesForm();
  updateCV();
}

function removeCourse(id) {
  cvData.courses = cvData.courses.filter((c) => c.id !== id);
  renderCoursesForm();
  updateCV();
}

function updateCourse(id, value) {
  const course = cvData.courses.find((c) => c.id === id);
  if (course) {
    course.title = value;
    updateCV();
  }
}

function updateCV() {
  // Read main values
  cvData.name = document.getElementById("inputName").value;
  cvData.title = document.getElementById("inputTitle").value;
  cvData.location = document.getElementById("inputLocation").value;
  cvData.phone = document.getElementById("inputPhone").value;
  cvData.email = document.getElementById("inputEmail").value;
  cvData.profile = document.getElementById("inputProfile").value;
  cvData.techSkills = document.getElementById("inputTechSkills").value;
  cvData.tools = document.getElementById("inputTools").value;
  cvData.languages = document.getElementById("inputLanguages").value;

  // Render Preview Header
  document.getElementById("previewName").innerText = cvData.name || "Tu Nombre";
  document.getElementById("previewTitle").innerText =
    cvData.title || "Tu Titular Profesional";

  // Format contact details
  const contactArray = [];
  if (cvData.location) contactArray.push(cvData.location);
  if (cvData.phone) contactArray.push(cvData.phone);
  if (cvData.email) contactArray.push(cvData.email);
  document.getElementById("previewContact").innerHTML = contactArray
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join(" • ");

  // Profile
  document.getElementById("previewProfile").innerText = cvData.profile;

  // Render Preview Experiences
  const expContainer = document.getElementById("previewExperience");
  expContainer.innerHTML = "";
  cvData.experiences.forEach((exp) => {
    const item = document.createElement("div");
    item.className = "mb-3";

    let bulletsHTML = exp.bullets
      .map((b) => `<li class="pl-1">${escapeHtml(b)}</li>`)
      .join("");

    item.innerHTML = `
                    <div class="mb-1">
                        <span class="font-bold text-slate-900 text-xs">${escapeHtml(exp.company)}</span>
                        ${exp.desc ? `<span class="text-xs text-slate-700 font-normal"> (${escapeHtml(exp.desc)})</span>` : ""}
                    </div>
                    <div class="font-bold text-slate-800 text-xs mb-1.5">
                        ${escapeHtml(exp.role)} | <span class="font-normal">${escapeHtml(exp.period)}</span>
                    </div>
                    <ul class="list-disc pl-4 text-xs text-slate-700 space-y-1 text-justify leading-snug">
                        ${bulletsHTML}
                    </ul>
                `;
    expContainer.appendChild(item);
  });

  // Competencias
  document.getElementById("previewTechSkills").innerText = cvData.techSkills;
  document.getElementById("previewTools").innerText = cvData.tools;

  const langContainer = document.getElementById("previewLanguagesContainer");
  if (cvData.languages.trim() !== "") {
    langContainer.style.display = "list-item";
    document.getElementById("previewLanguages").innerText = cvData.languages;
  } else {
    langContainer.style.display = "none";
  }

  // Render Educación
  const eduContainer = document.getElementById("previewEducation");
  eduContainer.innerHTML = "";
  cvData.education.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "text-xs text-slate-800";
    item.innerHTML = `
                    <div class="font-bold">${escapeHtml(edu.degree)}</div>
                    <div class="text-slate-600">${escapeHtml(edu.period)}</div>
                `;
    eduContainer.appendChild(item);
  });

  // Render Formación Adicional
  const coursesContainer = document.getElementById("previewCourses");
  coursesContainer.innerHTML = "";
  cvData.courses.forEach((c) => {
    const item = document.createElement("li");
    item.className = "pl-1";
    item.innerText = c.title;
    coursesContainer.appendChild(item);
  });
}

function saveSection(section) {
  updateCV();

  const sections = {
    datosPersonales: {
      name: cvData.name,
      title: cvData.title,
      location: cvData.location,
      phone: cvData.phone,
      email: cvData.email,
    },
    perfil: {
      profile: cvData.profile,
    },
    experiencia: cvData.experiences,
    competencias: {
      techSkills: cvData.techSkills,
      tools: cvData.tools,
      languages: cvData.languages,
    },
    educacion: cvData.education,
    cursos: cvData.courses,
  };

  const data = sections[section];
  if (data === undefined) {
    console.error(`La sección "${section}" no existe.`);
    return;
  }

  try {
    localStorage.setItem(`cv_${section}`, JSON.stringify(data));
    alert("Sección guardada correctamente.");
  } catch (error) {
    console.error(`No se pudo guardar la sección "${section}".`, error);
    alert("No se pudo guardar la sección. Revisa el almacenamiento del navegador.");
  }
}

function loadSavedSections() {
  const savedSections = [
    {
      key: "cv_datosPersonales",
      apply(data) {
        Object.assign(cvData, data);
      },
    },
    {
      key: "cv_perfil",
      apply(data) {
        Object.assign(cvData, data);
      },
    },
    {
      key: "cv_experiencia",
      apply(data) {
        cvData.experiences = data;
      },
    },
    {
      key: "cv_competencias",
      apply(data) {
        Object.assign(cvData, data);
      },
    },
    {
      key: "cv_educacion",
      apply(data) {
        cvData.education = data;
      },
    },
    {
      key: "cv_cursos",
      apply(data) {
        cvData.courses = data;
      },
    },
  ];

  savedSections.forEach(({ key, apply }) => {
    const savedData = localStorage.getItem(key);
    if (!savedData) return;

    try {
      apply(JSON.parse(savedData));
    } catch (error) {
      console.error(`No se pudo cargar la sección "${key}".`, error);
    }
  });
}

function resetToDefaultData() {
  cvData = {
    name: "Esperanza Martinez",
    title: "Especialista en Marketplace | Análisis de Ventas | Optimización",
    location: "México",
    phone: "55 0000 0000",
    email: "contacto@correo.com",
    profile:
      "Profesional con experiencia en administración y operación de canales de marketplace, gestión de inventarios y análisis de ventas. Gestión operativa de promociones estratégicas y generación de reportes clave para apoyar la toma de decisiones comerciales. Hábil en el manejo de herramientas como Excel, SAE y portales de clientes.",
    experiences: [
      {
        id: 1,
        company: "Le Creuset de México",
        desc: "Importación y Venta de Productos de Cocina Francesa Premium",
        role: "Asistente de Ventas",
        period: "Abril 2022 – Actualmente",
        bullets: [
          "Administración y operación de canales de Marketplace (Costco, Liverpool y Amazon Vendor Central) desde la solicitud hasta la entrega del pedido, garantizando precisión en el proceso y satisfacción del cliente.",
          "Gestión de órdenes en Amazon Vendor Central, logrando ventas de $200,000 a $300,000 MXN mediante la optimización del catálogo, sin campañas publicitarias.",
          "Gestión de Liverpool Marketplace, generando ventas de $50,000 a $100,000 MXN y fortaleciendo la marca.",
          "Análisis de ventas quincenales para 13 tiendas de Palacio de Hierro y mensuales para 3. Incremento de ventas en Costco Marketplace hasta $500,000 MXN en Buen Fin mediante estrategias promocionales.",
          "Generación de $200,000 a $300,000 MXN en Amazon Vendor Central, optimizando la presencia en el catálogo sin campañas publicitarias.",
        ],
      },
      {
        id: 2,
        company: "Kavak México",
        desc: "Compra y Venta de Autos Seminuevos",
        role: "Atención al Cliente",
        period: "Noviembre 2020 – Abril 2022",
        bullets: [
          "Atención y asesoramiento a clientes en el stand de Kavak ubicado en el Centro Comercial Patio Tlalpan, CDMX, orientándolos sobre los servicios de la marca.",
          "Captación de clientes orgánicos para showroom y oficinas, logrando generar interés en la compra y venta de vehículos.",
          "Resolución de dudas sobre planes de financiamiento, brindando información clara para la toma de decisiones.",
        ],
      },
    ],
    techSkills:
      "Análisis de datos | Generación de reportes de ventas | Gestión de inventarios | Administración de promociones en Marketplace",
    tools:
      "Excel | SAE | Portales de clientes (Amazon Vendor Central, Liverpool, Costco) | Photoshop",
    languages: "",
    education: [
      {
        id: 1,
        degree: "Bachillerato Tecnológico en Diseño Arquitectónico",
        period: "2001 - 2004",
      },
    ],
    courses: [
      {
        id: 1,
        title:
          "Análisis y presentación de datos con Power BI & DAX | AMAT | Abril - Junio 2023",
      },
      {
        id: 2,
        title: "Curso de Excel Avanzado | AMAT | Septiembre - Diciembre 2022",
      },
    ],
  };
  [
    "cv_datosPersonales",
    "cv_perfil",
    "cv_experiencia",
    "cv_competencias",
    "cv_educacion",
    "cv_cursos",
  ].forEach((key) => localStorage.removeItem(key));
  loadFormData();
  updateCV();
}

function downloadPDF() {
  const element = document.getElementById("cvPreview");

  // Opciones optimizadas de html2pdf para evitar paginación extra en blanco
  const opt = {
    margin: 0,
    filename: `CV_${(cvData.name || "Curriculum").replace(/\s+/g, "_")}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollY: 0,
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  html2pdf().set(opt).from(element).save();
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Initialize on page load
window.onload = init;
