import React, { Component } from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';
import GoatForm from '../GoatForm';

export default class Goat extends Component {
  static propTypes = {
    goat: goatShape,
    removeGoat: PropTypes.func,
  }

  state = {
    isBusy: this.props.goat.isBusy,
    edit: false,
  }

  updateGoat = () => {
    this.setState({
      isBusy: !this.state.isBusy,
    });
  }

  editGoat = () => {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    const { goat, removeGoat, addUpdateGoat } = this.props;
    const { isBusy, edit } = this.state;

    return (
      <div className='Goat col-md-3 mb-3' id={goat.id}>
        <div className='card'>
          <img src={goat.imgUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{goat.name}</h5>
            <p className='card-text'>{goat.age} Years old</p>
            <p className='card-text'>{goat.description}</p>
          </div>
          <div className='card-footer'>
            { isBusy ? (
                <button className='btn btn-success' onClick={this.updateGoat}>Use Goat</button>
            ) : (
              <button className='btn btn-danger' onClick={this.updateGoat}>Goat in Use</button>
            )
            }
            <button className='btn btn-danger' id={goat.id} onClick={(e) => removeGoat(e)}>Remove Goat</button>
            <button className='btn btn-info my-2' onClick={this.editGoat}>
             {edit ? 'Close Form' : 'Open form'}

            </button>
            { edit && (<GoatForm goat={goat} addUpdateGoat={addUpdateGoat} />)}
          </div>
        </div>
      </div>
    );
  }
}
