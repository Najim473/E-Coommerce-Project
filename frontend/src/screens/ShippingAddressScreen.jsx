import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function ShippingAddressScreen() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [Country, setCountry] = useState("");

  const submitHandler = () => {
    e.preventDefault();
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <h1>Shipping Address</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>{" "}
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Postal <Code></Code>
          </Form.Label>
          <Form.Control
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default ShippingAddressScreen;
