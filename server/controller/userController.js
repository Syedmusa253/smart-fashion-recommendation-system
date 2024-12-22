const User=require('../model/userModel')
const Trends=require('../model/trendsModel')

exports.getHome=(req,res,next)=>{
    res.send("<center>this is the main page</center>");
}
exports.saveData=(req,res,next)=>{
    const data=req.body;
    const user=new User(null,data.firstName,data.lastName,data.email,data.inputPassword,data.confirminputPassword);
    user.save().then(
        res.status(201).json({ message: "User registered successfully." })
    ).catch(error=>{
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Database error occurred." });
    })
    console.log(data);
}
exports.authenticateData=(req,res,next)=>{
    const data=req.body;
    const user=new User();
    user.authenticate(data).then((user)=>{if (user) {
        return res.status(201).json({ message: 'User authenticated successfully', user: user });
    } else {
        return res.status(401).json({ error: 'Authentication failed: Invalid credentials' });
    }
    }).catch((error) => {
        console.error("Error during authentication:", error);
        res.status(401).json({ error: 'Authentication failed: Invalid credentials' });
    } )
}
exports.sendingTrends=(req,res,next)=>{
    Trends.sendData().then((data)=>{
        return res.status(201).json({ message: 'User authenticated successfully', data: data });
    }).catch((error)=>{
        res.status(401).json({ error: 'Authentication failed: Invalid credentials',error });
    })
}