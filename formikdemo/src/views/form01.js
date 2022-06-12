/**
 * formik 基本表单使用
 */
import { useFormik } from 'formik'
function Form01() {
  const formik = useFormik({
    initialValues: { username: '张三', password: '' },
    onSubmit: value => { console.log(value) },
    validate: values => {
      const errors = {}
      if (!values.username) errors.username = '请输入用户名'
      if (!values.password) errors.password = '请输入密码'
      return errors
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type='text'
        name='username'
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {
        formik.touched.username &&
          formik.errors.username ?
          <p>{formik.errors.username}</p> :
          null
      }
      <input
        type='text'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {
        formik.touched.password &&
          formik.errors.password ?
          <p>{formik.errors.password}</p> :
          null
      }
      <button type='submit'>submit</button>
    </form>
  );
}

export default Form01;
