import React, {Component} from 'react';


class Input extends Component{
  render(){
    var error_cmp = null;
    if (this.props.inputErrorMsg) {
      error_cmp = (<div className="error">{this.props.inputErrorMsg}</div>);
    }
    return (
    <fieldset>
      <label>{this.props.inputLabel || ''}</label>
      <br/>
      <input
        type={this.props.inputType || 'text'}
        name={this.props.inputName || 'input' + Math.round(Math.random() * 100) }
        placeholder={this.props.inputPlaceholder || ''}
        value={this.props.inputValue || ''}
        onBlur={this.props.inputBlurHandler || ((e)=>{ return false;})}
        onChange={this.props.inputChangeHandler || ((e)=>{ return false;})}
      />
      <br/>
      {error_cmp}
    </fieldset>
    );
  }
}
export default Input;
