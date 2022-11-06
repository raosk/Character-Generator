function InputField(props) {
  const { label, inputType, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type={inputType}
        value={value}
        min="0"
        placeholder=""
        onChange={onChange}
      ></input>
    </div>
  );
}

export default InputField;
