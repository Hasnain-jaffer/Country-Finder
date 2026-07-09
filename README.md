# Country Finder — Place Finder

Country Finder (branded "Place Finder" in the UI) is a React app for exploring countries around the world. Browse live data from the REST Countries API, search and filter by region, sort alphabetically, and drill into a detailed profile for any country.

## Features

- 🌍 **Live country data** — fetches name, population, region, capital, and flag for every country from the [REST Countries API](https://restcountries.com/)
- 🔍 **Search & filter** — search by country name and filter results by continent/region
- 🔠 **A–Z / Z–A sorting** — sort the country list alphabetically in either direction
- 📄 **Country detail pages** — click any country for its capital, population, region, subregion, top-level domain, currencies, and languages
- 🧳 **Curated destination highlights** — a separate hand-curated dataset (`Countrydata.json`) powers an "Explore the World" section with national sport, interesting facts, and best places to visit
- 📱 **Responsive layout** — mobile hamburger navigation, hero section, and card-based grids
- ✉️ **Contact form** — name/email/message form (currently logs submissions to the console)
- 🧭 **Client-side routing** — Home, About, Country, Country Detail (`/country/:name`), and Contact pages, with a custom 404 page

## Tech Stack

| Layer      | Technology                          |
|------------|----------------------------------------|
| Framework  | React 19 + Vite                        |
| Routing    | React Router 7                          |
| Icons      | react-icons                             |
| HTTP       | axios (installed; native `fetch` currently used for API calls) |
| Data       | [REST Countries API](https://restcountries.com/) + local `Countrydata.json` |
| Linting    | ESLint                                  |

## Project Structure

```
Country-Finder/
├── src/
│   ├── api/
│   │   └── Countrydata.json     # Curated destination highlights (About section)
│   ├── components/
│   │   ├── Applayout/
│   │   │   ├── Applayout.jsx    # Shared layout: Header + <Outlet/> + Footer
│   │   │   └── Countrydetail.jsx # Fetches & renders a single country's detail
│   │   └── UI/
│   │       ├── Header.jsx        # Nav bar with hamburger menu
│   │       ├── Footer.jsx
│   │       ├── HeroSection.jsx
│   │       └── SearchFilter.jsx  # Search box, region filter, A-Z/Z-A sort
│   ├── pages/
│   │   ├── Home.jsx              # Hero + About
│   │   ├── About.jsx             # Renders Countrydata.json highlights
│   │   ├── Country.jsx           # Live country list with search/filter
│   │   ├── Conact.jsx            # Contact form
│   │   └── ErrorPage.jsx         # 404 page
│   ├── App.jsx                   # Router configuration
│   └── main.jsx
├── public/
│   └── title.webp
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. **Country** page fetches all countries from `GET https://restcountries.com/v3.1/all` and renders them as cards. The `SearchFilter` component filters that list live by name and region, and can re-sort it alphabetically.
2. Clicking **Read more** on a country card navigates to `/country/:name`, which fetches that country's full profile from `GET https://restcountries.com/v3.1/name/:name` and displays capital, population, region, subregion, currencies, and languages.
3. **About** (shown on the Home page) reads from a local `Countrydata.json` file to show a curated set of destinations with extra editorial detail — national sport, an interesting fact, and best places to visit — that isn't available from the live API.
4. **Contact** collects a name, email, and message; submissions currently log to the console rather than sending anywhere.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

### Installation

```bash
git clone https://github.com/Hasnain-jaffer/Country-Finder.git
cd Country-Finder
npm install
```

### Running the App

```bash
npm run dev
```

Open the local URL Vite prints (typically **http://localhost:5173**).

### Building for Production

```bash
npm run build
npm run preview
```

## Roadmap

- [ ] Wire the Contact form to an actual email/backend service
- [ ] Loading and error states for the country list and detail fetches
- [ ] Expand `Countrydata.json` to cover more countries (currently a curated subset)
- [ ] Cache/debounce the live API calls to reduce redundant requests while typing in search

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.

## Author

**Hasnain Jaffer**
- GitHub: [@Hasnain-jaffer](https://github.com/Hasnain-jaffer)
