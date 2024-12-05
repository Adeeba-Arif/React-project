

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2>Sign Up</h2>
        <form action="/submit-signup" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </>
  );
}
