import { connect } from 'react-redux'

import { RootState } from '../../../../modules/reducer'
import { clearFilters } from '../../../../modules/routing/actions'
import { hasFiltersEnabled } from '../../../../modules/routing/selectors'
import { getCount } from '../../../../modules/ui/browse/selectors'
import {
  getSection,
  getSortBy,
  getOnlyOnSale,
  getIsMap,
  getWearableRarities,
  getWearableGenders,
  getSearch,
  getContracts,
  getNetwork,
  getAssetType
} from '../../../../modules/routing/selectors'
import {
  MapStateProps,
  MapDispatchProps,
  OwnProps,
  Props,
  MapDispatch
} from './NFTFilters.types'
import NFTFilters from './NFTFilters'

const mapState = (state: RootState): MapStateProps => ({
  // @ts-ignore：
  assetType: getAssetType(state),
  count: getCount(state),
  section: getSection(state),
  // @ts-ignore：
  sortBy: getSortBy(state),
  search: getSearch(state),
  // @ts-ignore：
  onlyOnSale: getOnlyOnSale(state),
  // @ts-ignore：
  isMap: getIsMap(state),
  // @ts-ignore：
  wearableRarities: getWearableRarities(state),
  // @ts-ignore：
  wearableGenders: getWearableGenders(state),
  // @ts-ignore：
  contracts: getContracts(state),
  // @ts-ignore：
  network: getNetwork(state),
  // @ts-ignore：
  hasFiltersEnabled: hasFiltersEnabled(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onClearFilters: () => dispatch(clearFilters())
})

const mergeProps = (
  stateProps: MapStateProps,
  dispatchProps: MapDispatchProps,
  ownProps: OwnProps
): Props => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
})

export default connect(mapState, mapDispatch, mergeProps)(NFTFilters)
