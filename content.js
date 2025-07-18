const DEBUG = {
    ICON: false,    // For icon-related debugging
    SETTINGS: false, // For general Letterboxd tweaks debugging
    EASTER: false,   // For easter egg debugging
};

// Add debug logging helper function
function debugLog(category, message, ...args) {
    if (DEBUG[category]) {
        console.log(`[${category}] ${message}`, ...args);
    }
}

const ICON_CONFIG = {
    crown: {
        url: 'film_titles_top-2500-highest-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-2500-highest-rated-narrative-feature/",
            imgSrc: "crown.png",
            height: "18",
            width: "18",
            className: "crown-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 5000"
        })
    },
    fire: {
        url: 'film_titles_top-2500-most-popular-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-2500-most-popular-narrative-feature-films/",
            imgSrc: "fire.png",
            height: "12",
            width: "12",
            className: "fire-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 5000"
        })
    },
    palm: {
        url: 'film_titles_cannes-palme-dor-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/brsan/list/cannes-palme-dor-winners/",
            imgSrc: "palm.png",
            height: "16",
            width: "16",
            className: "palm-icon positioned-icon",
            showRanking: false,
            tooltipText: "Cannes Palme d'Or Winner"
        })
    },
    money: {
        url: 'film_titles_all-time-worldwide-box-office.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/matthew/list/all-time-worldwide-box-office/",
            imgSrc: "money.png",
            height: "16",
            width: "16",
            className: "money-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Box Office 100"
        })
    },
    moneyAlt: {
        url: 'film_titles_top-250-highest-grossing-movies-of-all-time-1.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/250-highest-grossing-movies-of-all-time/",
            imgSrc: "money.png",
            height: "16",
            width: "16",
            className: "money-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Box Office 250"
        })
    },
    nomOscar: {
        url: 'film_titles_every-oscar-nominee-ever.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/samuelelliott/list/every-oscar-nominee-ever/",
            imgSrc: "nom_oscar.png",
            height: "16",
            width: "16",
            className: "nom-oscar-icon positioned-icon",
            showRanking: false,
            tooltipText: "Oscar Nominee"
        })
    },
    winOscar: {
        url: 'film_titles_every-oscar-winner-ever-1.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/floorman/list/every-oscar-winner-ever-1/",
            imgSrc: "win_oscar.png",
            height: "16",
            width: "16",
            className: "win-oscar-icon positioned-icon",
            showRanking: false,
            tooltipText: "Oscar Winner"
        })
    },
    imdb: {
        url: 'film_titles_imdb-top-250.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/dave/list/imdb-top-250/",
            imgSrc: "imdb.png",
            height: "16",
            width: "16",
            className: "imdb-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the IMDb Top 250"
        })
    },
    edgar: {
        url: 'film_titles_edgar-wrights-1000-favorite-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/edgar-wrights-1000-favorite-movies/",
            imgSrc: "edgar.png",
            height: "16",
            width: "16",
            className: "edgar-icon floating-icon",
            showRanking: false,
            tooltipText: "Edgar Wright's 1000 Favorite Movies"
        })
    },
    movies1001: {
        url: 'film_titles_1001-movies-you-must-see-before-you-die-2021.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/gubarenko/list/1001-movies-you-must-see-before-you-die-2021/",
            imgSrc: "1001.png",
            height: "16",
            width: "16",
            className: "1001-icon floating-icon",
            showRanking: false,
            tooltipText: "1001 Movies You Must See Before You Die"
        })
    },
    animation: {
        url: 'film_titles_letterboxd-100-animation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/lifeasfiction/list/letterboxd-100-animation/",
            imgSrc: "animation.png",
            height: "16",
            width: "16",
            className: "animation-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Animation Top 100"
        })
    },
    documentary: {
        url: 'film_titles_official-top-250-documentary-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/official-top-250-documentary-films/",
            imgSrc: "documentary.jpg",
            height: "16",
            width: "16",
            className: "documentary-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Documentary Top 250"
        })
    },
    AFI: {
        url: 'film_titles_afis-100-years100-movies-10th-anniversary.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/afi/list/afis-100-years100-movies-10th-anniversary/",
            imgSrc: "AFI.png",
            height: "16",
            width: "16",
            className: "afi-icon positioned-icon",
            showRanking: false,
            tooltipText: "AFI 100 Years 100 Movies"
        })
    },
    sightSound: {
        url: 'film_titles_sight-and-sounds-greatest-films-of-all-time.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bfi/list/sight-and-sounds-greatest-films-of-all-time/",
            imgSrc: "sight.png",
            height: "16",
            width: "16",
            className: "sight-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Sight & Sound Greatest Films of All Time"
        })
    },
    ebert: {
        url: 'film_titles_roger-eberts-great-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/dvideostor/list/roger-eberts-great-movies/",
            imgSrc: "ebert.png",
            height: "16",
            width: "16",
            className: "ebert-icon positioned-icon",
            showRanking: false,
            tooltipText: "Roger Ebert's Great Movies"
        })
    },
    horror: {
        url: 'film_titles_letterboxds-top-250-horror-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/darrencb/list/letterboxds-top-250-horror-films/",
            imgSrc: "ghost.png",
            height: "16",
            width: "16",
            className: "horror-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Horror Top 250"
        })
    },
    heartEyes: {
        url: 'film_titles_official-top-250-films-with-the-most-fans.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/",
            imgSrc: "hearteyes.png",
            height: "16",
            width: "16",
            className: "hearteyes-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Letterboxd Fans Top 250"
        })
    },
    black: {
        url: 'film_titles_black-directors-the-official-top-100-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/black-directors-the-official-top-100-narrative/",
            imgSrc: "black.png",
            height: "16",
            width: "16",
            className: "black-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Black Directors Top 100"
        })
    },
    pink: {
        url: 'film_titles_women-directors-the-official-top-250-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/women-directors-the-official-top-250-narrative/",
            imgSrc: "pink.png",
            height: "16",
            width: "16",
            className: "pink-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Women Directors Top 250"
        })
    },
    poop: {
        url: 'film_titles_the-anti-letterboxd-250.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/louferrigno/list/the-anti-letterboxd-250/",
            imgSrc: "poop.png",
            height: "16",
            width: "16",
            className: "poop-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Anti-Letterboxd 250"
        })
    },
    toro: {
        url: 'film_titles_guillermo-del-toros-twitter-film-recommendations.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/ben_macdonald/list/guillermo-del-toros-twitter-film-recommendations/",
            imgSrc: "toro.png",
            height: "16",
            width: "16",
            className: "toro-icon positioned-icon",
            showRanking: false,
            tooltipText: "Guillermo del Toro's Twitter Recommendations"
        })
    },
    trueFilm: {
        url: 'film_titles_r-truefilm-canon-1000-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/momsaysitsok/list/r-truefilm-canon-1000-films/",
            imgSrc: "truefilm.png",
            height: "16",
            width: "16",
            className: "truefilm-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the r/TrueFilm Canon 1000"
        })
    },
    garfield: {
        url: 'film_titles_films-where-andrew-garfield-goes-up-against.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/george808/list/films-where-andrew-garfield-goes-up-against/",
            imgSrc: "garfield.png",
            height: "16",
            width: "16",
            className: "garfield-icon positioned-icon",
            showRanking: false,
            tooltipText: "Films Where Andrew Garfield Goes Up Against Lizard Man"
        })
    },
    shorts: {
        url: 'film_titles_letterboxds-top-250-highest-rated-short-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/slinkyman/list/letterboxds-top-250-highest-rated-short-films/",
            imgSrc: "shorts.png",
            height: "16",
            width: "16",
            className: "shorts-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Short Films Top 250"
        })
    },
    wga101: {
        url: 'film_titles_writers-guild-of-america-101-greatest-screenplays.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/oneohtrix/list/writers-guild-of-america-101-greatest-screenplays/",
            imgSrc: "wga.png",
            height: "16",
            width: "16",
            className: "wga101-icon positioned-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the WGA's 101 Greatest Screenplays of the 21st Century"
        })
    },
    gray: {
        url: 'film_titles_letterboxd-top-250-films-history-collected.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/dave/list/letterboxd-top-250-films-history-collected/",
            imgSrc: "gray.png",
            height: "16",
            width: "16",
            className: "gray-icon positioned-icon",
            showRanking: false,
            tooltipText: "Previous Entry in the Letterboxd Top 250"
        })
    },
    thumbs: {
        url: 'film_titles_the-most-controversial-films-on-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/thisisdrew/list/the-most-controversial-films-on-letterboxd/",
            imgSrc: "thumbs.png",
            height: "16",
            width: "16",
            className: "thumbs-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Controversial Films on Letterboxd"
        })
    },
    scream: {
        url: 'film_titles_horror-movies-everyone-should-watch-at-least.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/browsehorror/list/horror-movies-everyone-should-watch-at-least/",
            imgSrc: "scream.png",
            height: "16",
            width: "16",
            className: "scream-icon positioned-icon",
            showRanking: false,
            tooltipText: "Horror Movies Everyone Should Watch at Least Once"
        })
    },
    ford: {
        url: 'film_titles_movies-that-i-highly-recommend.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/francisfcoppola/list/movies-that-i-highly-recommend/",
            imgSrc: "ford.png",
            height: "16",
            width: "16",
            className: "ford-icon positioned-icon",
            showRanking: false,
            tooltipText: "Francis Ford Coppola's Recommendations"
        })
    },
    nerd: {
        url: 'film_titles_top-5000-films-of-all-time-calculated.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/prof_ratigan/list/top-5000-films-of-all-time-calculated/",
            imgSrc: "nerd.png",
            height: "16",
            width: "16",
            className: "nerd-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 5000 Films (Calculated)"
        })
    },
    top10: {
        url: 'film_titles_top10ners-1000-greatest-films-of-all-time.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/top10ner/list/top10ners-1000-greatest-films-of-all-time/",
            imgSrc: "top10.png",
            height: "16",
            width: "16",
            className: "top10-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in Top10ner's 1000 Greatest Films"
        })
    },
    marty: {
        url: 'film_titles_martin-scorseses-film-school-the-85-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/pinheadlarry145/list/martin-scorseses-film-school-the-85-films/",
            imgSrc: "marty.png",
            height: "16",
            width: "16",
            className: "marty-icon positioned-icon",
            showRanking: false,
            tooltipText: "Martin Scorsese's Film School"
        })
    },
    rmovies: {
        url: 'film_titles_movies-everyone-should-watch-at-least-once.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/fcbarcelona/list/movies-everyone-should-watch-at-least-once/",
            imgSrc: "rmovies.jpg",
            height: "16",
            width: "16",
            className: "rmovies-icon positioned-icon",
            showRanking: false,
            tooltipText: "r/Movies Must Watch Films"
        })
    },
    fresh: {
        url: 'film_titles_rotten-tomatoes-300-best-movies-of-all-time.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/imthelizardking/list/rotten-tomatoes-300-best-movies-of-all-time/",
            imgSrc: "fresh.png",
            height: "16",
            width: "16",
            className: "fresh-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Rotten Tomatoes Top 300"
        })
    },
    register: {
        url: 'film_titles_the-complete-library-of-congress-national.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/elvisisking/list/the-complete-library-of-congress-national/",
            imgSrc: "register.png",
            height: "16",
            width: "16",
            className: "register-icon positioned-icon",
            showRanking: false,
            tooltipText: "Library of Congress National Film Registry"
        })
    },
    film: {
        url: 'film_titles_oscar-winners-best-picture.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/floorman/list/oscar-winners-best-picture/",
            imgSrc: "film.png",
            height: "16",
            width: "16",
            className: "film-icon positioned-icon",
            showRanking: false,
            tooltipText: "Oscar Best Picture Winner"
        })
    },
    oscar10: {
        url: 'film_titles_every-film-to-win-10-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-10-or-oscars/",
            imgSrc: "oscar10.png",
            height: "16",
            width: "16",
            className: "oscar10-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 10 Oscars"
        })
    },
    oscar7: {
        url: 'film_titles_every-film-to-win-7-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-7-or-oscars/",
            imgSrc: "oscar7.png",
            height: "16",
            width: "16",
            className: "oscar7-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 7 Oscars"
        })
    },
    oscar5: {
        url: 'film_titles_every-film-to-win-5-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-5-or-oscars/",
            imgSrc: "oscar5.png",
            height: "16",
            width: "16",
            className: "oscar5-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 5 Oscars"
        })
    },
    oscar3: {
        url: 'film_titles_every-film-to-win-3-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-3-or-oscars/",
            imgSrc: "oscar3.png",
            height: "16",
            width: "16",
            className: "oscar3-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 3 Oscars"
        })
    },
    comedy: {
        url: 'film_titles_top-100-highest-rated-stand-up-comedy-specials.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-highest-rated-stand-up-comedy-specials/",
            imgSrc: "comedy.png",
            height: "16",
            width: "16",
            className: "comedy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Stand-Up Top 100"
        })
    },
    concert: {
        url: 'film_titles_top-100-concert-films-digital-albums.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/offensivename/list/top-100-concert-films-digital-albums/",
            imgSrc: "concert.png",
            height: "16",
            width: "16",
            className: "concert-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Concert Films Top 100"
        })
    },
    tv: {
        url: 'film_titles_letterboxds-top-250-highest-rated-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/slinkyman/list/letterboxds-top-250-highest-rated-narrative/",
            imgSrc: "tv.png",
            height: "16",
            width: "16",
            className: "tv-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the TV Miniseries Top 250"
        })
    },
    letterboxdTop250: {
        url: 'film_titles_top-250-highest-rated-things-on-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-things-on-letterboxd/",
            imgSrc: "letterboxd.png",
            height: "16",
            width: "16",
            className: "letterboxdtop250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Things on Letterboxd"
        })
    },
    inflate: {
        url: 'film_titles_highest-grossing-movies-of-all-time-adjusted.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/highest-grossing-movies-of-all-time-adjusted/",
            imgSrc: "inflate.png",
            height: "16",
            width: "16",
            className: "inflate-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Domestic Box Office Top 250 (Inflation Adjusted)"
        })
    },
    lion: {
        url: 'film_titles_golden-lion-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/cinelove/list/golden-lion-winners/",
            imgSrc: "lion.png",
            height: "16",
            width: "16",
            className: "lion-icon positioned-icon",
            showRanking: false,
            tooltipText: "Venice Film Festival Golden Lion Winner"
        })
    },
    bafta: {
        url: 'film_titles_every-bafta-best-film-winner.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-bafta-best-film-winner/",
            imgSrc: "bafta.png",
            height: "16",
            width: "16",
            className: "bafta-icon positioned-icon",
            showRanking: false,
            tooltipText: "BAFTA Best Film Winner"
        })
    },
    goldend: {
        url: 'film_titles_golden-globes-winners-for-best-drama.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/golden-globes-winners-for-best-drama/",
            imgSrc: "goldend.png",
            height: "16",
            width: "16",
            className: "goldend-icon positioned-icon",
            showRanking: false,
            tooltipText: "Golden Globes Best Drama Winner"
        })
    },
    goldenc: {
        url: 'film_titles_golden-globe-winners-for-best-comedy-musical.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/golden-globe-winners-for-best-comedy-musical/",
            imgSrc: "goldenc.png",
            height: "16",
            width: "16",
            className: "goldenc-icon positioned-icon",
            showRanking: false,
            tooltipText: "Golden Globes Best Comedy/Musical Winner"
        })
    },
    bear: {
        url: 'film_titles_berlin-international-film-festival-golden.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/peterstanley/list/berlin-international-film-festival-golden/",
            imgSrc: "bear.png",
            height: "16",
            width: "16",
            className: "bear-icon positioned-icon",
            showRanking: false,
            tooltipText: "Berlin Film Festival Golden Bear Winner"
        })
    },
    gotham: {
        url: 'film_titles_gotham-awards-best-feature-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/gotham-awards-best-feature-winners/",
            imgSrc: "gotham.png",
            height: "16",
            width: "16",
            className: "gotham-icon positioned-icon",
            showRanking: false,
            tooltipText: "Gotham Awards Best Feature Winner"
        })
    },
    lafca: {
        url: 'film_titles_every-los-angeles-film-critics-association.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-los-angeles-film-critics-association/",
            imgSrc: "lafca.png",
            height: "16",
            width: "16",
            className: "lafca-icon positioned-icon",
            showRanking: false,
            tooltipText: "Los Angeles Film Critics Association Best Film Winner"
        })
    },
    Nbr: {
        url: 'film_titles_every-national-board-of-review-best-film.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-national-board-of-review-best-film/",
            imgSrc: "nbr.png",
            height: "16",
            width: "16",
            className: "nbr-icon positioned-icon",
            showRanking: false,
            tooltipText: "National Board of Review Best Film Winner"
        })
    },
    nsf: {
        url: 'film_titles_every-national-society-of-film-critics-best.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-national-society-of-film-critics-best/",
            imgSrc: "nsf.png",
            height: "16",
            width: "16",
            className: "nsf-icon positioned-icon",
            showRanking: false,
            tooltipText: "National Society of Film Critics Best Film Winner" 
        })
    },
    nyfc: {
        url: 'film_titles_every-new-york-film-critics-circle-best-film.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-new-york-film-critics-circle-best-film/",
            imgSrc: "nyfc.png",
            height: "16",
            width: "16",
            className: "nyfc-icon positioned-icon",
            showRanking: false,
            tooltipText: "New York Film Critics Circle Best Film Winner" 
        })
    },
    annie: {
        url: 'film_titles_every-annie-best-animated-feature-winner.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-annie-best-animated-feature-winner/",
            imgSrc: "annie.png",
            height: "16",
            width: "16",
            className: "annie-icon positioned-icon",
            showRanking: false,
            tooltipText: "Annie Best Animated Feature Winner" 
        })
    },
    razzie: {
        url: 'film_titles_razzie-worst-picture.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/yuriaso/list/razzie-worst-picture/",
            imgSrc: "razzie.png",
            height: "16",
            width: "16",
            className: "razzie-icon positioned-icon",
            showRanking: false,
            tooltipText: "Razzies Worst Picture Winner"
        })
    },
    tiff: {
        url: 'film_titles_tiff-peoples-choice-award-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/harmenyolo/list/tiff-peoples-choice-award-winners/",
            imgSrc: "tiff.png",
            height: "16",
            width: "16",
            className: "tiff-icon positioned-icon",
            showRanking: false,
            tooltipText: "TIFF People's Choice Award Winner"
        })
    },
    sundance: {
        url: 'film_titles_sundance-grand-jury-prize-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/cinelove/list/sundance-grand-jury-prize-winners/",
            imgSrc: "sundance.png",
            height: "16",
            width: "16",
            className: "sundance-icon positioned-icon",
            showRanking: false,
            tooltipText: "Sundance Grand Jury Prize Winner"
        })
    },
    critic: {
        url: 'film_titles_critics-choice-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/ruthalula/list/critics-choice-winners/",
            imgSrc: "critic.png",
            height: "16",
            width: "16",
            className: "critic-icon positioned-icon",
            showRanking: false,
            tooltipText: "Critics' Choice Best Picture Winner"
        })
    },
    spirit: {
        url: 'film_titles_list-of-all-winners-for-the-independent-spirit.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/vedant_vashi13/list/list-of-all-winners-for-the-independent-spirit/",
            imgSrc: "spirit.png",
            height: "16",
            width: "16",
            className: "spirit-icon positioned-icon",
            showRanking: false,
            tooltipText: "Independent Spirit Best Feature Film Winner" 
        })
    },
    direct: {
        url: 'film_titles_directors-guild-of-america-award-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/elmiko_/list/directors-guild-of-america-award-winners/",
            imgSrc: "direct.png",
            height: "16",
            width: "16",
            className: "direct-icon positioned-icon",
            showRanking: false,
            tooltipText: "DGA Outstanding Directing Winner" 
        })
    },
    screen: {
        url: 'film_titles_every-screen-actors-guild-outstanding-performance.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/screen-actors-guild-outstanding-performance/",
            imgSrc: "screen.png",
            height: "16",
            width: "16",
            className: "screen-icon positioned-icon",
            showRanking: false,
            tooltipText: "SAG Outstanding Performance by a Cast Winner" 
        })
    },
    wga: {
        url: 'film_titles_every-writers-guild-of-america-best-screenplay.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/writers-guild-of-america-best-screenplay/",
            imgSrc: "writers.png",
            height: "16",
            width: "16",
            className: "wga-icon positioned-icon",
            showRanking: false,
            tooltipText: "WGA Best Screenplay Winner" 
        })
    },
    pga: {
        url: 'film_titles_every-producers-guild-of-america-best-theatrical.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-producers-guild-of-america-best-theatrical/",
            imgSrc: "pga.png",
            height: "16",
            width: "16",
            className: "pga-icon positioned-icon",
            showRanking: false,
            tooltipText: "PGA Best Motion Picture Winner" 
        })
    },
    shoot: {
        url: 'film_titles_they-shoot-pictures-dont-they-1000-greatest-5.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/thisisdrew/list/they-shoot-pictures-dont-they-1000-greatest-5/",
            imgSrc: "shoot.png",
            height: "16",
            width: "16",
            className: "shoot-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in They Shoot Pictures, Don't They? 1000 Greatest Films"
        })
    },
    raj: {
        url: 'film_titles_every-movie-ive-seen-ranked.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-movie-ive-seen-ranked/",
            imgSrc: "raj.png",
            height: "16",
            width: "16",
            className: "raj-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in Raj's Personal Ranking"
        })
    },
    movies1001Alt: {
        url: 'film_titles_1001-movies-you-must-see-before-you-die.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/peterstanley/list/1001-movies-you-must-see-before-you-die/by/rating/",
            imgSrc: "1001.png",
            height: "16",
            width: "16",
            className: "movies1001-icon floating-icon",
            showRanking: false,
            tooltipText: "1001 Movies You Must See Before You Die (Expanded)"
        })
    },
    saturnh: {
        url: 'film_titles_every-saturn-award-winner-for-best-horror.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-saturn-award-winner-for-best-horror/",
            imgSrc: "saturnh.png",
            height: "16",
            width: "16",
            className: "saturnh-icon positioned-icon",
            showRanking: false,
            tooltipText: "Saturn Best Horror Film Winner"
        })
    },
    saturnf: {
        url: 'film_titles_every-saturn-award-winner-for-best-fantasy.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-saturn-award-winner-for-best-fantasy/",
            imgSrc: "saturnf.png",
            height: "16",
            width: "16",
            className: "saturnf-icon positioned-icon",
            showRanking: false,
            tooltipText: "Saturn Best Fantasy Film Winner"
        })
    },
    saturns: {
        url: 'film_titles_every-saturn-award-winner-for-best-science.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-saturn-award-winner-for-best-science/",
            imgSrc: "saturns.png",
            height: "16",
            width: "16",
            className: "saturns-icon positioned-icon",
            showRanking: false,
            tooltipText: "Saturn Best Science Fiction Film Winner"
        })
    },
    flanaganBaby: {
        url: 'film_titles_mike-flanagans-recommended-gateway-horror.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/flanaganfilm/list/mike-flanagans-recommended-gateway-horror/",
            imgSrc: "baby.png",
            height: "16",
            width: "16",
            className: "flanagan-baby-icon positioned-icon",
            showRanking: false,
            tooltipText: "Mike Flanagan's Gateway Horror Recommendations"
        })
    },
    flanagan: { // This is the "favorites" one
        url: 'film_titles_flanagans-favorites-my-top-100.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/flanaganfilm/list/flanagans-favorites-my-top-100/",
            imgSrc: "flanagan.png",
            height: "16",
            width: "16",
            className: "flanagan-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in Mike Flanagan's 100 Favorites"
        })
    },
    fourFavorites: {
        url: 'film_titles_letterboxd-four-favorites-interviews.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/andregps/list/letterboxd-four-favorites-interviews/",
            imgSrc: "fourfav.png",
            height: "16",
            width: "16",
            className: "fourfav-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Letterboxd Four Favorites"
        })
    },
    year: {
        url: 'film_titles_the-top-rated-movie-of-every-year-by-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/mattheweg/list/the-top-rated-movie-of-every-year-by-letterboxd/",
            imgSrc: "years.png",
            height: "16",
            width: "16",
            className: "year-icon positioned-icon",
            showRanking: false,
            tooltipText: "Highest Rated Movie of its Release Year"
        })
    },
    fiveStar: { // New icon for 5-star rating movies
        url: 'film_titles_movies-where-a-5-star-rating-is-most-common.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/rileyaust/list/movies-where-a-5-star-rating-is-most-common/",
            imgSrc: "stars.png",
            height: "16",
            width: "16",
            className: "fiveStar-icon floating-icon",
            showRanking: false,
            tooltipText: "Movies Where a 5-Star Rating is Most Common"
        })
    },
    billionDollarClub: {  // New icon configuration
        url: 'film_titles_billion-dollar-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jonny5244/list/billion-dollar-movies/",
            imgSrc: "billion.png",
            height: "16",
            width: "16",
            className: "billion-icon floating-icon",
            showRanking: false,
            tooltipText: "Grossed One Billion Dollars, Unadjusted"
        })
    },
    letterboxd113: {  // New icon entry
        url: 'film_titles_letterboxd-113-highest-rated-19th-century.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/desdemoor/list/letterboxd-113-highest-rated-19th-century/",
            imgSrc: "old.png",  // Assuming the image is named old.png
            height: "16",
            width: "16",
            className: "letterboxd113-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Highest Rated Films of the 19th Century"
        })
    },
    male: {  // New icon for Most Fans on Letterboxd with Pronoun He
        url: 'film_titles_most-fans-on-letterboxd-with-pronoun-he-2024.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-on-letterboxd-with-pronoun-he-2024/",
            imgSrc: "male.png",
            height: "16",
            width: "16",
            className: "male-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans with He Pronouns 2024"
        })
    },
    she: {  // New icon entry for "Most Fans on Letterboxd with Pronoun She"
        url: 'film_titles_most-fans-on-letterboxd-with-pronoun-she-3.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-on-letterboxd-with-pronoun-she-3/",
            imgSrc: "female.png",
            height: "16",
            width: "16",
            className: "she-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans with She Pronouns 2024"
        })
    },
    ze: {  // New icon entry for Most Fans on Letterboxd with Pronoun Ze
        url: 'film_titles_most-fans-on-letterboxd-with-pronoun-ze-or-3.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-on-letterboxd-with-pronoun-ze-or-3/",
            imgSrc: "nonbi.png",  // Assuming the image is named nonbi.png
            height: "16",
            width: "16",
            className: "ze-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans with Ze or Xe Pronouns 2024"
        })
    },
    fansPerView: {  // New icon for Most Fans per Viewer
        url: 'film_titles_most-fans-per-viewer-on-letterboxd-2024.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-per-viewer-on-letterboxd-2024/",
            imgSrc: "fansperview.png",
            height: "16",
            width: "16",
            className: "fansperview-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans per Viewer"
        })
    },
    obscure: {
        url: 'film_titles_official-top-50-narrative-feature-films-under.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/offensivename/list/official-top-50-narrative-feature-films-under/",
            imgSrc: "obscure.png", // New image for the obscure icon
            height: "16",
            width: "16",
            className: "obscure-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 50 Under 5,000 Reviews"
        })
    },
    gilmore: {  // New icon entry for Gilmore Girls
        url: 'film_titles_every-movie-referenced-watched-in-gilmore.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/lesaladino/list/every-movie-referenced-watched-in-gilmore/",
            imgSrc: "gilmore.png",  // Assuming the image is named gilmore.png
            height: "16",
            width: "16",
            className: "gilmore-icon floating-icon",
            showRanking: false,  // Unranked
            tooltipText: "Referenced in Gilmore Girls"
        })
    },
    goose: {  // New icon entry for Movies Where the Protagonist Witnesses a Goose
        url: 'film_titles_movies-where-the-protagonist-witnesses-a.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/tintinabello/list/movies-where-the-protagonist-witnesses-a/",
            imgSrc: "goose.png",  // Assuming the image is named goose.png
            height: "16",
            width: "16",
            className: "goose-icon floating-icon",
            showRanking: false,  // Unranked
            tooltipText: "Movies Where the Protagonist Witnesses a Goose Die and is Left with the Responsibility of Raising the Goose's Son"
        })
    },
    romcom: {
        url: 'film_titles_letterboxds-top-250-romantic-comedy-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/stateofhailey/list/letterboxds-top-250-romantic-comedy-films/",
            imgSrc: "romcom.png", // New image for romantic comedy
            height: "16",
            width: "16",
            className: "romcom-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Rom-Coms"
        })
    },
    anime: {  // New entry for Anime
        url: 'film_titles_letterboxds-official-top-250-anime-tv-miniseries.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jumpy/list/letterboxds-official-top-250-anime-tv-miniseries/",
            imgSrc: "anime.png",
            height: "16",
            width: "16",
            className: "anime-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Anime TV Miniseries"
        })
    },
    criterion: { // New entry for Criterion Collection
        url: 'film_titles_the-complete-criterion-collection.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jbutts15/list/the-complete-criterion-collection/",
            imgSrc: "collection.png", // New image for Criterion Collection
            height: "16",
            width: "16",
            className: "criterion-icon positioned-icon",
            showRanking: false,
            tooltipText: "Included within the Criterion Collection"
        })
    },
    fourGreatest: {  // New icon entry for Four Greatest Films
        url: 'film_titles_four-greatest-films-of-each-year-according.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/zishi/list/four-greatest-films-of-each-year-according/",
            imgSrc: "4year.png",  // New image for four greatest films
            height: "16",
            width: "16",
            className: "fourGreatest-icon positioned-icon",
            showRanking: false,
            tooltipText: "Each Years Four Greatest Films, According to r/letterboxd"
        })
    },
    action: {
        url: 'film_titles_top-250-highest-rated-action-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-action-narrative-feature/",
            imgSrc: "action.png",
            height: "16",
            width: "16",
            className: "action-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Action Films"
        })
    },
    popAction: {
        url: 'film_titles_top-250-most-popular-action-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-action-narrative-feature/",
            imgSrc: "popAction.png",
            height: "16",
            width: "16",
            className: "popAction-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Action 250"
        })
    },
    adventure: { // New entry for Adventure
        url: 'film_titles_top-250-highest-rated-adventure-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-adventure-narrative/",
            imgSrc: "adventure.png",
            height: "16",
            width: "16",
            className: "adventure-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Adventure Films"
        })
    },
    popAdventure: {
        url: 'film_titles_top-250-most-popular-adventure-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-adventure-narrative/",
            imgSrc: "popAdventure.png",
            height: "16",
            width: "16",
            className: "popAdventure-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Adventure 250"
        })
    },
    animation250: {  // New icon entry for Top 250 Animation
        url: 'film_titles_top-250-highest-rated-animation-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-animation-narrative/",
            imgSrc: "animation.png", // Using the same image
            height: "16",
            width: "16",
            className: "animation250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Animated Films"
        })
    },
    animationPop: {  // New icon entry for Top 250 Animation
        url: 'film_titles_top-250-most-popular-animation-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-animation-narrative/",
            imgSrc: "popAnimation.png", // Using the same image
            height: "16",
            width: "16",
            className: "animationPop-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Animated Films"
        })
    },
    funny: { // New entry for Top 250 Highest Rated Comedy Narrative Feature
        url: 'film_titles_top-250-highest-rated-comedy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-comedy-narrative-feature/",
            imgSrc: "funny.png",
            height: "16",
            width: "16",
            className: "funny-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Comedy Films"
        })
    },
    popComedy: {
        url: 'film_titles_top-250-most-popular-comedy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-comedy-narrative-feature/",
            imgSrc: "popComedy.png",
            height: "16",
            width: "16",
            className: "popComedy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Comedy 250"
        })
    },
    crime: {
        url: 'film_titles_top-250-highest-rated-crime-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-crime-narrative-feature/",
            imgSrc: "crime.png",
            height: "16",
            width: "16",
            className: "crime-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Crime Films"
        })
    },
    popCrime: {
        url: 'film_titles_top-250-most-popular-crime-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-crime-narrative-feature/",
            imgSrc: "popCrime.png",
            height: "16",
            width: "16",
            className: "popCrime-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Crime 250"
        })
    },
    drama: {
        url: 'film_titles_top-250-highest-rated-drama-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-drama-narrative-feature/",
            imgSrc: "drama.png",
            height: "16",
            width: "16",
            className: "drama-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Drama Films"
        })
    },
    popDrama: {
        url: 'film_titles_top-250-most-popular-drama-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-drama-narrative-feature/",
            imgSrc: "popDrama.png",
            height: "16",
            width: "16",
            className: "popDrama-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Drama 250"
        })
    },
    family: {
        url: 'film_titles_top-250-highest-rated-family-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-family-narrative-feature/",
            imgSrc: "family.png",
            height: "16",
            width: "16",
            className: "family-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Family Films"
        })
    },
    popFamily: {
        url: 'film_titles_top-250-most-popular-family-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-family-narrative-feature/",
            imgSrc: "popFamily.png",
            height: "16",
            width: "16",
            className: "popFamily-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Family 250"
        })
    },
    fantasy: { // New entry for Fantasy
        url: 'film_titles_top-250-highest-rated-fantasy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-fantasy-narrative-feature/",
            imgSrc: "fantasy.png",
            height: "16",
            width: "16",
            className: "fantasy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Fantasy Films"
        })
    },
    popFantasy: {
        url: 'film_titles_top-250-most-popular-fantasy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-fantasy-narrative-feature/",
            imgSrc: "popFantasy.png",
            height: "16",
            width: "16",
            className: "popFantasy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Fantasy 250"
        })
    },
    history: { // New entry for History
        url: 'film_titles_top-250-highest-rated-history-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-history-narrative-feature/",
            imgSrc: "history.png",
            height: "16",
            width: "16",
            className: "history-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 History Films"
        })
    },
    popHistory: {
        url: 'film_titles_top-250-most-popular-history-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-history-narrative-feature/",
            imgSrc: "popHistory.png",
            height: "16",
            width: "16",
            className: "popHistory-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular History 250"
        })
    },
    music: {
        url: 'film_titles_top-250-highest-rated-music-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-music-narrative-feature/",
            imgSrc: "music.png",
            height: "16",
            width: "16",
            className: "music-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Music Films"
        })
    },
    popMusic: {
        url: 'film_titles_top-250-most-popular-music-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-music-narrative-feature/",
            imgSrc: "popMusic.png",
            height: "16",
            width: "16",
            className: "popMusic-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Music 250"
        })
    },
    mystery: { // New entry for Mystery
        url: 'film_titles_top-250-highest-rated-mystery-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-mystery-narrative-feature/",
            imgSrc: "mystery.png",
            height: "16",
            width: "16",
            className: "mystery-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Mystery Films"
        })
    },
    popMystery: {
        url: 'film_titles_top-250-most-popular-mystery-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-mystery-narrative-feature/",
            imgSrc: "popMystery.png",
            height: "16",
            width: "16",
            className: "popMystery-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Mystery 250"
        })
    },
    romance: {  // New icon entry for Top 250 Romance Films
        url: 'film_titles_top-250-highest-rated-romance-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-romance-narrative-feature/",
            imgSrc: "romance.png", // New image for romance
            height: "16",
            width: "16",
            className: "romance-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Romance Films"
        })
    },
    popRomance: {
        url: 'film_titles_top-250-most-popular-romance-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-romance-narrative-feature/",
            imgSrc: "popRomance.png",
            height: "16",
            width: "16",
            className: "popRomance-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Romance 250"
        })
    },
    scienceFiction: { // New entry for Science Fiction
        url: 'film_titles_top-250-highest-rated-science-fiction-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-science-fiction-narrative/",
            imgSrc: "scifi.png", // New image for Science Fiction
            height: "16",
            width: "16",
            className: "scifi-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Science Fiction Films"
        })
    },
    popScienceFiction: {
        url: 'film_titles_top-250-most-popular-science-fiction-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-science-fiction-narrative/",
            imgSrc: "popScifi.png",
            height: "16",
            width: "16",
            className: "popScifi-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Science Fiction 250"
        })
    },
    thriller: {  // New entry for Top 250 Thriller Films
        url: 'film_titles_top-250-highest-rated-thriller-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-thriller-narrative/",
            imgSrc: "thriller.png",
            height: "16",
            width: "16",
            className: "thriller-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Thriller Films"
        })
    },
    popThriller: {
        url: 'film_titles_top-250-most-popular-thriller-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-thriller-narrative-feature/",
            imgSrc: "popThriller.png",
            height: "16",
            width: "16",
            className: "popThriller-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Thriller 250"
        })
    },
    thrillerAlt: { // New entry for Top 250 Thriller Films
        url: 'film_titles_top-250-highest-rated-thriller-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-thriller-narrative/",
            imgSrc: "thrilleralt.png",
            height: "16",
            width: "16",
            className: "thriller-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Thriller Films"
        })
    },
    popThrillerAlt: {
        url: 'film_titles_top-250-most-popular-thriller-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-thriller-narrative-feature/",
            imgSrc: "popThrillerAlt.png",
            height: "16",
            width: "16",
            className: "popThrillerAlt-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Thriller 250"
        })
    },
    war: { // New entry for War Films
        url: 'film_titles_top-250-highest-rated-war-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-war-narrative-feature/",
            imgSrc: "war.png",
            height: "16",
            width: "16",
            className: "war-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 War Films"
        })
    },
    popWar: {
        url: 'film_titles_top-250-most-popular-war-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-war-narrative-feature/",
            imgSrc: "popWar.png",
            height: "16",
            width: "16",
            className: "popWar-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular War 250"
        })
    },
    western: { // New entry for Western Films
        url: 'film_titles_top-250-highest-rated-western-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-western-narrative-feature/",
            imgSrc: "western.png",
            height: "16",
            width: "16",
            className: "western-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Western Films"
        })
    },
    popWestern: {
        url: 'film_titles_top-250-most-popular-western-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-western-narrative-feature/",
            imgSrc: "popWestern.png",
            height: "16",
            width: "16",
            className: "popWestern-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Western 250"
        })
    },
    gRated: { // New entry for G Rated Films
        url: 'film_titles_top-100-g-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-g-rated-narrative-feature-films/",
            imgSrc: "grated.png",
            height: "16",
            width: "16",
            className: "grated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 100 G Rated Films"
        })
    },
    PopGRated: { // New entry for G Rated Films
        url: 'film_titles_top-200-most-popular-g-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-200-most-popular-g-rated-narrative-feature/",
            imgSrc: "popG.png",
            height: "16",
            width: "16",
            className: "popG-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 200 Popular G Rated Films"
        })
    },
    pGRated: { // New entry for PG Rated Films
        url: 'film_titles_top-250-pg-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-pg-rated-narrative-feature-films/",
            imgSrc: "pgrated.png",
            height: "16",
            width: "16",
            className: "pgrated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 PG Rated Films"
        })
    },
    popPGRated: { // New entry for PG Rated Films
        url: 'film_titles_top-250-most-popular-pg-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-pg-rated-narrative-feature/",
            imgSrc: "popPG.png",
            height: "16",
            width: "16",
            className: "popPG-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular PG 250"
        })
    },
    pG13Rated: { // New entry for PG-13 Rated Films
        url: 'film_titles_top-250-pg-13-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-pg-13-rated-narrative-feature-films/",
            imgSrc: "pg13rated.png",
            height: "16",
            width: "16",
            className: "pg13rated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 PG-13 Rated Films"
        })
    },
    popPG13Rated: { // New entry for PG-13 Rated Films
        url: 'film_titles_top-250-most-popular-pg-13-rated-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-pg-13-rated-narrative/",
            imgSrc: "popPG13.png",
            height: "16",
            width: "16",
            className: "popPG13-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular PG-13 250"
        })
    },
    rRated: { // New entry for R Rated Films
        url: 'film_titles_top-250-r-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-r-rated-narrative-feature-films/",
            imgSrc: "rrated.png",
            height: "16",
            width: "16",
            className: "rrated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 R Rated Films"
        })
    },
    popRRated: { // New entry for R Rated Films
        url: 'film_titles_top-250-most-popular-r-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-r-rated-narrative-feature/",
            imgSrc: "popR.png",
            height: "16",
            width: "16",
            className: "popR-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular R 250"
        })
    },
    nC17Rated: { // New entry for NC-17 Rated Films
        url: 'film_titles_top-20-nc-17-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-20-nc-17-rated-narrative-feature-films/",
            imgSrc: "nc17rated.png",
            height: "16",
            width: "16",
            className: "nc17rated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 20 NC-17 Rated Films"
        })
    },
    popNC17Rated: { // New entry for NC-17 Rated Films
        url: 'film_titles_top-25-most-popular-nc-17-rated-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-25-most-popular-nc-17-rated-narrative/",
            imgSrc: "popNC17.png",
            height: "16",
            width: "16",
            className: "popNC17-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular NC-17 250"
        })
    },
    nrRated: { // New entry for NR Rated Films
        url: 'film_titles_top-250-nr-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-nr-rated-narrative-feature-films/",
            imgSrc: "nrrated.jpg",
            height: "16",
            width: "16",
            className: "nrrated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 NR Rated Films"
        })
    },
    popNrRated: { // New entry for NR Rated Films
        url: 'film_titles_top-250-most-popular-nr-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-nr-rated-narrative-feature/",
            imgSrc: "popNR.png",
            height: "16",
            width: "16",
            className: "popNR-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular NR 250"
        })
    },
    northAmerica: { // New entry for North American Narrative
        url: 'film_titles_top-250-highest-rated-north-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-north-american-narrative/",
            imgSrc: "namerica.png",
            height: "16",
            width: "16",
            className: "namerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 North American Films"
        })
    },
    popNorthAmerica: { // New entry for North American Popular
        url: 'film_titles_top-250-most-popular-north-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-north-american-narrative/",
            imgSrc: "popNAmerica.png",
            height: "16",
            width: "16",
            className: "popnamerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 North American Films"
        })
    },
    southAmerica: { // New entry for South American Narrative
        url: 'film_titles_top-250-highest-rated-south-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-south-american-narrative/",
            imgSrc: "samerica.png",
            height: "16",
            width: "16",
            className: "samerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 South American Films"
        })
    },
    popSouthAmerica: { // New entry for North American Popular
        url: 'film_titles_top-100-most-popular-south-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-most-popular-south-american-narrative/",
            imgSrc: "popSAmerica.png",
            height: "16",
            width: "16",
            className: "popsamerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 South American Films"
        })
    },
    europeanNarrative: { // New entry for European Narrative Films
        url: 'film_titles_top-250-highest-rated-european-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-european-narrative/",
            imgSrc: "europe.png",
            height: "16",
            width: "16",
            className: "european-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 European Films"
        })
    },
    popEurope: { // New entry for European Popular
        url: 'film_titles_top-250-most-popular-european-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-european-narrative-feature/",
            imgSrc: "popEurope.png",
            height: "16",
            width: "16",
            className: "popeurope-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 European Films"
        })
    },
    africanNarrative: { // New entry for European Narrative Films
        url: 'film_titles_top-100-highest-rated-african-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-highest-rated-african-narrative-feature/",
            imgSrc: "africa.png",
            height: "16",
            width: "16",
            className: "african-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 African Films"
        })
    },
    popAfrica: { // New entry for African Popular
        url: 'film_titles_top-20-most-popular-african-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-20-most-popular-african-narrative-feature/",
            imgSrc: "popAfrica.png",
            height: "16",
            width: "16",
            className: "popafrica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 20 African Films"
        })
    },
    popAsia: { // New entry for Asian Popular
        url: 'film_titles_top-250-most-popular-asian-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-asian-narrative-feature/",
            imgSrc: "popAsia.png",
            height: "16",
            width: "16",
            className: "popasia-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 Asian Films"
        })
    },
    popAustralia: { // New entry for Australian Popular
        url: 'film_titles_top-150-most-popular-australian-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-150-most-popular-australian-narrative/",
            imgSrc: "popAustralia.png",
            height: "16",
            width: "16",
            className: "popaustralia-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 150 Australian Films"
        })
    },
    asianNarrative: {  // New icon entry for Top 250 Asian Narrative Feature
        url: 'film_titles_top-250-highest-rated-asian-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-asian-narrative-feature/",
            imgSrc: "asia.png",
            height: "16",
            width: "16",
            className: "asian-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Asian Narrative Feature Films"
        })
    },
    australianNarrative: {  // New icon entry for Australian Narrative
        url: 'film_titles_top-75-highest-rated-australian-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-75-highest-rated-australian-narrative/",
            imgSrc: "australia.png",
            height: "16",
            width: "16",
            className: "australian-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 75 Australian Films"
        })
    },
    shortFilms250: {  // New icon entry for Top 250 Short Films
        url: 'film_titles_the-top-250-highest-rated-films-of-90-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-highest-rated-films-of-90-minutes/",
            imgSrc: "90.png",
            height: "16",
            width: "16",
            className: "shortFilms250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Under 90 Minute Films"
        })
    },
    popFilms250: {  // New icon entry for Popular 250 Short Films
        url: 'film_titles_the-top-250-most-popular-films-of-90-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-most-popular-films-of-90-minutes/",
            imgSrc: "pop90.png",
            height: "16",
            width: "16",
            className: "popFilms250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 Under 90 Minute Films"
        })
    },
    top250Under120: {  // New icon entry for Top 250 Films Under 120 Minutes
        url: 'film_titles_the-top-250-highest-rated-films-of-120-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-highest-rated-films-of-120-minutes/",
            imgSrc: "120.png",
            height: "16",
            width: "16",
            className: "top250Under120-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Films Under 2 Hours"
        })
    },
    pop250Under120: {  // New icon entry for Popular 250 Films Under 120 Minutes
        url: 'film_titles_the-top-250-most-popular-films-of-120-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-most-popular-films-of-120-minutes/",
            imgSrc: "pop120.png",
            height: "16",
            width: "16",
            className: "pop250Under120-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 Films Under 2 Hours"
        })
    },
    top150Over180: {  // New icon entry for Top 150 Films Over 180 Minutes
        url: 'film_titles_the-top-150-highest-rated-films-of-180-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-150-highest-rated-films-of-180-minutes/",
            imgSrc: "180.png",
            height: "16",
            width: "16",
            className: "top150Over180-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 150 Films Over 3 Hours"
        })
    },
    pop150Over180: {  // New icon entry for Popular 150 Films Over 180 Minutes
        url: 'film_titles_the-top-75-most-popular-films-of-180-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-75-most-popular-films-of-180-minutes/",
            imgSrc: "pop180.png",
            height: "16",
            width: "16",
            className: "pop150Over180-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 150 Films Over 3 Hours"
        })
    },
    top240Minutes: {  // New icon entry for Top 20 Films Over 240 Minutes
        url: 'film_titles_the-top-20-highest-rated-films-of-240-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-20-highest-rated-films-of-240-minutes/",
            imgSrc: "240.png",
            height: "16",
            width: "16",
            className: "top240Minutes-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 20 Films Over 4 Hours"
        })
    },
    pop240Minutes: {  // New icon entry for Popular 20 Films Over 240 Minutes
        url: 'film_titles_the-top-5-most-popular-films-of-240-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-5-most-popular-films-of-240-minutes/",
            imgSrc: "pop240.png",
            height: "16",
            width: "16",
            className: "pop240Minutes-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 20 Films Over 4 Hours"
        })
    },
    boxOffice: {  // New icon entry for Box Office Number One Films
        url: 'film_titles_list-of-box-office-number-one-films-in-the.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/list-of-box-office-number-one-films-in-the/",
            imgSrc: "boxOffice.png",
            height: "16",
            width: "16",
            className: "boxOffice-icon floating-icon",
            showRanking: false,
            tooltipText: "Ranked #1 at the Weekly Box Office"
        })
    },
    yearlyDollar: {  // New icon configuration
        url: 'film_titles_highest-grossing-film-by-year-of-release.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/highest-grossing-film-by-year-of-release/",
            imgSrc: "yearly_dollar.png",
            height: "16",
            width: "16",
            className: "yearly-dollar-icon floating-icon",
            showRanking: false,
            tooltipText: "Highest Grossing Film Per Year"
        })
    },
    burningCash: {  // New icon configuration
        url: 'film_titles_biggest-box-office-bombs-adjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/biggest-box-office-bombs-adjusted-for-inflation/",
            imgSrc: "burning_cash.png",
            height: "16",
            width: "16",
            className: "burning-cash-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Biggest Box Office Bombs (Inflation Adjusted)"
        })
    },
    mostPopularYear: {  // New entry for Most Popular Film for Every Year
        url: 'film_titles_most-popular-film-for-every-year-on-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-popular-film-for-every-year-on-letterboxd/",
            imgSrc: "yearly_pop.png",
            height: "16",
            width: "16",
            className: "mostPopularYear-icon floating-icon",
            showRanking: false,
            tooltipText: "Most Popular Film Per Year"
        })
    },
    moneybagOld: {  // New icon configuration
        url: 'film_titles_most-expensive-films-adjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-expensive-films-adjusted-for-inflation/",
            imgSrc: "moneybag_old.png",
            height: "16",
            width: "16",
            className: "moneybagOld-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Expensive Films (Inflation Adjusted)"
        })
    },
    moneybag: {  // New icon configuration
        url: 'film_titles_most-expensive-films-unadjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-expensive-films-unadjusted-for-inflation/",
            imgSrc: "moneybag.png",
            height: "16",
            width: "16",
            className: "moneybag-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Expensive Films"
        })
    },
    moneybag: {  // New icon configuration
        url: 'film_titles_most-expensive-films-unadjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-expensive-films-unadjusted-for-inflation/",
            imgSrc: "moneybag.png",
            height: "16",
            width: "16",
            className: "moneybag-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Expensive Films"
        })
    },
    horrorAlt: {  // New icon configuration
        url: 'film_titles_top-250-highest-rated-horror-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-horror-narrative-feature/",
            imgSrc: "ghost.png",
            height: "16",
            width: "16",
            className: "horrorAlt-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the top 250 Horror Films"
        })
    },
    popHorror: {
        url: 'film_titles_top-250-most-popular-horror-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-horror-narrative-feature/",
            imgSrc: "popHorror.png",
            height: "16",
            width: "16",
            className: "popHorror-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Horror 250"
        })
    },
    unweighted: {
        url: 'film_titles_top-250-movies-by-unweighted-rating.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/blackkfoxx/list/top-250-movies-by-unweighted-rating/",
            imgSrc: "weights.png", 
            height: "16", 
            width: "16",
            className: "unweighted-icon floating-icon",
            showRanking: true, 
            tooltipText: "№ {ranking} in the top 250 Letterboxd Unweighted"
        })
    },
};

