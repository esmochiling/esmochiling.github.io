import { loadDB } from '../../lib/db'
import { extend } from 'lodash'
import { FETCH_EXPERIENCES } from './types'

// ACTIONS

// This sets up the listener to fetch experiences.
// Sets a listener so as new posts fill in their are added to the top.
export const fetchExperiences = () => async dispatch => {
  const app = await loadDB()

  app.firestore()
    .collection('experiences')
    .orderBy('startDate', 'desc')
    .onSnapshot(snapshot => {
      let newState = []

      snapshot.forEach(function(doc) {
        newState.push(extend({ id: doc.id }, doc.data()))
      })

      dispatch({
        type: FETCH_EXPERIENCES,
        payload: newState
      })
    })
}
