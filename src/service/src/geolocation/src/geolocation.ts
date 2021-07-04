import { app } from "~/index";

const checkGeolocation = (locate: object): string => {
  console.log(locate);

  return "";
};

export const geolocation = () => {
  // #TODO : check axios nethods 'post' dose not recieve request body
  app.get("/geolocation", async (req, res) => {
    console.log(req.query);
    const location = await checkGeolocation(req.query);
    console.log(location);
    res.send("asdfasdf");
    res.end();
  });
};
