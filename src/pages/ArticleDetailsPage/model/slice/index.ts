import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
