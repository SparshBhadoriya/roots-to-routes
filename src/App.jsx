import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Mountain,
  Phone,
  Star,
  X,
} from "lucide-react";
import "./App.css";
import { supabase } from "./lib/supabase";
import Admin from "./Admin";
import AdminDashboard from "./AdminDashboard";
import Founders from "./Founders"; 
const whatsappNumber = "919762783101";
const phoneNumber = "+919762783101";
const businessEmail = "rootstoroutes101@gmail.com";
const instagramUrl = "https://www.instagram.com/roots_to_routes__/";



const destinations = [
  {
    name: "Jaipur",
    subtitle: "Royal palaces, vibrant markets & timeless culture",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=90",
  },
  {
    name: "Uttarakhand",
    subtitle: "The land of mountains & spirituality",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
  },
  
    {
  name: "Manali",
  subtitle: "Snowy peaks, adventure & serene valleys",
  image: "/images/manali.jpg",
},
];

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function openRootsToRoutesWhatsApp(
  message = "Hello Roots to Routes, I would like to plan a trip."
) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}


/* =========================================================
   FOUNDERS PAGE
========================================================= */

function FounderPage() {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="founders-page">

      {/* ================= NAVBAR ================= */}
      <header className="founders-navbar">
        <div className="founders-navbar-inner">

          <button
            className="founders-logo-button"
            onClick={goHome}
            aria-label="Back to Roots to Routes home"
          >
            <img
              src="/images/roots-to-routes-logo.png"
              alt="Roots to Routes"
            />
          </button>

          <button
            className="founders-back-button"
            onClick={goHome}
          >
            <ArrowRight size={17} />
            Back to Home
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="founders-hero">

        <div className="founders-hero-glow"></div>

        <div className="founders-hero-content">

          <p className="founders-eyebrow">
            ROOTS TO ROUTES • OUR STORY
          </p>

          <h1>
            The People
            <br />
            <span>Behind the Journey.</span>
          </h1>

          <p className="founders-hero-description">
            Two people who turned their love for travel into a journey
            designed to help others explore more, experience more and
            create memories of their own.
          </p>

          <div className="founders-hero-line"></div>

        </div>

      </section>


      {/* ================= OUR STORY ================= */}
      <section className="founders-story">

        <div className="founders-container">

          <div className="founders-section-intro">

            <p className="founders-section-label">
              HOW IT BEGAN
            </p>

            <h2>
              A dream that
              <br />
              <span>became a journey.</span>
            </h2>

          </div>

          <div className="founders-story-content">

            <p>
              Roots to Routes Tours & Travel was founded by
              <strong> Vansh Kumar</strong>, with
              <strong> Adv. Yogesh Dev Gola</strong> as Co-Founder —
              two people who always dreamed of exploring new places,
              experiencing different cultures, and creating unforgettable
              journeys.
            </p>

            <p>
              But like many of us, their families often said
              <em>“Trips baad mein, pehle responsibilities.”</em>
              Instead of giving up on their passion, they decided to
              turn it into their profession.
            </p>

            <p>
              And that is how Roots to Routes was born — turning their
              love for travel into journeys for others.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOUNDERS ================= */}
      <section className="founders-profiles">

        <div className="founders-container">

          <div className="founders-heading-centered">

            <p className="founders-section-label">
              MEET THE FOUNDERS
            </p>

            <h2>
              The minds behind
              <br />
              <span>Roots to Routes.</span>
            </h2>

          </div>


          {/* ===== VANSH ===== */}
          <article className="founder-profile founder-profile-vansh">

            <div className="founder-photo-wrapper">

              <img
                src="/images/vansh-kumar.jpg"
                alt="Vansh Kumar, Founder of Roots to Routes"
                className="founder-photo"
              />

              <div className="founder-photo-number">
                01
              </div>

            </div>

            <div className="founder-profile-content">

              <p className="founder-role">
                FOUNDER
              </p>

              <h3>
                Vansh
                <br />
                Kumar
              </h3>

              <p className="founder-title">
                Founder, Roots to Routes Tours & Travel
              </p>

              <div className="founder-divider"></div>

              <p>
                Vansh Kumar is an entrepreneur and travel enthusiast
                with a background in BBA and professional experience
                across sales, customer service, and quality operations.
                His experience working with people, understanding
                customer needs, and building professional relationships
                has shaped his approach to business.
              </p>

              <p>
                Driven by his passion for exploring new places and
                creating memorable experiences, he founded Roots to
                Routes to turn his love for travel into a profession —
                while helping others discover new destinations and
                create stories of their own.
              </p>

              <blockquote>
                “Don’t just dream about the journey — create it.”
              </blockquote>

            </div>

          </article>


          {/* ===== YOGESH ===== */}
          <article className="founder-profile founder-profile-yogesh">

            <div className="founder-profile-content">

              <p className="founder-role">
                CO-FOUNDER
              </p>

              <h3>
                Adv. Yogesh
                <br />
                Dev Gola
              </h3>

              <p className="founder-title">
                Co-Founder, Roots to Routes Tours & Travel
              </p>

              <div className="founder-divider"></div>

              <p>
                Yogesh Dev Gola is an entrepreneur with a background
                in B.Sc. LL.B. and experience in law, customer handling,
                and business operations. His professional experience
                has helped him develop strong communication skills,
                understand customer needs, and build positive
                relationships with clients.
              </p>

              <p>
                With a good understanding of business management and
                customer service, he plays an active role in the growth
                and development of Roots to Routes Tours & Travel,
                with a focus on providing reliable and memorable
                travel experiences.
              </p>

              <blockquote>
                “Don’t just dream about the journey — create it.”
              </blockquote>

            </div>

            <div className="founder-photo-wrapper">

              <img
                src="/images/yogesh-dev-gola.jpg"
                alt="Adv. Yogesh Dev Gola, Co-Founder of Roots to Routes"
                className="founder-photo"
              />

              <div className="founder-photo-number">
                02
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ================= VISION ================= */}
      <section className="founders-vision">

        <div className="founders-vision-overlay"></div>

        <div className="founders-container founders-vision-inner">

          <p className="founders-section-label">
            OUR VISION
          </p>

          <h2>
            Travel should be more
            <br />
            than just a <span>trip.</span>
          </h2>

          <p className="founders-vision-text">
            At Roots to Routes Tours & Travel, our vision is to make
            travel more than just a trip — we want to make it an
            experience worth remembering.
          </p>

          <p className="founders-vision-text">
            We aim to build a travel brand where people can explore
            new places, experience different cultures, meet new people,
            and create stories they’ll carry for life, without
            compromising on comfort, safety, or affordability.
          </p>

          <p className="founders-vision-text">
            Starting from our own dream of exploring the world, we
            aspire to create journeys that help others turn their
            “someday” travel plans into real memories.
          </p>

          <div className="founders-vision-statement">
            <span>More places.</span>
            <span>More experiences.</span>
            <span>More memories.</span>
            <strong>One route at a time.</strong>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="founders-cta">

        <div className="founders-container">

          <p className="founders-section-label">
            YOUR JOURNEY AWAITS
          </p>

          <h2>
            Don't just dream about
            <br />
            <span>the journey.</span>
          </h2>

          <p>
            Let Roots to Routes help you turn it into a memory.
          </p>

          <button
            className="founders-cta-button"
            onClick={() =>
              openRootsToRoutesWhatsApp(
                "Hello Roots to Routes, I would like to plan a trip."
              )
            }
          >
            Start Your Journey
            <ArrowRight size={18} />
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="founders-footer">

        <div className="founders-container founders-footer-inner">

          <div>
            <strong>ROOTS TO ROUTES</strong>
            <span>TOURS & TRAVEL</span>
          </div>

          <button onClick={goHome}>
            Back to Home
            <ArrowRight size={16} />
          </button>

        </div>

        <div className="founders-footer-bottom">
          © {new Date().getFullYear()} Roots to Routes. All rights reserved.
        </div>

      </footer>

    </div>
  );
}


