const presentValueModule = require('./src/present-value.js');
const futureValueModule = require('./src/future-value.js');
const netPresentValueModule = require('./src/net-present-value.js');
const internalRateOfReturnModule = require('./src/internal-rate-of-return.js');
const paybackPeriodModule = require('./src/payback-period.js');
const returnOnInvestmentModule = require('./src/return-on-investment.js');
const amortizationModule = require('./src/amortization.js')
const profitabilityIndexModule = require('./src/profitability-index.js')
const discountFactorModule = require('./src/discount-factor.js')
const compoundInterestModule = require('./src/compound-interest.js')
const compoundAnnualGrowthRateModule = require('./src/compound-annual-growth-rate.js')
const leverageRatioModule = require('./src/leverage-ratio.js')
const ruleOf72Module = require('./src/rule-of-72.js')
const weightedAverageCostOfCapitalModule = require('./src/weighted-average-cost-of-capital.js')
const paymentModule = require('./src/payment.js')
const inflationAdjustedReturnModule = require('./src/inflation-adjusted-return.js')
const extendedInternalRateOfReturnModule = require('./src/extended-internal-rate-of-return.js')
const capitalAssetPricingModelModule = require('./src/capital-asset-pricing-model.js')
const stockPresentValueModule = require('./src/stock-present-value.js')

module.exports = {
  presentValue: presentValueModule.presentValue,
  futureValue: futureValueModule.futureValue,
  netPresentValue: netPresentValueModule.netPresentValue,
  internalRateOfReturn: internalRateOfReturnModule.internalRateOfReturn,
  paybackPeriod: paybackPeriodModule.paybackPeriod,
  returnOnInvestment: returnOnInvestmentModule.returnOnInvestment,
  amortization: amortizationModule.amortization,
  profitabilityIndex: profitabilityIndexModule.profitabilityIndex,
  discountFactor: discountFactorModule.discountFactor,
  compoundInterest: compoundInterestModule.compoundInterest,
  compoundAnnualGrowthRate: compoundAnnualGrowthRateModule.compoundAnnualGrowthRate,
  leverageRatio:leverageRatioModule.leverageRatio,
  ruleOf72: ruleOf72Module.ruleOf72,
  weightedAverageCostOfCapital: weightedAverageCostOfCapitalModule.weightedAverageCostOfCapital,
  payment: paymentModule.payment,
  inflationAdjustedReturn: inflationAdjustedReturnModule.inflationAdjustedReturn,
  extendedInternalRateOfReturn: extendedInternalRateOfReturnModule.extendedInternalRateOfReturn,
  capitalAssetPricingModel: capitalAssetPricingModelModule.capitalAssetPricingModel,
  stockPresentValue: stockPresentValueModule.stockPresentValue
};
