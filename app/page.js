'use client';
import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink, 
  Menu, 
  X, 
  Wifi, 
  Cloud,
  Database,
  Activity,
  BookOpen,      // Pour le Blog
  PlayCircle,    // Pour les Vidéos
  FileText,      // Pour les Articles
  Calendar,      // Pour les Dates
  Clock,         // Pour le temps de lecture
  ChevronLeft,   // Pour le bouton retour
  Share2,        // Icône Partager
  Check          // Icône Succès
} from 'lucide-react';

// --- DONNÉES SIMULÉES DU BLOG (Inchangées) ---
const BLOG_CONTENT = {
  windows_defender: {
    title: "Comment paramétrer Windows Defender pour se passer d'un antivirus tiers ?",
    date: "20 Nov, 2024",
    readTime: "8 min",
    category: "CYBERSÉCURITÉ",
    image: null,
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
        <p className="text-lg font-medium text-white">
          Faut-il encore payer pour un antivirus en 2024 ? Pour la majorité des usages professionnels et personnels, la réponse est non. Windows Defender (Microsoft Defender Antivirus) est devenu une solution de pointe, à condition de bien le configurer.
        </p>

        <p>
          Voici comment transformer Defender en une forteresse imprenable en activant des fonctionnalités souvent désactivées par défaut.
        </p>

        {/* SECTION PRÉREQUIS */}
        <div className="bg-red-900/20 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            ⚠️ 0. Prérequis indispensable
          </h3>
          <p className="text-sm text-red-100">
            Avant toute chose, vous devez impérativement <strong>désinstaller tout autre antivirus tiers</strong> déjà présent sur la machine (Avast, McAfee, Norton, Kaspersky, etc.).
          </p>
          <p className="text-sm text-red-100 mt-2">
            Windows Defender se désactive automatiquement s'il détecte un autre logiciel de sécurité pour éviter les conflits. Allez dans <em>Paramètres &gt; Applications</em>, désinstallez l'ancien antivirus et redémarrez votre PC pour que Defender prenne le relais.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">1. Activer la protection contre les Ransomwares</h3>
          <p className="mb-4">
            C'est l'option la plus critique et pourtant souvent inactive. Elle empêche les applications suspectes de modifier vos fichiers dans les dossiers protégés (Documents, Images, etc.).
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
            <li>Allez dans <strong>Sécurité Windows</strong> &gt; <strong>Protection contre les virus et menaces</strong>.</li>
            <li>En bas, cliquez sur <strong>Gérer la protection contre les ransomwares</strong>.</li>
            <li>Activez <strong>"Dispositif d'accès contrôlé aux dossiers"</strong>.</li>
          </ul>
          <p className="text-sm text-slate-400 italic">Note : Si une application légitime est bloquée, cliquez simplement sur "Autoriser une app via le dispositif...".</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">2. Bloquer les PUP/PUA (Logiciels indésirables)</h3>
          <p className="mb-4">
            Windows Defender peut bloquer les logiciels publicitaires, les mineurs de crypto cachés et les optimiseurs de PC douteux.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
            <li>Allez dans <strong>Contrôle des applications et du navigateur</strong>.</li>
            <li>Cliquez sur <strong>Paramètres de protection fondée sur la réputation</strong>.</li>
            <li>Activez <strong>"Blocage d'application potentiellement indésirable"</strong> (cochez "Bloquer les applis" et "Bloquer les téléchargements").</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">3. Isolation du Noyau (Core Isolation)</h3>
          <p className="mb-4">
            Cette fonctionnalité utilise la virtualisation matérielle pour isoler les processus critiques de Windows en mémoire, empêchant les attaques de type injection de code.
          </p>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4 rounded-r-lg">
            <p className="text-sm text-blue-200">
              <strong>Chemin :</strong> Sécurité des appareils &gt; Isolation du noyau &gt; Détails &gt; Activer <strong>Intégrité de la mémoire</strong>.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">4. Protection Cloud et Envoi d'échantillons</h3>
          <p className="mb-4">
            Pour une détection "Zero-day", assurez-vous que la <strong>"Protection fournie par le Cloud"</strong> est activée dans les paramètres de protection contre les virus. Cela permet à Defender de comparer les signatures de fichiers suspects avec la base de données de Microsoft en temps réel.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Pour les Pros : Hardening via PowerShell</h3>
          <p className="mb-2">Si vous êtes administrateur système, vous pouvez aller plus loin en réduisant la surface d'attaque (ASR) via PowerShell (en tant qu'administrateur) :</p>
          <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm text-emerald-400 overflow-x-auto whitespace-pre-wrap break-words">
            {`# Activer la protection réseau
Set-MpPreference -EnableNetworkProtection Enabled

# Augmenter le niveau de protection du cloud
Set-MpPreference -CloudBlockLevel High`}
          </pre>
        </div>
      </div>
    )
  },
  backup_s3: {
    title: "Automatiser ses backups MySQL vers S3",
    date: "15 Sept, 2024",
    readTime: "10 min",
    category: "TUTORIEL",
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
        <p className="text-lg font-medium text-white">
          Un serveur sans sauvegarde est un serveur mort en sursis. Voyons comment scripter une sauvegarde automatique de base de données et l'envoyer dans le cloud AWS S3.
        </p>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Prérequis</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Un bucket AWS S3 configuré</li>
            <li>Un utilisateur IAM avec les droits d'écriture sur ce bucket</li>
            <li>AWS CLI installé sur le serveur (`sudo apt install awscli`)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Le Script Bash</h3>
          <p className="mb-4">Créez un fichier <code>backup.sh</code> :</p>
          <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm text-purple-400 overflow-x-auto">
            {`#!/bin/bash

# Variables
DB_NAME="ma_base"
DB_USER="root"
DB_PASS="mon_password"
BUCKET="s3://mon-bucket-backups"
DATE=$(date +%Y-%m-%d_%H%M%S)
FILE="backup_$DB_NAME_$DATE.sql.gz"

# Dump & Compression
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > /tmp/$FILE

# Envoi vers S3
aws s3 cp /tmp/$FILE $BUCKET/

# Nettoyage
rm /tmp/$FILE

echo "Backup $FILE envoyé vers S3"`}
          </pre>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Automatisation Cron</h3>
          <p>
            Pour exécuter ce script tous les jours à 3h du matin, ajoutez cette ligne à votre crontab (`crontab -e`) :
          </p>
          <code className="bg-slate-800 px-2 py-1 rounded text-white text-sm">0 3 * * * /bin/bash /home/user/scripts/backup.sh</code>
        </div>
      </div>
    )
  }
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  // --- NOUVEAU : Détection de l'URL au chargement (Deep Linking) ---
  useEffect(() => {
    // Vérifie s'il y a un paramètre ?post=... dans l'URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const postParam = params.get('post');
      
      // Si le paramètre existe et correspond à un article, on l'ouvre
      if (postParam && BLOG_CONTENT[postParam]) {
        setActiveArticle(postParam);
        
        // Optionnel : Scroller jusqu'à la section blog en arrière-plan
        const blogSection = document.getElementById('blog');
        if(blogSection) blogSection.scrollIntoView();
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll du body quand un modal ou le MENU MOBILE est ouvert
  useEffect(() => {
    if (activeArticle || activeVideo || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeArticle, activeVideo, isMenuOpen]);

  // Reset état copie quand on change d'article
  useEffect(() => {
    setIsCopied(false);
  }, [activeArticle]);

  // Fonction pour fermer un article et nettoyer l'URL
  const closeArticle = () => {
    setActiveArticle(null);
    // Nettoyer l'URL sans recharger la page (supprime ?post=...)
    if (typeof window !== 'undefined') {
      const newUrl = window.location.pathname;
      window.history.pushState({}, '', newUrl);
    }
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleShare = async () => {
    if (!activeArticle) return;
    
    const article = BLOG_CONTENT[activeArticle];
    
    // --- NOUVEAU : Construction de l'URL spécifique ---
    const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
    const shareUrl = `${baseUrl}?post=${activeArticle}`;
    
    const textToShare = `${article.title}\n\nDécouvre cet article ici : ${shareUrl}`;

    // Fallback copy
    const copyToClipboardFallback = () => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = textToShare;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        }
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(textToShare);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        return;
      } catch (err) {
        console.warn("Clipboard API failed, trying fallback...");
      }
    }

    if (typeof navigator.share !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: article.title,
          text: `Découvre cet article : ${article.title}`,
          url: shareUrl 
        });
        return; 
      } catch (err) {
        console.log("Share cancelled or failed");
      }
    }

    copyToClipboardFallback();
  };

  const NavLink = ({ id, label, isMobile = false }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
        // MODIFICATION : Texte plus clair sur mobile pour éviter l'effet "transparent"
        activeSection === id ? 'text-blue-400' : (isMobile ? 'text-white' : 'text-slate-400')
      } ${isMobile ? 'text-xl py-3 font-semibold' : ''}`}
    >
      {label}
    </button>
  );

  return (
    // Utilisation de min-h-[100dvh] pour supporter les barres mobiles dynamiques
    <div className="min-h-[100dvh] bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden flex flex-col">
      
      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-lg shadow-blue-900/50">
              <span className="font-mono font-bold text-white">D</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-white">David<span className="text-blue-500">.TIENDREBEOGO</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <NavLink id="about" label="À Propos" />
            <NavLink id="skills" label="Compétences" />
            <NavLink id="projects" label="Projets" />
            <NavLink id="blog" label="Blog" />
            <NavLink id="contact" label="Contact" />
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 p-2 z-50 focus:outline-none bg-slate-900/50 rounded-md hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay (Optimized Fixed) */}
        <div 
          // MODIFICATION : Suppression de l'opacité (bg-slate-950/98 -> bg-slate-950) pour un fond solide
          className={`md:hidden fixed inset-0 bg-slate-950 backdrop-blur-xl z-40 transition-all duration-300 flex flex-col justify-center items-center ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-8 p-8 text-center w-full max-w-sm">
            <NavLink id="about" label="À Propos" isMobile />
            <NavLink id="skills" label="Compétences" isMobile />
            <NavLink id="projects" label="Projets" isMobile />
            <NavLink id="blog" label="Blog" isMobile />
            <NavLink id="contact" label="Contact" isMobile />
            
            <div className="h-px w-20 bg-slate-800 mx-auto my-4"></div>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-500 text-sm mt-4 flex items-center justify-center gap-2 hover:text-white"
            >
              Fermer le menu
            </button>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <main className="flex-grow">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh]">
          {/* Abstract Background Grid */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col items-start max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-mono mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                DISPONIBLE POUR MISSIONS
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight text-balance">
                Architecte d'infrastructures <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Robustes & Sécurisées.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed text-balance">
                J'aide les entreprises et les particuliers à concevoir, déployer et sécuriser leurs réseaux critiques. 
                Spécialiste en haute disponibilité, cloud hybride et optimisation de bande passante.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 active:scale-95 transform duration-100"
                >
                  Voir mes projets <Server size={18} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-all flex items-center justify-center gap-2 active:scale-95 transform duration-100"
                >
                  Me contacter <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS / QUICK INFO --- */}
        <section className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Expérience", value: "3+ Ans" },
              { label: "Uptime Moyen", value: "99.9%" },
              { label: "Projets Cloud", value: "10+" },
              { label: "Certifications", value: "CCNA / AWS / Full-Stack Dev" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="w-full md:w-5/12"> 
                <div className="relative group max-w-md mx-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative aspect-[4/5] bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
                      <img 
                        src="/img/moi.png" 
                        alt="David" 
                        className="w-full h-full object-cover object-top" 
                        loading="lazy"
                      />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-7/12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                  <Terminal className="text-blue-500" size={28} /> 
                  À PROPOS
                </h2>
                <div className="space-y-6 text-slate-400 leading-relaxed text-sm sm:text-base text-balance">
                  <p>
                    Actuellement <strong>Élève Ingénieur en GSN</strong>, je navigue à la convergence des infrastructures réseaux et du développement logiciel. Ma force réside dans cette double vision : comprendre la couche physique tout en maîtrisant l'abstraction du code.
                  </p>
                  <p>
                    Polyvalent et rigoureux, je passe avec aisance de la configuration d'équipements Cisco au développement d'applications Full-Stack modernes avec Next.js. Mon approche est systémique : chaque ligne de code et chaque routeur configuré doit servir la performance globale.
                  </p>
                  <p>
                    Mon ambition est de concevoir des écosystèmes numériques où la <strong>sécurité</strong>, la <strong>haute disponibilité</strong> et l'<strong>expérience utilisateur</strong> ne font qu'un.
                  </p>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a 
                    href="/img/CV_Mr_David_EN.pdf" 
                    download="CV_David_Tiendrebeogo.pdf"
                    className="flex items-center gap-2 text-sm text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors"
                  >
                    <Download size={14} /> Télécharger mon CV (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">STACK TECHNIQUE</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base text-balance">
                Une boîte à outils complète pour gérer le cycle de vie des infrastructures et le développement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Wifi size={24} />, 
                  title: "Réseaux & Télécoms", 
                  color: "blue",
                  skills: ["Cisco (CCNA level)", "TCP/IP, DNS, DHCP, BGP", "Configuration Switch", "VoIP / SIP"] 
                },
                { 
                  icon: <Globe size={24} />, 
                  title: "Dev Web Full-Stack", 
                  color: "emerald",
                  skills: ["Next.js / React", "Tailwind CSS / UI/UX", "Node.js / API REST", "Docker / CI/CD"] 
                },
                { 
                  icon: <ShieldCheck size={24} />, 
                  title: "Sécurité & SysAdmin", 
                  color: "purple",
                  skills: ["Linux (Debian, RHEL)", "Firewalls (PfSense)", "VPN (WireGuard)", "Active Directory"] 
                },
                { 
                  icon: <Activity size={24} />, 
                  title: "Monitoring & Ops", 
                  color: "orange",
                  skills: ["Python & Bash", "Wireshark", "Ansible (IaC)", "Git / CI/CD"] 
                }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-${item.color}-500/50 transition-all group h-full`}>
                  <div className={`w-12 h-12 bg-${item.color}-900/20 rounded-lg flex items-center justify-center mb-4 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {item.skills.map((skill, i) => <li key={i}>• {skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-10 md:mb-12 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">PROJETS RÉCENTS</h2>
                <p className="text-slate-400 text-sm sm:text-base">Études de cas et réalisations techniques.</p>
              </div>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium">
                Voir GitHub <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Développement d'un lab virtuel Autolab",
                  desc: "Plateforme interactive permettant la simulation et la visualisation de systèmes automatiques complexes via une interface web.",
                  tags: ["React", "Full-Stack", "Simulation"],
                  icon: <Cpu className="text-blue-400" size={20} />
                },
                {
                  title: "Refonte Réseau Corp",
                  desc: "Design et déploiement d'un nouveau plan d'adressage IP et segmentation VLAN pour une PME de 200 employés.",
                  tags: ["Cisco", "VLAN", "802.1X"],
                  icon: <Server className="text-emerald-400" size={20} />
                },
                {
                  title: "Monitoring Centralisé",
                  desc: "Dashboard Grafana/Prometheus pour surveiller 50+ serveurs en temps réel. Alerting Slack.",
                  tags: ["Grafana", "Linux", "Docker"],
                  icon: <Activity className="text-orange-400" size={20} />
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:shadow-[0_0_30px_rgba(30,41,59,0.5)] transition-all group flex flex-col h-full">
                  <div className="h-2 bg-slate-800 group-hover:bg-blue-600 transition-colors w-full"></div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-slate-800 rounded-lg">{project.icon}</div>
                      <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors cursor-pointer" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight text-balance">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded font-mono border border-slate-700">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BLOG SECTION --- */}
        <section id="blog" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                DERNIERS POSTS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">BLOG & RESSOURCES</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                Partage de connaissances, tutoriels techniques et veille technologique.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              
              {/* Blog Post 1 - ARTICLE */}
              <div 
                onClick={() => setActiveArticle('windows_defender')}
                className="group cursor-pointer h-full"
              >
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all h-full flex flex-col shadow-sm">
                  <div className="h-40 md:h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                    <ShieldCheck size={48} className="text-slate-700 group-hover:text-blue-500/50 transition-colors duration-500 transform group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-slate-950/80 px-2 py-1 rounded text-[10px] text-white font-bold border border-slate-800 tracking-wider">
                      ARTICLE
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12} /> 20 Nov</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> 8 min</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors text-balance">
                      Sécuriser Windows Defender
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-3">
                      Comment configurer Windows Defender pour se passer d'un antivirus tiers : anti-ransomware, PUA et protection cloud.
                    </p>
                    <div className="mt-auto flex items-center text-blue-400 text-xs sm:text-sm font-medium">
                      Lire l'article <ExternalLink size={14} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 2 - VIDÉO */}
              <div 
                onClick={() => setActiveVideo("/media/demo.mp4")}
                className="group cursor-pointer h-full"
              >
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all h-full flex flex-col shadow-sm">
                  <div className="h-40 md:h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                    <PlayCircle size={48} className="text-slate-700 group-hover:text-emerald-500/50 transition-colors duration-500 transform group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-slate-950/80 px-2 py-1 rounded text-[10px] text-white font-bold border border-slate-800 tracking-wider">
                      VIDÉO
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12} /> 28 Oct</span>
                      <span>•</span>
                      <span>14 min</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors text-balance">
                      HomeLab pour le CCNA
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-3">
                      Mon setup réseau GNS3 et matériel Cisco pour préparer les certifications.
                    </p>
                    <div className="mt-auto flex items-center text-emerald-400 text-xs sm:text-sm font-medium">
                      Voir la vidéo <ExternalLink size={14} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 3 - TUTO */}
              <div 
                onClick={() => setActiveArticle('backup_s3')}
                className="group cursor-pointer h-full"
              >
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all h-full flex flex-col shadow-sm">
                  <div className="h-40 md:h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                    <Terminal size={48} className="text-slate-700 group-hover:text-purple-500/50 transition-colors duration-500 transform group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-slate-950/80 px-2 py-1 rounded text-[10px] text-white font-bold border border-slate-800 tracking-wider">
                      TUTO
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12} /> 15 Sept</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> 10 min</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors text-balance">
                      Backups Automatisés S3
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-4 line-clamp-3">
                      Script Bash pour sauvegarder vos bases MySQL vers AWS S3 via Cron.
                    </p>
                    <div className="mt-auto flex items-center text-purple-400 text-xs sm:text-sm font-medium">
                      Voir le code <ExternalLink size={14} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-blue-900/20 rounded-full mb-6 text-blue-400">
              <Mail size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à collaborer ?</h2>
            <p className="text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto text-sm sm:text-base text-balance">
              Je suis actuellement disponible pour des missions de consulting ou des postes CDI. 
              Discutons de vos besoins en infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <a href="mailto:david@email.com" className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all w-full sm:w-auto justify-center shadow-lg shadow-blue-900/20 active:scale-95 duration-100">
                <Mail size={20} />
                mrdavid@gmail.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold border border-slate-700 transition-all w-full sm:w-auto justify-center active:scale-95 duration-100">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} David. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="https://github.com/GeekMan-lab" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/david-tiendrebeogo?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/mrdavidtbg?t=-WLb-XcVaDU8rq7tP53CXA&s=09" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL LECTEUR VIDÉO --- */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl animate-in zoom-in-95 duration-200" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900">
              <h3 className="text-white font-bold flex items-center gap-2">
                <PlayCircle size={20} className="text-emerald-500" /> 
                Lecteur Vidéo
              </h3>
              <button 
                onClick={() => setActiveVideo(null)} 
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video 
                src={activeVideo} 
                className="w-full h-full object-contain"
                controls 
                autoPlay
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL LECTURE ARTICLE --- */}
      {activeArticle && BLOG_CONTENT[activeArticle] && (
        <div 
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeArticle} // Utilise la fonction closeArticle pour nettoyer l'URL
        >
          <div 
            className="relative w-full max-w-3xl h-[85dvh] sm:h-[80vh] bg-slate-900 sm:rounded-2xl rounded-t-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <button 
                  onClick={closeArticle}
                  className="sm:hidden text-slate-400 hover:text-white p-1"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-[10px] sm:text-xs font-bold text-blue-400 border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">
                  {BLOG_CONTENT[activeArticle].category}
                </span>
                <span className="text-slate-500 text-xs flex items-center gap-1">
                  <Clock size={12} /> {BLOG_CONTENT[activeArticle].readTime}
                </span>
              </div>
              <button 
                onClick={closeArticle} 
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contenu Article (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight text-balance">
                {BLOG_CONTENT[activeArticle].title}
              </h2>
              <p className="text-slate-500 text-sm mb-8 pb-4 border-b border-slate-800">
                Publié le {BLOG_CONTENT[activeArticle].date} • Par David
              </p>
              
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-balance prose-p:text-pretty">
                {BLOG_CONTENT[activeArticle].content}
              </div>

              {/* Footer Article */}
              <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
                <p className="text-slate-500 italic text-sm">Merci de votre lecture !</p>
                <div className="flex gap-2">
                  <button 
                    onClick={handleShare}
                    className={`flex items-center gap-2 px-4 py-2 text-white text-sm rounded-lg transition-all duration-300 ${isCopied ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-blue-600 hover:bg-blue-500'}`}
                  >
                    {isCopied ? (
                      <>
                        <Check size={16} />
                        Lien copié !
                      </>
                    ) : (
                      <>
                        <Share2 size={16} />
                        Copier le lien
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;