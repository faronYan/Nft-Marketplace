import { connect } from 'react-redux'

import { RootState } from '../../modules/reducer'
import {
  getIsFullscreen,
  getAssetType,
  getSection,
  getVendor
} from '../../modules/routing/selectors'
import { MapStateProps } from './BrowsePage.types'
import BrowsePage from './BrowsePage'

const mapState = (state: RootState): MapStateProps => ({
  // @ts-ignore：
  vendor: getVendor(state),
  // @ts-ignore：
  assetType: getAssetType(state),
  // @ts-ignore：
  section: getSection(state),
  // @ts-ignore：
  isFullscreen: getIsFullscreen(state)
})

const mapDispatch = () => ({})

export default connect(mapState, mapDispatch)(BrowsePage)
