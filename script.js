document.getElementById("bra-calculator").addEventListener("submit", function (e) {
    e.preventDefault();

    const underbust = parseFloat(document.getElementById("underbust").value);
    const bust = parseFloat(document.getElementById("bust").value);
    const activity = document.getElementById("activity").value;
    const fabric = document.getElementById("fabric").value;
    const bodyType = document.getElementById("bodyType").value;

    if (isNaN(underbust) || isNaN(bust) || underbust <= 0 || bust <= 0) {
        document.getElementById("result").textContent = "Please enter valid measurements.";
        return;
    }

    // Calculate band size
    let bandSize = Math.round(underbust + 4);

    // Calculate cup size difference
    let cupSizeDifference = Math.round(bust - underbust);
    let cupSize;

    // Determine cup size
    if (cupSizeDifference <= 0) {
        cupSize = "AA";
    } else if (cupSizeDifference === 1) {
        cupSize = "A";
    } else if (cupSizeDifference === 2) {
        cupSize = "B";
    } else if (cupSizeDifference === 3) {
        cupSize = "C";
    } else if (cupSizeDifference === 4) {
        cupSize = "D";
    } else if (cupSizeDifference === 5) {
        cupSize = "DD";
    } else if (cupSizeDifference >= 6) {
        cupSize = "E+";
    }

    // Generate recommendations based on selections
    let recommendations = `Your bra size is ${bandSize}${cupSize}.`;

    if (activity === "sundress") {
        recommendations += " For a sundress, consider a strapless or multiway bra.";
    } else if (activity === "swimwear") {
        recommendations += " For swimwear, choose a bikini top or tankini with built-in support.";
    } else if (activity === "saree") {
        recommendations += " For a saree, opt for a padded or plunge-style bra.";
    }

    if (fabric === "cotton") {
        recommendations += " Cotton bras are breathable and ideal for everyday wear.";
    } else if (fabric === "lace") {
        recommendations += " Lace bras offer a sexy, elegant touch.";
    } else if (fabric === "silk") {
        recommendations += " Silk bras provide luxury and comfort.";
    }

    if (bodyType === "oneLarger") {
        recommendations += " Look for bras with removable padding for asymmetry.";
    } else if (bodyType === "flatChest") {
        recommendations += " Lightly padded or push-up bras work well for a flatter chest.";
    } else if (bodyType === "heavyBreasts") {
        recommendations += " Full-coverage or minimizer bras provide excellent support.";
    }

    // Display result
    document.getElementById("result").textContent = recommendations;
});
