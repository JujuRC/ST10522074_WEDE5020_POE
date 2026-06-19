# ST10522074_WEDE5020_POE
Rosebank College WEDE assignment
https://github.com/JujuRC/ST10522074_WEDE5020_POE

This is the HTML code for the Knightly Website. at a later date I will be adding the Css and JavaScript to make the site more appealing to our target audience. This website is being made to solve the lack of website credibilty and online presence. We hope thi website will help reach those in need of our cause as well as people to help widen our reach.

Work of : Justine Bakundukize, ST10522074.

Status: Underconstruction , however HTML skeleton is complete.

## wireframes
The following wireframes are designed to prioritize a user-friendly layout.
![alt text](<Screenshot 2026-04-27 211742.png>)
![alt text](<Screenshot 2026-04-13 230436-1.png>)
![alt text](<Screenshot 2026-04-13 231406-1.png>)
![alt text](<Screenshot 2026-04-13 232530.png>)
![alt text](<Screenshot 2026-04-13 232931.png>)

____________________________________________________________________________________________

## the Site

### Website features and functionality:
+ Home page - introduction to the NGO and highlights the amount of crime in south Africa and our goal. 
+ Projects page - Future project and where we have already put up lights.
+ Protect yourself - How you can stay safe while out at night.
+ About - Our history 
+ Contact us page - contact details
+ Mobile first responsiveness 
+ Social Media Links

### Design 

+ Colours:Shades of dark blues, Black and White 
+ Fonts : Noto Sans, Merriweather,Playfair

____________________________________________________________________________________________

## Roadmap

### Phase 1: Foundation (In Progress)
- [x] Create project proposal and wireframes
- [x] Set up repository and file structure
- [x] Build semantic HTML skeleton for all pages
- [x] Ensure ARIA labels and accessibility standards

### Phase 2: Styling & UI
- [x] Implement global CSS variables (colors/fonts)
- [x] Design responsive navigation menu
- [x] Build layout using CSS Grid/Flexbox
- [x] Add transitions and hover effects

### Phase 3: Functionality
- [x] Add JavaScript for form handling
- [x] Implement interactive components (e.g., modals or tabs)
- [ ] Domain application 
____________________________________________________________________________________________
## Features & Implementation: Phase 2

### 1. Unified Base Style & Reset
* Implemented a comprehensive universal CSS box-sizing reset to ensure identical structural layout rendering across all major browsers (Chrome, Safari, Firefox, Edge).
* Centralized scrolling mechanics and page overflows securely on the global root layers to prevent layout clipping.

### 2. Typographic Harmony
* Established an elegant visual hierarchy using pairing typography: **Playfair Display** for classic, high-impact editorial headings, paired with **Merriweather** for incredibly crisp, readable body copy and list elements.

### 3. Structured Layouts (Flexbox)
* Built entirely dynamic, container-based layouts utilizing CSS Flexbox rows and columns.
* Features sleek "full-bleed" layout rows on the Projects showcase where imagery locks seamlessly flush against the grid walls.
* Created a clean, responsive card-based layout for user interaction on the Contact page.

### 4. Interactive States
* Implemented smooth, animated transitions (`0.3s ease`) across all interactive touchpoints.
* Covered complete user accessibility by custom styling `:hover`, `:focus-visible` (for keyboard navigation), and tactile `:active` scaling effects on all navigation links and form buttons.

### 5. Full Mobile Responsiveness
* Engineered defensive `@media` queries optimizing the entire platform for mobile phones and tablets (breakpointed at `768px`).
* Media layers seamlessly transition rigid desktop horizontal rows into stacked, thumb-friendly vertical columns with dynamic font down-scaling.

## Tech Stack Used
* **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<section>`, `<article>`, `<form>`)
* **CSS3:** Custom Flexbox layouts, advanced positioning layers, CSS transitions, and Media Queries
* **Google Fonts:** Playfair Display & Merriweather

____________________________________________________________________________________________
## Features & Implementation: Phase 3

### 1. Interactive Elements: FAQ Accordion (about.html)
* A custom-built accordian system designed to organize frequently asked questions efficiently without overwhelming the layout.
* Uses document.querySelectorAll() to attach asynchronous click event listeners to targeted interactive triggers (.but).
* Upon interaction, the DOM utilizes element navigation (this.nextElementSibling) to toggle a state-driven .active CSS class, smoothly revealing or collapsing hidden target panels (.ans).

### 2. Form Functionality & Client-Side Validation (contact.html)
* An asynchronous validation engine that intercepts general organization queries to verify input integrity before submission.
* Captures the form's submit event and overrides traditional page refreshes using event.preventDefault().
* Automatically extracts and evaluates user data parameters (verifying name length, checking email structures for "@" syntax constraints, enforcing minimum message lengths, and ensuring selection choices are populated).
* Injects contextual status alerts into the UI interface using real-time DOM styling manipulation based on successful or failed criteria checks.

### 3. Asynchronous Submission Simulation (AJAX)
* Implements seamless frontend data processing without disruptive page reloads to match modern UX application standards.
* Simulates standard web service response structures through a setTimeout() execution wrapper. 
* Once client criteria pass, it compiles structural inputs cleanly into URI-encoded fragments, automatically bridging the data directly.

## Tech Stack Used 
* **Vanilla JavaScript (ES6+):** Used to handle the interactive accordion logic, catch form submissions, run client-side input validation, and simulate asynchronous AJAX workflows.
* **CSS3:** Custom Flexbox layouts, advanced positioning layers, CSS transitions, and Media Queries
____________________________________________________________________________________________
## Usage

Clone the repo: git clone [https://github.com/JujuRC/ST10522074_WEDE5020_POE]
Navigate to the project folder.
Open index.html in your preferred web browser.

____________________________________________________________________________________________

## 💡 Technical Focus
Semantic HTML5: high priority on using meaningful tags to ensure the site is accessible for screen readers and optimized for SEO. Mobile-First Intent, although currently in the skeleton phase, the structure is built to transition easily into a responsive CSS layout.