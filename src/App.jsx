// import viteLogo from '/vite.svg'
import { toast, ToastContainer } from 'react-toastify';
import { ElsegchStore } from './context/ElsegchContext';
import Root from './routes/root';

function App() {

  return (
    <ElsegchStore>
      <Root />
    </ElsegchStore>
  )
}

export default App