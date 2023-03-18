import "../Utils/base.scss";


function Navigation() {
  return (
    <div>
      <ul className="d-flex flex-row align-items-center text ">
        <li className="mr-20  ">
          <router-link to="/">Home</router-link>
        </li>
        <li className="mr-20 ">
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
