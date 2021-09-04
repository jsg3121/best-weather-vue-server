import { geolocation, weatherKorea } from "~/service";
import { app } from "../../index";

type RunServer = () => Promise<void>;
type Port = 80;

export const runServer: RunServer = async (): Promise<void> => {
  const PORT: Port = 80;

  app.listen(PORT, () => {
    console.log("server start!!");
    console.log(PORT);
  });

  weatherKorea();
  geolocation();
};
