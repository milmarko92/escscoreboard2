import React, {Component} from "react";
import {getFlagForCountry} from "./images";
import {countryNameMap} from "./constants";


export default class RankCountryComponent extends Component {

    flagOrRanking(){
        if(this.props.currentRank > 0 && this.props.currentRank <= 10){
            return (
                <span className={"country__current_rank"}>
                    {this.props.currentRank}
                </span>
            )
        }
        return (
            <span className={"country__flag"}>
                <img src={getFlagForCountry(this.props.country)}/>
            </span>
        )
    }

    render() {
        return(
            <div className={this.props.gotLastVote ? "country2" : this.props.inCurrentVotes ? "country1" : "country"}>
                <span className={"country__rank"}>
                    {this.props.rank}
                </span>
                {/*<span className={"country__flag"}>*/}
                {/*    <img src={getFlagForCountry(this.props.country)}/>*/}
                {/*</span>*/}
                { this.flagOrRanking() }
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