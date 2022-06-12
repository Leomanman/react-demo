import * as Yup from 'yup'
import { useFormik } from 'formik'
function YupForm() {
  const formik = useFormik({
    initialValues: { username: '张三', password: '' },
    onSubmit: value => { console.log(value) },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15,'用户名的长度最大为15')
        .required('请输入用户名'),
      password: Yup.string()
        .min(6, '密码最少为6位')
        .required('请输入密码')
    })
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type='text'
        name='username'
        {...formik.getFieldProps('username')}
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
        {...formik.getFieldProps('password')}
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

export default YupForm