// Generic icon creator function
function createIconAdder({ href, imgSrc, height, width, className, showRanking, tooltipText, alt }) {
    return function(ranking) {
        const li = document.createElement("li");
        li.className = "stat";
        
        const a = document.createElement("a");
        a.href = href;
        a.style.fontSize = ".92307692rem";
        
        // Create a wrapper span for both icon and ranking
        const tooltipWrapper = document.createElement("span");
        tooltipWrapper.className = "tooltip-wrapper";
        
        // Set tooltip text with ranking if provided
        if (tooltipText) {
            tooltipWrapper.setAttribute('data-tooltip', tooltipText.replace('{ranking}', ranking));
        }
        
        // Create the icon wrapper
        const iconWrapper = document.createElement("span");
        iconWrapper.className = className;
        
        const img = document.createElement("img");
        img.src = chrome.runtime.getURL(`images/${imgSrc}`);
        img.height = height;
        img.width = width;
        if (alt) img.alt = alt;
        
        iconWrapper.appendChild(img);
        tooltipWrapper.appendChild(iconWrapper);
        
        // Add ranking number to the same tooltip wrapper
        if (showRanking && ranking) {
            tooltipWrapper.appendChild(document.createTextNode(ranking));
        }
        
        a.appendChild(tooltipWrapper);
        li.appendChild(a);
        
        return li;
    };
}
// Generic data fetcher
async function fetchData(url) {
    const response = await fetch(`https://raw.githubusercontent.com/bigbadraj/Letterboxd-List-JSONs/refs/heads/main/${url}`);
    return await response.json();
}

