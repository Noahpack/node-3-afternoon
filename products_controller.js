module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        const {name, discription, price, image_url } =req.body;
        db.create_product([name, discription, price, image_url])
        .then ( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong, our warriors have been informed"})
            console.log(err)
        })
    },

    getOne: (req, res, next) => {
const db = req.app.get('db')
const{ id } = req.params
    db.read_product(id)
    .then(product => res.status(200).send(product))
    .catch(err => {
        res.status(500).send({errorMessage: "Something went wrong again, contacting special forces"})
        console.log(err)
    })
    },
    getAll: (req, res, next ) => {
        const db = req.app.get('db')

        db.read_products()
        .then (products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "How is this happening! send in master Chief"})
            console.log(err)
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db')
        const {params, query } = req;
        db.update_product([params.id, query.desc])
        .then (()=> res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Alright that's it, call in the Gardians"})
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "I give up, goodbye"})
        })
    }
};