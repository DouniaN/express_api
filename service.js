import { contacts } from "./data.js";
import { nanoid } from "nanoid";

function getContacts() {
    return contacts;
}

function getContact(id) {
    return contacts.find((contact) => contact.id === id);
}

function postContact(nom, telephone) {
    const id = nanoid();
    const contact = { id, nom, telephone };
    contacts.push(contact);
    console.log(contacts);
    return contact;
}

function updateC(updatedContact) {
    const id = this._findIndex(updatedContact.id);
    if (id == -1) throw new Error("The contact does not exist !");
    contacts.splice(id, 1, updatedContact);
    return updatedContact;
};

function deleteC(contact) {
    const id = this._findIndex(contact);
    this.contacts.splice(id, 1);
};

export { getContacts, getContact, postContact, updateC, deleteC };