function App() {
  if (window.location.pathname === "/founders") {
    return <Founders />;
  }

  // your existing code continues here...

  const [menuOpen, setMenuOpen] = useState(false);
  const [tourPackages, setTourPackages] = useState([]);

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const [showJourneyMatch, setShowJourneyMatch] = useState(false);
const [journeyStep, setJourneyStep] = useState(0);
const [journeyAnswers, setJourneyAnswers] = useState({
  mood: "",
  companion: "",
  pace: "",
  priority: "",
  budget: "",
});
const [journeyResult, setJourneyResult] = useState(null);
  

 useEffect(() => {
  const loadTours = async () => {
    const { data, error } = await supabase
      .from("tours")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading tours:", error);
      return;
    }

    setTourPackages(data || []);
  };

   loadTours();
}, []);

if (window.location.pathname === "/admin") {
  return <Admin />;
}

if (window.location.pathname === "/admin/dashboard") {
  return <AdminDashboard />;
}

if (window.location.pathname === "/founders") {
  return <FounderPage />;
} 
const closeMenu = () => {
  setMenuOpen(false);
};

const openWhatsApp = (
  message = "Hello Roots to Routes, I want to know more about your tour packages."
) => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};
const openInstagram = () => {
  window.open(instagramUrl, "_blank");
};

