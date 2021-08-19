import { Fragment } from "react";
import Button from "../UI/Button";

const Books = () => {
  return (
    <Fragment>
      <div>
        <h3>you can read buy anytime anywhere</h3>
        <h5>alot of free and premium books</h5>
        <Button>read now</Button>
      </div>
      <div>
        <div>
          <label htmlFor="grens">grens :</label>
          <select name="grens" id="grens">
            <option value="history">history</option>
            <option value="socity">socity</option>
            <option value="Biography">Biography</option>
            <option value="Health/fitness">Health/fitness</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter">filter :</label>
          <select name="filter" id="filter">
            <option value="author">author</option>
            <option value="paragraph">paragraph</option>
            <option value="quotes">quotes</option>
          </select>
        </div>
      </div>
      {/* <div>bookitems</div> */}
    </Fragment>
  );
};

export default Books;