// Near the top of the file, add a static audio instance
let inceptionAudio = null;

// Add this function near the top with other functions
function easterEggs() {
    debugLog('EASTER', 'Checking for easter egg triggers');
    
    // Updated regex to handle both direct film pages and friends/reviews pages
    if (!window.location.pathname.match(/\/(film|.*?\/film)\/(megalopolis-2024|american-psycho|the-bye-bye-man|inception|spider-man-into-the-spider-verse|spider-man-across-the-spider-verse|spider-man-beyond-the-spider-verse|joker-2019|memento|the-arrival-of-a-train-at-la-ciotat|candyman|candyman-farewell-to-the-flesh|candyman-day-of-the-dead|candyman-2021|five-nights-at-freddys|zodiac|the-game|fart-the-movie|flow-2024|the-substance|the-shining|challengers|the-witch-2015|borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan|emilia-perez|the-lego-movie)/)) {
        debugLog('EASTER', 'Not on a page with easter eggs');
        return;
    }

    // Update train jumpscare check
    if (window.location.pathname.match(/\/(film|.*?\/film)\/the-arrival-of-a-train-at-la-ciotat/)) {
        handleTrainJumpscare();
    }

    chrome.storage.sync.get(['showGarfield', 'muteAudio'], (settings) => {
        const isMuted = settings.muteAudio === true;

        if (window.location.pathname.startsWith('/film/megalopolis-2024')) {
            debugLog('EASTER', 'Triggering Megalopolis easter egg');
            const audio = new Audio(chrome.runtime.getURL('audio/pledge.mp3'));
            audio.loop = true;
            audio.muted = isMuted;
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "GO BACK TO THE CLUUUUUUUUUB";
                    debugLog('EASTER', 'Tagline replaced with "GO BACK TO THE CLUUUUUUUUUB"');
                }
            }

            // Initial replacement
            replaceTagline();
            
            debugLog('EASTER', 'Setting up audio playback with loop enabled');
            
            // Add click listener to document for user interaction
            const handleUserInteraction = () => {
                debugLog('EASTER', 'User interaction detected - attempting audio playback');
                audio.play().then(() => {
                    debugLog('EASTER', 'Audio playback successfully started');
                }).catch(error => {
                    debugLog('EASTER', `Audio playback failed: ${error.message}`);
                });
                document.removeEventListener('click', handleUserInteraction);
            };
            
            // Try autoplay first
            audio.play().catch(error => {
                if (error.name === 'NotAllowedError') {
                    debugLog('EASTER', 'Autoplay blocked - waiting for user interaction');
                    document.addEventListener('click', handleUserInteraction);
                }
            });

            // Text replacement functionality
            function replaceTextContent(element) {
                let replacementCount = 0;
                
                for (let node of element.childNodes) {
                    if (node.nodeType === 3) { // Text node
                        // Skip processing if the node contains instructions
                        if (node.textContent.includes("Instructions:")) {
                            console.debug('EASTER', 'Skipping instructions text node');
                            continue; // Skip this node
                        }
                        if (node.textContent.includes('Megalopolis')) {
                            const oldText = node.textContent;
                            node.textContent = node.textContent.replace(/Megalopolis/gi, 'Megacockolis');
                            if (oldText !== node.textContent) {
                                replacementCount++;
                            }
                        }
                    } else if (node.nodeType === 1) { // Element node
                        if (!['SCRIPT', 'STYLE', 'META', 'LINK'].includes(node.tagName)) {
                            const subCount = replaceTextContent(node);
                            replacementCount += subCount;
                        }
                    }
                }
                return replacementCount;
            }

            debugLog('EASTER', 'Starting initial text replacement');
            const initialReplacements = replaceTextContent(document.body);
            debugLog('EASTER', `Completed initial text replacement - ${initialReplacements} instances replaced`);
            
            debugLog('EASTER', 'Setting up mutation observer for dynamic content');
            const observer = new MutationObserver((mutations) => {
                let batchReplacements = 0;
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            const nodeReplacements = replaceTextContent(node);
                            batchReplacements += nodeReplacements;
                        }
                    });
                });
                if (batchReplacements > 0) {
                    debugLog('EASTER', `Processed dynamic content - ${batchReplacements} new replacements made`);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
            
            debugLog('EASTER', 'Megalopolis easter egg initialization complete');
        } else if (window.location.pathname.startsWith('/film/memento')) {
            debugLog('EASTER', 'Triggering Memento easter egg');
            const processedNodes = new WeakSet();

            function reverseParagraphSentences(element) {
                let reversalCount = 0;
                
                for (let node of element.childNodes) {
                    if (node.nodeType === 3) { // Text node
                        if (!processedNodes.has(node)) {
                            const sentences = node.textContent.match(/[^.!?]+[.!?]+/g) || [];
                            if (sentences.length > 1) {
                                node.textContent = sentences.reverse().join(' ');
                                processedNodes.add(node);
                                reversalCount++;
                            }
                        }
                    } else if (node.nodeType === 1) { // Element node
                        if (!['SCRIPT', 'STYLE', 'META', 'LINK'].includes(node.tagName)) {
                            reversalCount += reverseParagraphSentences(node);
                        }
                    }
                }
                return reversalCount;
            }

            const initialReversals = reverseParagraphSentences(document.body);
            if (initialReversals > 0) {
                debugLog('EASTER', `Reversed ${initialReversals} text blocks`);
            }

            const observer = new MutationObserver((mutations) => {
                let batchReversals = 0;
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && !processedNodes.has(node)) {
                            batchReversals += reverseParagraphSentences(node);
                            processedNodes.add(node);
                        }
                    });
                });
                if (batchReversals > 0) {
                    debugLog('EASTER', `Reversed ${batchReversals} new text blocks`);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
        } else if (window.location.pathname.startsWith('/film/the-bye-bye-man')) {
            debugLog('EASTER', 'Checking for Bye Bye Man easter egg conditions');
            
            // Function to replace the main poster image
            function replacePosterImage() {
                const posterImg = document.querySelector('.film-poster img');
                if (posterImg) {
                    posterImg.src = chrome.runtime.getURL('images/peepee.png');
                    posterImg.srcset = ''; // Clear srcset
                    return true;
                }
                return false;
            }

            // Function to replace text content
            function replaceTextContent(element) {
                let replacementCount = 0;
                
                function processNode(node) {
                    if (node.nodeType === 3) {
                        if (node.textContent.match(/bye bye/i)) {
                            node.textContent = node.textContent.replace(/bye bye/gi, 'PeePee PooPoo');
                            replacementCount++;
                        }
                    } else if (node.nodeType === 1) {
                        if (!['SCRIPT', 'STYLE', 'META', 'LINK'].includes(node.tagName)) {
                            Array.from(node.childNodes).forEach(processNode);
                        }
                    }
                }
                
                processNode(element);
                if (replacementCount > 0) {
                    debugLog('EASTER', `Completed text replacement - ${replacementCount} instances of "Bye Bye" replaced`);
                }
            }

            // Initial replacements
            debugLog('EASTER', 'Attempting to replace poster with PeePee PooPoo Man variant');
            let posterReplaced = replacePosterImage();
            replaceTextContent(document.body);

            // Retry image replacement if needed
            if (!posterReplaced) {
                let retryCount = 0;
                const maxRetries = 5;
                debugLog('EASTER', 'Initial poster replacement failed - starting retry attempts');
                
                const retryInterval = setInterval(() => {
                    retryCount++;
                    posterReplaced = replacePosterImage();
                    
                    if (posterReplaced) {
                        debugLog('EASTER', `Poster successfully replaced after ${retryCount} retry attempts`);
                        clearInterval(retryInterval);
                    } else if (retryCount >= maxRetries) {
                        debugLog('EASTER', `Failed to replace poster after ${maxRetries} attempts - poster element may not be accessible`);
                        clearInterval(retryInterval);
                    }
                }, 1000);
            } else {
                debugLog('EASTER', 'Poster successfully replaced on first attempt');
            }

            // Observer for dynamic content
            debugLog('EASTER', 'Setting up mutation observer for dynamic content');
            const observer = new MutationObserver((mutations) => {
                let batchReplacements = 0;
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            const prevCount = batchReplacements;
                            replaceTextContent(node);
                            if (batchReplacements > prevCount) {
                                debugLog('EASTER', `Processed dynamic content - ${batchReplacements - prevCount} new replacements made`);
                            }
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
            debugLog('EASTER', 'Bye Bye Man easter egg initialization complete');
        } else if (window.location.pathname.startsWith('/film/inception')) {
            
            const audio = new Audio(chrome.runtime.getURL('audio/inception.mp3'));
            audio.muted = isMuted;
            
            debugLog('EASTER', `Setting up Inception audio (muted: ${isMuted})`);
            
            // Add click listener to document for user interaction
            const handleUserInteraction = () => {
                // Create new audio instance for each click to allow overlapping
                const newAudio = new Audio(chrome.runtime.getURL('audio/inception.mp3'));
                newAudio.muted = isMuted;
                
                debugLog('EASTER', 'Playing Inception BWAAAH');
                newAudio.play().catch(error => {
                    if (error.name === 'NotAllowedError') {
                        debugLog('EASTER', 'Autoplay blocked - muting audio and retrying');
                        newAudio.muted = true;
                        newAudio.play().then(() => {
                            debugLog('EASTER', 'Muted playback successful');
                        });
                    }
                });
                
                // Clean up audio element when done
                newAudio.onended = () => {
                    debugLog('EASTER', 'Audio playback completed');
                    newAudio.remove();
                };
            };
            
            debugLog('EASTER', 'Adding click listener for Inception audio');
            document.addEventListener('click', handleUserInteraction);
        } else if (window.location.pathname.match(/\/(film|.*?\/film)\/(spider-man-into-the-spider-verse|spider-man-across-the-spider-verse|spider-man-beyond-the-spider-verse)/)) {
            
            const filmToAudio = {
                'spider-man-into-the-spider-verse': 'prowler.mp3',
                'spider-man-across-the-spider-verse': 'prowler.mp3',
                'spider-man-beyond-the-spider-verse': 'prowler.mp3'
            };
            
            const currentFilm = window.location.pathname.split('/film/')[1].replace(/\/$/, '');
            debugLog('EASTER', `Spider-Verse film detected: ${currentFilm}`);
            
            const handleUserInteraction = () => {
                // Create new audio instance for each click to allow overlapping
                const newAudio = new Audio(chrome.runtime.getURL(`audio/${filmToAudio[currentFilm]}`));
                newAudio.muted = settings.muteAudio === true;
                
                debugLog('EASTER', 'Playing Prowler theme');
                newAudio.play().catch(error => {
                    if (error.name === 'NotAllowedError') {
                        debugLog('EASTER', 'Autoplay blocked - muting audio and retrying');
                        newAudio.muted = true;
                        newAudio.play().then(() => {
                            debugLog('EASTER', 'Muted playback successful');
                        });
                    }
                });
                
                // Clean up audio element when done
                newAudio.onended = () => {
                    debugLog('EASTER', 'Audio playback completed');
                    newAudio.remove();
                };
            };
            
            debugLog('EASTER', 'Adding click listener for Spider-Verse audio');
            document.addEventListener('click', handleUserInteraction);
        } else if (window.location.pathname.startsWith('/film/joker-2019')) {
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "We live in a soceity...";
                }
            }

            // Initial replacement
            replaceTagline();

            // Observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            replaceTagline();
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (window.location.pathname.match(/\/(film|.*?\/film)\/(candyman|candyman-farewell-to-the-flesh|candyman-day-of-the-dead|candyman-2021)/)) {
            debugLog('EASTER', 'Candyman film detected - initializing audio easter egg');
            
            const audio = new Audio(chrome.runtime.getURL('audio/candyman.mp3'));
            audio.loop = true;
            audio.muted = isMuted;
            
            debugLog('EASTER', 'Setting up audio playback with loop enabled');
            
            // For reloads, wait for click
            if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
                debugLog('EASTER', 'Page reload - waiting for user interaction');
                const handleUserInteraction = () => {
                    debugLog('EASTER', 'User interaction detected - attempting audio playback');
                    audio.play().then(() => {
                        debugLog('EASTER', 'Audio playback successfully started');
                    }).catch(error => {
                        debugLog('EASTER', 'Audio playback failed:', error.message);
                    });
                    document.removeEventListener('click', handleUserInteraction);
                };
                document.addEventListener('click', handleUserInteraction);
            } else {
                // For direct navigation, autoplay
                debugLog('EASTER', 'Direct navigation - attempting autoplay');
                audio.play().catch(error => {
                    if (error.name === 'NotAllowedError') {
                        debugLog('EASTER', 'Autoplay blocked - waiting for user interaction');
                        document.addEventListener('click', () => {
                            audio.play().then(() => {
                                debugLog('EASTER', 'Audio playback successfully started');
                            });
                        }, { once: true });
                    }
                });
            }
        } else if (window.location.pathname.startsWith('/film/five-nights-at-freddys')) {
            debugLog('EASTER', 'FNAF film detected - initializing jumpscare easter egg');
            
            let jumpscareTimeout;
            let isActive = false;
            let clickReceived = false;
            
            // Video configuration
            const videos = [
                { file: 'fnaf.mp4', weight: 1 },
                { file: 'fnaf2.mp4', weight: 1 },
                { file: 'fnaf3.mp4', weight: 1 },
                { file: 'fnaf4.mp4', weight: 1 },
                { file: 'fnaf5.mp4', weight: 1 },
                { file: 'fnaf6.mp4', weight: 0.1 } // 10x less likely
            ];

            function createJumpscareOverlay() {
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 999999;
                    display: none;
                    background: black;
                `;
                document.body.appendChild(overlay);
                return overlay;
            }

            function playJumpscare(overlay) {
                if (!clickReceived) {
                    debugLog('EASTER', 'Skipping jumpscare - waiting for user interaction');
                    return;
                }

                // Calculate weighted random selection
                const totalWeight = videos.reduce((sum, vid) => sum + vid.weight, 0);
                let random = Math.random() * totalWeight;
                
                let selectedVideo;
                for (const video of videos) {
                    random -= video.weight;
                    if (random <= 0) {
                        selectedVideo = video.file;
                        break;
                    }
                }

                debugLog('EASTER', `Playing jumpscare video: ${selectedVideo}`);
                
                const video = document.createElement('video');
                video.src = chrome.runtime.getURL(`video/${selectedVideo}`);
                video.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
                video.muted = isMuted;
                
                overlay.innerHTML = '';
                overlay.appendChild(video);
                overlay.style.display = 'block';
                
                video.play().catch(error => {
                    debugLog('EASTER', 'Video playback failed:', error);
                    overlay.style.display = 'none';
                });

                video.onended = () => {
                    overlay.style.display = 'none';
                    if (isActive) {
                        scheduleNextJumpscare(overlay);
                    }
                };
            }

            function scheduleNextJumpscare(overlay) {
                // Random delay between 25-50 seconds for subsequent jumpscares
                const delay = Math.random() * 25000 + 25000;
                debugLog('EASTER', `Scheduling next jumpscare in ${Math.round(delay/1000)} seconds`);
                
                jumpscareTimeout = setTimeout(() => {
                    playJumpscare(overlay);
                }, delay);
            }

            // Create overlay once
            const jumpscareOverlay = createJumpscareOverlay();

            // Initial shorter delay between 15-30 seconds
            const initialDelay = Math.random() * 15000 + 15000;
            debugLog('EASTER', `Initial jumpscare scheduled for ${Math.round(initialDelay/1000)} seconds`);

            // For reloads, wait for click
            if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
                document.addEventListener('click', () => {
                    if (!clickReceived) {
                        clickReceived = true;
                        isActive = true;
                        debugLog('EASTER', 'Click received - jumpscare sequence will begin after initial delay');
                        
                        // Start the initial jumpscare after the shorter delay
                        jumpscareTimeout = setTimeout(() => {
                            playJumpscare(jumpscareOverlay);
                        }, initialDelay);
                    }
                }, { once: true });
            } else {
                // For direct navigation, start immediately
                clickReceived = true;
                isActive = true;
                debugLog('EASTER', 'Direct navigation - jumpscare sequence will begin after initial delay');
                
                jumpscareTimeout = setTimeout(() => {
                    playJumpscare(jumpscareOverlay);
                }, initialDelay);
            }

            // Cleanup when leaving page
            window.addEventListener('beforeunload', () => {
                isActive = false;
                if (jumpscareTimeout) {
                    clearTimeout(jumpscareTimeout);
                }
            });
        } else if (window.location.pathname.includes('/film/zodiac')) {
            debugLog('EASTER', 'Zodiac film detected - initializing cipher conversion');
            
            // Zodiac cipher mapping
            const ZODIAC_CIPHER = {
                'a': '!', 'b': '@', 'c': '#', 'd': '$', 'e': '%', 'f': '^', 'g': '&',
                'h': '*', 'i': '(', 'j': ')', 'k': '_', 'l': '+', 'm': '{', 'n': '}',
                'o': '[', 'p': ']', 'q': ':', 'r': ';', 's': '<', 't': '>', 'u': '|',
                'v': '/', 'w': '\\', 'x': '~', 'y': '`', 'z': '?'
            };
            
            // Create a letter bank element and add it to the top left of the screen
            const letterBankElement = document.createElement('div');
            letterBankElement.style.position = 'fixed';
            letterBankElement.style.top = '10px';
            letterBankElement.style.left = '10px';
            letterBankElement.style.backgroundColor = '#333'; // Darker gray background
            letterBankElement.style.color = 'white'; // White text color
            letterBankElement.style.padding = '10px';
            letterBankElement.style.border = 'none'; // No border
            letterBankElement.style.borderRadius = '5px';
            letterBankElement.style.zIndex = '9999';
            letterBankElement.classList.add('immune-from-cipher'); // Add immunity class
            letterBankElement.innerHTML = `
                <strong>Letters Remaining:</strong> 
                <span id="remaining-letters"></span>
            `;
            document.body.appendChild(letterBankElement);

            // Initialize the letter bank with all letters
            const allLetters = 'abcdefghijklmnopqrstuvwxyz';
            let remainingLetters = allLetters.split('');
            let correctlyGuessedLetters = new Set(); // Tracks correctly guessed letters

            // Function to update the letter bank display
            function updateLetterBank() {
                const remainingLettersElement = document.getElementById('remaining-letters');
                remainingLettersElement.textContent = remainingLetters.join(', '); // Display plain letters
                console.debug('EASTER', `Updated letter bank: ${remainingLetters.join(', ')}`);
            }

            // Function to update the Zodiac cipher
            function updateZodiacCipher(actual, cipher) {
                console.debug('EASTER', `Updating cipher: ${actual} -> ${cipher}`);
                
                // Remove the guessed letter from the letter bank
                const index = remainingLetters.indexOf(actual);
                if (index !== -1) {
                    remainingLetters.splice(index, 1); // Remove guessed letter from bank
                    console.debug('EASTER', `Removed letter from bank: ${actual}`);
                } else {
                    console.debug('EASTER', `Letter ${actual} was already removed from the bank.`);
                }

                // Update the page content with the guess (correct or not)
                updatePageContentForLetter(actual, cipher);

                // Check if the guess is correct
                for (const [key, value] of Object.entries(ZODIAC_CIPHER)) {
                    if (actual === key && cipher === value) {
                        correctlyGuessedLetters.add(actual); // Add to correctly guessed
                        console.debug('EASTER', `Correct guess: ${actual} -> ${cipher}`);
                    }
                }

                // Update the letter bank display
                updateLetterBank();

                // Log status of remaining letters
                debugLog('EASTER', `${remainingLetters.length} letters remain in the bank.`);
                debugLog('EASTER', `${correctlyGuessedLetters.size} letters correctly guessed.`);

                // Play video if all letters are guessed correctly
                if (correctlyGuessedLetters.size === 26) {
                    debugLog('EASTER', 'All 26 letters correctly guessed. Playing Zodiac video.');
                    playZodiacVideo();
                }
            }

            // Function to refresh text content for guessed letters
            function updatePageContentForLetter(original, ciphered) {
                const textNodes = document.evaluate(
                    "//text()[not(ancestor::script)][not(ancestor::style)][not(ancestor::*[@class='immune-from-cipher'])]",
                    document,
                    null,
                    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                    null
                );

                for (let i = 0; i < textNodes.snapshotLength; i++) {
                    const node = textNodes.snapshotItem(i);
                    const text = node.textContent;

                    // Replace ciphered characters with the guessed letter (right or wrong)
                    const updatedText = text.split('').map(char => {
                        if (char === ciphered) {
                            return original; // Replace ciphered with the guessed letter
                        }
                        return char;
                    }).join('');

                    node.textContent = updatedText;
                }
            }
                        
            // Function to create the floating interaction screen
            function createInteractionScreen() {
                debugLog('EASTER', 'Creating interaction screen for Zodiac cipher');
                
                const interactionDiv = document.createElement('div');
                interactionDiv.id = 'interaction-screen'; // Assign a unique ID
                interactionDiv.style.position = 'fixed';
                interactionDiv.style.bottom = '20px';
                interactionDiv.style.right = '20px';
                interactionDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                interactionDiv.style.padding = '15px';
                interactionDiv.style.border = '1px solid #ccc';
                interactionDiv.style.borderRadius = '8px';
                interactionDiv.style.zIndex = '9999';
                interactionDiv.style.width = '220px';
                interactionDiv.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                interactionDiv.style.fontFamily = 'Arial, sans-serif';
            
                // Dynamically set the instruction text after the page loads
                const instructionText = document.createElement('p');
                instructionText.classList.add('immune-from-cipher'); // Add immunity class
                instructionText.textContent = 'Decode The Page'; // Dynamically set text
                instructionText.style.fontSize = '14px';
                instructionText.style.fontWeight = 'bold';
                instructionText.style.marginBottom = '10px';
                instructionText.style.textAlign = 'center';
            
                const inputLetter = document.createElement('input');
                inputLetter.placeholder = 'Actual Letter (e.g., A)';
                inputLetter.style.width = '100%';
                inputLetter.style.marginBottom = '10px';
                inputLetter.style.padding = '8px';
                inputLetter.style.border = '1px solid #ccc';
                inputLetter.style.borderRadius = '4px';
                inputLetter.style.boxSizing = 'border-box';
            
                const inputChar = document.createElement('input');
                inputChar.placeholder = 'Cipher Symbol (e.g., #)';
                inputChar.style.width = '100%';
                inputChar.style.marginBottom = '10px';
                inputChar.style.padding = '8px';
                inputChar.style.border = '1px solid #ccc';
                inputChar.style.borderRadius = '4px';
                inputChar.style.boxSizing = 'border-box';
            
                const submitButton = document.createElement('button');
                submitButton.textContent = 'Submit';
                submitButton.style.width = '100%';
                submitButton.style.padding = '10px';
                submitButton.style.border = 'none';
                submitButton.style.borderRadius = '4px';
                submitButton.style.backgroundColor = '#007BFF';
                submitButton.style.color = '#FFF';
                submitButton.style.fontSize = '14px';
                submitButton.style.cursor = 'pointer';
            
                submitButton.onclick = () => {
                    const letter = inputLetter.value.trim().toLowerCase();
                    const char = inputChar.value.trim();
                    if (letter && char) {
                        debugLog('EASTER', `Updating Zodiac cipher: ${letter} -> ${char}`);
                        updateZodiacCipher(letter, char);
                        inputLetter.value = '';
                        inputChar.value = '';
                    } else {
                        debugLog('EASTER', 'Input fields are empty, skipping cipher update');
                    }
                };

                // Add the "Auto Decode" button
                const decodeButton = document.createElement('button');
                decodeButton.textContent = 'Auto Decode';
                decodeButton.style.width = '100%';
                decodeButton.style.padding = '10px';
                decodeButton.style.border = 'none';
                decodeButton.style.borderRadius = '4px';
                decodeButton.style.backgroundColor = '#dc3545'; // Red color                
                decodeButton.style.color = '#FFF';
                decodeButton.style.fontSize = '14px';
                decodeButton.style.cursor = 'pointer';

                decodeButton.onclick = () => {
                    debugLog('EASTER', 'Resetting the page to original state and closing pop-ups');
                    
                    // Close all Easter egg pop-ups
                    const existingPopups = document.querySelectorAll('#interaction-screen, .immune-from-cipher');
                    existingPopups.forEach(popup => popup.remove());

                    // Reset the text content
                    const textNodes = document.evaluate(
                        "//text()[not(ancestor::script)][not(ancestor::style)][not(ancestor::*[@class='immune-from-cipher'])]",
                        document,
                        null,
                        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                        null
                    );

                    for (let i = 0; i < textNodes.snapshotLength; i++) {
                        const node = textNodes.snapshotItem(i);
                        const text = node.textContent;
                        const decoded = text.split('').map(char => {
                            const originalChar = Object.keys(ZODIAC_CIPHER).find(key => ZODIAC_CIPHER[key] === char);
                            return originalChar || char; // Convert back to original character or keep the same
                        }).join('');
                        node.textContent = decoded;
                    }
                    debugLog('EASTER', 'Page reset to original state completed');
                };

                interactionDiv.appendChild(instructionText);
                interactionDiv.appendChild(inputChar);
                interactionDiv.appendChild(inputLetter);
                interactionDiv.appendChild(submitButton);
                interactionDiv.appendChild(decodeButton); // Add the decode button

                document.body.appendChild(interactionDiv);
            }

            // Initial conversion of text content to Zodiac cipher
            debugLog('EASTER', 'Starting initial conversion of text content to Zodiac cipher');
            const textNodes = document.evaluate(
                "//text()[not(ancestor::script)][not(ancestor::style)][not(ancestor::*[@class='immune-from-cipher'])]",
                document,
                null,
                XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                null
            );

            let totalConverted = 0; // Counter for total characters converted
            let uniqueLettersDecoded = new Set(); // Track unique letters decoded

            for (let i = 0; i < textNodes.snapshotLength; i++) {
                const node = textNodes.snapshotItem(i);
                const text = node.textContent;
                const converted = text.toLowerCase().split('').map(char => {
                    if (ZODIAC_CIPHER[char]) {
                        totalConverted++; // Increment counter for each character converted
                        uniqueLettersDecoded.add(char); // Track unique letters
                        return ZODIAC_CIPHER[char];
                    }
                    return char;
                }).join('');
                node.textContent = converted;
            }

            // Log the total number of characters converted
            debugLog('EASTER', `Total characters converted to Zodiac cipher: ${totalConverted}`);
            debugLog('EASTER', `${26 - uniqueLettersDecoded.size} letters remain to be decoded.`);

            // Function to play the zodiac video
            function playZodiacVideo() {
                const video = document.createElement('video');
                video.src = chrome.runtime.getURL('video/zodiac.mp4');
                video.style.position = 'fixed';
                video.style.top = '0';
                video.style.left = '0';
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.opacity = '1';
                video.style.zIndex = '999999';
                video.muted = settings.muteAudio === true; // Ensure video is muted based on settings
                video.autoplay = true;
                video.loop = false; // Set to false if you don't want it to loop

                document.body.appendChild(video);

                video.onended = () => {
                    debugLog('EASTER', 'Zodiac video playback completed.');
                    video.remove();
                };

                video.onerror = () => {
                    debugLog('EASTER', 'Error playing zodiac video.');
                    video.remove();
                };
            }

            // Call the function to create the interaction screen
            createInteractionScreen();
            debugLog('EASTER', 'Zodiac cipher conversion initialized');
        } else if (window.location.pathname.startsWith('/film/the-game/')) {
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "You just lost The Game...";
                    debugLog('EASTER', 'Tagline replaced with "You just lost The Game..."');
                }
            }

            // Initial replacement
            replaceTagline();

            // Observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            replaceTagline();
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (window.location.pathname.startsWith('/film/the-witch-2015/')) {
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "wouldst thou like to live deliciously?";
                    debugLog('EASTER', 'Tagline replaced with "wouldst thou like to live deliciously?"');
                }
            }

            // Initial replacement
            replaceTagline();

            // Observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            replaceTagline();
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (window.location.pathname.startsWith('/film/emilia-perez/')) {
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "A heartwarming tale, from penis to vagina";
                    debugLog('EASTER', 'A heartwarming tale, from penis to vagina');
                }
            }

            // Initial replacement
            replaceTagline();

            // Observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            replaceTagline();
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (window.location.pathname.startsWith('/film/fart-the-movie')) {
            debugLog('EASTER', 'F.A.R.T. The Movie easter egg initialized');

            // Function to play random fart sound
            function playRandomFartSound() {
                const fartSounds = [
                    'audio/fart1.mp3',
                    'audio/fart2.mp3',
                    'audio/fart3.mp3',
                    'audio/fart4.mp3',
                    'audio/fart5.mp3',
                    'audio/fart6.mp3',
                    'audio/fart7.mp3',
                    'audio/fart8.mp3'
                ];
                const randomSound = fartSounds[Math.floor(Math.random() * fartSounds.length)];
                const audio = new Audio(chrome.runtime.getURL(randomSound));
                audio.play().catch(error => {
                    debugLog('EASTER', 'Error playing fart sound:', error);
                });
            }

            // Add event listener for user input
            const handleUserInput = () => {
                debugLog('EASTER', 'User input detected - playing fart sound');
                playRandomFartSound();
            };

            // Attach event listener to document
            document.addEventListener('input', handleUserInput);
            document.addEventListener('click', handleUserInput);
        } else if (window.location.pathname.startsWith('/film/flow-2024')) {
            debugLog('EASTER', 'Triggering Flow easter egg');
            const flowAudio = new Audio(chrome.runtime.getURL('audio/flow.mp3'));
            flowAudio.loop = true;
            flowAudio.muted = isMuted;

            function handleFlowUserInteraction() {
                debugLog('EASTER', 'User interaction detected - attempting Flow audio playback');
                flowAudio.play().then(() => {
                    debugLog('EASTER', 'Flow audio playback successfully started');
                }).catch(error => {
                    debugLog('EASTER', `Flow audio playback failed: ${error.message}`);
                });
                document.removeEventListener('click', handleFlowUserInteraction);
            }

            // Try autoplay first
            flowAudio.play().catch(error => {
                if (error.name === 'NotAllowedError') {
                    debugLog('EASTER', 'Flow autoplay blocked - waiting for user interaction');
                    document.addEventListener('click', handleFlowUserInteraction);
                }
            });
        } else if (window.location.pathname.startsWith('/film/challengers')) {
            debugLog('EASTER', 'Triggering Challengers easter egg');
            const challengersAudio = new Audio(chrome.runtime.getURL('audio/challengers.mp3'));
            challengersAudio.loop = true;
            challengersAudio.muted = isMuted;

            function handleChallengersUserInteraction() {
                debugLog('EASTER', 'User interaction detected - attempting Challengers audio playback');
                challengersAudio.play().then(() => {
                    debugLog('EASTER', 'Challengers audio playback successfully started');
                }).catch(error => {
                    debugLog('EASTER', `Challengers audio playback failed: ${error.message}`);
                });
                document.removeEventListener('click', handleChallengersUserInteraction);
            }

            // Try autoplay first
            challengersAudio.play().catch(error => {
                if (error.name === 'NotAllowedError') {
                    debugLog('EASTER', 'Challengers autoplay blocked - waiting for user interaction');
                    document.addEventListener('click', handleChallengersUserInteraction);
                }
            });
        } else if (window.location.pathname.startsWith('/film/the-lego-movie')) {
            debugLog('EASTER', 'Triggering Lego easter egg');
            const legoAudio = new Audio(chrome.runtime.getURL('audio/lego.mp3'));
            legoAudio.loop = true;
            legoAudio.muted = isMuted;

            function handleLegoUserInteraction() {
                debugLog('EASTER', 'User interaction detected - attempting Lego audio playback');
                legoAudio.play().then(() => {
                    debugLog('EASTER', 'Lego audio playback successfully started');
                }).catch(error => {
                    debugLog('EASTER', `Lego audio playback failed: ${error.message}`);
                });
                document.removeEventListener('click', handleLegoUserInteraction);
            }

            // Try autoplay first
            legoAudio.play().catch(error => {
                if (error.name === 'NotAllowedError') {
                    debugLog('EASTER', 'Lego autoplay blocked - waiting for user interaction');
                    document.addEventListener('click', handleLegoUserInteraction);
                }
            });
        } else if (window.location.pathname.startsWith('/film/the-substance')) { // Updated path for the new film
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "Pump. It. Up. You've got to pump it up."; // New tagline
                    debugLog('EASTER', 'Replaced tagline');
                }
            }

            // Initial replacement
            replaceTagline();

            // Observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            replaceTagline();
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (window.location.pathname.startsWith('/film/the-shining/')) {
            function replaceTagline() {
                const tagline = document.querySelector('.tagline');
                if (tagline) {
                    tagline.textContent = "All work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.";
                }
            }

            // Initial replacement
            replaceTagline();

            // Observer for dynamic content
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            replaceTagline();
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else if (window.location.pathname === '/film/borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan/') {
            chrome.storage.sync.get(['showGarfield'], (settings) => {
                if (settings.showGarfield) {
                    debugLog('EASTER', 'Borat easter egg activated - changing background image');
                    
                    const backdropElement = document.querySelector('.backdrop-container #backdrop');
                    if (backdropElement) {
                        backdropElement.setAttribute('data-backdrop', chrome.runtime.getURL('images/borat.jpg'));
                        backdropElement.setAttribute('data-backdrop2x', chrome.runtime.getURL('images/borat.jpg'));
                        backdropElement.setAttribute('data-backdrop-mobile', chrome.runtime.getURL('images/borat.jpg'));
                        
                        const backdropImageDiv = backdropElement.querySelector('.backdropimage');
                        if (backdropImageDiv) {
                            backdropImageDiv.style.backgroundImage = `url(${chrome.runtime.getURL('images/borat.jpg')})`;
                        }
                    }
                }
            });
        }
    });
}

