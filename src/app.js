import React, {Component} from 'react';

import QuotesForm from "./components/QuoteForm/QuotesForm";
import QuotesList from "./components/QuoteList/QuotesList";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes:
            [{author:"Demo",quote:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",liked:false,count:0},{author:"India",quote:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",liked:false,count:0}]
        };
    }
    addQuote = (data) => {
        this.setState({
            quotes: data
        });
    };

    removeQuote = (index) => {
        this.state.quotes.splice(index,2);
        this.forceUpdate();
    };

    render() { 
        return (  
            <div>
                <QuotesForm addQuote={this.addQuote} initialQuotes={this.state.quotes}/>
                <QuotesList quotes={this.state.quotes} deleteQuote = {this.removeQuote}/>
            </div>
        )
    }
}

export default App;