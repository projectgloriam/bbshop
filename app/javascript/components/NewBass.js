import React, { createRef }  from "react"
import PropTypes from "prop-types"
class NewBass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      image: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.refresh = this.refresh.bind(this);
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

  refresh = () => {
    // re-renders the component
    this.setState({name: ""});
    this.setState({description: ""});
    this.setState({image: ""});
    document.getElementById("upload").value = "";
  };

  handleClick() {

      if(this.state.name=="" || this.state.description=="" || this.state.image==""){
        alert("Please fill all fields.");
        return;
      }
      
      var bassData = new FormData();

      bassData.append('name', this.state.name);
      bassData.append('description', this.state.description);
      bassData.append('image', this.state.image);

      const options = {
        url: "/api/v1/basses",
        type: "POST",
        data: bassData,
        processData: false,
        contentType: false,
        success: response => {
          this.props.handleSubmit(response);
          this.refresh();
        }
      };

      $.ajax(options);
  }

  render () {
    return (
      <div>
        <h2>New Bass</h2>
          <input name="bassName" placeholder='Enter the name of the item' value={this.state.name} onChange={this.handleNameChange} />
          <input name="bassDesc" placeholder='Enter a description' value={this.state.description} onChange={this.handleDescriptionChange} />
          <input id="upload" type="file" name="bassImage" placeholder='Upload an image' accept="image/png, image/jpeg" onChange={this.handleImageChange} />
          <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default NewBass
