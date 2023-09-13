import https from "https";
import dotenv from "dotenv";

const countryController = {
  async getAll(req, res) {
    try {
      const apiKey = process.env.COUNTRYSTATECITY_API_KEY;

      const countryIds = [
        10, 11, 17, 20, 23, 27, 31, 44, 48, 53, 56, 61, 62, 64, 66, 87, 90, 94,
        95, 97, 108, 142, 159, 170, 172, 173, 185, 186, 188, 210, 223, 235, 239,
      ];

      const detailedCountries = await Promise.all(
        countryIds.map(async (countryId) => {
          const detailedOptions = {
            hostname: "api.countrystatecity.in",
            path: `/v1/countries/${countryId}`,
            method: "GET",
            headers: {
              "X-CSCAPI-KEY": apiKey,
            },
          };

          const detailedResponse = await new Promise((resolve, reject) => {
            const detailedRequest = https.request(detailedOptions, resolve);
            detailedRequest.on("error", reject);
            detailedRequest.end();
          });

          let detailedData = "";

          detailedResponse.on("data", (chunk) => {
            detailedData += chunk;
          });

          return new Promise((resolve) => {
            detailedResponse.on("end", () => {
              try {
                const detailedCountryData = JSON.parse(detailedData);

                const { id, iso2, phonecode, emoji, translations } =
                  detailedCountryData;

                const translationsObj = JSON.parse(translations);
                const spanishName = translationsObj["es"];

                const countryObject = {
                  id: iso2,
                  name: spanishName,
                  phonecode,
                  emoji,
                };

                resolve(countryObject);
              } catch (error) {
                console.error("Error parsing response:", error);
                resolve(null);
              }
            });
          });
        })
      );

      const filteredCountries = detailedCountries.filter(
        (country) => country !== null
      );

      return res.json(filteredCountries);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Error fetching countries" });
    }
  },
};

export default countryController;
