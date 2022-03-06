const {sendData} = require('../mock-db/data'); 

exports.getAllEntries = async (req, res) => {
    const entries = await sendData();
    if (entries.length === 0){
        return res.status(400).json({
            msg: 'Not entries'
        });
    }
    return res.status(200).json({
        entries
    });    
}
