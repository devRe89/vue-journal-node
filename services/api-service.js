

exports.sampleEndPoint = (req, res) => {
    res.status(200).json({
        msg: "Endpoint is active"
    });
}