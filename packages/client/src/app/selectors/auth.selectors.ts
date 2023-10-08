import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/app.model';
import { AuthState } from '../reducers/auth.reducer';

const selectAuthState = (state: AppState): AuthState => state.auth;

export const selectUserLoggedIn = createSelector(
  selectAuthState,
  (state) => state.loggedIn
)

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
)

export const selectUserEmail = createSelector(
  selectAuthState,
  (state) => state.email
)

export const selectUserUuid = createSelector(
  selectAuthState,
  (state) => state.uuid
)