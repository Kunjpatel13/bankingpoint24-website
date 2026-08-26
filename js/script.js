/**
 * BANKINGPOINT24 - Global JavaScript Engine
 * Operated by Rutva Multiservices LLP
 */

// 1. GLOBAL CONFIGURATION
const CONFIG = {
  WHATSAPP_NUMBER: "917069300077",
  COMPANY_NAME: "Rutva Multiservices LLP",
  BRAND_NAME: "BANKINGPOINT24",
  EMAIL: "rutvamultiservices@gmail.com",
  PHONE: "+91 7069300077"
};

// Embedded Fallback Templates (for file:// local protocol compatibility)
const TEMPLATES = {
  navbar: `<header class="sticky-top">
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand navbar-brand-logo" href="index.html">
        <img src="images/logo/2.png" alt="BANKINGPOINT24 Logo" class="brand-logo-img">
      </a>

      <!-- Mobile Toggler -->
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links & CTA -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link nav-link-custom" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link nav-link-custom" href="about.html">About Us</a></li>
          <li class="nav-item"><a class="nav-link nav-link-custom" href="services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link nav-link-custom" href="why-us.html">Why Us</a></li>
          <li class="nav-item"><a class="nav-link nav-link-custom" href="partner.html">Partner With Us</a></li>
          <li class="nav-item"><a class="nav-link nav-link-custom" href="refund-policy.html">Refund Policy</a></li>
          <li class="nav-item"><a class="nav-link nav-link-custom" href="contact.html">Contact</a></li>
        </ul>

        <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">
          <a href="login.html" class="btn btn-sm btn-primary-custom">
            <i class="bi bi-person-fill me-1"></i> Login / Sign Up
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>`,

  footer: `<footer class="footer-custom">
  <div class="container">
    <div class="row g-4 mb-4">
      <!-- Brand Info -->
      <div class="col-lg-3 col-md-6">
        <div class="d-flex align-items-center gap-2 mb-3">
          <img src="images/logo/2.png" alt="BANKINGPOINT24 Logo" style="height:40px; width:auto;">
        </div>
        <p class="fs-7 text-light-subtle mb-2">Operated by <strong>Rutva Multiservices LLP</strong></p>
        <p class="fs-7 text-light-subtle mb-0">
          One Platform. Multiple Services. Better Business. Empowering businesses with digital services and reliable
          technology.
        </p>
      </div>

      <!-- Quick Links & Services -->
      <div class="col-lg-2 col-md-6">
        <h6 class="footer-title">Navigation</h6>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="why-us.html">Why Us</a></li>
          <li><a href="partner.html">Partner With Us</a></li>
          <li><a href="pos.html">POS Services</a></li>
          <li><a href="qr-code.html">QR Code Services</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact & Office Info -->
      <div class="col-lg-3 col-md-6">
        <h6 class="footer-title">Legal &amp; Office</h6>
        <ul class="footer-links mb-3">
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
          <li><a href="refund-policy.html">Refund &amp; Cancellation</a></li>
        </ul>
        <h6 class="footer-title">Head Office</h6>
        <p class="fs-8 text-light-subtle mb-1"><i class="bi bi-geo-alt me-1 text-cyan"></i> 203, H M Patel Trade
          Center, Mota Bazar, V V Nagar, Anand, Gujarat - 388120</p>
        <p class="fs-8 text-light-subtle mb-1"><i class="bi bi-telephone me-1"></i> <a href="tel:+917069300077" class="text-light-subtle text-decoration-none">+91 7069300077</a></p>
        <p class="fs-8 text-light-subtle mb-0"><i class="bi bi-envelope me-1"></i> <a href="mailto:rutvamultiservices@gmail.com" class="text-light-subtle text-decoration-none">rutvamultiservices@gmail.com</a></p>
      </div>

      <!-- Grievance Redressal / Customer Support -->
      <div class="col-lg-4 col-md-6">
        <h6 class="footer-title text-cyan"><i class="bi bi-shield-check me-1"></i> Grievance Redressal / Support</h6>
        <div class="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-15">
          <div class="d-flex align-items-center gap-2 mb-2">
            <div class="icon-box-sm bg-cyan text-navy rounded-circle p-1 d-flex align-items-center justify-content-center" style="width:28px; height:28px; font-size:0.85rem;">
              <i class="bi bi-person-badge"></i>
            </div>
            <div>
              <span class="fs-7 text-white font-bold d-block">Jayesh Barot</span>
              <span class="fs-8 text-cyan d-block">Chief Operation Officer</span>
            </div>
          </div>
          <div class="border-top border-white border-opacity-10 pt-2 mt-2">
            <p class="fs-8 text-light-subtle mb-1">
              <i class="bi bi-envelope me-1 text-cyan"></i> Email:
              <a href="mailto:rutvamultiservices@gmail.com" class="text-white text-decoration-none font-bold">rutvamultiservices@gmail.com</a>
            </p>
            <p class="fs-8 text-light-subtle mb-0">
              <i class="bi bi-telephone-fill me-1 text-cyan"></i> Contact:
              <a href="tel:8758068295" class="text-cyan font-bold text-decoration-none">8758068295</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center pt-3 border-top border-white border-opacity-10 fs-8 text-light-subtle">
      &copy; 2026 Rutva Multiservices LLP. All Rights Reserved.
    </div>
  </div>
</footer>

<!-- Floating WhatsApp Button -->
<a href="https://wa.me/917069300077?text=Hi%2C%20I%20am%20interested%20in%20BankingPoint24%20services.%20Please%20provide%20more%20information."
  target="_blank" class="whatsapp-float-btn" aria-label="Chat on WhatsApp">
  <i class="bi bi-whatsapp"></i>
</a>

<!-- Back to Top Button -->
<a href="#" class="back-to-top" id="backToTop" aria-label="Back to Top">
  <i class="bi bi-arrow-up"></i>
</a>

<!-- Mobile Bottom Action Bar -->
<div class="mobile-bottom-bar">
  <a href="tel:+917069300077" class="mobile-action-item">
    <i class="bi bi-telephone-fill"></i>
    <span>Call</span>
  </a>
  <a href="https://wa.me/917069300077?text=Hi%2C%20I%20am%20interested%20in%20BankingPoint24%20services."
    target="_blank" class="mobile-action-item">
    <i class="bi bi-whatsapp"></i>
    <span>WhatsApp</span>
  </a>
  <a href="https://wa.me/917069300077?text=Hi%2C%20I%20am%20interested%20in%20becoming%20a%20BankingPoint24%20Partner."
    target="_blank" class="mobile-action-item partner-item">
    <i class="bi bi-handbag-fill"></i>
    <span>Partner</span>
  </a>
</div>`
};

