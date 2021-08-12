import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    state = {
        loading: false,
        word: "hello",
        lang: "en_US",
        response: null
    }

    handleSubmit = () => {
        const { word, lang } = this.state;
        this.setState({ loading: true });
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    response: response.data[0]
                });
                this.setState({ loading: false });
            })
            .catch(error => {
                console.log("Error accessing server. Try again later.");
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        const { loading, response } = this.state;
        return (
            <div className="flex-1 py-1 px-3 max-w-2xl w-full sm:mx-auto border-sm border-gray-500 shadow-md rounded-lg">
                <form className="flex flex-col sm:flex-row px-4">
                    <div className="my-1">
                        <label className="block text-sm text-md text-gray-500 py-1" htmlFor="word">Enter Word</label>
                        <input onChange={e => this.setState({ word: e.target.value })} className="w-full border-gray-500 text-md rounded-lg focus:border-lg focus:border-blue-500" type="text" name="word" id="word" placeholder="Enter search word" />
                    </div>
                    <div className="my-1">
                        <label className="block text-sm text-md text-gray-500 py-1" htmlFor="lang">Choose Language</label>
                        <select name="lang" id="lang" onChange={e => this.setState({ lang: e.target.value })} className="w-full border-gray-500 text-md rounded-lg focus:border-lg focus:border-blue-500">
                            <option value="en_US">English(US)</option>
                            <option value="en">English(UK)</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 py-1.5 text-white font-bold rounded-md hover:bg-blue-700" onClick={this.handleSubmit} type="button">Search</button>
                </form>
                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <p>{response ? response.word : ""}</p>
                            <p>{response ? response.meanings[0].definitions[0].definition: ""}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Main;
