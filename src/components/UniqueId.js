import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function UniqueId() {
  const appContext = useContext(AppContext);

  return <p>UID: {appContext.id}</p>;
}
