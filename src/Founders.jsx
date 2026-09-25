import { ArrowLeft, ArrowRight, Mountain } from "lucide-react";
import "./App.css";

const whatsappNumber = "919762783101";

function openWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

export default function Founders() {
  return (
    <div className="founders-page">

      {/* NAVBAR */}
      <header className="founders-navbar">
        <div className="founders-navbar-inner">

          <button
            className="founders-logo-button"
            onClick={() => {
              window.location.href = "/";
            }}
            aria-label="Go to homepage"
          >
            <img
              src="/images/roots-to-routes-logo.png"
              alt="Roots to Routes"
            />
          </button>

          <button
            className="founders-back-button"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <ArrowLeft size={15} />
            Back to Home
          </button>

        </div>
      </header>


      {/* HERO */}
      <section className="founders-hero">
        <div className="founders-hero-content">

          <p className="founders-eyebrow">
            THE PEOPLE BEHIND THE JOURNEY
          </p>

          <h1>
            Where the
            <br />
            <span>journey begins.</span>
          </h1>

          <p className="founders-hero-description">
            Roots to Routes was born from a simple dream — to explore,
            experience, and create journeys that people remember for life.
          </p>

          <div className="founders-hero-line" />

        </div>
      </section>


      {/* OUR STORY */}
      <section className="founders-story">
        <div className="founders-container">

          <div className="founders-section-intro">
            <p className="founders-section-label">
              OUR STORY
            </p>

            <h2>
              From a dream
              <br />
              <span>to a journey.</span>
            </h2>
          </div>

          <div className="founders-story-content">

            <p>
              Roots to Routes Tours & Travel was founded by{" "}
              <strong>Vansh Kumar</strong>, with{" "}
              <strong>Adv. Yogesh Dev Gola</strong> as Co-Founder — two
              people who always dreamed of exploring new places,
              experiencing different cultures, and creating unforgettable
              journeys.
            </p>

            <p>
              But like many of us, their families often said{" "}
              <em>"Trips baad mein, pehle responsibilities."</em>
              <br />
              So, instead of giving up on their passion, they decided to
              turn it into their profession.
            </p>

            <p>
              As the saying goes,{" "}
              <em>
                "Turn your wishes into your profession, and work will feel
                like an adventure."
              </em>
            </p>

            <p>
              And that's how <strong>Roots to Routes</strong> was born —
              turning our love for travel into journeys for others.
            </p>

          </div>

        </div>
      </section>


      {/* FOUNDERS */}
      <section className="founders-profiles">

        <div className="founders-container">

          <div className="founders-heading-centered">
            <p className="founders-section-label">
              MEET THE FOUNDERS
            </p>

            <h2>
              The people behind
              <br />
              <span>Roots to Routes.</span>
            </h2>
          </div>


          {/* VANSH */}
          <article className="founder-profile founder-profile-vansh">

            <div className="founder-photo-wrapper">
              <img
                className="founder-photo"
                src="/images/vansh-kumar.jpg"
                alt="Vansh Kumar, Founder of Roots to Routes"
              />

              <span className="founder-photo-number">
                01
              </span>
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

              <div className="founder-divider" />

              <p>
                Vansh Kumar is an entrepreneur and travel enthusiast with
                a background in BBA and professional experience across
                sales, customer service, and quality operations. His
                experience working with people, understanding customer
                needs, and building professional relationships has shaped
                his approach to business.
              </p>

              <p>
                Driven by his passion for exploring new places and
                creating memorable experiences, he founded Roots to
                Routes to turn his love for travel into a profession —
                while helping others discover new destinations and
                create stories of their own.
              </p>

              <blockquote>
                "Don't just dream about the journey — create it."
              </blockquote>

            </div>

          </article>


          {/* YOGESH */}
          <article className="founder-profile founder-profile-yogesh">

            <div className="founder-profile-content">

              <p className="founder-role">
                CO-FOUNDER
              </p>

              <h3>
               Adv.Yogesh
                <br />
                Dev Gola
              </h3>

              <p className="founder-title">
                Co-Founder, Roots to Routes Tours & Travel
              </p>

              <div className="founder-divider" />

              <p>
                 Adv.Yogesh Dev Gola is an entrepreneur with a background in
                B.Sc. LL.B. and experience in law, customer handling,
                and business operations. His professional experience
                has helped him develop strong communication skills,
                understand customer needs, and build positive
                relationships with clients.
              </p>

              <p>
                With a good understanding of business management and
                customer service, he plays an active role in the growth
                and development of Roots to Routes Tours & Travel, with
                a focus on providing reliable and memorable travel
                experiences.
              </p>

              <blockquote>
                "Don't just dream about the journey — create it."
              </blockquote>

            </div>

            <div className="founder-photo-wrapper">
              <img
                className="founder-photo"
                src="/images/yogesh-dev-gola.jpg"
                alt="Yogesh Dev Gola, Co-Founder of Roots to Routes"
              />

              <span className="founder-photo-number">
                02
              </span>
            </div>

          </article>

        </div>
      </section>


      {/* VISION */}
      <section className="founders-vision">

        <div className="founders-container founders-vision-inner">

          <p className="founders-section-label">
            OUR VISION
          </p>

          <h2>
            Travel should be
            <br />
            <span>an experience.</span>
          </h2>

          <p className="founders-vision-text">
            At Roots to Routes Tours & Travel, our vision is to make travel
            more than just a trip — we want to make it an experience worth
            remembering.
          </p>

          <p className="founders-vision-text">
            We aim to build a travel brand where people can explore new
            places, experience different cultures, meet new people, and
            create stories they'll carry for life, without compromising on
            comfort, safety, or affordability.
          </p>

          <p className="founders-vision-text">
            Starting from our own dream of exploring the world, we aspire
            to create journeys that help others turn their "someday"
            travel plans into real memories.
          </p>

          <div className="founders-vision-statement">
            <span>More places.</span>
            <span>More experiences.</span>
            <strong>More memories.</strong>
            <span>One route at a time.</span>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="founders-cta">

        <div className="founders-container">

          <p className="founders-section-label">
            YOUR JOURNEY AWAITS
          </p>

          <h2>
            Ready to create
            <br />
            <span>your story?</span>
          </h2>

          <p>
            Let's turn your travel plans into memories worth keeping.
          </p>

          <button
            className="founders-cta-button"
            onClick={() =>
              openWhatsApp(
                "Hello Roots to Routes, I would like to plan a trip."
              )
            }
          >
            Start Your Journey
            <ArrowRight size={17} />
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="founders-footer">

        <div className="founders-container founders-footer-inner">

          <div>
            <strong>ROOTS TO ROUTES</strong>
            <span>TOURS & TRAVEL</span>
          </div>

          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <Mountain size={15} />
            Back to Roots to Routes
          </button>

        </div>

        <div className="founders-footer-bottom">
          © {new Date().getFullYear()} Roots to Routes Tours & Travel.
          All rights reserved.
        </div>

      </footer>

    </div>
  );
}