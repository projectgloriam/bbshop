import React from "react"
import PropTypes from "prop-types"
import Bass from "components/Bass"

class Basses extends React.Component {

  handleDelete(bass) {
    if (confirm("Are you sure you want to delete '"+bass.name+"'?") != true) return;

    this.props.handleDelete(bass.id);
  }

  onUpdate(bass) {
      this.props.onUpdate(bass);
  }

  render () {
    var basses= this.props.basses.map((bass) => {
        return (
            <div key={bass.id}>
              <Bass bass={bass}
                       handleDelete={this.handleDelete.bind(this, bass)}
                       handleUpdate={this.onUpdate.bind(this)}/>
            </div>
        )
    });
    
    return (
      <div>
        <h2>All Basses</h2>
        <div className="grid grid-flow-col gap-8">{basses}</div>
      </div>
    );
  }
}

export default Basses