function isInTop250() {
    return new Promise((resolve) => {
        // debugLog('ICON', 'Waiting for 0.1 seconds to ensure the DOM has loaded...');
        
        setTimeout(() => {
            // debugLog('ICON', 'Checking if the film is in the Top 250...');
    
            // Search specifically for an <a> tag with the unique href
            const top250Link = document.querySelector('a[href="/dave/list/official-top-250-narrative-feature-films/"]');
    
            if (top250Link) {
                // debugLog('ICON', 'Top 250 link found:', top250Link.outerHTML); // Log the found element's HTML
                debugLog('ICON', 'Skipping crown or gray icon - film is already in Top 250');
                resolve(true); // The film is in the Top 250
            } else {
                debugLog('ICON', 'No Top 250 link found. Proceeding with icon logic...');
                
                // Log all <a> elements for debugging
                const allLinks = document.querySelectorAll('a'); // Get all <a> elements in the DOM
                // debugLog('ICON', `Total <a> elements found: ${allLinks.length}`);
    
                resolve(false); // The film is not in the Top 250
            }
        }, 100); // 100 milliseconds delay
    });
}

// Unified icon addition function
async function addIcon(filmId, iconKey, settings) {
    debugLog('ICON', `Attempting to add icon: ${iconKey} for film ID: ${filmId}`);
    
    // Handle mutual exclusivity between money and moneyAlt
    if (iconKey === 'money' && settings.showMoneyAlt === true) {
        debugLog('ICON', 'Skipping money icon - moneyAlt is enabled');
        return;
    }

    // Ensure both 1001 and 1001Alt toggles are on for 1001Alt icon
    if (iconKey === 'movies1001' && settings.showMovies1001Alt === true) {
        debugLog('ICON', 'Skipping 1001 icon - 1001Alt toggle is enabled');
        return;
    }

    if (iconKey === 'animation' && settings.showAnimation250 === true) {
        debugLog('ICON', 'Skipping animation icon - animation250 is disabled');
        return;
    }

    if (iconKey === 'horror' && settings.showHorrorAlt === true) {
        debugLog('ICON', 'Skipping horror icon - horrorAlt is enabled');
        return;
    }

    if (iconKey === 'thriller' && settings.showGarfield === true) {
        debugLog('ICON', 'Skipping thriller icon - thrillerAlt is enabled');
        return;
    }

    if (iconKey === 'popThriller' && settings.showPopThrillerAlt === true) {
        debugLog('ICON', 'Skipping popThriller icon - popThrillerAlt is enabled');
        return;
    }

    if (iconKey === 'crown' || iconKey === 'gray') {
        // Wait for isInTop250() to finish before proceeding
        const isTop250 = await isInTop250();
        
        if (isTop250) {
            return; // Exit early if the film is in the Top 250
        }
    
        // Proceed with adding the icon if not in the Top 250
        debugLog('ICON', `Proceeding with adding ${iconKey} icon.`);
    }  

    // Check for parent toggle dependencies
    if ((iconKey === 'moneyAlt' && settings.showMoney === false) || 
        (iconKey === 'movies1001Alt' && settings.showMovies1001 === false) ||
        (iconKey === 'animation250' && settings.showAnimation === false) ||
        (iconKey === 'thrillerAlt' && settings.showThriller === false) ||
        (iconKey === 'popThrillerAlt' && settings.showPopThriller === false) ||
        (iconKey === 'horrorAlt' && settings.showHorror === false)) {
        debugLog('ICON', `Skipping ${iconKey} - parent toggle is disabled`);
        return;
    }
    if (iconKey === 'oscarHierarchy' && settings.showWinOscar === false) {
        debugLog('ICON', `Skipping ${iconKey} - parent toggle 'showWinOscar' is disabled`);
        return;
    }
    // Add check for FlanaganBaby icon
    if (iconKey === 'flanaganBaby' && settings.showGarfield === false) {
        debugLog('ICON', `Skipping ${iconKey} - parent toggle 'showGarfield' is disabled`);
        return;
    }

    if (settings[`show${iconKey.charAt(0).toUpperCase() + iconKey.slice(1)}`] === false) {
        debugLog('ICON', `Skipping ${iconKey} - toggle is disabled`);
        return;
    }
    
    try {
        // debugLog('ICON', `Fetching data for ${iconKey}`);
        const data = await fetchData(ICON_CONFIG[iconKey].url);
        const itemIndex = data.findIndex(item => item.ID === filmId.toString());
        
        if (itemIndex !== -1) {
            debugLog('ICON', `Found film in ${iconKey} list at index ${itemIndex}`);
            
            // Special handling for Oscar nominations
            if (iconKey === 'nomOscar' && settings.hideNomForWin) {
                debugLog('ICON', 'Checking if film is Oscar winner before adding nomination icon');
                const winnerData = await fetchData('film_titles_every-oscar-winner-ever-1.json');
                if (winnerData.some(item => item.ID === filmId.toString())) {
                    debugLog('ICON', 'Skipping nomination icon - film is Oscar winner');
                    return;
                }
            }

            const iconElement = ICON_CONFIG[iconKey].addFunction(itemIndex + 1);
            debugLog('ICON', `Created icon element for ${iconKey}:`, iconElement);
            
            return new Promise((resolve) => {
                const observer = new MutationObserver((mutations, observer) => {
                    debugLog('ICON', `Mutation observer triggered for ${iconKey}`);
                    const ul = document.querySelector(".production-statistic-list, .film-stats, .stats, [class*='stats']");
                    debugLog('ICON', `Looking for stats container for ${iconKey} - found: ${!!ul}`);
                    if (ul) {
                        debugLog('ICON', `Stats container outerHTML (first 300 chars): ${ul.outerHTML.substring(0, 300)}...`);
                    }
                    if (ul && !ul.querySelector(`.${iconKey}-icon`)) {
                        debugLog('ICON', `Appending ${iconKey} icon to DOM`);
                        ul.appendChild(iconElement);
                        observer.disconnect();
                        resolve();
                    } else if (ul) {
                        debugLog('ICON', `Icon ${iconKey} already exists in container`);
                        observer.disconnect();
                        resolve();
                    } else {
                        debugLog('ICON', `Still waiting for stats container for ${iconKey}`);
                    }
                });
                observer.observe(document, { childList: true, subtree: true });
            });
        } else {
            debugLog('ICON', `Film not found in ${iconKey} list`);
            return Promise.resolve();
        }
    } catch (error) {
        console.error(`Failed to add ${iconKey} icon:`, error);
        debugLog('ICON', `Error adding ${iconKey} icon:`, error);
        return Promise.resolve();
    }
}

