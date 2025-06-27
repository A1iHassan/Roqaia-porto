import ButtonC from "./Button";

const NavBar = () => {
  return (
    <nav className="flex w-100vw py-4 px-20 m-4 gap-3 justify-around rounded-lg">
      <ButtonC name="Blogs" path="/blogs" />
      <ButtonC name="About Us" path="/" />
      <ButtonC name="Meet The Founder" path="/founder" />
    </nav>
  );
};

export default NavBar;
