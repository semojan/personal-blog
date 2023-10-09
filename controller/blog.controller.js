function getHome (req, res) {
    res.render("index");
}

function getResume (req, res){
    res.render("portfolio/resume");
}

module.exports = {
    getHome: getHome,
    getResume: getResume
};