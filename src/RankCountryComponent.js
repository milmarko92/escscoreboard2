import React, {Component} from "react";
import {getFlagForCountry} from "./images";
import {countryNameMap} from "./constants";


export default class RankCountryComponent extends Component {

    render() {
        return(
            <div className={this.props.inCurrentVotes ? "country1" : "country"}>
                <span className={"country__rank"}>
                    {this.props.rank}
                </span>
                <span className={"country__flag"}>
                    <img src={getFlagForCountry(this.props.country)}/>
                </span>
                <span className={"country__name"}>
                    {countryNameMap[this.props.country.toLowerCase()]}
                </span>
                <span className={"country__average"}>
                    {
                        this.props.use12P ? this.props.twelvePointRank : this.props.averageRank.toFixed(2)
                    }
                </span>
            </div>
        )
    }
}