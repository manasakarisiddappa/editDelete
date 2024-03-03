import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

/**
 *
 * first name
 * last name
 * gender
 * phone
 * mailid
 */

function App() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");
  const [index, setIndex] = useState(null);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedValue, setSelectedValue] = useState("Female");

  console.log(data, index);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEntry = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      selectedValue: selectedValue,
    };

    if (edit === "edit") {
      const newArray = [...data];
      newArray[index] = newEntry;
      setData(newArray);
      setEdit("");
      setIndex(null);
    } else {
      setData([...data, newEntry]);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSelectedValue("female");
  };

  const handleEdit = (index) => {
    setEdit("edit");
    setIndex(index);
    setFirstName(data[index].firstname);
    setLastName(data[index].lastname);
    setEmail(data[index].email);
    setPhone(data[index].phone);
    setSelectedValue(data[index].selectedValue);
  };

  const handleDelete = (id) => {
    console.log("id delete", id);
    const newArray = [...data];
    newArray.splice(id, 1);
    setData(newArray);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="formcontainer">
          <form onSubmit={handleSubmit}>
            <h1>Form</h1>
            <label for="first">First name</label>
            <input
              className="formelement"
              id="first"
              value={firstname}
              type="text"
              placeholder="First name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label for="last">Last name</label>
            <input
              className="formelement"
              id="last"
              value={lastname}
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />

            <br />
            <label for="gender">Gender</label>
            <select
              className="formelement"
              id="gender"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value="Female">Female</option>
              <option value="male">Male</option>
            </select>
            <br />
            {/* <input type="text" /> */}
            <label for="phone">Phone number</label>
            <input
              className="formelement"
              id="phone"
              type="text"
              placeholder="Phone number"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />

            <br />
            <label for="mail">Email id</label>
            <input
              className="formelement"
              id="mail"
              value={email}
              type="text"
              placeholder="Email id"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <button>Submit</button>
          </form>
        </div>

        <div>
          <h1>Cards</h1>

          {data.map((item, index) => (
            <div className="card" key={index}>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <p>{item.firstname}</p>
              <p>{item.lastname}</p>
              <p>{item.phone}</p>
              <p>{item.selectedValue}</p>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
