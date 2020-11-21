import React, { Component } from "react";
import countries, {
  audioMap,
  countryNameMap,
  currentEdition,
  magic_code,
} from "./constants";
import { getFlagForCountry } from "./images";

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

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getResults() {
    console.log("ddddaaaa");
    fetch(
      "https://django-cloudrun-ed7wjo25ka-ew.a.run.app/result/" +
        currentEdition +
        "/"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          result: data["results"],
          fetched: true,
          qualifiers: this.shuffle(data["results"].slice(0, 10)),
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
    const entry = qualifiers[num]["entry"];
    strings[num] = entry;
    var audio = new Audio(process.env.PUBLIC_URL + "/audio/" + audioMap[entry]);
    audio.play();
    this.setState({ displayed: displayed, strings: strings });
  }

  all_countries() {
    return countries.sort().map((value, index) => {
      const qualified = this.array_contains(this.state["strings"], value);
      let classname = "country country--small";
      if (qualified === true) {
        classname = "country country--small country--qualified";
      }
      return (
        <div class={classname}>
          <span className="country__flag">
            <img src={getFlagForCountry(value)} />
          </span>
          <span className="country__name">{countryNameMap[value]}</span>
        </div>
      );
    });
  }

  ett_resultat() {
    return (
      <div className="results">
        <div className="results__left">
          <h2>Qualified for the Final</h2>
          <div className="results__qualifiers">
            {this.state["strings"].map((value, index) => {
              return (
                <div className="country" key={"q" + index}>
                  <span className="country__flag">
                    <img src={getFlagForCountry(value)} />
                  </span>
                  <span className="country__name">{countryNameMap[value]}</span>
                </div>
              );
            })}
          </div>
          <button onClick={this.displayQualifier.bind(this)}>
            Click Me with Your Mouse
          </button>
        </div>
        <div className="results__countries">{this.all_countries()}</div>
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

  check_code() {
    if (this.state["code"].toLowerCase() === magic_code) {
      this.setState({ unlocked: true });
    }
  }

  block_entry() {
    return (
      <div className="votingPassword">
        <input
          type={"text"}
          value={""}
          onChange={(event) => {
            this.setState({ code: event.target.value });
          }}
          onKeyUp={(event) => {
            if (event.keyCode === 13) {
              this.check_code();
            }
          }}
        />
        <button onClick={this.check_code.bind(this)}>Enter</button>
      </div>
    );
  }

  render() {
    return <div>{this.whatever()}</div>;
  }
}
