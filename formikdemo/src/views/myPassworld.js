import { useField } from 'formik'
function MyPassWord({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default MyPassWord