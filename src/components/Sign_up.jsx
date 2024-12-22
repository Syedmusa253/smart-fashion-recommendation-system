import { Form, redirect } from "react-router-dom";
const Sign_up = () => {
  return (
    <div className="signup-container">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/path-to-your-logo.png" alt="Styler Logo" className="logo" />
      </div>

      {/* Sign Up Form */}
      <Form className="sign_up_form" method="POST">
        <h2 className="form-title">Welcome, let's create an account</h2>
        <p className="form-subtitle">
          Create an account to keep track of your history for better AI
          response. Once your account has been created, don't forget to verify
          your account through mail.
        </p>

        <div className="row name_row">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              placeholder="Your first name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Your last name"
              required
            />
          </div>
        </div>

        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>

        <div className="row name_row">
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="inputPassword"
              id="inputPassword"
              placeholder="Enter a strong password"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="confirminputPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirminputPassword"
              name="confirminputPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>

        <div className="terms">
          By continuing, you agree to the{" "}
          <a href="/terms" target="_blank">
            terms of service
          </a>{" "}
          and{" "}
          <a href="/privacy" target="_blank">
            privacy policy
          </a>
          .
        </div>

        <button type="submit" className="btn btn-primary">
          Continue
        </button>

        <p className="already-registered">
          Already registered? <a href="/login">Sign In</a>
        </p>
      </Form>
    </div>
  );
};
export async function send_to_signin(data) {
  const formData = await data.request.formData();
  const getData = Object.fromEntries(formData);
  if (getData.inputPassword !== getData.confirminputPassword) {
    alert("please enter the same passwords");
  } else {
    fetch("http://localhost:3550/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getData),
    })
      .then((res) => res.json())
      .then((newPost) => {
        return redirect("/sign-in");
      })
      .catch((error) => {
        console.log("there is an error while sign-up data", error);
      });
  }
}
export default Sign_up;
