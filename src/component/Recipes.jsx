import React from "react";

import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => (
        <div
          key={recipe.recipe_id}
          className="col-lg-4 col-md-6"
          style={{ marginBottom: "2rem" }}
        >
          <div className="recipes__box">
            <img
              className="recipe__box-img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <div className="recipe__text">
              <h5 className="recipes__title">
                {recipe.title.length < 20
                  ? `${recipe.title}`
                  : `${recipe.title.substring(0, 22)}...`}
              </h5>
              <p className="recipes__subtitle text-slanted">
                Publisher: <span>{recipe.publisher}</span>
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="recipe_buttons">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  View Recipe
                </Link>
              </button>
              <a
                target="_blank"
                href={recipe.source_url}
                className="recipe_buttons"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Recipes;