// 2. WHATSAPP LINK GENERATOR
function buildWhatsAppUrl(message) {
  const encodedMsg = encodeURIComponent(message || "Hi, I am interested in BankingPoint24 services.");
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMsg}`;
}

// 3. DYNAMIC COMPONENT LOADER
async function loadComponents() {
  const navContainer = document.getElementById("navbar-placeholder");
  const footerContainer = document.getElementById("footer-placeholder");

  if (navContainer) {
    try {
      const res = await fetch("components/navbar.html");
      if (res.ok) {
        navContainer.innerHTML = await res.text();
      } else {
        navContainer.innerHTML = TEMPLATES.navbar;
      }
    } catch (e) {
      navContainer.innerHTML = TEMPLATES.navbar;
    }
  }

  if (footerContainer) {
    try {
      const res = await fetch("components/footer.html");
      if (res.ok) {
        footerContainer.innerHTML = await res.text();
      } else {
        footerContainer.innerHTML = TEMPLATES.footer;
      }
    } catch (e) {
      footerContainer.innerHTML = TEMPLATES.footer;
    }
  }

  initApp();
}

// 4. INITIALIZE APP LISTENERS AND ACTIVE STATES
function initApp() {
  // Highlight Active Nav Link
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link-custom");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Attach dynamic click listeners to buttons with data-whatsapp-msg attribute
  const whatsappButtons = document.querySelectorAll("[data-whatsapp-msg]");
  whatsappButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      const msg = this.getAttribute("data-whatsapp-msg");
      window.open(buildWhatsAppUrl(msg), "_blank");
    });
  });

  // Back to Top Button Functionality
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    });

    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Frontend Contact Form Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("fullName")?.value || "";
      const phone = document.getElementById("mobileNumber")?.value || "";
      const email = document.getElementById("emailAddress")?.value || "";
      const city = document.getElementById("cityName")?.value || "";
      const service = document.getElementById("serviceInterest")?.value || "General Enquiry";
      const message = document.getElementById("userMessage")?.value || "";

      if (!name || !phone) {
        alert("Please fill in your Name and Mobile Number.");
        return;
      }

      const whatsappMsg = `Hi BankingPoint24, I submitted an enquiry via the website:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
- City: ${city}
- Interested Service: ${service}
- Message: ${message}`;

      const responseBox = document.getElementById("formResponse");
      if (responseBox) {
        responseBox.className = "alert alert-success mt-3";
        responseBox.innerHTML = `
          <strong><i class="bi bi-check-circle-fill me-2"></i>Enquiry Form Demo Completed!</strong><br>
          Thank you, <strong>${name}</strong>. Your enquiry details have been validated on the frontend.<br>
          <a href="${buildWhatsAppUrl(whatsappMsg)}" target="_blank" class="btn btn-sm btn-whatsapp-custom mt-2">
            <i class="bi bi-whatsapp me-1"></i> Send directly to WhatsApp
          </a>
        `;
        responseBox.classList.remove("d-none");
      } else {
        alert(`Thank you ${name}! Your enquiry details have been processed. Connecting to WhatsApp...`);
        window.open(buildWhatsAppUrl(whatsappMsg), "_blank");
      }
    });
  }

  // Frontend Login Form Handler
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const alertBox = document.getElementById("loginAlert");
      if (alertBox) {
        alertBox.className = "alert alert-info mt-3";
        alertBox.innerHTML = "<i class='bi bi-info-circle-fill me-2'></i> Login functionality will be available soon. Please contact support on WhatsApp for account assistance.";
        alertBox.classList.remove("d-none");
      }
    });
  }

  // Frontend Signup Form Handler
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const alertBox = document.getElementById("signupAlert");
      if (alertBox) {
        alertBox.className = "alert alert-info mt-3";
        alertBox.innerHTML = "<i class='bi bi-info-circle-fill me-2'></i> Registration functionality will be available soon. To become a partner right now, please chat with us on WhatsApp.";
        alertBox.classList.remove("d-none");
      }
    });
  }
}

// 5. RUN LOADER ON DOM LOAD
document.addEventListener("DOMContentLoaded", loadComponents);
