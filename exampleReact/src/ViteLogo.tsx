import './App.css';

type TProps = {
  src: string;
};

const ViteLogo = (props: TProps) => {
  const { src } = props;

  return (
    <a href="https://vite.dev" rel="noreferrer" target="_blank">
      <img alt="Vite logo" className="logo" src={src} />
    </a>
  );
};

export default ViteLogo;
