
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
// Ajouter un contact 
function postContact(req, res) {
    const { nom, telephone } = req.body;
    const contact = service.postContact(nom, telephone);
    res.status(200).json(contact);
}
// Modifier un contact
function updateContact(req, res) {
    try {
        const { id } = req.params;
        const { nom, telephone } = req.body;
        const updatedContact = service.updateC({
            id,
            nom,
            telephone
        });
        res.status(200).json({ contact: updatedContact });
    } catch (error) {
        res.status(404).json({ status: 404, message: error.message });
    }
};
// Supprimer un contact
function deleteContact(req, res) {
    try {
        const { id } = req.params;
        service.delete(id);
        res.status(200).json({ message: "Contact deleted !" });
    } catch (error) {
        res.status(404).json({ status: 404, message: error.message });
    }

}
export { getContacts, getContact, postContact, updateContact, deleteContact };