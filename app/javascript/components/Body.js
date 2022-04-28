import React from "react"
import PropTypes from "prop-types"
import Basses from "components/Basses"
import NewBass from "components/NewBass"

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {basses: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.removeBassClient = this.removeBassClient.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/basses.json', (response) => { 
      this.setState({ basses: response }) 
    });
  }

  handleSubmit(bass) {
    var allBasses = this.state.basses;
    var newState = allBasses.concat(bass);

    this.setState({ basses: newState });
  }

  handleUpdate(bass) {
    var bassData = new FormData();
    bassData.append('id', bass.id);
    bassData.append('name', bass.name);
    bassData.append('description', bass.description);
    bassData.append('image', bass.image);

    $.ajax({
        url: '/api/v1/basses/'+bass.id,
        type: 'PUT',
        data: bassData,
        processData: false,
        contentType: false,
        success: (response) => {
          this.updateItems(response);
        }
    });
  }

  updateItems(bass) {
      var basses = this.state.basses

      //Add updated bass at the same position
      var index = basses.findIndex((b) => { return b.id == bass.id });

      basses.splice(index, 1, bass);

      this.setState({basses: basses });
  }

  handleDelete(id) {
    console.log("Removing bass client: " + id);
    $.ajax({
        url: '/api/v1/basses/'+id,
        type: 'DELETE',
        success:() => {
           this.removeBassClient(id);
        }
    });
  }

  removeBassClient(id) {
      var newBasses = this.state.basses.filter((bass) => {
          return bass.id != id;
      });

      this.setState({ basses: newBasses });
  }

  render () {
    return (
      <div>
        <NewBass handleSubmit={this.handleSubmit}/>
        <Basses basses={this.state.basses} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default Body