const featuredTour =
  tourPackages.find(
    (tour) => tour.name?.toLowerCase() === "spiritual escape"
  ) || tourPackages[0] || null;
  const journeyQuestions = [
  {
    key: "mood",
    question: "What's your travel mood?",
    options: [
      "Mountains & Nature",
      "Peace & Spirituality",
      "Adventure",
      "Family Escape",
      "Couple Escape",
    ],
  },
  {
    key: "companion",
    question: "Who are you travelling with?",
    options: [
      "Solo",
      "Couple",
      "Friends",
      "Family",
    ],
  },
  {
    key: "pace",
    question: "How do you want your trip to feel?",
    options: [
      "Slow & Relaxed",
      "Balanced",
      "Full of Experiences",
    ],
  },
  {
    key: "priority",
    question: "What's your priority?",
    options: [
      "Nature",
      "Spirituality",
      "Sightseeing",
      "Adventure",
      "Culture",
    ],
  },
  {
    key: "budget",
    question: "What's your approximate budget?",
    options: [
      "Under ₹5,000",
      "₹5,000–₹10,000",
      "₹10,000+",
    ],
  },
];

const journeyProfiles = {
  "Mountains & Nature": {
    title: "THE MOUNTAIN SOUL",
    description:
      "You travel to disconnect from the noise and reconnect with nature.",
  },

  "Peace & Spirituality": {
    title: "THE SOULFUL EXPLORER",
    description:
      "You look for peaceful places, meaningful experiences and moments that stay with you.",
  },

  Adventure: {
    title: "THE ROAD SEEKER",
    description:
      "For you, the journey matters just as much as the destination.",
  },

  "Family Escape": {
    title: "THE MEMORY MAKER",
    description:
      "You travel for shared experiences, beautiful places and memories together.",
  },

  "Couple Escape": {
    title: "THE ESCAPE SEEKER",
    description:
      "You look for beautiful places, peaceful moments and experiences worth sharing.",
  },
};

const getJourneyResult = (answers = journeyAnswers) => {
  if (!tourPackages.length) {
    return null;
  }

  const scoringRules = {
    mood: {
      "Mountains & Nature": [
        "mountain",
        "nature",
        "hill",
        "valley",
        "forest",
        "lake",
        "waterfall",
        "trek",
      ],

      "Peace & Spirituality": [
        "spiritual",
        "temple",
        "dham",
        "devta",
        "darshan",
        "ashram",
        "peace",
        "mahadev",
        "mandir",
      ],

      Adventure: [
        "adventure",
        "trek",
        "waterfall",
        "rafting",
        "camp",
        "camping",
        "explore",
      ],

      "Family Escape": [
        "family",
        "sightseeing",
        "lake",
        "market",
        "temple",
        "nature",
      ],

      "Couple Escape": [
        "lake",
        "mountain",
        "nature",
        "peace",
        "romantic",
        "valley",
        "sunset",
      ],
    },

    priority: {
      Nature: [
        "nature",
        "mountain",
        "forest",
        "lake",
        "valley",
        "waterfall",
      ],

      Spirituality: [
        "temple",
        "dham",
        "devta",
        "darshan",
        "ashram",
        "spiritual",
        "mahadev",
        "mandir",
      ],

      Sightseeing: [
        "sightseeing",
        "mall road",
        "market",
        "lake",
        "temple",
        "view",
      ],

      Adventure: [
        "adventure",
        "trek",
        "waterfall",
        "rafting",
        "camp",
        "explore",
      ],

      Culture: [
        "culture",
        "market",
        "temple",
        "heritage",
        "local",
      ],
    },

    pace: {
      "Slow & Relaxed": [
        "peace",
        "relax",
        "peaceful",
        "lake",
        "ashram",
        "temple",
      ],

      Balanced: [
        "sightseeing",
        "temple",
        "lake",
        "market",
        "nature",
      ],

      "Full of Experiences": [
        "sightseeing",
        "adventure",
        "trek",
        "waterfall",
        "temple",
        "market",
        "explore",
      ],
    },

    companion: {
      Solo: [
        "solo",
        "spiritual",
        "peace",
        "trek",
        "nature",
      ],

      Couple: [
        "lake",
        "mountain",
        "nature",
        "peace",
        "valley",
      ],

      Friends: [
        "adventure",
        "trek",
        "waterfall",
        "camp",
        "explore",
      ],

      Family: [
        "sightseeing",
        "lake",
        "temple",
        "market",
        "nature",
      ],
    },
  };

  let bestTour = tourPackages[0];
  let bestScore = -1;

  tourPackages.forEach((tour) => {
    const tourText = `
      ${tour.name || ""}
      ${tour.description || ""}
      ${tour.route || ""}
      ${tour.starting_point || ""}
      ${JSON.stringify(tour.itinerary || [])}
      ${JSON.stringify(tour.inclusions || [])}
    `.toLowerCase();

    let score = 0;

    Object.entries(answers).forEach(
      ([answerKey, answerValue]) => {
        if (!answerValue) return;

        const keywords =
          scoringRules[answerKey]?.[answerValue] || [];

        keywords.forEach((keyword) => {
          if (tourText.includes(keyword.toLowerCase())) {
            score += 2;
          }
        });
      }
    );

    if (
      answers.mood === "Peace & Spirituality" &&
      tour.name?.toLowerCase() === "spiritual escape"
    ) {
      score += 5;
    }

    if (
      answers.priority === "Spirituality" &&
      tour.name?.toLowerCase() === "spiritual escape"
    ) {
      score += 5;
    }

    if (score > bestScore) {
      bestScore = score;
      bestTour = tour;
    }
  });

  const profile =
    journeyProfiles[answers.mood] ||
    journeyProfiles["Mountains & Nature"];

  return {
    profile,
    tour: bestTour,
  };
};

