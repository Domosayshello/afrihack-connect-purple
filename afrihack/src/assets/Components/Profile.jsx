import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { FirstName, LastName, Email, Birthday, PhoneNumber, Gender } =
    location.state || {};

  return (
    <>
      <h1>User Profile</h1>
      <p>
        <strong>First Name:</strong> {FirstName}
      </p>
      <p>
        <strong>Last Name:</strong> {LastName}
      </p>
      <p>
        <strong>Email:</strong> {Email}
      </p>
      <p>
        <strong>Birthday:</strong> {Birthday}
      </p>
      <p>
        <strong>Phone Number:</strong> {PhoneNumber}
      </p>
      <p>
        <strong>Gender:</strong> {Gender}
      </p>
    </>
  );
}

export default Profile;
