(function () {
  const {
    name,
    role,
    tagline,
    yearsExperience,
    projectsCount,
    about,
    resumeUrl,
    email,
    contactNote,
    social,
    skills,
    projects,
    projectFilters,
  } = PORTFOLIO;

  // ——— Populate static content ———
  document.title = `${name} | ${role}`;
  setText("hero-name", name);
  setText("code-name", `"${name}"`);
  setText("hero-role", role.toLowerCase());
  setText("code-role", `"${role}"`);
  setText("hero-tagline", tagline);
  setText("stat-years", yearsExperience);
  setText("stat-projects", projectsCount);
  setText("about-p1", about[0]);
  setText("about-p2", about[1]);
  setText("contact-text", contactNote);
  setText("footer-name", name);
  setText("year", new Date().getFullYear());

  const resumeLink = document.getElementById("resume-link");
  if (resumeLink) resumeLink.href = resumeUrl;

  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) {
    contactEmail.textContent = email;
    contactEmail.href = `mailto:${email}`;
  }

  // ——— Skills ———
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = skills
      .map(
        (group) => `
      <article class="skill-card reveal">
        <h3>${escapeHtml(group.category)}</h3>
        <div class="skill-tags">
          ${group.items.map((item) => `<span class="skill-tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
    `,
      )
      .join("");
  }

  // ——— Project filters ———
  let activeFilter = "all";
  const filterTabs = document.getElementById("filter-tabs");
  const projectsGrid = document.getElementById("projects-grid");

  function renderFilters() {
    if (!filterTabs) return;
    filterTabs.innerHTML = projectFilters
      .map(
        (f) => `
      <button type="button" class="filter-tab ${f.id === activeFilter ? "active" : ""}"
        data-filter="${f.id}" role="tab" aria-selected="${f.id === activeFilter}">
        ${escapeHtml(f.label)}
      </button>
    `,
      )
      .join("");

    filterTabs.querySelectorAll(".filter-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        renderFilters();
        renderProjects();
      });
    });
  }

  function renderProjects() {
    if (!projectsGrid) return;
    const filtered =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    projectsGrid.innerHTML = filtered
      .map((project) => {
        const featuredClass = project.featured ? "project-card--featured" : "";
        const badge = project.featured
          ? '<span class="project-card__badge">Featured</span>'
          : "";
        return `
        <article class="project-card reveal ${featuredClass}" data-category="${project.category}">
          <div class="project-card__image">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
            <div class="project-card__overlay"></div>
            ${badge}
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
            <p class="project-card__desc">${escapeHtml(project.description)}</p>
            <div class="project-card__tags">
              ${project.tags.map((t) => `<span class="project-card__tag">${escapeHtml(t)}</span>`).join("")}
            </div>
            <div class="project-card__links">
              ${linkIf(project.liveUrl, "Live demo")}
              ${linkIf(project.repoUrl, "Source code", true)}
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    observeReveals();
  }

  function linkIf(url, label, repo) {
    if (!url || url === "#") {
      return `<span class="project-card__link" style="opacity:0.4;pointer-events:none">${escapeHtml(label)}</span>`;
    }
    const icon = repo
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.34 8.34 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>`;
    return `<a href="${escapeHtml(url)}" class="project-card__link" target="_blank" rel="noopener">${icon} ${escapeHtml(label)}</a>`;
  }

  // ——— Social links ———
  const socialContainer = document.getElementById("social-links");
  if (socialContainer) {
    socialContainer.innerHTML = social
      .map(
        (s) => `
      <a href="${escapeHtml(s.url)}" class="social-link" target="_blank" rel="noopener" aria-label="${escapeHtml(s.label)}">
        ${socialIcon(s.icon)}
      </a>
    `,
      )
      .join("");
  }

  function socialIcon(type) {
    const icons = {
      github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.34 8.34 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
      linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
      twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    };
    return icons[type] || icons.github;
  }

  renderFilters();
  renderProjects();

  // ——— Header scroll ———
  const header = document.getElementById("header");
  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );

  // ——— Mobile nav ———
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const nav = document.querySelector(".nav");

  navToggle?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    nav?.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("open");
      nav?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  // ——— Active nav section ———
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => sectionObserver.observe(s));

  // ——— Scroll reveal ———
  function observeReveals() {
    const reveals = document.querySelectorAll(".reveal:not(.visible)");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => revealObserver.observe(el));
  }

  observeReveals();

  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("contact-status");
  const submitButton = document.getElementById("contact-submit");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const subject = encodeURIComponent(
      `Portfolio contact from ${formData.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    setFormStatus("Sending your message...", "pending");

    try {
      const response = await fetch(form.action || "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      if (!response.ok)
        throw new Error(`Form submission failed: ${response.status}`);

      form.reset();
      setFormStatus("Thanks. Your message has been sent.", "success");
    } catch {
      setFormStatus(
        "The online form is unavailable. Email me directly: ",
        "error",
      );
      if (formStatus) {
        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${email}?subject=${subject}&body=${body}`;
        emailLink.textContent = email;
        formStatus.append(emailLink);
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send message";
      }
    }
  });

  function setFormStatus(message, state) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.dataset.state = state;
  }

  // ——— Helpers ———
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
