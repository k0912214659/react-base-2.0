import { GLOBAL_ACTION } from '@Reducers/createConstants';

/* Global */
export const SET_GLOBAL_LANG = ({ lang }) => ({
  type: GLOBAL_ACTION.SET_GLOBAL_LANG,
  lang,
});

/* Global Action */
export const postGlobalLang = (lang) => async (dispatch) => {
  dispatch(SET_GLOBAL_LANG({
    lang,
  }));
};
