"use strict";

const dataList = {
    "aquaculture-production": "data/aquaculture-production.json",
    "average-surfece-temperature": "data/average-surfece-temperature.json",
    "capture-fishery-production": "data/capture-fishery-production.json",
    "children-per-woman": "data/children-per-woman.json",
    "daily-calories-supply": "data/daily-calories-supply.json",
    "homocide-rate": "data/homocide-rate.json",
    "hours-per-worker": "data/hours-per-worker.json",
    "international-trips-for-personal-reasons": "data/international-trips-for-personal-reasons.json",
    "konbini-count": "data/konbini-count.json",
    "life-expectancy-at-birth": "data/life-expectancy-at-birth.json",
    "manga-physical-sales": "data/manga-physical-sales.json",
    "objects-launched-into-outer-space": "data/objects-launched-into-outer-space.json",
    "population-by-age-group": "data/population-by-age-group.json",
    "population": "data/population.json",
    "share-new-cars-electric": "data/share-new-cars-electric.json",
    "share-of-land-area-used-for-agriculture": "data/share-of-land-area-used-for-agriculture.json",
    "data/shinkansen-delay": "data/shinkansen-delay.json",
    "solar-energy-capacity": "data/solar-energy-capacity.json",
    "tsunami-count": "data/tsunami-count.json",
    "whale-killed": "data/whale-killed.json",
    "obesite": "data/obesite.json"
}

const loadData = async (url) => {
    const response = await fetch(url);
    const values = await response.json();
    return values;
};

loadData(dataList["obesite"])
    .then((values) => {
        console.log(values);
    });