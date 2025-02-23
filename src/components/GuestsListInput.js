import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import "../styles/GuestsListInput.scss";
//input tag for guests list
const GuestsListInput = ({ onAddGuest }) => {
  const [guestsList, setGuestsList] = useState("");
  return (
    <div className="guest-list">
      <input
        type="email"
        placeholder="Add Guests"
        value={guestsList}
        onChange={(e) => setGuestsList(e.target.value)}
        spellCheck="false"
      />
      {guestsList && (
        <IoPersonAddSharp
          onClick={(e) => {
            e.preventDefault();
            onAddGuest(guestsList);
            setGuestsList("");
          }}
          className="add-guest-icon"
        />
      )}
    </div>
  );
};

export default GuestsListInput;
