import { CORE_CONCEPTS } from "./data";
import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  return (
    <div>
      <Header2 />
      <main>
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2>
          <ul>
            <CoreConcepts 
              image={CORE_CONCEPTS[0].image} 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            {/* <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton> */}
            <TabButton label='Components' />
            <TabButton label='JSX' />
            <TabButton label='Props' />
            <TabButton label='State' />
          </menu>
          동적인 버튼 클릭의 결과물
        </section>
      </main>
    </div>
  );
}

export default App;
