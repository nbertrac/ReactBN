/* Creating an object called user with two properties, firstname and lastname. */
const user = {
  firstname: "Nathan",
  lastname: "Bertrac",
};

/**
 * FormatUser takes a user object and returns a string containing the user's first and last name.
 * @param user - The user object that is being formatted.
 * @returns the firstname and lastname of the user.
 */
function FormatUser(user) {
  return user.firstname + " " + user.lastname;
}

const JsxExemple = () => {
  return (
    <>
      <h1>Hello {FormatUser(user)}</h1>
    </>
  );
};

export default JsxExemple;
