/**
 * 使用组件的方式构建表单
 */
import { Formik, Form, Field, ErrorMessage } from 'formik'
import MyPassWord from './myPassworld';
import MyCheckbox from './myCheckbox.js'
import * as Yup from 'yup'
function Form02() {
  const initialState = {
    username: '',
    msg: '',
    subject: '打豆豆',
    password: '',
    hobbies: ['足球', '篮球']
  }
  const handleSubmit = values => {
    console.log(values);
  }
  const schema = Yup.object({
    username: Yup.string().max(15, '长度最多为15位').required('请输入用户名'),
    msg:Yup.string().min(2, '长度最多为2位').required('请输入消息')
  })
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name='username'/>
        <ErrorMessage name='username'/>
        <Field name='msg' as="textarea" />
        <ErrorMessage name='msg'/>
        <Field name='subject' as="select" >
          <option value="吃饭">吃饭</option>
          <option value="睡觉">睡觉</option>
          <option value="打豆豆">打豆豆</option>
        </Field>
        <MyPassWord label="密码框" type="password" name="password" id="password" placeholder="请输入密码" />
        <MyCheckbox value="足球" label="足球" name="hobbies"/>
        <MyCheckbox value="篮球" label="篮球" name="hobbies"/>
        <MyCheckbox value="橄榄球" label="橄榄球" name="hobbies"/>
        <button type='submit'>提交</button>
      </Form>
    </Formik>
  )
}

export default Form02