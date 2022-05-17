// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import Hello from './hello/hello'

export function App() {
  return (
    <>
      {/*<NxWelcome title="webapp" />*/}
      <Hello/>
      <div />
    </>
  );
}

export default App;
