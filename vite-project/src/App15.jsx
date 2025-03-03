import Customer1 from './Customer1';
import Customer2 from './Customer2';

function App() {
  return (
    <MenuContext.Provier
      value={{
        아메리카노: "3500",
        카페라떼: "4000",
      }}
    >
      <Customer1 />
      <Customer2 />
    </MenuContext.Provier>
  );
}

export default App;