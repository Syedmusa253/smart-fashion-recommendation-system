import { Link, Form, redirect } from "react-router-dom";

const Sign_in = () => {
  return (
    <div className="signin-container">
      {/* Logo Section */}
      <div className="logo-container">
        <img src="/path-to-your-logo.png" alt="Styler Logo" className="logo" />
      </div>

      {/* Sign In Form */}
      <Form className="sign_in_form" method="post">
        <h2 className="form-title">Welcome, continue account</h2>
        <p className="form-subtitle">
          Continue with your account, sign up if not registered already for
          better experience with advance AI system.
        </p>

        <div className="form-group">
          <label htmlFor="inputEmail3" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword3" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Must be at least 8 characters and use a strong password."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Continue
        </button>

        <p className="sign-up-link">
          Not registered? <Link to="/sign-up">Sign up</Link>
        </p>
      </Form>
    </div>
  );
};

export const SubmittheForm = async ({ request }) => {
  const formData = await request.formData();
  const getData = Object.fromEntries(formData);
  const res = await fetch("http://localhost:3550/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getData),
  });
  const data = await res.json();

  if (
    data.error &&
    data.error === "Authentication failed: Invalid credentials"
  ) {
    alert("please enter the right email or password");
  } else {
    return redirect("/user/trends");
  }
};
export default Sign_in;
