// I need an interior design concept for a [residential/commercial] space with a [modern/minimalist/classic/bohemian/industrial/etc.] style. The space includes [living room, bedroom, office, kitchen, etc.], and I want it to feel [cozy, luxurious, spacious, warm, elegant, etc.]. The color palette should feature [neutral tones, bold colors, earthy hues, pastel shades, etc.]

// A sleek, modern living room with a neutral palette, marble coffee table, plush sofa, ambient lighting, and floor-to-ceiling windows.

// I need an interior design concept for a modern minimalist living room that feels warm, inviting, and functional. The space is 20x15 feet with a large window providing natural light. The design should focus on neutral tones (white, beige, and gray) with wood accents for warmth.

// name: 'Modern Wooden Table',
//   description: 'A beautifully crafted wooden table with a minimalist design.',
//   current_price: '3500',
//   original_price: '5000',
//   imageUrl: 'http://thewowstyle.com/wp-content/uploads/2015/01/Home-Interior-Design-Hd-Wallpaper-Hd-Background-With-Simple-Staircase-And-Plasma-TV-Also-Nice-Laminate-Flooring-Ideas-With-Modern-Furniture-Interior-Minimalist-Design.jpg'

import React, { useEffect, useState } from "react";

const ContactDetailTable = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/personalcontactdetail")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setContactDetails(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleEdit = (id, data) => {
    setEditId(id);
    setEditData(data);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/personalcontactdetail/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update data");
        }
        return response.json();
      })
      .then(() => {
        setContactDetails((prev) =>
          prev.map((detail) =>
            detail.Id === editId ? { ...detail, ...editData } : detail
          )
        );
        setEditId(null);
        setEditData({});
      })
      .catch((err) => setError(err.message));
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditData({});
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/personalcontactdetail/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }
        setContactDetails((prev) => prev.filter((detail) => detail.Id !== id));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="tablecontainer">
      <center>
        <h1 className="my-4">Contact List</h1>
      </center>
      {error && <p className="error-message">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address 1</th>
            <th scope="col">Address 2</th>
            <th scope="col">Country</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th scope="col">Message</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactDetails.length > 0 ? (
            contactDetails.map((detail) => (
              <tr key={detail.Id}>
                {editId === detail.Id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="FirstName"
                        value={editData.FirstName}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="LastName"
                        value={editData.LastName}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="Email"
                        value={editData.Email}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Address1"
                        value={editData.Address1}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Address2"
                        value={editData.Address2}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Country"
                        value={editData.Country}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="State"
                        value={editData.State}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Zip"
                        value={editData.Zip}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Message"
                        value={editData.Message}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={handleEditSubmit}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{detail.FirstName}</td>
                    <td>{detail.LastName}</td>
                    <td>{detail.Email}</td>
                    <td>{detail.Address1}</td>
                    <td>{detail.Address2}</td>
                    <td>{detail.Country}</td>
                    <td>{detail.State}</td>
                    <td>{detail.Zip}</td>
                    <td>{detail.Message}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(detail.Id, detail)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(detail.Id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetailTable;