// Update the addOscarIcon function
async function addOscarIcon(filmId, settings) {
    // First check if Oscar Winners toggle is enabled
    if (settings.showWinOscar === false) return;

    try {
        // If Oscar hierarchy is enabled and parent toggle is on, only show hierarchy
        if (settings.showWinOscar !== false && settings.showOscarHierarchy !== false) {
            const oscarTiers = ['oscar10', 'oscar7', 'oscar5', 'oscar3'];
            let foundTier = false;
            
            for (const tier of oscarTiers) {
                const data = await fetchData(ICON_CONFIG[tier].url);
                if (data.some(item => item.ID === filmId.toString())) {
                    const iconElement = ICON_CONFIG[tier].addFunction();
                    
                    new MutationObserver((mutations, observer) => {
                        const ul = document.querySelector(".production-statistic-list");
                        if (ul && !ul.querySelector(`.${tier}-icon`)) {
                            ul.appendChild(iconElement);
                            observer.disconnect();
                        }
                    }).observe(document, { childList: true, subtree: true });
                    
                    foundTier = true;
                    break;
                }
            }

            // If no tier matches and hierarchy is enabled, show regular Oscar winner icon
            if (!foundTier) {
                // Only add regular winner icon if the film is an Oscar winner
                const winnerData = await fetchData(ICON_CONFIG.winOscar.url);
                if (winnerData.some(item => item.ID === filmId.toString())) {
                    addIcon(filmId, 'winOscar', settings);
                }
            }
        } else {
            // If hierarchy is disabled but Oscar Winners is enabled, show regular Oscar winner icon
            addIcon(filmId, 'winOscar', settings);
        }

        // Always check for nominations if enabled
        if (settings.showNomOscar !== false) {
            // Only add nomination icon if hideNomForWin is false or the film isn't a winner
            if (!settings.hideNomForWin) {
                addIcon(filmId, 'nomOscar', settings);
            } else {
                const winnerData = await fetchData(ICON_CONFIG.winOscar.url);
                if (!winnerData.some(item => item.ID === filmId.toString())) {
                    addIcon(filmId, 'nomOscar', settings);
                }
            }
        }
    } catch (error) {
        console.error('Failed to add Oscar hierarchy icon:', error);
    }
}

