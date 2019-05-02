import React from "react";

const Form = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitaliz">
            search for recipe with{" "}
            <strong className="text-danger">Food2Fork</strong>
          </h1>
          <form onSubmit={props.getRecipe} style={{ margin: "2rem" }}>
            <input
              className="form__input"
              type="text"
              name="recipeName"
              placeholder="Search Somthings..."
            />
            <button className="form__button">
              <i className="fa fa-search mr-2" />
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
