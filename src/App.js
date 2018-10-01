import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";



const API_KEY = "7370cab70b14d30696316bf515e5d8fa";

//initializing component
class App extends React.Component{

    //initializing state
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }


    //created a method
    getWeather = async (e) => {
        //preventing full page refresh
        e.preventDefault();

        //making api call
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

        //converting to JSON
        const data = await api_call.json();
        if (city && country) {
            // console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: " "
            });
        }
        else {

            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the value"
            });
        }
    }

    //rendering the components
    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Title/>
                                </div>
                                <div className="col-xs-7 form-container">
                                    {/*setting the props in form component*/}
                                   <Form getWeather = {this.getWeather}/>
                                    <Weather
                                    temperature = {this.state.temperature}
                                    city = {this.state.city}
                                    country = {this.state.country}
                                    humidity = {this.state.humidity}
                                    description = {this.state.description}
                                    error = {this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}

export default App;