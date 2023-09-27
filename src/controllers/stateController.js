import https from "https";

const stateController = {
  getById(req, res) {
    const apiKey = process.env.COUNTRYSTATECITY_API_KEY;
    const countryIso = req.params.countryIso;

    const options = {
      hostname: "api.countrystatecity.in",
      path: `/v1/countries/${countryIso}/states`,
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
          const stateData = JSON.parse(data);

          const modifiedStateData = stateData.map((state) => ({
            ...state,
            id: state.iso2,
          }));

          return res.json(modifiedStateData);
        } catch (error) {
          console.error("Error parsing response:", error);
          return res.status(500).json({
            message: "Error parsing response"
          });
        }
      });
    });

    request.on("error", (error) => {
      console.error("Error:", error);
      return res.status(500).json({
        message: "Error fetching state"
      });
    });
  },
};

export default stateController;