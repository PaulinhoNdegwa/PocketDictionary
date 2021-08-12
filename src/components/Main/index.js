import React, { Component } from 'react';

class Main extends Component {
    state = {
        word: "",
        lang: "eng_UK",
        response: []
    }

    handleSearch = () => {
        alert(this.state.word)
        console.log(this.state)
    }
    
    render() {
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
                            <option value="en_UK">English(UK)</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 py-1.5 text-white font-bold rounded-md hover:bg-blue-700" onClick={this.handleSearch} type="button">Search</button>
                </form>
                <p>This is the output</p>
            </div>
        );
    }
}

export default Main;
