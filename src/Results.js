import React, { Component } from "react";
import countries, { audioMap, countryNameMap } from "./constants";
import {getFlagForCountry} from "./images";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      displayed: [],
      strings: [
        "???",
        "???",
        "???",
        "???",
        "???",
        "???",
        "???",
        "???",
        "???",
        "???",
      ],
    };
    this.getResults();
  }

  array_contains(array, num) {
    for (var i = 0; i < array.length; i++) {
      if (num === array[i]) {
        return true;
      }
    }
    return false;
  }
  getResults() {
    console.log("ddddaaaa");
    fetch("https://django-cloudrun-ed7wjo25ka-ew.a.run.app/result")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          result: data["results"],
          fetched: true,
          qualifiers: data["results"].slice(0, 10),
        });
        console.log(data);
      });
  }

  displayQualifier() {
    if (this.state["displayed"].length === 10) {
      return;
    }
    var qualifiers = this.state["qualifiers"];
    var num = Math.floor(Math.random() * 10);
    var displayed = this.state["displayed"];
    while (
      this.array_contains(this.state["displayed"], qualifiers[num]) === true
    ) {
      num = Math.floor(Math.random() * 10);
    }
    displayed.push(qualifiers[num]);
    console.log(displayed);
    var strings = this.state["strings"];
      const entry = qualifiers[num]["entry"]
      strings[num] = entry
      var audio = new Audio(
          process.env.PUBLIC_URL + "/audio/" + audioMap[entry]
      );
      audio.play()
    this.setState({ displayed: displayed, strings: strings });
  }

  ett_resultat() {
    return (
      <div>
        <span>"vi har ett resultat"</span>
        {this.state["strings"].map((value, index) => {
            return (<div key={"q"+index}>
                <img src={getFlagForCountry(value)}/>
                {countryNameMap[value]}
            </div>)
        })}
        <br />
        <button onClick={this.displayQualifier.bind(this)}>
          BIG RED BUTTON
        </button>
      </div>
    );
  }

  whatever() {
    if (this.state["fetched"] === false) {
      return "I don't have them";
    } else {
      console.log(this.state["results"]);
      return this.ett_resultat();
    }
  }

  render() {
    return <div>{this.whatever()}</div>;
  }
}
