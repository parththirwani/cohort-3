import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from "../store/atoms/counter";
function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <IncreaseCount />
      <DecreaseCount />
      <ZeroCount />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom)
  return <p>Count is {count}</p>;
}

function IncreaseCount() {
  const setCount= useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 2)}>Increase Count</button>
    </div>
  );
}

function DecreaseCount() {
  const setCount= useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease Count</button>
    </div>
  );
}

function ZeroCount() {
  const setCount= useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={() => setCount(0)}>Clear Count</button>
    </div>
  );
}

export default App;
