import MainPage from '../../pages/main/main';

type AppProps = {
  offersNumber: number;
};

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <MainPage offersNumber={offersNumber}/>
  );
}

export default App;
