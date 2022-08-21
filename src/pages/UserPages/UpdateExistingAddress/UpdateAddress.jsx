import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import styles from "./UpdateAddress.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import govNames from "../../../assets/govFile.json";
import { updateAddress } from "../../../store/actions/userActions";
function UpdateAddress() {
  // declrations
  const { addressId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading: userLoading,
    error: userError,
    userInfo,
  } = useSelector((state) => state.userLogin);
  const addressArray = userInfo?.address;
  const oldAddress = addressArray?.filter(
    (address) => address._id === Number(addressId)
  );
  const [newAddress, setNewAddress] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAddress(addressId, newAddress));
  };
  const { address } = useSelector((state) => state.addAddress);
  const statusCode = localStorage.getItem("ad")
    ? JSON.parse(localStorage.getItem("ad"))
    : null;
  useEffect(() => {
    if (address && statusCode === 200) {
      navigate(-1, { replace: true });
      localStorage.removeItem("ad");
    }
  }, [address, statusCode]);

  return (
    <div>
      {userLoading ? (
        <Loading />
      ) : userInfo && userInfo?.isAdmin ? (
        <section className="container w-100 m-auto">
          <Form className=" m-auto mt-5" onSubmit={handleSubmit}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center mb-5 ${styles.formHeading}`}
            >
              <i className="fa-solid fa-address-book"></i>
              <h2 className={`${styles.heading} text-capitalize text-center`}>
                update address
              </h2>
            </div>
            <Form.Group className="mb-3" controlId="formBasicStreet">
              <Form.Label>street name</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                name="street"
                placeholder={oldAddress[0]?.street}
                onChange={(e) => {
                  e.target.value?.length > 0
                    ? setNewAddress({
                        ...newAddress,
                        street: e.target.value,
                      })
                    : setNewAddress({
                        ...newAddress,
                        street: oldAddress?.street,
                      });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>country</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="text"
                name="country"
                placeholder={oldAddress[0]?.country}
                onChange={(e) => {
                  e.target.value?.length > 0
                    ? setNewAddress({
                        ...newAddress,
                        country: e.target.value,
                      })
                    : setNewAddress({
                        ...newAddress,
                        country: oldAddress?.country,
                      });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                className={`input ${styles.formControl}`}
                type="string"
                name="mobile"
                placeholder={oldAddress[0]?.mobile}
                onChange={(e) => {
                  e.target.value?.length > 0
                    ? setNewAddress({
                        ...newAddress,
                        mobile: e.target.value,
                      })
                    : setNewAddress({
                        ...newAddress,
                        mobile: oldAddress?.mobile,
                      });
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select City</Form.Label>
              <small className={`d-block ${styles.smallText}`}>
                {" "}
                old city: {oldAddress[0].city}
              </small>
              <Form.Select
                className={`input ${styles.formControl}`}
                // onChange={(e) => {
                //   setCity(e.target.value);
                // }}

                onChange={(e) => {
                  e.target.value?.length > 0
                    ? setNewAddress({
                        ...newAddress,
                        city: e.target.value,
                      })
                    : setNewAddress({
                        ...newAddress,
                        city: oldAddress?.city,
                      });
                }}
              >
                {govNames?.map((gov, index) => (
                  <option
                    value={gov.name_en}
                    key={index}
                    className={`input ${styles.formControl}`}
                  >
                    {gov.name_en}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="w-100 d-flex justify-content-center">
              <Button
                className={`${styles.btnWarningg}`}
                variant="primary"
                type="submit"
              >
                Add
                <i className="fa-regular fa-arrow-right ms-2 fs-6"></i>
              </Button>
            </div>
          </Form>
        </section>
      ) : userError ? (
        <ErrorMessage />
      ) : null}
    </div>
  );
}

export default UpdateAddress;
