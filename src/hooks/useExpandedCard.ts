import {
  atom,
  useRecoilState,
  SetterOrUpdater
} from 'recoil'

type ExpandedCardState = string|null

const expandedCardState = atom<ExpandedCardState>({
  key: 'expandedCardState',
  default: null,
})

const useExpandedCard = (): [ExpandedCardState, SetterOrUpdater<ExpandedCardState>] => {
  return useRecoilState(expandedCardState)
}

export default useExpandedCard
