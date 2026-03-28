const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bd = require("../Base de données/bd");

exports.login = (req, res) => {
    const {email , password} =req.body;
    bd.query(
        "SELECT *FROM utilisateur WHERE email =?", [email], (err, results) => {
            if (err) return res.status(500).json(err);

            if(results.length === 0){
                return res.status(401).json ({message : "login invalide"});
            }

            const user = results[0];

            const ok =bcrypt.compareSync(password , user.password);
            if(!ok){
                return res.status(401).json({message : "mot de passe invalide"});
            }

            const token = jwt.sign(
                {
                    id : user.id,
                    prenom : user.prenom
                },
                process.env.JWT_SECRET,
            );
            res.json({token});
        }
    )
}

exports.register =(req, res)=>{
    const {nom, prenom, email, password, roles} = req.body;

    const hashPassword =bcrypt.hashSync(password,10);

    bd.query(
        "INSERT INTO utilisateur (nom, prenom, email, password, roles) VALUES (?,?,?,?,?)", [nom, prenom, email, hashPassword, roles], (err, result) => {
            if (err) return res.status(500).json(err);

            const userId = result.insertId;
            let query ="";
            if(roles === "organisateur"){
                query= "INSERT INTO organisateur (idOrg) VALUES(?)";
            }
            if(roles === "participant"){
                query="INSERT INTO participant (idPar) VALUES(?)";
            }
            else{
                return res.status(400).json({ message: "role invalide" });
            }

            bd.query(query , [userId], (err2)=>{
                res.status(201).json({
                    msg : "Utilisateur crée avec succès",
                });
            });
        }
    )
}
