const userModel = require("./models/userSchema.js")

const retriever = async(req,res) => {
    const {firstName, lastName} = req.query;
    const data = await userModel.find({firstName : firstName, lastName : lastName});

    if(data.length==0) return res.status(400).json({message : "No matching data found"})
    
    else{
        return res.status(200).json(data);
    }
}

const adder = async (req, res) => {
    const {firstName, lastName} = req.body;
    const newDoc = new userModel({firstName, lastName});
    try{
        await newDoc.save();
        return res.status(200).json({message: "document added successfully"});
    }
    catch(error){
        return res.status(400).json({message: `document could not be added: ${error}`})
    }
}

const updater = async (req, res) => {
    const {firstName, lastName, newFirstName, newLastName} = req.body;
    const result = await userModel.updateMany(
        {firstName: firstName, lastName: lastName}, //filter
        {$set : {firstName: newFirstName, lastName: newLastName}}, //updation values
    );
    
    if(result.modifiedCount==0) return res.status(400).json({message: "None Found to update"});
    else return res.status(200).json({message: "document updated successfully"});
}

const remover = async (req, res) => {
    const {firstName, lastName} = req.body;
    const result = await userModel.deleteMany({firstName: firstName, lastName: lastName});

    if(result.deletedCount==0) return res.status(400).json({message: "None found to delete"})
    return res.status(200).json({message: "document deleted successfully"});
}

module.exports = {retriever, adder, updater, remover};

//map doesnt support await inside its body. Use manual for-loop in that case. (for doc of docs)