const handleJourneyAnswer = (answer) => {
  const question = journeyQuestions[journeyStep];

  const updatedAnswers = {
    ...journeyAnswers,
    [question.key]: answer,
  };

  setJourneyAnswers(updatedAnswers);

  if (journeyStep < journeyQuestions.length - 1) {
    setJourneyStep((previous) => previous + 1);
    return;
  }

  const result = getJourneyResult(updatedAnswers);

  setJourneyResult(result);
};

const handleEnquirySubmit = async (e) => {
  e.preventDefault();

  setEnquirySubmitting(true);
  setEnquiryMessage("");

  const form = new FormData(e.target);

  const enquiryData = {
    name: form.get("name"),
    phone: form.get("phone"),
    email: form.get("email"),
    tour_name: selectedTour?.name || "Spiritual Escape",
    travel_date: form.get("travel_date") || null,
    travelers: Number(form.get("travelers")) || 1,
    message: form.get("message") || "",
    status: "New",
  };

  const { error } = await supabase
    .from("enquiries")
    .insert([enquiryData]);

  if (error) {
    console.error("Enquiry submission error:", error);

    setEnquiryMessage(
      "Something went wrong. Please try again."
    );

    setEnquirySubmitting(false);
    return;
  }

  setEnquiryMessage(
    "Thank you! Your enquiry has been submitted successfully."
  );

  e.target.reset();

  setTimeout(() => {
    setShowEnquiryForm(false);
    setEnquiryMessage("");
    setSelectedTour(null);
  }, 1800);

  setEnquirySubmitting(false);
};

