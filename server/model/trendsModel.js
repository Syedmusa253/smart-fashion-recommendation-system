const { getData }= require("../utils/database");
module.exports=class Trends{
    contructor(_id,type,description,url){
        this._id=_id;
        this.type=type;
        this.description=description;
        this.url=url;
    }
    static sendData(){
        const db=getData();
        return db.collection("trends").find().toArray();
    }
}