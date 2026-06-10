const fs = require('fs');

// 1. Modify index.html
let html = fs.readFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', 'utf8');

const newSection = `
    <!-- ═══════════ STUNNING DESTINATIONS SECTION (TRIPKART STYLE) ═══════════ -->
    <section class="stunning-destinations">
      <div class="sd-header">
         <div class="sd-cursive">Discover</div>
         <h2 class="sd-massive-text">HIMALAYAS</h2>
      </div>
      
      <div class="sd-cards">
         <!-- Card 1: Darjeeling Hills -->
         <div class="sd-card sd-card-1">
            <div class="sd-card-content">
               <h3>Darjeeling Hills</h3>
               <p>Explore misty tea gardens and hidden trails.</p>
            </div>
            <div class="sd-card-image">
               <img src="/dest-darjeeling.png" alt="Darjeeling Hills">
            </div>
         </div>

         <!-- Card 2: Kalimpong Hills -->
         <div class="sd-card sd-card-2">
            <div class="sd-card-content">
               <h3>Kalimpong Hills</h3>
               <p>Serene monasteries and panoramic valley views.</p>
            </div>
            <div class="sd-card-image">
               <img src="/dest-kalimpong.png" alt="Kalimpong Hills">
            </div>
         </div>

         <!-- Card 3: Dooars -->
         <div class="sd-card sd-card-3">
            <div class="sd-card-content">
               <h3>Dooars</h3>
               <p>Into the wild — dense forests and river camps.</p>
            </div>
            <div class="sd-card-image">
               <img src="/dest-dooars.png" alt="Dooars">
            </div>
         </div>

         <!-- Card 4: Sikkim -->
         <div class="sd-card sd-card-4">
            <div class="sd-card-content">
               <h3>Sikkim</h3>
               <p>Snow-capped peaks and vibrant Buddhist culture.</p>
            </div>
            <div class="sd-card-image">
               <img src="/dest-sikkim.png" alt="Sikkim">
            </div>
         </div>
      </div>
      
      <div class="sd-footer">
         <div class="sd-contact">+91 9907478236</div>
         <a href="/destinations.html" class="sd-book-btn">Book Now</a>
         <div class="sd-email">hello@callinghills.com</div>
      </div>
    </section>
`;

// Insert after trust-bar
const insertPoint = html.indexOf('</section>', html.indexOf('id="trust-bar"')) + 10;
// We also want to clear out any old commented sections from 162 to footer
const footerStart = html.indexOf('<!-- ═══════════ SECTION 10 — FOOTER ═══════════ -->');

html = html.substring(0, insertPoint) + '\n' + newSection + '\n' + html.substring(footerStart);

fs.writeFileSync('e:/ACTUAL PROJECTS/calling hills/index.html', html);

// 2. Append CSS
const css = `
/* ==========================================================================
   STUNNING DESTINATIONS (TRIPKART STYLE)
   ========================================================================== */
.stunning-destinations {
    padding: 100px 20px;
    background: #ffffff;
    position: relative;
    overflow: hidden;
}

.stunning-destinations::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/hero-bg.png') center/cover no-repeat;
    opacity: 0.15;
    pointer-events: none;
}

.sd-header {
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: 60px;
}

.sd-cursive {
    font-family: 'Cormorant Garamond', serif;
    font-size: 70px;
    font-style: italic;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    margin-bottom: -60px;
    position: relative;
    z-index: 3;
    font-weight: 600;
}

.sd-massive-text {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(80px, 16vw, 220px);
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
    letter-spacing: -2px;
    
    background: url('/dest-sikkim.png') center 30%/cover no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 2px #333;
    filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.2));
}

.sd-cards {
    position: relative;
    z-index: 2;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.sd-card {
    display: flex;
    align-items: center;
    height: 180px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 85%;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sd-card:hover {
    transform: translateY(-8px) scale(1.02);
}

.sd-card-1 {
    background: linear-gradient(135deg, #1aa3a3, #085a5a);
    align-self: flex-start;
}
.sd-card-2 {
    background: linear-gradient(135deg, #66b3ff, #005ce6);
    align-self: flex-end;
}
.sd-card-3 {
    background: linear-gradient(135deg, #1a75ff, #003d99);
    align-self: flex-start;
}
.sd-card-4 {
    background: linear-gradient(135deg, #a64dff, #4d0099);
    align-self: flex-end;
}

.sd-card-content {
    flex: 1;
    padding: 30px 40px;
    color: white;
    z-index: 2;
}

.sd-card-content h3 {
    font-size: 36px;
    margin: 0 0 5px 0;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.4);
    font-family: 'DM Sans', sans-serif;
}

.sd-card-content p {
    font-size: 18px;
    opacity: 0.95;
    margin: 0;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
}

.sd-card-image {
    width: 45%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-mask-image: linear-gradient(to right, transparent, black 30%);
    mask-image: linear-gradient(to right, transparent, black 30%);
}

.sd-card-2 .sd-card-image, .sd-card-4 .sd-card-image {
    right: auto;
    left: 0;
    -webkit-mask-image: linear-gradient(to left, transparent, black 30%);
    mask-image: linear-gradient(to left, transparent, black 30%);
}

.sd-card-2 .sd-card-content, .sd-card-4 .sd-card-content {
    text-align: right;
    margin-left: auto;
    flex: none;
    width: 55%;
}

.sd-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: normal;
}

.sd-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 60px auto 0 auto;
    position: relative;
    z-index: 2;
    padding: 0 20px;
}

.sd-contact, .sd-email {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    font-family: 'DM Sans', sans-serif;
}

.sd-book-btn {
    background: #ffb703;
    color: #023047;
    font-weight: 800;
    font-size: 20px;
    padding: 16px 56px;
    border-radius: 8px;
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: 0 8px 15px rgba(255, 183, 3, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-family: 'DM Sans', sans-serif;
}

.sd-book-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(255, 183, 3, 0.6);
}

@media (max-width: 768px) {
    .sd-card {
        width: 100%;
        flex-direction: column;
        height: auto;
    }
    .sd-card-1, .sd-card-2, .sd-card-3, .sd-card-4 {
        align-self: center;
    }
    .sd-card-image {
        position: relative;
        width: 100%;
        height: 180px;
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%);
        mask-image: linear-gradient(to bottom, transparent, black 30%);
    }
    .sd-card-2 .sd-card-image, .sd-card-4 .sd-card-image {
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%);
        mask-image: linear-gradient(to bottom, transparent, black 30%);
    }
    .sd-card-content, .sd-card-2 .sd-card-content, .sd-card-4 .sd-card-content {
        width: 100%;
        text-align: center;
        margin: 0;
    }
    .sd-footer {
        flex-direction: column;
        gap: 20px;
    }
}
`;

fs.appendFileSync('e:/ACTUAL PROJECTS/calling hills/css/main.css', css);

console.log('Update complete!');
