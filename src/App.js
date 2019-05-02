import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import Recipes from "./component/Recipes";
import Header from "./component/Header";
import Footer from "./component/Footer";

const API_KEY = "d7272492d7ee1cf276e9ced5d09e4732";
class App extends Component {
  state = {
    recipes: [],
    error: ""
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    try {
      const api_call = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
      );

      const data = await api_call.json();
      console.log(data.recipes.length);
      if (data.recipes.length === 0) {
        this.setState({
          error: "sory, but your search did not return any results"
        });
      } else {
        this.setState({ recipes: data.recipes, error: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} error={this.state.error} />
        <Footer />
      </div>
    );
  }
}

export default App;
