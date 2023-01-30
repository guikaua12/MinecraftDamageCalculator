const initialDamage = document.querySelector("#damage");
const protection = document.querySelector("#protection");
const helmet = document.querySelector("#helmet");
const chestplate = document.querySelector("#chestplate");
const leggings = document.querySelector("#leggings");
const boots = document.querySelector("#boots");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");

submit.onclick = e => {
    const damage = initialDamage.value;
    const points = (Number(helmet.value) + Number(chestplate.value) + Number(leggings.value) + Number(boots.value)) * 2;
    const prot = Number(protection.value);
    const newDamage = calculateDamageApplied(damage, points, 0, 0, prot);

    result.innerHTML = `Result: ${newDamage.toFixed(2)}`;
}

function calculateDamageApplied(damage, points, toughness, resistance, epf) {
    const withArmorAndToughness = damage * (1.0 - Math.min(40.0, Math.max(points / 5.0, points - damage / (2.0 + toughness / 4.0))) / 25.0);
    const withResistance = withArmorAndToughness * (1.0 - resistance * 0.2);
    const withEnchants = withResistance * (1.0 - Math.min(20.0, epf) / 25.0);
    return withEnchants;
}