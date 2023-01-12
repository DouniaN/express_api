
import * as service from "./service.js";

function getContacts(req, res) {
    const contacts = service.getContacts();
    res.status(200).json(contacts);
}

function getContact(req, res) {
    const id = req.params.id;
    const contact = service.getContact(id);
    res.status(200).json(contact);
}

function postContact(req, res) {
    const { nom, telephone } = req.body;
    const contact = service.postContact(nom, telephone);
    res.status(200).json(contact);
}

export { getContacts, getContact, postContact };
