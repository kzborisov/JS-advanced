function attachEventsListeners() {
  const btnConvert = document.getElementById("convert");

  btnConvert.addEventListener("click", handleConvert);

  function handleConvert() {
    const inputUnits =
      document.getElementById("inputUnits").selectedOptions[0].value;
    const outputUnits =
      document.getElementById("outputUnits").selectedOptions[0].value;
    const inputDistanceEl = document.getElementById("inputDistance");
    const inputDistance = Number(inputDistanceEl.value);
    const resultInMeter = convertToMeters(inputUnits, inputDistance);

    document.getElementById("outputDistance").value = convertFromMeters(
      outputUnits,
      resultInMeter
    );
  }

  function convertToMeters(units, distance) {
    const convertingMap = {
      km: (d) => d * 1000,
      m: (d) => d,
      cm: (d) => d / 100,
      mm: (d) => d / 1000,
      mi: (d) => d * 1609.34,
      yrd: (d) => d * 0.9144,
      ft: (d) => d * 0.3048,
      in: (d) => d * 0.0254,
    };
    return convertingMap[units](distance);
  }

  function convertFromMeters(units, distance) {
    const convertingMap = {
      km: (d) => d / 1000,
      m: (d) => d,
      cm: (d) => d * 100,
      mm: (d) => d * 1000,
      mi: (d) => d / 1609.34,
      yrd: (d) => d / 0.9144,
      ft: (d) => d / 0.3048,
      in: (d) => d / 0.0254,
    };
    return convertingMap[units](distance);
  }
}
