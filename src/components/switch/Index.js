import './switch.css'


function Switch(props) {
  function handleChange(e) {
    props.setValue(e.target.checked);
  };

  return (
    <label htmlFor="switch" className="switch-button">
      <div className="switch-outer">
        <input
          type="checkbox"
          id="switch"
          value={props.value}
          onChange={(event) => handleChange(event)}
        />
        <div className="button">
          <span className="button-toggle"></span>
        </div>
      </div>
    </label>
  )
}

export default Switch;