return (
    <div className="app">
     {/* ================= NAVBAR ================= */}
<header className="navbar">
  <div className="navbar-inner">

    {/* LOGO */}
    <button
      className="brand"
      onClick={() => scrollToSection("home")}
      aria-label="Roots to Routes Home"
    >
      <img
        src="/images/roots-to-routes-logo.png"
        alt="Roots to Routes - Tours & Travel"
        className="brand-logo"
      />
    </button>

    {/* NAVIGATION */}
    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

      <button
        onClick={() => {
          scrollToSection("home");
          closeMenu();
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          scrollToSection("tours");
          closeMenu();
        }}
      >
        Tours
      </button>

      <button
        onClick={() => {
          scrollToSection("destinations");
          closeMenu();
        }}
      >
        Destinations
      </button>

      <button
        onClick={() => {
          scrollToSection("about");
          closeMenu();
        }}
      >
        About
      </button>

      <button
        onClick={() => {
          scrollToSection("contact");
          closeMenu();
        }}
      >
        Contact
      </button>

    </nav>

    {/* PLAN MY TRIP */}
    <button
      className="nav-cta"
      onClick={() =>
        openWhatsApp(
          "Hello Roots to Routes, I am interested in your tour packages."
        )
      }
    >
      Plan My Trip
      <ArrowRight size={17} />
    </button>

    {/* MOBILE MENU */}
    <button
      className="mobile-menu"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation"
    >
      {menuOpen ? <X size={25} /> : <Menu size={25} />}
    </button>

  </div>
</header>

      {/* ================= HERO ================= */}
      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="eyebrow">ROOTS TO ROUTES • TOURS & TRAVEL</p>

            <h1>
              Explore More.
              <br />
              <span>Live More.</span>
            </h1>

            <p className="hero-description">
              Discover breathtaking mountains, peaceful destinations and
              unforgettable journeys designed for the people who love to
              travel.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("tours")}
              >
                Explore Tours
                <ArrowRight size={18} />
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("about")}
              >
                Discover Roots to Routes
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-location">
              <span className="location-line"></span>
              <span>HIMALAYAN EXPERIENCES</span>
            </div>

            <div className="scroll-indicator">
              Scroll to explore
              <ChevronDown size={17} />
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="intro section">
          <div className="section-container intro-grid">
            <div className="intro-heading">
              <p className="section-label">THE JOURNEY</p>

              <h2>
                Every road has a story.
                <br />
                <span>Let's make yours memorable.</span>
              </h2>
            </div>

            <div className="intro-text">
              <p>
                At <strong>Roots to Routes</strong>, we believe travel is more
                than reaching a destination. It is about the roads you take,
                the people you meet and the moments you carry back home.
              </p>

              <p>
                From peaceful mountain towns to spiritual escapes, we create
                thoughtfully planned journeys that let you experience every
                destination at its best.
              </p>

              <button
                className="text-button"
                onClick={() => scrollToSection("about")}
              >
                Our Story
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
        
{/* ================= FIND YOUR JOURNEY ================= */}
<section className="journey-match-section section">
  <div className="section-container">

    <div className="journey-match-intro">

      <div className="journey-match-copy">
        <p className="section-label">THE ROOTS TO ROUTES WAY</p>

        <h2>
          Tell us how you <span>travel.</span>
        </h2>

        <p>
          Not sure where to go? Answer five simple questions and
          discover the journey that fits you.
        </p>
      </div>

      <button
        className="journey-match-button"
        onClick={() => {
          setJourneyStep(0);
          setJourneyAnswers({
            mood: "",
            companion: "",
            pace: "",
            priority: "",
            budget: "",
          });
          setJourneyResult(null);
          setShowJourneyMatch(true);
        }}
      >
        Find My Journey
        <ArrowRight size={18} />
      </button>

    </div>

  </div>

  {/* ================= JOURNEY MATCH POPUP ================= */}
  {showJourneyMatch && (
    <div
      className="journey-modal-overlay"
      onClick={() => setShowJourneyMatch(false)}
    >

      <div
        className="journey-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="journey-modal-close"
          onClick={() => setShowJourneyMatch(false)}
          aria-label="Close"
        >
          ×
        </button>

        {!journeyResult ? (
          <>

            <div className="journey-match-top">

              <div>
                <p className="section-label">
                  FIND YOUR JOURNEY
                </p>

                <h2>
                  {journeyQuestions[journeyStep].question}
                </h2>
              </div>

              <span className="journey-progress">
                {journeyStep + 1} / {journeyQuestions.length}
              </span>

            </div>

            <div className="journey-options">

              {journeyQuestions[journeyStep].options.map(
                (option) => (
                  <button
                    key={option}
                    className="journey-option"
                    onClick={() =>
                      handleJourneyAnswer(option)
                    }
                  >
                    <span>{option}</span>

                    <ArrowRight size={17} />
                  </button>
                )
              )}

            </div>

            {journeyStep > 0 && (
              <button
                className="journey-back-button"
                onClick={() =>
                  setJourneyStep(
                    (previous) => previous - 1
                  )
                }
              >
                ← Back
              </button>
            )}

          </>
        ) : (

          <div className="journey-result">

            <p className="section-label">
              YOUR JOURNEY MATCH
            </p>

            <h2>
              {journeyResult.profile.title}
            </h2>

            <p className="journey-result-description">
              {journeyResult.profile.description}
            </p>

            <div className="journey-result-tour">

              <div>
                <span>
                  WE FOUND A JOURNEY FOR YOU
                </span>

                <h3>
                  {journeyResult.tour?.name ||
                    "Your next adventure"}
                </h3>

                <p>
                  {journeyResult.tour?.duration ||
                    "A journey worth remembering"}

                  {journeyResult.tour?.price
                    ? ` · ₹${Number(
                        journeyResult.tour.price
                      ).toLocaleString("en-IN")} / person`
                    : ""}
                </p>
              </div>

              <button
                className="journey-result-button"
                onClick={() => {
                  setSelectedTour(
                    journeyResult.tour
                  );

                  setEnquiryMessage("");

                  setShowEnquiryForm(true);

                  setShowJourneyMatch(false);
                }}
              >
                Explore This Journey
                <ArrowUpRight size={17} />
              </button>

            </div>

            <button
              className="journey-restart"
              onClick={() => {
                setJourneyStep(0);

                setJourneyAnswers({
                  mood: "",
                  companion: "",
                  pace: "",
                  priority: "",
                  budget: "",
                });

                setJourneyResult(null);
              }}
            >
              Start Again
            </button>

          </div>

        )}

      </div>

    </div>
  )}

