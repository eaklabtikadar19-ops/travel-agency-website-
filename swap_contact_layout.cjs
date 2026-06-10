const fs = require('fs');

const htmlPath = 'e:/ACTUAL PROJECTS/calling hills/contact.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const newContainerHTML = `        <div class="contact-container">
            <!-- Left Side: Enquiry Form -->
            <div class="contact-left">
                <h2>Let's Plan Your Journey</h2>
                <p style="color: var(--ch-mist); margin-bottom: 30px;">Free consultation. No pressure. Just honest travel advice.</p>
                <div class="contact-form-container">
                    <form class="contact-form" id="contact-form" onsubmit="event.preventDefault(); alert('Enquiry Sent Successfully!');">
                        <div class="form-group">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="Enter your full name" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="Enter your email address" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone / WhatsApp</label>
                            <input type="tel" class="form-control" placeholder="Enter your phone number" required>
                        </div>
                        <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div>
                                <label class="form-label">Destination</label>
                                <select class="form-control" required>
                                    <option value="" disabled selected>Select Area</option>
                                    <option>Darjeeling Hills</option>
                                    <option>Kalimpong Hills</option>
                                    <option>Dooars</option>
                                    <option>Sikkim — North</option>
                                    <option>Sikkim — West</option>
                                    <option>Sikkim — East</option>
                                    <option>Sikkim — South</option>
                                    <option>Trekking</option>
                                    <option>Custom</option>
                                    <option>Not decided yet</option>
                                </select>
                            </div>
                            <div>
                                <label class="form-label">Travellers</label>
                                <input type="number" class="form-control" placeholder="No. of people" min="1" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Travel Month</label>
                            <select class="form-control" required>
                                <option value="" disabled selected>When are you travelling?</option>
                                <option>Flexible</option>
                                <option>January</option><option>February</option><option>March</option>
                                <option>April</option><option>May</option><option>June</option>
                                <option>July</option><option>August</option><option>September</option>
                                <option>October</option><option>November</option><option>December</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Your Message</label>
                            <textarea class="form-control" rows="4" placeholder="Tell us more about your trip requirements..." required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Send Enquiry &rarr;</button>
                    </form>
                </div>
            </div>

            <!-- Right Side: Maps & Contact Info -->
            <div class="contact-right">
                <div class="contact-maps-grid">
                    <div class="map-wrapper">
                        <h4>Darjeeling Office</h4>
                        <div class="map-container-small">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113619.66442651478!2d88.1924527960113!3d27.033190892095404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e654cf501bb%3A0x4175555979d4702a!2sDarjeeling%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1701382400000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="map-wrapper">
                        <h4>Kolkata Office</h4>
                        <div class="map-container-small">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.090547746197!2d88.3592!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a064215cb3%3A0x3342ed2389d023f0!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1701382400000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

                <div class="contact-info" style="margin-top: 40px;">
                    <div class="contact-list">
                        <div class="contact-list-item">
                            <div class="contact-list-icon">📞</div>
                            <div class="contact-list-text">+91 62895 90603<br>+91 91238 43327</div>
                        </div>
                        <div class="contact-list-item">
                            <div class="contact-list-icon">💬</div>
                            <div class="contact-list-text">WhatsApp: +91 90519 66561</div>
                        </div>
                        <div class="contact-list-item">
                            <div class="contact-list-icon">📧</div>
                            <div class="contact-list-text">hello@callinghills.com</div>
                        </div>
                        <div class="contact-list-item">
                            <div class="contact-list-icon">🌐</div>
                            <div class="contact-list-text">www.callinghills.com</div>
                        </div>
                    </div>

                    <div class="contact-offices">
                        <div class="office">
                            <h4>Darjeeling Office</h4>
                            <p>Senchal Tiger Hill Road, Darjeeling – 734102, West Bengal</p>
                        </div>
                        <div class="office">
                            <h4>Kolkata Office</h4>
                            <p>35 Tarun Sen Pally Road, Kolkata – 700079, West Bengal</p>
                        </div>
                    </div>

                    <div class="contact-trust">
                        Govt. of India & Govt. of West Bengal Verified Travel Service<br>
                        Business Banking Partner – State Bank of India (SBI)
                    </div>
                </div>
            </div>
        </div>`;

html = html.replace(/<div class="contact-container">[\s\S]*?<\/div>\s*<\/section>/, newContainerHTML + '\n    </section>');
fs.writeFileSync(htmlPath, html, 'utf8');

const cssPath = 'e:/ACTUAL PROJECTS/calling hills/css/main.css';
let css = fs.readFileSync(cssPath, 'utf8');

if (!css.includes('.contact-maps-grid')) {
    const extraCss = `
.contact-maps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.map-wrapper h4 {
    color: var(--ch-gold);
    margin-bottom: 12px;
    font-size: 16px;
}
.map-container-small {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
}
.map-container-small iframe {
    width: 100%;
    height: 100%;
    border: none;
}
@media (max-width: 768px) {
    .contact-maps-grid {
        grid-template-columns: 1fr;
    }
}
`;
    css += extraCss;
    fs.writeFileSync(cssPath, css, 'utf8');
}

console.log("Contact layout swapped successfully.");
