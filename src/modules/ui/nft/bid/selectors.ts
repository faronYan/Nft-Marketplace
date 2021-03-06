import { createSelector } from 'reselect'
import { getData as getBidData } from '../../../bid/selectors'
import { RootState } from '../../../reducer'
import { BidState } from '../../../bid/reducer'
import { Bid } from '../../../bid/types'
import { BidUIState } from './reducer'

export const getState = (state: RootState) => state.ui.nft.bid

export const getSellerBids = createSelector<
  // @ts-ignore：
  RootState,
  BidUIState,
  BidState['data'],
  Bid[]
>(getState, getBidData, (bid, bidsById) => bid.seller.map(id => bidsById[id]))

export const getBidderBids = createSelector<
  // @ts-ignore：
  RootState,
  BidUIState,
  BidState['data'],
  Bid[]
>(getState, getBidData, (ui, bidsById) => ui.bidder.map(id => bidsById[id]))

export const getArchivedBidIds = (state: RootState) => getState(state).archived

export const getNFTBids = createSelector<
  // @ts-ignore：
  RootState,
  BidUIState,
  BidState['data'],
  Bid[]
>(getState, getBidData, (bid, bidsById) => bid.nft.map(id => bidsById[id]))
