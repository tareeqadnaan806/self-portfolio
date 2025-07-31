import Head from "next/head";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import emailjs from 'emailjs-com';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const sendEmail = (e) => {

    console.log('inside sendEmail function');
    e.preventDefault();

    emailjs.sendForm(
      'service_fnrbx4o', // Replace with your Service ID
      'template_jxsvxmv', // Replace with your Template ID
      e.target,
      'KJfhpncMBb4eYLDQG' // Replace with your User ID
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again later.');
      });

    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>adnaan.dev - Web Developer Portfolio</title>
        <meta name="description" content="Professional web developer specializing in modern web applications, responsive design, and full-stack development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${geistSans.variable} ${geistMono.variable}`}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <span>adnaan.dev</span>
            </div>
            <div className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}>
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  className={`${styles.navLink} ${activeSection === item ? styles.navLinkActive : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>Your Developer</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Website Development</h2>
            <p className={styles.heroDescription}>
              I create beautiful, responsive websites and web applications that help businesses grow online.
              Specializing in modern technologies and user-centered design.
            </p>
            <div className={styles.heroButtons}>
              <button
                className={styles.btnPrimary}
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
              </button>
              <button
                className={styles.btnSecondary}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  I'm a passionate web developer with over 4 years of experience in creating
                  digital solutions that make a difference. I specialize in building modern,
                  responsive websites and web applications using the latest technologies.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving to
                  deliver projects that not only look great but also perform exceptionally
                  and provide excellent user experiences.
                </p>
                <div className={styles.skills}>
                  <h3>Technologies I Work With:</h3>
                  <div className={styles.skillsList}>
                    {['JavaScript', 'React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'Tailwind CSS', 'Figma', 'SASS/SCSS', 'Git + GitHub', 'Vercel / Netlify', 'ESLint + Prettier', 'Redux'].map((skill) => (
                      <span key={skill} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌐</div>
                <h3>Web Development</h3>
                <p>Custom websites and web applications built with modern technologies and best practices.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📱</div>
                <h3>Responsive Design</h3>
                <p>Mobile-first designs that look and work perfectly on all devices and screen sizes.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚡</div>
                <h3>Performance Optimization</h3>
                <p>Fast-loading websites optimized for search engines and user experience.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔧</div>
                <h3>Maintenance & Support</h3>
                <p>Ongoing maintenance, updates, and technical support for your digital presence.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🎨</div>
                <h3>Figma to Code Conversion</h3>
                <p>Turn your Figma designs into pixel-perfect, responsive websites.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📄</div>
                <h3>Landing Page Development</h3>
                <p>High-converting landing pages tailored to your business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className={styles.portfolio}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>My Work</h2>
            <div className={styles.portfolioGrid}>
              <div className={styles.portfolioCard}>
                <a href="https://olivia-react-app.vercel.app/restaurants" target="_blank" rel="noopener noreferrer">
                  <div className={styles.portfolioImage}>
                    <img src="/images/restaurant.jpg" alt="Restaurant Discovery Interface" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3>Restaurant Discovery Interface</h3>
                    <p>Designed and developed a modern restaurant listing interface that enables users to explore dining options with an intuitive, user-friendly layout.</p>
                  </div>
                </a>
              </div>
              <div className={styles.portfolioCard}>
                <a href="https://body-revive.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.portfolioImage}>
                    <img src="/images/gym.jpeg" alt="Health & Wellness Landing Page" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3>Health & Wellness Landing Page</h3>
                    <p>Designed a responsive, modern landing page to promote health and wellness services with clear messaging, clean layout, and engagement-focused design.</p>
                  </div>
                </a>
              </div>
              <div className={styles.portfolioCard}>
                <a href="https://www.excelads.in/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.portfolioImage}>
                    <img src="/images/agency.jpeg" alt="Advertising Agency Website" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3>Advertising Agency Website</h3>
                    <p>Built a professional website for a digital advertising agency, showcasing services, portfolio, and contact details with a clean, corporate design.</p>
                  </div>
                </a>
              </div>
              <div className={styles.portfolioCard}>
                <a href="https://tareeqadnaan806.github.io/Monogram_clone/dist/index.html" target="_blank" rel="noopener noreferrer">
                  <div className={styles.portfolioImage}>
                    <img src="/images/monogram.webp" alt="Monogram Landing Page Clone" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3>Monogram Landing Page Clone</h3>
                    <p>Recreated Monogram’s landing page with precise layout, smooth transitions, and modern design to practice clean, responsive UI implementation.</p>
                  </div>
                </a>
              </div>
              <div className={styles.portfolioCard}>
                <a href="https://react-mct-jet.vercel.app/recipe" target="_blank" rel="noopener noreferrer">
                  <div className={styles.portfolioImage}>
                    <img src="/images/reciepe.jpg" alt="Recipe Listing Interface" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3>Recipe Listing Interface</h3>
                    <p>Developed a responsive recipe interface featuring clean layouts, organized content, and user-friendly design for browsing food and cooking ideas.</p>
                  </div>
                </a>
              </div>
              <div className={styles.portfolioCard}>
                <a href="https://tareeqadnaan806.github.io/major_project/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.portfolioImage} >
                    <img src="/images/university.jpeg" alt="University Event Management Portal" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                  </div>
                  <div className={styles.portfolioContent}>
                    <h3>University Event Management Portal</h3>
                    <p>Built a multi-page event management system for universities, featuring event listings, registration flow, and a structured, easy-to-navigate interface.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.contact}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.contactContent} style={{padding: '20px'}}>
              <div className={styles.contactInfo}>
                <h3>Let's Work Together</h3>
                <p>
                  Ready to bring your project to life? I'd love to hear about your ideas
                  and discuss how we can work together to create something amazing.
                </p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📧</span>
                    <span>adnaandev21@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📱</span>
                    <span>+91 9515812273</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>🌍</span>
                    <span>Any where</span>
                  </div>
                </div>
              </div>
              <form className={styles.contactForm} onSubmit={sendEmail}>
                <div className={styles.formGroup}>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className={styles.formGroup}>
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className={styles.btnPrimary}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <span>&copy; 2025 adnaan.dev. All rights reserved. Made with <span className={styles.loveIcon}>❤️</span></span>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .portfolioImage img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolioImage img:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
}