async function updateReleaseYear(settings) {
    
    if (settings.useNonPremiereYear === false) {
        debugLog('SETTINGS', 'Release year update disabled');
        return;
    }

    debugLog('SETTINGS', 'Searching for release tables');
    const releaseTables = document.querySelectorAll('.release-table-title');
    let earliestNonPremiereDate = null;

    for (const tableTitle of releaseTables) {
        if (tableTitle.textContent.toLowerCase().includes('premiere')) {
            // debugLog('SETTINGS', 'Skipping premiere date:', tableTitle.textContent);
            continue;
        }

        const dateElement = tableTitle.nextElementSibling?.querySelector('.date');
        if (dateElement) {
            const dateText = dateElement.textContent.trim();
            const date = new Date(dateText);
            // debugLog('SETTINGS', 'Found release date:', dateText);
            
            if (!earliestNonPremiereDate || date < earliestNonPremiereDate) {
                earliestNonPremiereDate = date;
                debugLog('SETTINGS', 'New earliest non-premiere date:', date);
            }
        }
    }

    if (earliestNonPremiereDate) {
        const releaseYearElement = document.querySelector('.releaseyear a');
        if (releaseYearElement) {
            const year = earliestNonPremiereDate.getFullYear();
            debugLog('SETTINGS', `Updating release year to ${year}`);
            releaseYearElement.textContent = year;
            releaseYearElement.href = `/films/year/${year}/`;
        }
    }
}

