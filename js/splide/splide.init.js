(function () {
    new Splide('#splide-new', {
        perPage: 3,
        breakpoints: {
            768: {
                perPage: 1,
            },
            960: {
                perPage: 2,
            }
        },
        rewind: true,
    }).mount();
    new Splide('#splide-best', {
        perPage: 3,
        breakpoints: {
            768: {
                perPage: 1,
            },
            960: {
                perPage: 2,
            }
        },
        rewind: true,
    }).mount();
})();
