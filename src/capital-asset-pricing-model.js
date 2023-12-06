// capital-asset-pricing-model.js

function capitalAssetPricingModel(rf, beta, emr, err) {
  var ans = rf / 100 + beta * (emr / 100 - rf / 100);
  return ans;
}

module.exports = {
  capitalAssetPricingModel,
};