// Main function
async function fetchID() {
    const filmPoster = document.querySelector(".film-poster");
    if (!filmPoster) return;

    const filmId = filmPoster.getAttribute("data-film-id");
    
    // Add a 1ms delay before proceeding
    await new Promise(resolve => setTimeout(resolve, 1));
    
    chrome.storage.sync.get(null, async (settings) => {
        // Add Oscar icons (this handles both regular and hierarchy)
        await addOscarIcon(filmId, settings);
        
        // Add the release year update
        updateReleaseYear(settings);
        
        // Add the Megalopolis easter egg if Garfield mode is enabled
        if (settings.showGarfield) {
            easterEggs();
            // Initialize American Psycho playlist if on the right page
            initializeAmericanPsychoPlaylist();
        }
        
        // Create array of promises for icon additions
        const iconPromises = Object.keys(ICON_CONFIG)
            .filter(iconKey => !iconKey.startsWith('oscar') && 
                              iconKey !== 'winOscar' && 
                              iconKey !== 'nomOscar')
            .map(iconKey => addIcon(filmId, iconKey, settings));

        // Wait for all icons to be processed
        await Promise.all(iconPromises);
        debugLog('ICON', '✓ All icons have been processed and added');
    });
}

// Replace the current fetchID() call with this code
const initializeIcons = () => {
    debugLog('ICON', 'Waiting for film-poster and stats container to be available...');
    const observer = new MutationObserver((mutations, obs) => {
        const filmPoster = document.querySelector(".film-poster");
        const statsContainer = document.querySelector(".production-statistic-list");
        
        if (filmPoster && statsContainer) {
            debugLog('ICON', 'Film poster and stats container found, initializing icons');
            obs.disconnect();
            fetchID();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also try immediately in case the elements are already there
    if (document.querySelector(".film-poster") && document.querySelector(".production-statistic-list")) {
        debugLog('ICON', 'Film poster and stats container already present, initializing icons');
        observer.disconnect();
        fetchID();
    }
};

initializeIcons();

function handleTrainJumpscare() {
    
    if (!window.location.pathname.includes('/film/the-arrival-of-a-train-at-la-ciotat')) {
        debugLog('EASTER', 'Not on train page - skipping jumpscare check');
        return;
    }
    
    debugLog('EASTER', 'On train page, checking Garfield mode');
    chrome.storage.sync.get(['showGarfield', 'muteAudio'], (settings) => {
        if (!settings.showGarfield) {
            debugLog('EASTER', 'Garfield mode disabled - skipping jumpscare setup');
            return;
        }

        const delay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
        const isReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;
        const requiredClicks = isReload ? Math.floor(Math.random() * 3) + 1 : 0;
        let clickCount = 0;
        
        debugLog('EASTER', `Jumpscare will trigger after ${delay}ms${isReload ? ` and ${requiredClicks} clicks` : ''}`);
        
        setTimeout(() => {
            try {
                const video = document.createElement('video');
                video.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    object-fit: cover;
                    z-index: 999999;
                    opacity: 0.6;
                    pointer-events: none;
                `;
                
                video.src = chrome.runtime.getURL('video/train.mp4');
                video.autoplay = true;
                video.muted = settings.muteAudio === true;
                
                if (isReload) {
                    debugLog('EASTER', 'Page was reloaded - waiting for user clicks');
                    const handleUserInteraction = () => {
                        clickCount++;
                        debugLog('EASTER', `Click detected (${clickCount}/${requiredClicks})`);
                        
                        if (clickCount >= requiredClicks) {
                            debugLog('EASTER', 'Required clicks reached, triggering jumpscare');
                            document.body.appendChild(video);
                            video.play().catch(error => {
                                if (error.name === 'NotAllowedError') {
                                    debugLog('EASTER', 'Autoplay blocked - muting video');
                                    video.muted = true;
                                    video.play();
                                }
                            });
                            document.removeEventListener('click', handleUserInteraction);
                        }
                    };
                    document.addEventListener('click', handleUserInteraction);
                } else {
                    debugLog('EASTER', 'Page loaded directly - jumpscare beginning');
                    document.body.appendChild(video);
                    video.play().catch(error => {
                        if (error.name === 'NotAllowedError') {
                            debugLog('EASTER', 'Autoplay blocked - muting video');
                            video.muted = true;
                            video.play();
                        }
                    });
                }
                
                video.onended = () => {
                    debugLog('EASTER', 'Video playback completed');
                    video.remove();
                };
                
                video.onerror = () => {
                    debugLog('EASTER', 'Video playback error');
                    video.remove();
                };
                
            } catch (error) {
                debugLog('EASTER', `Error in jumpscare setup: ${error.message}`);
            }
        }, delay);
    });
}

// Near the top with other variables
let debugPlaylist = true;  // Force debugging on

function initializeAmericanPsychoPlaylist() {
    if (!window.location.pathname.match(/\/(film|.*?\/film)\/american-psycho/)) {
        return;
    }
    
    chrome.storage.sync.get(['showGarfield', 'muteAudio'], (settings) => {
        debugLog('EASTER', 'Fetched settings:', settings);
        if (!settings.showGarfield) {
            debugLog('EASTER', 'Garfield mode disabled - playlist initialization cancelled');
            return;
        }

        debugLog('EASTER', 'Initializing American Psycho playlist with Bateman\'s favorite tracks');
        
        const playlist = [
            'audio/greatest_love_of_all.mp3',
            'audio/if_you_dont_know_me_by_now.mp3',
            'audio/hip_to_be_square.mp3',
            'audio/i_touch_roses.mp3',
            'audio/in_too_deep.mp3',
            'audio/invisible_touch.mp3',
            'audio/red_lights.mp3',
            'audio/simply_irresistible.mp3',
            'audio/sussudio.mp3',
            'audio/the_lady_in_red.mp3',
            'audio/walking_on_sunshine.mp3'
        ];

        let radioPopup = null;
        let availableSongs = [...playlist];
        let currentAudio = null;
        let hasUserInteracted = false;
        const isReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;

        // Add user interaction listener
        document.addEventListener('click', () => {
            hasUserInteracted = true;
            debugLog('EASTER', 'User interaction detected - allowing audio playback');
            if (currentAudio) {
                currentAudio.play().catch(error => {
                    debugLog('EASTER', `Playback error: ${error.message}`);
                });
            }
        });

        function getRandomSong() {
            if (availableSongs.length === 0) {
                debugLog('EASTER', 'Song pool depleted - replenishing with full playlist');
                availableSongs = [...playlist];
            }
            
            const randomIndex = Math.floor(Math.random() * availableSongs.length);
            const song = availableSongs[randomIndex];
            availableSongs.splice(randomIndex, 1);
            
            debugLog('EASTER', `Selected track: ${song.split('/').pop()}. ${availableSongs.length} songs remaining in pool`);
            return song;
        }

        function playNextSong() {
            debugLog('EASTER', 'Initiating next song playback sequence');
            
            if (currentAudio) {
                debugLog('EASTER', 'Stopping current audio playback');
                currentAudio.pause();
                currentAudio.remove();
            }

            const songPath = getRandomSong();
            currentAudio = new Audio(chrome.runtime.getURL(songPath));
            currentAudio.muted = settings.muteAudio === true;
            currentAudio.volume = 0.5;
            
            currentAudio.addEventListener('play', () => {
                debugLog('EASTER', `Playback started for: ${songPath.split('/').pop()}`);
                if (!radioPopup) {
                    debugLog('EASTER', 'Creating radio popup interface');
                    radioPopup = createRadioPopup();
                }
                updateSongInfo(songPath);
            });
            
            currentAudio.addEventListener('ended', () => {
                debugLog('EASTER', 'Track finished - queuing next song');
                playNextSong();
            });
            
            // If we've already had user interaction or this isn't a reload, play immediately
            if (hasUserInteracted || !isReload) {
                debugLog('EASTER', 'Playing automatically - user has already interacted or direct load');
                currentAudio.play()
                    .catch(error => {
                        debugLog('EASTER', `Playback error: ${error.message}`);
                    });
            }
        }

        // Start playing the first song
        playNextSong();
    });
}
function createRadioPopup() {
    // Get the chrome extension URL for the radio image
    const radioImageUrl = chrome.runtime.getURL('images/radio.png');
    
    // Create a style element to define the CSS variable
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --radio-bg: url('${radioImageUrl}');
        }
    `;
    document.head.appendChild(style);
    
    const popup = document.createElement('div');
    popup.className = 'radio-popup';
    popup.innerHTML = `
        <div class="radio-header">Now Playing</div>
        <div class="radio-subtitle">Bateman's Favorites: Music To Die For!</div>
        <div class="radio-content">
            <div class="track-info">
                <div class="song-title"></div>
                <div class="song-artist"></div>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    return popup;
}
function updateSongInfo(songPath) {
    const songInfo = {
        'greatest_love_of_all.mp3': {
            title: 'Greatest Love of All',
            artist: 'Whitney Houston'
        },
        'if_you_dont_know_me_by_now.mp3': {
            title: 'If You Don\'t Know Me by Now',
            artist: 'Simply Red'
        },
        'hip_to_be_square.mp3': {
            title: 'Hip to Be Square',
            artist: 'Huey Lewis and The News'
        },
        'i_touch_roses.mp3': {
            title: 'I Touch Roses',
            artist: 'Book of Love'
        },
        'in_too_deep.mp3': {
            title: 'In Too Deep',
            artist: 'Genesis'
        },
        'invisible_touch.mp3': {
            title: 'Invisible Touch',
            artist: 'Genesis'
        },
        'red_lights.mp3': {
            title: 'Red Lights',
            artist: 'Curiosity Killed the Cat'
        },
        'simply_irresistible.mp3': {
            title: 'Simply Irresistible',
            artist: 'Robert Palmer'
        },
        'sussudio.mp3': {
            title: 'Sussudio',
            artist: 'Phil Collins'
        },
        'the_lady_in_red.mp3': {
            title: 'The Lady in Red',
            artist: 'Chris de Burgh'
        },
        'walking_on_sunshine.mp3': {
            title: 'Walking on Sunshine',
            artist: 'Katrina and The Waves'
        }
    };

    const songFileName = songPath.split('/').pop();
    const info = songInfo[songFileName] || { title: 'Unknown Track', artist: 'Unknown Artist' };
    
    const titleElement = document.querySelector('.song-title');
    const artistElement = document.querySelector('.song-artist');
    
    if (titleElement && artistElement) {
        titleElement.textContent = info.title;
        artistElement.textContent = info.artist;
    }
}

let ratingsRemoved = false; // Flag to track if ratings have been removed

// Function to remove ratings
async function removeRatings() {
    const ratingsSection = document.querySelector('.section.ratings-histogram-chart');
    if (ratingsSection) {
        if (ratingsSection.style.display !== 'none') {
            ratingsSection.style.display = 'none'; // Hide the ratings section
            debugLog('SETTINGS', 'Ratings and histogram successfully removed.');
            ratingsRemoved = true; // Set the flag to true
        } else {
            // debugLog('SETTINGS', 'Ratings section was already hidden.');
        }
    } else {
        // debugLog('SETTINGS', 'Ratings section not found. Retrying in 100ms...'); // Change to warn for clarity
        setTimeout(removeRatings, 100); // Retry after a short delay
    }
}

// Function to observe changes in the sidebar
function observeSidebar() {
    const sidebar = document.querySelector('aside.sidebar');
    if (!sidebar) {
        debugLog('SETTINGS', 'Sidebar not found.');
        return;
    }

    const observer = new MutationObserver(() => {
        // Check the toggle state and remove ratings if necessary
        checkAndRemoveRatings(observer);
    });

    observer.observe(sidebar, { childList: true, subtree: true });
}

// Add this function to handle the removal of ratings based on the toggle state
async function checkAndRemoveRatings(observer) {
    // If ratings have already been removed, do not proceed
    if (ratingsRemoved) {
        // debugLog('SETTINGS', 'Ratings have already been removed. No further action taken.');
        return; // Early return to prevent further checks
    }

    // Retrieve the toggle state from storage
    const result = await chrome.storage.sync.get(['showRemoveRatings']);
    if (result.showRemoveRatings) {
        // debugLog('SETTINGS', 'Remove Ratings toggle is ON.');
        await removeRatings(); // Call without passing observer
    } else {
        debugLog('SETTINGS', 'Remove Ratings toggle is OFF. No action taken.');
    }
}

// Call the function when the content script loads
observeSidebar(); // Start observing the sidebar for changes
checkAndRemoveRatings(); // Initial check for ratings removal

// Optimized runtime conversion function
async function convertRuntime() {
    try {
        chrome.storage.sync.get(['showConvertRuntime'], ({ showConvertRuntime }) => {
            if (!showConvertRuntime) {
                debugLog('SETTINGS', 'Runtime conversion toggle is off');
                return;
            }

            debugLog('SETTINGS', 'Runtime conversion toggle is on, processing runtime');

            const runtimeElements = [
                {
                    selector: '.text-link.text-footer',
                    getRuntime: el => el.textContent.match(/(\d+)\s*mins/),
                    setRuntime: (el, newText) => {
                        el.childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = node.textContent.replace(/(\d+\s*mins)/, newText);
                            }
                        });
                    }
                },
                {
                    selector: '.text-footer-extra.duration-extra',
                    getRuntime: el => el.getAttribute('data-original-title').match(/(\d+)h\s*(\d+)m/),
                    setRuntime: (el, newText) => {
                        el.childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = node.textContent.replace(/(\d+\s*mins)/, newText);
                            }
                        });
                    }
                }
            ];

            runtimeElements.forEach(({ selector, getRuntime, setRuntime }) => {
                const runtimeElement = document.querySelector(selector);
                if (runtimeElement) {
                    const match = getRuntime(runtimeElement);
                    if (match) {
                        let newRuntimeText;
                        if (match.length === 2) {
                            const minutes = parseInt(match[1], 10);
                            newRuntimeText = formatDuration(minutes);
                        } else if (match.length === 3) {
                            const hours = parseInt(match[1], 10);
                            const minutes = parseInt(match[2], 10);
                            newRuntimeText = formatDuration(hours * 60 + minutes);
                        }

                        setRuntime(runtimeElement, newRuntimeText);
                        debugLog('SETTINGS', `Updated runtime to: ${newRuntimeText}`);
                    } else {
                        debugLog('SETTINGS', 'No runtime found to convert');
                    }
                } else {
                    debugLog('SETTINGS', 'Runtime element not found');
                }
            });
        });
    } catch (error) {
        console.error('Error in convertRuntime:', error);
        debugLog('SETTINGS', 'Error in convertRuntime:', error);
    }
}

// Utility function for formatting duration
function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''}`;
    } else {
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
}

// Function to safely execute code in the context of the extension
function safeExecute(callback) {
    try {
        callback();
    } catch (error) {
        console.error('Error executing callback:', error);
    }
}

// Call the convertRuntime function on film pages
if (window.location.pathname.startsWith('/film/')) {
    safeExecute(convertRuntime);
}

// Function to handle the easter egg click
function handleEasterEggClick() {
    const randomChance = Math.random();
    
    // Retrieve the toggle state from storage
    chrome.storage.sync.get(['showGarfield'], (result) => {
        if (result.showGarfield) { // Check if toggle is enabled
            // Log the click and random chance
            // debugLog('EASTER', 'Click detected - random chance: ', randomChance); 
            
            if (randomChance < 0.0002) { // 1 in 5000 chance for YouTube
                window.location.href = "https://youtu.be/-nmCeXgztxM";
                debugLog('EASTER', 'Easter egg triggered! Redirecting to YouTube.');
            } else if (randomChance < 0.0004) { // 1 in 5000 chance for Freddy Got Fingered
                window.location.href = "https://letterboxd.com/film/freddy-got-fingered/";
                debugLog('EASTER', 'Easter egg triggered! Redirecting to Letterboxd page.');
            } else if (window.location.pathname === '/film/the-truman-show/') {
                // New easter egg for The Truman Show
                playTrumanVideo();
            } else {
                // debugLog('EASTER', 'Easter egg not triggered.');
            }
        }
    });
}

// Function to play the Truman video
function playTrumanVideo() {
    const videoContainer = document.createElement('div');
    videoContainer.style.position = 'fixed';
    videoContainer.style.bottom = '20px';
    videoContainer.style.right = '20px';
    videoContainer.style.width = '200px';
    videoContainer.style.height = '150px';
    videoContainer.style.overflow = 'hidden';
    videoContainer.style.borderRadius = '8px'; // Keep the border radius for rounded corners
    videoContainer.style.zIndex = '999999';
    videoContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    
    const videoElement = document.createElement('video');
    videoElement.src = chrome.runtime.getURL('video/truman.mp4');
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.loop = true;
    videoElement.autoplay = true;
    videoElement.muted = true; // Mute the video to avoid sound

    const label = document.createElement('div');
    label.innerText = 'Live View of Truman';
    label.style.position = 'absolute';
    label.style.bottom = '5px';
    label.style.left = '50%';
    label.style.transform = 'translateX(-50%)';
    label.style.fontWeight = 'bold';
    label.style.color = '#000';
    label.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Adjusted opacity for the background
    label.style.padding = '2px 5px';
    label.style.borderRadius = '4px';
    label.style.textAlign = 'center';
    label.style.opacity = '1'; // Set opacity for the text

    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(label);
    document.body.appendChild(videoContainer);

    debugLog('EASTER', 'Truman video is now playing.');
}

// Attach the easter egg click handler to the document
document.addEventListener('click', handleEasterEggClick);

// Function to replace "brendan fraser" with "Brendan Fraser, from The Mummy (1999)"
async function replaceBrendanFraser() {
    try {
        // Retrieve the showGarfield setting
        const settings = await new Promise((resolve, reject) => {
            chrome.storage.sync.get(['showGarfield'], (result) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result);
                }
            });
        });

        // Check if the showGarfield toggle is enabled
        if (!settings.showGarfield) {
            return; // Exit if the toggle is off
        }

        const textNodes = document.evaluate(
            "//text()[not(ancestor::script)][not(ancestor::style)]",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        let totalReplacements = 0; // Counter for total replacements

        for (let i = 0; i < textNodes.snapshotLength; i++) {
            const node = textNodes.snapshotItem(i);
            if (node.nodeType === Node.TEXT_NODE) {
                const originalText = node.textContent;
                // Check if the text already contains the replacement phrase
                const updatedText = originalText.replace(/brendan fraser(?!, from The Mummy \(1999\))/gi, "Brendan Fraser, from The Mummy (1999)");
                
                if (updatedText !== originalText) {
                    node.textContent = updatedText; // Update the text content
                    const replacementsInNode = (originalText.match(/brendan fraser/gi) || []).length; // Count occurrences
                    totalReplacements += replacementsInNode; // Update total replacements
                    debugLog('EASTER', `Replaced ${replacementsInNode} occurrence(s) of "brendan fraser" in a text node.`);
                }
            }
        }

        if (totalReplacements > 0) {
            debugLog('EASTER', `Total replacements made: ${totalReplacements}`);
        }
    } catch (error) {
        console.warn('Failed to replace Brendan Fraser text:', error);
        return; // Exit gracefully on error
    }
}

// Call the function to replace text on page load
replaceBrendanFraser();

// Observer for dynamic content
const observer = new MutationObserver(() => {
    replaceBrendanFraser();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});