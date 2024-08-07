// ✨ create your `quotesSlice` in this module

import { createSlice } from '@reduxjs/toolkit';

let id = 1;
const getNextId = () => id++;

const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes;
    },
    deleteQuote(state, action) {
      const id = action.payload;
      state.quotes = state.quotes.filter(qt => qt.id !== id);
    },
    editQuoteAuthenticity(state, action) {
      const id = action.payload;
      const quote = state.quotes.find(qt => qt.id === id);
      if (quote) {
        quote.apocryphal = !quote.apocryphal;
      }
    },
    setHighlightedQuote(state, action) {
      const id = action.payload;
      state.highlightedQuote = state.highlightedQuote !== id ? id : null;
    },
    createQuote(state, action) {
      const { authorName, quoteText } = action.payload;
      const newQuote = {
        id: getNextId(),
        authorName,
        quoteText,
        apocryphal: false,
      };
      state.quotes.push(newQuote);
    },
  },
});

export const { toggleVisibility, deleteQuote, editQuoteAuthenticity, setHighlightedQuote, createQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
