import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface User {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  userId: number;
  name: string;
}

export interface AppState {
  selectedUser: User;
  allBooks: Book[];
}

export const selectUser = (state: AppState) => state.selectedUser;
export const selectAllBooks = (state: AppState) => state.allBooks;

export const selectVisibleBooks = createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    
    } else {
      return allBooks;
    }
  }
);

// --------------- use props - на основе данных, отсутствующих в хранилище

export const selectBookById = createSelector(
  selectAllBooks,
  (allBooks, props) => {
    return allBooks.filter((book: Book) => book.id === props.bookId);
  }
);

// ----------------  createFeatureSelector 

export const featureKey = 'feature';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>(featureKey);
// export const selectFeature_2 = (state: AppState) => state.feature; // the same result?

export const selectedFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);