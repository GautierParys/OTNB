"use strict";

const dataList = {
    "obesite": "data/obesite.json"
};

const loadData = async (url) => {
    const response = await fetch(url);
    const values = await response.json();
    return values;
};

loadData(dataList["obesite"])
    .then((data) => {
        const select = document.getElementById('yearSelect');
        const cakeBE = document.getElementById('cakeBE');
        const cakeJP = document.getElementById('cakeJP');
        const labelBE = document.getElementById('pctBE');
        const labelJP = document.getElementById('pctJP');

        const currentValues = { be: 0, jp: 0 };

        const update = () => {
            const year = select.value;
            const selected = data[year];

            if (!selected) return;

            gsap.to(cakeBE, {
                height: (selected.Belgique / 60) * 350,
                duration: 1.5,
                ease: "power3.out"
            });

            gsap.to(cakeJP, {
                height: (selected.Japon / 60) * 350,
                duration: 1.5,
                ease: "power3.out"
            });

            gsap.to(currentValues, {
                be: selected.Belgique,
                jp: selected.Japon,
                duration: 1.5,
                ease: "power3.out",
                onUpdate: () => {
                    labelBE.textContent = currentValues.be.toFixed(1) + '%';
                    labelJP.textContent = currentValues.jp.toFixed(1) + '%';
                }
            });
        };

        select.addEventListener('change', update);

        if (select.value) {
            update();
        }
    });