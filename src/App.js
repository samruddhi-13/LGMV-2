import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [user, Setuser] = useState([]);
  const getusers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    Setuser(jsonresponse.data);
  };

  return (
    <>
      <div className="start">
        <button onClick={getusers}>Get Users</button>
      </div>
      <div className="grid">
        {user.map(({ id, email, first_name, last_name, avatar }) => {
          return (
            <div className="cards">
              <div className="card">
                <div className="info">
                  <img src={avatar}></img>
                  <p className="name">
                    {first_name}
                    {last_name}
                  </p>
                  <p>Email-id:{email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
