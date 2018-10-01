import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info">
                {/*starting with js expression {} and giving the conditions to meet*/}
                {
                    this.props.city && this.props.country &&
                    <p className="weather__key">
                        <span className="weather__value">location: {this.props.city},{this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperature &&
                    <p className="weather__key">
                        <span className="weather__value">Temperature: {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.humidity &&
                    <p className="weather__key">
                        <span className="weather__value">Humidity: {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description &&
                    <p className="weather__key">
                        <span className="weather__value">Conditions: {this.props.description},{this.props.error}</span>
                        </p>
                }
                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
            </div>
        )
    }
}

export default Weather;