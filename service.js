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

export { getContacts, getContact, postContact };