</section>
{/* ================= TRAVEL SHAYARI ================= */}
<section className="travel-shayari-section">

  <div className="travel-shayari-inner">

    <span className="travel-shayari-label">
      सफ़रनामा
    </span>

    <div className="travel-shayari-line"></div>

    <h2>
      कुछ सफ़र मंज़िल के लिए नहीं,<br />
      दोस्तों के साथ बिताए उन पलों के लिए होते हैं,<br />
      जिन्हें ज़िंदगी भर याद रखा जाता है।
    </h2>

    <p>
      हर रास्ता एक कहानी छोड़ जाता है।
    </p>

  </div>

</section>

     {/* ================= FEATURED TOUR ================= */}
<section className="tours section dark-section" id="tours">
  <div className="container">
    <div className="section-heading-row">
      <div>
        <span className="eyebrow">FEATURED JOURNEY</span>

        <h2>
          {featuredTour?.name || "Spiritual Escape"}
        </h2>
      </div>

      <div className="tour-meta">
        <div>
          <span>Duration</span>
          <strong>
            {featuredTour?.duration || "3 Days / 2 Nights"}
          </strong>
        </div>

        <div>
          <span>Starting from</span>
          <strong>
            ₹
            {featuredTour
              ? Number(featuredTour.price).toLocaleString("en-IN")
              : "5,999"}
          </strong>
          <small> / person</small>
        </div>
      </div>
    </div>

    <p className="section-description">
      {featuredTour?.description ||
        "A peaceful journey through the spiritual and scenic beauty of Uttarakhand."}
    </p>

    <div className="spiritual-journey">

      {/* Nainital */}
      <div className="journey-place">
        <img
          src="https://nainitaltourism.org.in/images/v2/places-to-visit/the-mall-road-nainital-tourism-header.jpg"
          alt="Nainital"
        />

        <div className="journey-overlay"></div>

        <div className="journey-content">
          <span>SCENIC ESCAPE</span>

          <h3>Nainital</h3>

          <p>
            Naini Lake, Mall Road, Naina Devi Temple & more
          </p>
        </div>
      </div>

      <div className="journey-arrow">
        <ArrowRight size={18} />
      </div>

      {/* Kainchi Dham */}
      <div className="journey-place">
        <img
          src="https://i.pinimg.com/originals/d0/50/d2/d050d21d077ea13a7903d44b04981a8f.jpg"
          alt="Kainchi Dham"
        />

        <div className="journey-overlay"></div>

        <div className="journey-content">
          <span>SPIRITUAL RETREAT</span>

          <h3>Kainchi Dham</h3>

          <p>
            Darshan, Ashram visit & peaceful moments
          </p>
        </div>
      </div>

      <div className="journey-arrow">
        <ArrowRight size={18} />
      </div>

      {/* Jageshwar */}
      <div className="journey-place">
        <img
          src="https://thumbs.dreamstime.com/b/jageshwar-dham-group-temples-dedicated-to-lord-shiva-jageshwar-dham-jyotirlinga-almora-uttarakhand-253108164.jpg"
          alt="Jageshwar Dham"
        />

        <div className="journey-overlay"></div>

        <div className="journey-content">
          <span>ANCIENT HERITAGE</span>

          <h3>Jageshwar</h3>

          <p>
            Ancient temples surrounded by peaceful deodar forests
          </p>
        </div>
      </div>

    </div>

    {/* Route */}
    <div className="spiritual-tour-footer">
      <div className="tour-route">
        <span>NOIDA</span>
        <ArrowRight size={14} />

        <span>GAJRAULA</span>
        <ArrowRight size={14} />

        <span>KAINCHI DHAM</span>
        <ArrowRight size={14} />

        <span>CHITAI GOLU DEVTA</span>
        <ArrowRight size={14} />

        <span>JAGESHWAR</span>
        <ArrowRight size={14} />

        <span>BHOWALI</span>
        <ArrowRight size={14} />

        <span>MUKTESHWAR</span>
        <ArrowRight size={14} />

        <span>NAINITAL</span>
        <ArrowRight size={14} />

        <span>NOIDA</span>
      </div>

      <button
        className="tour-enquire-button"
        onClick={() => {
          setSelectedTour(featuredTour);
          setEnquiryMessage("");
          setShowEnquiryForm(true);
        }}
      >
        Plan This Journey
        <ArrowUpRight size={17} />
      </button>
    </div>
  </div>
