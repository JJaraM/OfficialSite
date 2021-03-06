import { SUCCESS, ERROR } from 'common/status';
import { HOST_NAME_POST, HOST_NAME_TAG } from 'configuration/hostname';

const infiniteLoading = false;
const SORT_BY_VIEWS = 0;
const SORT_BY_UPDATE_DATE = 1;

const api = {
  testimonials: `${HOST_NAME_POST}/testimonial/`,
  post: `${HOST_NAME_POST}/post/`,
  byTitle: `${HOST_NAME_POST}/post/find/all/byTitle/`,
  updateTitle: `${HOST_NAME_POST}/post/updateTitle/`,
  updateContent: `${HOST_NAME_POST}/post/updateContent/`,
  updateImage: `${HOST_NAME_POST}/post/updateImage/`,
  increaseViews: `${HOST_NAME_POST}/post/view/`,

  post_api: {
    tag: {
      add: `${HOST_NAME_POST}/post/addTag/`,
      remove: `${HOST_NAME_POST}/post/removeTag/`,
    },

    find: {
      all: `${HOST_NAME_POST}/post/find/all/`,
    },
  },

  tag: {
    create: `${HOST_NAME_TAG}/tag/`,
    all: `${HOST_NAME_TAG}/tag/all/`,
  },
};

const httpCall = function httpCall(endPoint, ...args) {
  return endPoint + args.join('/');
};

const isLoadingComplete = function isLoadingComplete(loading) {
  return !loading && !infiniteLoading;
};

const isInfitiveLoading = function isLoadingComplete() {
  return infiniteLoading;
};

const canRender = function canRender(status) {
  return status === SUCCESS && !infiniteLoading;
};

const canRenderError = function canRender(status) {
  return status === ERROR;
};

const logError = function logError(message) {
  console.log(message);
};

export {
  infiniteLoading,
  api,
  httpCall,
  isLoadingComplete,
  isInfitiveLoading,
  canRender,
  canRenderError,
  logError,
  SORT_BY_VIEWS,
  SORT_BY_UPDATE_DATE,
};
