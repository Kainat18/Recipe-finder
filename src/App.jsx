import RecipeForm from './components/RecipeForm';
import { Routes, Route , Navigate} from 'react-router-dom';
import Welcome from './components/Welcome';



function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/recipe" element={<RecipeForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
