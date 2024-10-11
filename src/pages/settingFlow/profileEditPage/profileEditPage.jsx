import React, { useState } from "react";
import Facebook from "../../../assets/icons/Facebook.png";
import Linkedin from "../../../assets/icons/LinkedIn Circled.png";
import profile from "../../../assets/images/profile.png";
import CommonButton from "../../../components/common/commonButton/commonButton";
import EditProfileModal from "../../../components/models/editProfileModel/editProfileModel";

const ProfileCard = ({ photo, name, role }) => {
  return (
    <div
      className="card"
      style={{
        borderRadius: "10px",
        padding: "20px",
        position: "relative",
        width: "450px",
      }}
    >
      <div className="card-body d-flex">
        <img
          src={photo || profile}
          alt="Profile"
          className="img-thumbnail me-3 rounded-circle"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
          <div className="d-flex gap-2">
            <img src={Facebook} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileEditPage = () => {
  const [showModal, setShowModal] = useState(false); // For modal visibility
  const [profilePhoto, setProfilePhoto] = useState(profile); // For updating profile photo

  const userProfile = [
    {
      photo: profilePhoto,
      name: "Thilini Priyangika",
      role: "Web Master",
    },
  ];

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSave = (imgUrl) => {
    setProfilePhoto(imgUrl); // Update profile photo after uploading
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="row mt-4 px-5">
          {userProfile.map((user, index) => (
            <div className="col-6 col-md-6 mb-4" key={index}>
              <ProfileCard
                photo={user.photo}
                name={user.name}
                role={user.role}
              />
            </div>
          ))}
        </div>

        <div
          className="d-flex justify-content-between align-items-center gap-1"
          style={{ marginRight: "150px" }}
        >
          <div className="d-flex gap-3 flex-row">
            <div>
              <CommonButton text={"Upload New Photo"} onClick={handleUploadClick} />
            </div>
            <div>
              <CommonButton text={"Delete"} close={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column px-5">
        <div className="mt-3">
          <label htmlFor="bio" className="form-label text-dark">
            Bio
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Don't worry be happy"
            style={{ width: "520px" }}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="role" className="form-label text-dark">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Web Master"
            style={{ width: "520px" }}
            required
          />
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="firstName" className="form-label text-dark">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ishara"
              style={{ width: "520px" }}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label text-dark">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Herath"
              style={{ width: "520px" }}
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="userName" className="form-label text-dark">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="isharasuvini"
            style={{ width: "1055px" }}
            required
          />
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="email" className="form-label text-dark">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="suvi@gmail.com"
              style={{ width: "520px" }}
            />
          </div>
          <div>
            <label htmlFor="phone" className="form-label text-dark">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0712458963"
              style={{ width: "520px" }}
              required
            />
          </div>
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="ieeeEmail" className="form-label text-dark">
              IEEE Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="ieeeemail@gmail.com"
              style={{ width: "520px" }}
            />
          </div>
          <div>
            <label htmlFor="location" className="form-label text-dark">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Monaragala"
              style={{ width: "520px" }}
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="ieeeNumber" className="form-label text-dark">
            IEEE Membership Number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="ieee23"
            style={{ width: "520px" }}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="location" className="form-label text-dark">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Monaragala"
            style={{ width: "1055px" }}
          />
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="currentPassword" className="form-label text-dark">
              Current Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder=""
              style={{ width: "520px" }}
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="form-label text-dark">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder=""
              style={{ width: "520px" }}
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="confirmPassword" className="form-label text-dark">
            Confirm New Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder=""
            style={{ width: "1055px" }}
            required
          />
        </div>
      </div>

      <div
        className="d-flex justify-content-end align-items-end gap-1 mt-5"
      >
        <div className="d-flex gap-3 flex-row">
          <div>
            <CommonButton text={"Cancel"} close={true} />
          </div>
          <div>
            <CommonButton text={"Save Changes"} />
          </div>
        </div>
      </div>

      <EditProfileModal
        showModal={showModal}
        onClose={handleModalClose}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProfileEditPage;
