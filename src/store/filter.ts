import {Brand, Link, Model, Series} from './model'
import {config} from '../config'

/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand: Brand): boolean {
  if (config.store.showOnlyBrands.length === 0) {
    return true
  }

  return (
    brand === null ||
    brand === undefined ||
    config.store.showOnlyBrands.includes(brand)
  )
}

/**
 * Returns true if the model should be checked for stock
 *
 * @param model The model of the GPU
 * @param series The series of the GPU
 */
function filterModel(model: Model, series: Series): boolean {
  if (config.store.showOnlyModels.length === 0) {
    return true
  }

  if (
    model === null ||
    model === undefined ||
    series === null ||
    series === undefined
  ) {
    return true
  }

  const sanitizedModel = model.replace(/\s/g, '')
  const sanitizedSeries = series.replace(/\s/g, '')
  for (const configModelEntry of config.store.showOnlyModels) {
    const sanitizedConfigModel = configModelEntry.name.replace(/\s/g, '')
    const sanitizedConfigSeries = configModelEntry.series.replace(/\s/g, '')
    if (sanitizedConfigSeries) {
      if (
        sanitizedSeries === sanitizedConfigSeries &&
        sanitizedModel === sanitizedConfigModel
      ) {
        return true
      }
    } else if (sanitizedModel === sanitizedConfigModel) {
      return true
    }
  }

  return false
}

/**
 * Returns true if the series should be checked for stock
 *
 * @param series The series of the GPU
 */
export function filterSeries(series: Series): boolean {
  if (config.store.showOnlySeries.length === 0) {
    return true
  }

  return (
    series === null ||
    series === undefined ||
    config.store.showOnlySeries.includes(series)
  )
}

/**
 * Returns true if the link should be checked for stock
 *
 * @param link The store link of the GPU
 */
export function filterStoreLink(link: Link): boolean {
  return (
    filterBrand(link.brand as Brand) &&
    filterModel(link.model as Model, link.series) &&
    filterSeries(link.series)
  )
}
