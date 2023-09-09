import { combineReducers } from '@reduxjs/toolkit';
import {
  articleDetailsCommentsReducer,
  articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailsPage';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
