export const createEvent = event => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("events")
      .add({
        ...event,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_EVENT", event });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const deleteEvent = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("events")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_EVENT" });
      })
      .catch(function(err) {
        dispatch({ type: "DELETE_EVENT_ERROR", err });
      });
  };
};

