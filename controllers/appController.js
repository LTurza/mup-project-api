exports.getIndex = (req, res) => {

    res.status(200).render('index',{pageTitle: 'App - Home'})
}