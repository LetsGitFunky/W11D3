import './LightSwitch.css';
import { useTheme } from "../../context/ThemeContext"

function LightSwitch() {

  const {themeName, setThemeName} = useTheme();

  return (
    <div className={`light-switch ${themeName}`}>
      <div onClick={() => setThemeName('day')} className="on disable-select">DAY</div>
      <div onClick={() => setThemeName('night')} className="off disable-select">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
