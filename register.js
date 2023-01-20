import React, { useState } from "react";

function Register() {
  const [input, setInput] = useState({
    user: "",
    password: "",
    gender: "",
    hobby: []
  });
  const [error, setError] = useState({});
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [matchIndex, setMatchIndex] = useState(-1);

  const validForm = (key, value) => {
    switch (key) {
      case "user":
        if (!value) {
          return "enter user name";
        }
      case "password":
        if (!value) {
          return "enter user password";
        }
      case "gender":
        if (!value) {
          return "enter user gender";
        }
      case "hobby":
        if (!value) {
          return "enter user hobby";
        }
    }
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    const searchData = data.filter((value) => {
      return value.fname.slice(0, e.target.value.length) === e.target.value;
    });
    setData(searchData);
  };

  const onHandlerCheckbox = (e) => {
    console.log(e.target.value);
    if (input.hobby.includes(e.target.value)) {
      const checkData = input.hobby.filter((element) => {
        return element !== e.target.value;
      });
      setInput(checkData);
    }

    setInput({ ...input, hobby: [...input.hobby, e.target.value] });
  };

  const onHandlersChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = () => {
    if (matchIndex !== -1) {
      const addData = data.map((value, index) => {
        if (index === matchIndex) {
          return input;
        }
        return value;
      });
      setData(addData);
    }

    const validData = {};
    Object.keys(input).forEach((key, value) => {
      debugger;
      const validFormData = validForm(key, value);
      if (validFormData) {
        validData[key] = validFormData;
      }
    });
    if (Object.keys(validData).length) {
      setError(validData);
    } else {
      setData([...data, input]);
      setInput({
        user: "",
        password: "",
        gender: "",
        hobby: []
      });
    }
  };

  const onDelete = (deleteIndex) => {
    console.log(deleteIndex);
    const deletData = data.filter((value, index) => {
      console.log(index);
      return index !== deleteIndex;
    });
    setData(deletData);
  };

  const onEdite = (editIndex) => {
    const editeData = data.find((value, index) => {
      return index === editIndex;
    });
    const { user, password, gender } = editeData;
    setInput({
      user,
      password,
      gender,
    });
    setMatchIndex(editIndex);
  };

  return (
    <div>
      <label>Register Page</label>
      <br />
      <input
        type="text"
        name="user"
        value={input.user}
        onChange={onHandlersChange}
        placeholder="enter first user"
      />
      {error.user ? <p>{error?.user}</p> : ""}
      <br />
      <input
        type="text"
        name="password"
        value={input.password}
        onChange={onHandlersChange}
        placeholder="enter last name name"
      />
      {console.log(error?.password)}
      {error?.password ? <p>{error?.password}</p> : ""}
      <br />
      <label>select your gender:--</label>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={onHandlersChange}
        placeholder="enter first name"
        checked={input.gender === "male"}
      />
      male
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={onHandlersChange}
        placeholder="enter first name"
        checked={input.gender === "female"}
      />
      female
      {error?.gender ? <p>{error?.gender}</p> : ""}
      <br />
      <label>please select you hobby:--</label>
      <input
        type="checkbox"
        name="hobby"
        value="kabadi"
        onChange={onHandlerCheckbox}
        checked={input.hobby.includes("kabadi")}
      />
      kabadi
      <input
        type="checkbox"
        name="hobby"
        value="cricket"
        onChange={onHandlerCheckbox}
        checked={input.hobby.includes("cricket")}
      />
      cricket
      {error?.hobby ? <p>{error?.hobby}</p> : ""}
      <br />
      <label>search data:--</label>
      <input type="text" onChange={onSearch} name="search" />
      <br />
      <button onClick={onSubmit}>submit</button>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>password</th>
            <th>gender</th>
            <th>delet/edite</th>
            <th>hobby</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.fname}</td>
                <td>{value.password}</td>
                <td>{value.gender}</td>
                <td>
                  <button
                    onClick={() => {
                      onDelete(index);
                    }}
                  >
                    delete
                  </button>
                  <button
                    onClick={() => {
                      onEdite(index);
                    }}
                  >
                    edite
                  </button>
                </td>
                <td>
                  {value.hobby.map((value) => {
                    return value;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Register;
