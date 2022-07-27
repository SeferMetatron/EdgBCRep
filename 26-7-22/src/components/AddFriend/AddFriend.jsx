import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddFriend = ({ isRenderedList, onAddButton }) => {
  const [profileName, setProfileName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (profileName && profilePic) {
      POST("friends", {
        name: profileName,
        photo: profilePic,
      }).then(() => {
        setProfileName("");
        setProfilePic("");
        onAddButton(!isRenderedList);
      });
    }
  };

  return (
    <form className="AddFriend" onSubmit={onFormSubmit}>
      <input
        className="AddFriend__name"
        type="text"
        placeholder="Scrivi il nome..."
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
        required
      />
      <input
        className="AddProfile__pic"
        type="url"
        placeholder="Profile pic..."
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
        required
      />
      <Button type="submit" textContent="Invia" color="lightseagreen" />
    </form>
  );
};

export default AddFriend;
