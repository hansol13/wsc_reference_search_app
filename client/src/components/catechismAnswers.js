import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class CatechismAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catechism_answers: [],
      currentId: 0,
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/catechism_answers')
      .then(res => res.json())
      .then(catechism_answers => this.setState({catechism_answers}, () => console.log('catechism_answers fetched...', catechism_answers)));
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }


  render() {
    const {search} = this.state;
    const filteredAnswers = this.state.catechism_answers.filter((catechism_answer) => {
      return catechism_answer.answer.toLowerCase().indexOf(search.toLowerCase() ) !== -1
    });
    return (
      <div>
        <Grid container spacing = {16}>
          <Grid item xs={12}>
            <h2>Westminster Shorter Catechism</h2>
            <h4>Search: <Input  placeholder="keyword/phrase" onChange={this.handleChange.bind(this)}></Input></h4>
            <ul>
              {//this.state.catechism_answers.map(catechism_answer => 
                filteredAnswers.map(catechism_answer => 
                <Paper key={catechism_answer.id}><h4>{catechism_answer.id+1}: {catechism_answer.question}</h4>{catechism_answer.answer}
                </Paper>
              )}
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CatechismAnswers;
