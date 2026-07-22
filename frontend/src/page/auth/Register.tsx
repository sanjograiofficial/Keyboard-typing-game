import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden(!hidden)
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <h1>Register</h1>
      <form method="post" className="w-[250px] border-2 flex flex-col p-4 justify-start items-start">
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            placeholder="Enter your username"
            className="border p-1 "
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password: </label>
          <div>
            <input
              type={hidden ? "password" : "text"}
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter your password"
            />
            <button type="button" onClick={handleHidden}>{hidden ? "Show" : "Hide"} </button>
          </div>
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
