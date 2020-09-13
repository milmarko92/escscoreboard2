import React, {Component} from "react";
import countries, {all_voters, countryNameMap} from "./constants";
import {getFlagForCountry} from "./images";
import { Redirect } from 'react-router-dom'

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "selected_countries": [],
            "remaining_countries": countries,
            "selected_voters": [],
            "remaining_voters": all_voters,
            "done": false
        }
    }

    remove_from_list(list, element){
        let list_copy = []
        for (let i = 0; i < list.length; i++){
            if( list[i] !== element) {
                list_copy.push(list[i])
            }
        }
        return list_copy
    }

    countryElement(country) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_selected = this.state["selected_countries"]
                new_selected.push(country)
                let new_remaining = this.remove_from_list(this.state["remaining_countries"], country)
                this.setState({
                    "selected_countries" : new_selected,
                    "remaining_countries": new_remaining
                })
                console.log(this.state["selected_countries"])
            }}>
                <span className={"country__flag"}>
                    <img src={getFlagForCountry(country)}/>
                </span>
                <span className={"country__name"}>
                    {countryNameMap[country.toLowerCase()]}
                </span>
            </div>
        )

    }

    selectedCountryElement(country) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_remaining = this.state["remaining_countries"]
                new_remaining.push(country)
                let new_selected = this.remove_from_list(this.state["selected_countries"], country)
                this.setState({
                    "selected_countries" : new_selected,
                    "remaining_countries": new_remaining
                })
            }}>
                <span className={"country__flag"}>
                    <img src={getFlagForCountry(country)}/>
                </span>
                <span className={"country__name"}>
                    {countryNameMap[country.toLowerCase()]}
                </span>
            </div>
        )
    }
    voterElement(voter) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_selected = this.state["selected_voters"]
                new_selected.push(voter)
                let new_remaining = this.remove_from_list(this.state["remaining_voters"], voter)
                this.setState({
                    "selected_voters" : new_selected,
                    "remaining_voters": new_remaining
                })
                console.log(this.state["selected_voters"])
            }}>
                <span className={"country__flag"}>
                    {voter}
                </span>
            </div>
        )

    }

    selectedVoterElement(voter) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_remaining = this.state["remaining_voter"]
                new_remaining.push(voter)
                let new_selected = this.remove_from_list(this.state["selected_voters"], voter)
                this.setState({
                    "selected_voters" : new_selected,
                    "remaining_voter": new_remaining
                })
            }}>
                <span className={"country__flag"}>
                    {voter}
                </span>
            </div>
        )
    }

    render() {
        console.log(this.state["selected_countries"])
        console.log(this.state["remaining_countries"])
        if(this.state["done"] === true){
            const search = `?country_list=${this.state["selected_countries"].join(",")}&voters=${this.state["selected_voters"].join(",")}`
            return (<Redirect to={{
                    pathname:"/scoreboard",
                    search: search,
                    state: {}
                    }}/>
            )
        }

        return (
            <div>
                <div>
                    {
                        this.state["selected_countries"].map((country, index) => this.selectedCountryElement(country))
                    }
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    {
                        this.state["remaining_countries"].map((country, index) => this.countryElement(country))
                    }
                </div>
                <div>
                    {
                        this.state["selected_voters"].map((voter, index) => this.selectedVoterElement(voter))
                    }
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    {
                        this.state["remaining_voters"].map((voter, index) => this.voterElement(voter))
                    }
                </div>
                <button onClick={() => this.setState({"done": true})}>Save</button>
            </div>


                    // countries.forEach(country => this.votingButtonComponent(country))
        )
    }
}

export default Setup