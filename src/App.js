import Nav from './component/nav';
import Catergories from './component/catergories';
import Sale from './component/sale';
import Recommended from './component/recommend';
import Topics from './component/topic';
import Popular from './component/popular';
import Foot from './component/foot';

function App(){
  return(
    <div>
    <Nav></Nav>
    <Catergories></Catergories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Foot></Foot>
    </div>
  )
}

export default App