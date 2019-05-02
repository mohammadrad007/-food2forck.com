import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "27570c82ff11c088c3b8d650602a2e00";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    try {
      const title = this.props.location.state.recipe;

      const req = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
      );

      const res = await req.json();
      this.setState({ activeRecipe: res.recipes[0] });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const recipe = this.state.activeRecipe;
    console.log(recipe.title);
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="container">
            <div className="row">
              <div className="active-recipe col-10 mx-auto col-md-6 my-3">
                <button type="button" className="active-recipe__button mb-5">
                  <Link to="/">Go Back Home</Link>
                </button>
                <img
                  className=" d-block w-100"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3">
                <h3 className="active-recipe__title">{recipe.title}</h3>
                <h4 className="active-recipe__publisher text-slanted">
                  Publisher: <span>{recipe.publisher}</span>
                </h4>
                <p className="active-recipe__website">
                  Websit:
                  <span>
                    <a
                      href={recipe.publisher_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="recipe_buttons mt-2 mx-3"
                    >
                      publisher webpage
                    </a>
                  </span>
                </p>
                <p className="active-recipe__url">
                  url :
                  <a
                    href={recipe.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recipe_buttons mt-2 mx-3"
                  >
                    recipe url
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
