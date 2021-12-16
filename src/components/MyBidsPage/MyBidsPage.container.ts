import { connect } from 'react-redux'
import { replace } from 'connected-react-router'

import { RootState } from '../../modules/reducer'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'
import {
  getBidderBids,
  getSellerBids,
  getArchivedBidIds
} from '../../modules/ui/nft/bid/selectors'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'
import { getLoading } from '../../modules/bid/selectors'
import {
  fetchBidsByAddressRequest,
  FETCH_BIDS_BY_ADDRESS_REQUEST
} from '../../modules/bid/actions'
import {
  MapStateProps,
  MapDispatch,
  MapDispatchProps
} from './MyBidsPage.types'
import MyBidsPage from './MyBidsPage'

const mapState = (state: RootState): MapStateProps => {
  return {
    wallet: getWallet(state),
    // @ts-ignore：
    sellerBids: getSellerBids(state),
    // @ts-ignore：
    bidderBids: getBidderBids(state),
    archivedBidIds: getArchivedBidIds(state),
    isConnecting: isConnecting(state),
    isLoading: isLoadingType(getLoading(state), FETCH_BIDS_BY_ADDRESS_REQUEST)
  }
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(replace(path)),
  onFetchBids: address => dispatch(fetchBidsByAddressRequest(address))
})

export default connect(mapState, mapDispatch)(MyBidsPage)
