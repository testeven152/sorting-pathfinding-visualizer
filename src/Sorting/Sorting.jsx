import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getBubbleSortAnimations } from "./Algorithms/bubblesort";
import { getMergeSortAnimations } from "./Algorithms/mergesort";
import { getInsertionSortAnimations } from "./Algorithms/insertionsort";
import { getQuickSortAnimations } from "./Algorithms/quicksort";
import { getSelectionSortAnimations } from "./Algorithms/selectionsort";

import "./Sorting.css";

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    console.log("Resetting array...");

    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push(randomInt(1, 99));
    }

    this.setState({ array });
  }

  applyAnimations(type) {
    console.log("Running %s Sort...", type);

    var animations = [];

    if (type === "Bubble") {
      animations = getBubbleSortAnimations(this.state.array);
    } else if (type === "Merge") {
      animations = getMergeSortAnimations(this.state.array);
    } else if (type === "Insertion") {
      animations = getInsertionSortAnimations(this.state.array);
    } else if (type === "Selection") {
      animations = getSelectionSortAnimations(this.state.array);
    } else if (type === "Quick") {
      animations = getQuickSortAnimations(this.state.array);
    }

    console.log(animations);
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <ButtonGroup className="sort-button-group">
          <Link to="/">
            <Button variant="primary">Home</Button>
          </Link>
          <Button
            variant="secondary"
            onClick={() => this.applyAnimations("Bubble")}
          >
            Bubble Sort
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.applyAnimations("Merge")}
          >
            Merge Sort
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.applyAnimations("Insertion")}
          >
            Insertion Sort
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.applyAnimations("Selection")}
          >
            Selection Sort
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.applyAnimations("Quick")}
          >
            Quick Sort
          </Button>
          <Button variant="primary" onClick={() => this.resetArray()}>
            Reset
          </Button>
        </ButtonGroup>

        <div className="array-container">
          {array.map((value, idx) => (
            <div className="array-element" key={idx}>
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
