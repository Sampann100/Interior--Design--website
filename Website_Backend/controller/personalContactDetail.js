<<<<<<< HEAD
// const db = require("../db");

// exports.personalContactDetail = (req, res) => {
//   const {
//     FirstName,
//     LastName,
//     Email,
//     Address1,
//     Address2,
//     Country,
//     State,
//     Zip,
//     Message,
//   } = req.body;

//   if (
//     !FirstName ||
//     !LastName ||
//     !Email ||
//     !Address1 ||
//     !Address2 ||
//     !Country ||
//     !State ||
//     !Zip ||
//     !Message
//   ) {
//     return res.status(400).json({ message: "All fields are required!" });
//   }
//   if (
//     FirstName &&
//     LastName &&
//     Email &&
//     Address1 &&
//     Address2 &&
//     Country &&
//     State &&
//     Zip &&
//     Message
//   ) {
//     const query =
//       "INSERT INTO personalcontactdetail (FirstName, LastName, Email, Address1, Address2, Country, State, Zip, Message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     db.query(
//       query,
//       [
//         FirstName,
//         LastName,
//         Email,
//         Address1,
//         Address2,
//         Country,
//         State,
//         Zip,
//         Message,
//       ],
//       (err, results) => {
//         if (err) {
//           console.error("Error fetching data:", err);
//           res.status(500).json({ message: "Database error occurred." });
//         } else if (results.affectedRows > 0) {
//           return res
//             .status(200)
//             .json({ message: "Contact details saved successfully!" });
//         } else {
//           return res
//             .status(400)
//             .json({ message: "Failed to save contact details." });
//         }
//       }
//     );
//   } else {
//     res.status(400).json({ message: "All fields are required!" });
//   }
// };

const PersonalContactDetailModel = require("../models/PersonalContactDetail");

exports.personalContactDetail = async (req, res) => {
  try {
    const newContact = new PersonalContactDetailModel(req.body);

    await newContact.save();
    return res
      .status(200)
      .json({ message: "Contact details saved successfully!" });
  } catch (error) {
    console.error("Error saving contact details:", error);
    return res.status(500).json({ message: "Database error occurred." });
  }
};
=======
// const db = require("../db");

// exports.personalContactDetail = (req, res) => {
//   const {
//     FirstName,
//     LastName,
//     Email,
//     Address1,
//     Address2,
//     Country,
//     State,
//     Zip,
//     Message,
//   } = req.body;

//   if (
//     !FirstName ||
//     !LastName ||
//     !Email ||
//     !Address1 ||
//     !Address2 ||
//     !Country ||
//     !State ||
//     !Zip ||
//     !Message
//   ) {
//     return res.status(400).json({ message: "All fields are required!" });
//   }
//   if (
//     FirstName &&
//     LastName &&
//     Email &&
//     Address1 &&
//     Address2 &&
//     Country &&
//     State &&
//     Zip &&
//     Message
//   ) {
//     const query =
//       "INSERT INTO personalcontactdetail (FirstName, LastName, Email, Address1, Address2, Country, State, Zip, Message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     db.query(
//       query,
//       [
//         FirstName,
//         LastName,
//         Email,
//         Address1,
//         Address2,
//         Country,
//         State,
//         Zip,
//         Message,
//       ],
//       (err, results) => {
//         if (err) {
//           console.error("Error fetching data:", err);
//           res.status(500).json({ message: "Database error occurred." });
//         } else if (results.affectedRows > 0) {
//           return res
//             .status(200)
//             .json({ message: "Contact details saved successfully!" });
//         } else {
//           return res
//             .status(400)
//             .json({ message: "Failed to save contact details." });
//         }
//       }
//     );
//   } else {
//     res.status(400).json({ message: "All fields are required!" });
//   }
// };

const PersonalContactDetailModel = require("../models/PersonalContactDetail");

exports.personalContactDetail = async (req, res) => {
  try {
    const newContact = new PersonalContactDetailModel(req.body);

    await newContact.save();
    return res
      .status(200)
      .json({ message: "Contact details saved successfully!" });
  } catch (error) {
    console.error("Error saving contact details:", error);
    return res.status(500).json({ message: "Database error occurred." });
  }
};
>>>>>>> 187e5ac (termperory work)