</section>


{/* ================= ALL TOUR PACKAGES ================= */}
<section className="all-tours section">
  <div className="section-container">

    <div className="section-heading-row">
      <div>
        <p className="section-label">EXPLORE OUR TOURS</p>

        <h2>
          Choose your <span>journey.</span>
        </h2>
      </div>

      <p className="section-heading-description">
        Explore our carefully planned journeys and find the experience
        that feels right for you.
      </p>
    </div>

    <div className="destination-grid">

      {tourPackages.map((tour) => (
        <article className="destination-card" key={tour.id}>

          <img
            src={
              tour.cover_image ||
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85"
            }
            alt={tour.name}
          />

          <div className="destination-overlay"></div>

          <div className="destination-content">

            <span className="destination-number">
              TOUR
            </span>

            <h3>
              {tour.name}
            </h3>

            <p>
              {tour.duration || "Custom Journey"}
              {tour.price
                ? ` · ₹${Number(tour.price).toLocaleString("en-IN")} / person`
                : ""}
            </p>

            <button
              className="destination-explore"
              onClick={() => {
                setSelectedTour(tour);
                setEnquiryMessage("");
                setShowEnquiryForm(true);
              }}
            >
              <span>
                Plan this journey
              </span>

              <ArrowRight size={17} />
            </button>

          </div>

        </article>
      ))}

    </div>

  </div>
</section>
      
      
{/* ================= DESTINATIONS ================= */}
<section className="destinations section" id="destinations">
  <div className="section-container">

    {/* DESTINATIONS HEADER */}
    <div className="section-heading-row destinations-heading">
      <div>
        <p className="section-label">
          WHERE WE TAKE YOU
        </p>

        <h2>
          Find your <span>escape.</span>
        </h2>
      </div>

      <p className="section-heading-description">
        Discover places where the mountains feel closer, time moves slower,
        and every journey becomes a story worth remembering.
      </p>
    </div>

    {/* DESTINATION CARDS */}
    <div className="destination-grid">

      {destinations.map((destination, index) => (
        <article
          className="destination-card"
          key={destination.name}
        >
          {/* IMAGE */}
          <img
            src={destination.image}
            alt={`${destination.name} destination`}
          />

          {/* DARK OVERLAY */}
          <div className="destination-overlay"></div>

          {/* CARD CONTENT */}
          <div className="destination-content">

            <span className="destination-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              {destination.name}
            </h3>

            <p>
              {destination.subtitle}
            </p>

            <button
              className="destination-explore"
              onClick={() =>
                openWhatsApp(
                  `Hello Roots to Routes, I would like to know more about trips to ${destination.name}.`
                )
              }
            >
              <span>
                Explore destination
              </span>

              <ArrowRight size={17} />
            </button>

          </div>
        </article>
      ))}

    </div>
  </div>
</section>

      {/* ================= ABOUT ================= */}
<section className="about section dark-section" id="about">
  <div className="section-container about-grid">

    {/* ABOUT IMAGE */}
    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85"
        alt="Himalayan mountain landscape"
      />

      <div className="about-image-card">
        <Mountain size={23} />
        <span>Journeys rooted in experience.</span>
      </div>
    </div>

    {/* ABOUT CONTENT */}
    <div className="about-content">

      <p className="section-label">ABOUT ROOTS TO ROUTES</p>

      <h2>
        More than a destination.
        <br />
        <span>A journey worth remembering.</span>
      </h2>

      <p>
        At Roots to Routes, we believe travel is not just about reaching
        a destination. It is about the roads you take, the people you meet,
        the places you discover and the memories you bring back.
      </p>

      <p>
        From peaceful mountain escapes to spiritual journeys, we create
        thoughtfully planned trips that balance exploration, comfort and
        authentic experiences.
      </p>

      {/* ABOUT STATS */}
      <div className="about-stats">

        <div>
          <strong>01</strong>
          <span>Thoughtfully planned journeys</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Comfortable & reliable travel</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Experiences worth remembering</span>
        </div>

      </div>

      {/* CTA */}
