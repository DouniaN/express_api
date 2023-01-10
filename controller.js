
import { contacts } from "./data.js";


function getContacts(req, res) {
    res.status(200).json(contacts);
}

function getContact(req, res) {
    const id = req.params.id;
    res.status(200).json({ id });
}

function postContact(req, res) {
    const newcontacts = {
        nom: req.body.nom,
        telephone: req.body.telephone
    };
    res.status(201).json(newcontacts);
    /*contacts.save((err, datac) => {
        if (!err) res.send(datac);
        else console.log('Error add :' + err);
    })*/
}
export { getContacts, getContact, postContact };
