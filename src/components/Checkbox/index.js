export default function Checkbox({
  label, onChange, value, checked, inputProps
}) {
  return (
    <div className="Checkbox">
      <label> 
        <input {...inputProps}
          type="checkbox"
          onChange={onChange}
          value={value}
          checked={checked}
        />
        {label}
      </label>
    </div>
  )
}
