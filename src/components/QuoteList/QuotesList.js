import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

import "./QuotesList.scss";

class QuotesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: this.props.quotes
    }
  };

  liked = (index) => {
    this.state.list[index].liked = !this.state.list[index].liked;
    if(this.state.list[index].liked === true) {
      this.state.list[index].count++;
    }
    this.forceUpdate();
  };

  deleteQuote = (ind) => {
    this.props.deleteQuote(ind);
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="quotes-list">
          <h1>List of Quotes:</h1>
          <div className="list">
            {this.state.list.map((item,index)=>{
              return (
                <section key={item.author}>
                  <article>
                    <blockquote><q>{item.quote}</q></blockquote>
                    <footer>- {item.author}</footer>
                    <div className="icons">
                    <span className="like" onClick={()=>this.liked(index)}>{item.liked?<FontAwesome.FaHeart/>:<FontAwesome.FaHeartO/>}{item.count>0?item.count:null}</span>
                      <span className="delete" onClick={()=>this.deleteQuote(index)}><FontAwesome.FaTrashO/></span>
                    </div>
                  </article>
                </section>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}



export default QuotesList;