<button
  className="primary-button"
  onClick={() => {
    window.location.href = "/founders";
  }}
>
  Meet the Founders
  <ArrowRight size={18} />
</button>
    </div>

  </div>
</section>

       {/* ================= TESTIMONIAL ================= */}
<section className="testimonial section">
  <div className="section-container">

    <div className="testimonial-heading">
      <p className="section-label">TRAVELLER STORIES</p>

      <h2>
        Stories from the
        <br />
        <span>road.</span>
      </h2>
    </div>

    <div className="testimonial-inner">

      <div className="quote-mark">“</div>

      <div className="stars">
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
      </div>

      <blockquote>
        The mountains were beautiful, but the journey made the trip
        unforgettable. Everything was planned perfectly and we could
        simply enjoy every moment.
      </blockquote>

      <div className="testimonial-divider"></div>

      <p className="testimonial-author">
        A happy traveller
      </p>

      <p className="testimonial-location">
        Spiritual Escape · Uttarakhand
      </p>

    </div>

  </div>
</section>
</main>
      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="section-container footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-title">
              </div>
  <img
    src="/images/roots-to-routes-logo.png"
    alt="Roots to Routes"
    className="footer-brand-logo"
  />

  <div className="footer-brand-text">
    <strong>ROOTS TO ROUTES</strong>
    <span>TOURS & TRAVEL</span>
  </div>
</div>

            <p>
              Explore more. Live more.
              <br />
              Your journey starts here.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("tours")}>
              Tours
            </button>

            <button onClick={() => scrollToSection("destinations")}>
              Destinations
            </button>

            <button onClick={() => scrollToSection("about")}>
              About Us
            </button>
          </div>

          <div className="footer-column">
  <h4>Contact</h4>

  <a href="tel:+919762783101">
    +91 97627 83101
  </a>

  <a href="mailto:rootstoroutes101@gmail.com">
    rootstoroutes101@gmail.com
  </a>

  <span>New Delhi, India</span>
</div>

          <div className="footer-column">
  <h4>Start Planning</h4>

  <p>
    Have a destination in mind?
    <br />
    Let's make it happen.
  </p>

  <div className="footer-social-buttons">

    <button
      className="footer-whatsapp"
      onClick={() =>
        openWhatsApp(
          "Hello Roots to Routes, I want to plan a trip."
        )
      }
    >
      WhatsApp Us
      <ArrowRight size={16} />
    </button>

    <button
      className="footer-instagram"
      onClick={openInstagram}
    >
      Instagram
      <ArrowUpRight size={16} />
    </button>

  </div>
</div>
        <div className="footer-bottom section-container">
          <span>
            © {new Date().getFullYear()} Roots to Routes. All rights reserved.
          </span>

          <span>
            Crafted for travellers.
          </span>
        </div>
      </footer>
            

      {showEnquiryForm && (
        <div
          className="enquiry-form-backdrop"
          onClick={() => setShowEnquiryForm(false)}
        >
          <div
            className="enquiry-form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="enquiry-form-header">
              <div>
                <p className="enquiry-form-eyebrow">
                  PLAN YOUR JOURNEY
                </p>

                <h2>Send an Enquiry</h2>

                <p>
                  {selectedTour?.name ||
                    "Spiritual Escape"}
                </p>
              </div>

              <button
                className="enquiry-close-button"
                onClick={() => setShowEnquiryForm(false)}
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleEnquirySubmit}>
              <div className="enquiry-form-grid">
                <div className="enquiry-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="enquiry-field">
                  <label>Travel Date</label>
                  <input
                    type="date"
                    name="travel_date"
                  />
                </div>

                <div className="enquiry-field">
                  <label>Number of Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    min="1"
                    defaultValue="1"
                    required
                  />
                </div>
              </div>

              <div className="enquiry-field">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us anything you'd like us to know..."
                />
              </div>

              {enquiryMessage && (
                <div className="enquiry-form-message">
                  {enquiryMessage}
                </div>
              )}

              <button
                type="submit"
                className="enquiry-submit-button"
                disabled={enquirySubmitting}
              >
                {enquirySubmitting
                  ? "Submitting..."
                  : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
  




export default App;