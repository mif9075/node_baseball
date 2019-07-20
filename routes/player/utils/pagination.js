function paginate(req, res) {
    let perPage = 9;
    let page    = req.params.page;

    People
        .find()
        .skip(perPage * (page - 1))
        .limit(perPage)
        .exec()
        .then( People => {
            return People
        })
        .then( People => {
            People
            .count()
            .exec()
            .then( count =>{
                res.render('player/player-main', {
                    People: People,
                    pages: Math.ceil(count / perPage),
                    current:        page,
                    nextPage:       page + 1,
                    previousPage:   page -1
                })
                .catch( error => {
                    let errors = {}
                    errors.status   =   500
                    errors.message  =   error;

                    res.status(errors.status).json(errors) 
                })
                })
            .catch( error =>{
                let errors = {}
                errors.status = 500
                errors.message = error;

                res.status(error.status).json(errors)
            })
        })
}

module.exports = paginate;