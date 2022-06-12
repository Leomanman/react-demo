import { useField } from 'formik'
function MyCheckbox({ label, ...props }) {
  const [meta, helper] = useField(props);
  const { value } = meta;
  const { setValue } = helper;
  const handleChange = () => {
    const set = new Set(value);
    if (set.has(props.value)) {
      set.delete(props.value);
    } else {
      set.add(props.value);
    }
    setValue([...set])
  }
  return (<div>
    <label htmlFor={props.id}>
      <input checked={value.includes(props.value)} type="checkbox" {...props} onChange={handleChange} />{label}
    </label>
  </div>)
}

export default MyCheckbox