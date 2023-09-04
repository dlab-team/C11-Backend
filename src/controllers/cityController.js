import https from "https";

const cityController = {
  getCitiesByStateAndCountry(req, res) {
    const apiKey = process.env.COUNTRYSTATECITY_API_KEY;
    const countryIso = req.params.countryIso; // Obtener el ISO del país de la URL
    const stateIso = req.params.stateIso; // Obtener el ISO del estado de la URL

    const options = {
      hostname: "api.countrystatecity.in",
      path: `/v1/countries/${countryIso}/states/${stateIso}/cities`, // Usar los ISO del país y estado para formar la ruta correcta
      method: "GET",
      headers: {
        "X-CSCAPI-KEY": apiKey,
      },
    };

    const request = https.get(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const citiesData = JSON.parse(data);
          res.json(citiesData); // Enviar la respuesta aquí
        } catch (error) {
          console.error("Error parsing response:", error);
          res.status(500).json({ message: "Error parsing response" });
        }
      });
    });

    request.on("error", (error) => {
      console.error("Error:", error);
      res.status(500).json({ message: "Error fetching cities" }); // Mover el envío de respuesta de error aquí
    });
  },
};

export default cityController;
