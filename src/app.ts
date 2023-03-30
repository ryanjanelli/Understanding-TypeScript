import axios from "axios";
// declare var google: any;

const form = document.querySelector("form");
const addressInput = document.getElementById("address") as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCnLVO44mGDGk7OkDUBO0J3X3PlNLAu-4M";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; ln: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};
function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response);
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = {
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.ln,
      };

      let map: any;
      async function initMap(): Promise<void> {
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map") as HTMLElement, {
          center: coordinates,
          zoom: 16,
        });
        new google.maps.Marker({
          position: coordinates,
          map,
        });
      }
      initMap();
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
