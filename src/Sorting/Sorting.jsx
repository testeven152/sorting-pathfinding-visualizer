import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getBubbleSortAnimations } from "./Algorithms/bubblesort";
import { getMergeSortAnimations } from "./Algorithms/mergesort";
import { getInsertionSortAnimations } from "./Algorithms/insertionsort";
import { getQuickSortAnimations } from "./Algorithms/quicksort";
import { getSelectionSortAnimations } from "./Algorithms/selectionsort";

import "./Sorting.css";

const ARRAY_SIZE = 12;
const PRIMARY_COLOR = "#c0c0c0";
const SECONDARY_COLOR = "#34eb61";
const ANIMATION_SPEED = 150;

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      disabledButtons: false,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    console.log("Resetting array...");

    const newarray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newarray.push(randomInt(1, 99));
    }

    this.setState({ array: newarray, disabledButtons: false });
  }

  toggleButtons() {
    if (this.state.disabledButtons) {
      // enable button group
      document.getElementById("homebutton").disabled = false;
      document.getElementById("bubblesortbutton").disabled = false;
      document.getElementById("mergesortbutton").disabled = false;
      document.getElementById("insertionsortbutton").disabled = false;
      document.getElementById("selectionsortbutton").disabled = false;
      document.getElementById("quicksortbutton").disabled = false;
      document.getElementById("resetbutton").disabled = false;
      this.setState({ disabledButtons: false });
    } else {
      // disable button group
      document.getElementById("homebutton").disabled = true;
      document.getElementById("bubblesortbutton").disabled = true;
      document.getElementById("mergesortbutton").disabled = true;
      document.getElementById("insertionsortbutton").disabled = true;
      document.getElementById("selectionsortbutton").disabled = true;
      document.getElementById("quicksortbutton").disabled = true;
      document.getElementById("resetbutton").disabled = true;
      this.setState({ disabledButtons: true });
    }
  }

  mergeSort() {
    console.log("Running Merge Sort...");
    this.toggleButtons();

    const animations = getMergeSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayElements = document.getElementsByClassName("array-element");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [elementOneIdx, elementTwoIdx] = animations[i];
        const elementOneStyle = arrayElements[elementOneIdx].style;
        const elementTwoStyle = arrayElements[elementTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          elementOneStyle.backgroundColor = color;
          elementTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [elementOneIdx, newNumber] = animations[i];
          arrayElements[elementOneIdx].innerHTML = newNumber;
        }, i * ANIMATION_SPEED);
      }
    }

    setTimeout(() => {
      this.toggleButtons();
    }, (animations.length + 1) * ANIMATION_SPEED);
  }

  bubbleSort() {
    console.log("Running Bubble Sort...");
    this.toggleButtons();

    const animations = getBubbleSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayElements = document.getElementsByClassName("array-element");
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [elementOneIdx, elementTwoIdx] = animations[i];
        const elementOneStyle = arrayElements[elementOneIdx].style;
        const elementTwoStyle = arrayElements[elementTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          elementOneStyle.backgroundColor = color;
          elementTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [elementOneIdx, newNumber] = animations[i];
          arrayElements[elementOneIdx].innerHTML = newNumber;
        }, i * ANIMATION_SPEED);
      }
    }

    setTimeout(() => {
      this.toggleButtons();
    }, (animations.length + 1) * ANIMATION_SPEED);
  }

  selectionSort() {
    console.log("Running Selection Sort...");
    this.toggleButtons();

    const animations = getSelectionSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayElements = document.getElementsByClassName("array-element");
    }

    setTimeout(() => {
      this.toggleButtons();
    }, (animations.length + 1) * ANIMATION_SPEED);
  }

  quickSort() {
    console.log("Running Quick Sort...");
    this.toggleButtons();

    const animations = getQuickSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayElements = document.getElementsByClassName("array-element");
    }

    setTimeout(() => {
      this.toggleButtons();
    }, (animations.length + 1) * ANIMATION_SPEED);
  }

  insertionSort() {
    console.log("Running Insertion Sort...");
    this.toggleButtons();

    const animations = getInsertionSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayElements = document.getElementsByClassName("array-element");
    }

    setTimeout(() => {
      this.toggleButtons();
    }, (animations.length + 1) * ANIMATION_SPEED);
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <ButtonGroup className="sort-button-group">
          <Link to="/">
            <Button variant="primary" id="homebutton">
              Home
            </Button>
          </Link>
          <Button
            variant="secondary"
            id="bubblesortbutton"
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </Button>
          <Button
            variant="secondary"
            id="mergesortbutton"
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </Button>
          <Button
            variant="secondary"
            id="insertionsortbutton"
            onClick={() => this.insertionSort()}
          >
            Insertion Sort
          </Button>
          <Button
            variant="secondary"
            id="selectionsortbutton"
            onClick={() => this.selectionSort()}
          >
            Selection Sort
          </Button>
          <Button
            variant="secondary"
            id="quicksortbutton"
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </Button>
          <Button
            variant="primary"
            id="resetbutton"
            onClick={() => this.resetArray()}
          >
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
