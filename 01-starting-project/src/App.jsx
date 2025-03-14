import { CORE_CONCEPTS } from "./data";
import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data_updated";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectedTopic) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
    setSelectedTopic(selectedTopic);
  }

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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{selectedTopic}</h3>
            <p>description</p>
            <pre>
              <code>
                code
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
