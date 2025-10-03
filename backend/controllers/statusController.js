const getStatus =  (async(req, res) => {
    res.status (200).json("up and running");
});

module.exports = getStatus