import React, {useState} from 'react';

function Tour() {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    document.getElementById("hide").style.display = "none";
    setShowText(true);
  };

  const handleHideText = () => {
    document.getElementById("hide").style.display = "inline";
    setShowText(!showText);
  };

  return <>
    <section>
      <h1 className="tour-heading">Our Tours</h1>
      <hr/>
      <article id="1" className="card tour-body">
          <img src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
            className="card-img-top" 
            alt="Paris, France" 
           />
          <div className="tour-content card-body">
            <div className="header-price">
              <h5 className="content-header">Best Of Paris In 7 Days Tour</h5>
              <h4 className="price">$1,995</h4>
            </div>
          <p className="card-text">
          Paris is synonymous with the finest things that culture can offer — 
          in art, fashion, food, literature, and ideas. On this tour, 
          your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: 
          <button id="hide" className="show-text" onClick={handleShowText}>...Read More </button>
          {showText && <p className="reveal-text">
             the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, 
            exquisite Sainte-Chapelle, and extravagant Palace of Versailles. 
            You'll also enjoy guided neighborhood walks through the city's historic heart 
            as well as quieter moments to slow down and savor the city's intimate cafés, 
            colorful markets, and joie de vivre. 
            Join us for the Best of Paris in 7 Days!
          <button id="hide" className="show-text" onClick={handleHideText}>...Show Less</button>
            </p>} 
          </p>
          <button onClick={() => {document.getElementById("1").style.display = "none"}} className="interest">Not Interested</button>
          </div>
      </article>
       
      <article id="2" className="card tour-body">
          <img src="https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg"
            className="card-img-top" 
            alt="Dublin, Ireland" 
           />
          <div className="tour-content card-body">
          <div className="header-price">
              <h5 className="content-header">Best Of Ireland In 14 Days Tour</h5>
              <h4 className="price">$3,895</h4>
          </div>
          <p className="card-text">
          Rick Steves' Best of Ireland tour kicks off with the best of Dublin, 
          followed by Ireland's must-see historical sites, charming towns, 
          music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, 
          <button id="hide-2" className="show-text" onClick={() => {
            document.getElementById("hide-2").style.display = "none";
            setShowText(true);
          }}
          >
            ...Read More 
          </button>
          {showText && <p className="reveal-text">
          the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, 
          and the compelling city of Belfast. All along the way, 
          Rick's guides will share their stories to draw you in to the Emerald Isle, 
          and the friendliness of the people will surely steal your heart. 
          Join us for the Best of Ireland in 14 Days! 
          <button id="hide-2" className="show-text" 
          onClick={() => {
            document.getElementById("hide-2").style.display = "inline";
            setShowText(false);
          }}
          >...Show Less</button>
          </p>} 
          </p>
          <button onClick={() => {document.getElementById("2").style.display = "none"}} className="interest">Not Interested</button>
          </div>
      </article>

      <article id="3" className="card tour-body">
          <img src="https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg"
            className="card-img-top" 
            alt="Munich, Salzburg" 
           />
          <div className="tour-content card-body">
          <div className="header-price">
              <h5 className="content-header">Best Of Salzburg & Vienna In 8 Days Tour</h5>
              <h4 className="price">$2,695</h4>
          </div>
          <p className="card-text">
              Let's go where classical music, towering castles, 
              and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. 
              <button id="hide-3" className="show-text" onClick={() => {
                document.getElementById("hide-3").style.display = "none";
                setShowText(true);
                }}
              >
                ...Read More 
              </button> 
              
              {showText && <p className="reveal-text">
                Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, 
                Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — 
                with cozy villages and alpine vistas all along the way. 
                Join us for the Best of Munich, Salzburg & Vienna in 8 Days! 
              <button id="hide-3" className="show-text" 
              onClick={() => {
                document.getElementById("hide-3").style.display = "inline";
                setShowText(false);
              }}
              >...Show Less</button>
              </p>} 
              </p>
              <button onClick={() => {document.getElementById("3").style.display = "none"}} className="interest">Not Interested</button>
          </div>
      </article>      

      <article id="4" className="card tour-body">
          <img src="https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg"
            className="card-img-top" 
            alt="Rome, Italy" 
           />
          <div className="tour-content card-body">
          <div className="header-price">
              <h5 className="content-header">Best Of Rome In 7 Days Tour</h5>
              <h4 className="price">$2,095</h4>
          </div>
          <p className="card-text">
              Our Rome tour serves up Europe's most intoxicating brew of dazzling art, 
              earth-shaking history, and city life with style. On this Rome vacation, 
              your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, 
              <button id="hide-4" className="show-text" onClick={() => {
                document.getElementById("hide-4").style.display = "none";
                setShowText(true);
                }}
              >
                ...Read More 
              </button> 
              {showText && <p className="reveal-text">
                and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, 
                the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, 
                with neighborhood walking tours, memorable restaurants, and time to explore on your own. 
                Join us for the Best of Rome in 7 Days!
              <button id="hide-4" className="show-text" 
              onClick={() => {
                document.getElementById("hide-4").style.display = "inline";
                setShowText(false);
              }}
              >...Show Less</button>
              </p>} 
              </p>
              <button onClick={() => {document.getElementById("4").style.display = "none"}} className="interest">Not Interested</button>
          </div>
      </article>      

      <article id="5" className="card tour-body">
          <img src="https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg"
            className="card-img-top" 
            alt="Gdańsk, Poland" 
           />
          <div className="tour-content card-body">
          <div className="header-price">
              <h5 className="content-header">Best Of Poland In 10 Days Tour</h5>
              <h4 className="price">$2,595</h4>
          </div>
          <p className="card-text">
              Starting in the colorful port city of Gdańsk, 
              you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. 
              With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle,
              <button id="hide-5" className="show-text" onClick={() => {
                document.getElementById("hide-5").style.display = "none";
                setShowText(true);
                }}
              >
                ...Read More 
              </button> 
              {showText && <p className="reveal-text">
                  the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, 
                  the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. 
                  In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. 
                  Join us for the Best of Poland in 10 Days!
              <button id="hide-5" className="show-text" 
              onClick={() => {
                document.getElementById("hide-5").style.display = "inline";
                setShowText(false);
              }}
              >...Show Less</button>
              </p>} 
              </p>
              <button onClick={() => {document.getElementById("5").style.display = "none"}} className="interest">Not Interested</button>
          </div>
      </article>
    </section>
  </>  
}

export default Tour;