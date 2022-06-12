import Form01 from './views/form01';
import YupForm from './views/yupForm';
import Form02 from './views/form02';

function App() {

  return (
    <div>
     <h2>Formit 基本表单使用</h2> 
      <Form01 />
      <h2>yupForm</h2>
      <YupForm />
      <h2>Formit组件方式创建</h2>
      <Form02 />
    </div>
  );
}

export default App;
