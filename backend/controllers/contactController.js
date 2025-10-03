const asyncHandler = require("express-async-handler");
const { Contact } = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @desc Create new contact(s)
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
  let contactsData = req.body;

  // If only one object is passed, wrap it inside an array
  if (!Array.isArray(contactsData)) {
    contactsData = [contactsData];
  }

  // Validate each contact
  for (const contact of contactsData) {
    if (!contact.name || !contact.email || !contact.phone) {
      res.status(400);
      throw new Error("All fields (name, email, phone) are mandatory for each contact");
    }
    // Add user_id to each
    contact.user_id = req.user.id;
  }

  // Insert multiple or single contacts
  const createdContacts = await Contact.insertMany(contactsData);

  res.status(201).json(createdContacts);
});


// @desc Get contact by ID
// @route GET /api/contacts/:id
// @access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission to update this contact");
  }

  const updateData = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission to delete this contact");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Contact deleted", id: req.params.id });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
