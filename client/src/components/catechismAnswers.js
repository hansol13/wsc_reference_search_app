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
        <Grid container spacing = {24}>
          <Grid item xs={12}>
            <h2>&nbsp;&nbsp;Westminster Shorter Catechism</h2>
            <h4>Search: <Input  placeholder="keyword/phrase" onChange={this.handleChange.bind(this)}></Input></h4>
            <ul>
              { // this.state.catechism_answers.map(catechism_answer => // would be used only if i wanted to see everything with no filters. but our current
                // filter handler includes every input
                filteredAnswers.map(catechism_answer => 
                  <p>
                      <Paper key={catechism_answer.id}>
                      <br/>
                      <h4>
                        {catechism_answer.id+1}: {catechism_answer.question}
                      </h4>
                      {catechism_answer.answer}
                      <br/><br/><br/>
                    </Paper>
                  </p>
                

              )}
            </ul>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CatechismAnswers;
