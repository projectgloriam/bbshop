import React from "react"
import PropTypes from "prop-types"

class Bass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editable: false,
                  name: this.props.bass.name,
                  description: this.props.bass.description,
                  image: ""};

    this.handleEdit = this.handleEdit.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

  }

  componentDidMount() {
    $.getJSON('/api/v1/basses.json', (response) => { 
      this.setState({ basses: response }) 
    });
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleDescriptionChange(e){
    this.setState({description: e.target.value});
  }

  handleImageChange(e){
    this.setState({image: e.target.files[0]});
  }

  handleEdit() {

      if(this.state.editable) {
          var bass = {id: this.props.bass.id , name: this.state.name , description: this.state.description, image: this.state.image};
          this.props.handleUpdate(bass);
      }

      this.setState({ editable: !this.state.editable });
  }

  render () {
    var name = this.state.editable ? <input type='text' name="bassNameEdit" value={this.state.name}  onChange={this.handleNameChange} /> : <h3>{this.props.bass.name}</h3>;
    var description = this.state.editable ? <input type='text'  name="bassDescEdit" value={this.state.description} onChange={this.handleDescriptionChange} />: <p>{this.props.bass.description}</p>;
    var image = this.state.editable ? <input type="file" name="bassImageEdit" placeholder='Upload an image' accept="image/png, image/jpeg" onChange={this.handleImageChange} />: <img src={this.props.bass.image} />;

    return (
      <div>
        {name}
        {description}
        {image}
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}> 
          {" "}
          {this.state.editable ? "Submit" : "Edit"}{" "}
        </button>
      </div>
    );
  }
}

export default Bass
