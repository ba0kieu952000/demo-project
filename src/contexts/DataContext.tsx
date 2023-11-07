"use client";

import { ACTION_NAMES, WIDGET } from "@/components/constants";
import React, { useReducer, createContext } from "react";

const initialValue = {
  isHolding: false,
  items: [],
  itemSelected: null,
};

const reducer = (state: TStateReducer, action: TActionReducer) => {
  const { isHolding, items, itemSelected } = state;
  const { typeAction, itemSelector } = action;

  switch (typeAction) {
    case ACTION_NAMES.HOLDING:
      return { ...state, isHolding: true };

    case ACTION_NAMES.REMOVE_HOLDING:
      return { ...state, isHolding: false };

    case ACTION_NAMES.ADD:
      return { ...state, items: [...items, itemSelector] };

    case ACTION_NAMES.SELECTED:
      return { ...state, itemSelected: itemSelector };

    case ACTION_NAMES.REMOVE_SELECTED:
      return { ...state, itemSelected: null };

    case ACTION_NAMES.DELETE:
      const _itemsDeleted = items.filter(
        (item) => item.id !== itemSelected?.id
      );
      return { ...state, items: _itemsDeleted, itemSelected: null };

    case ACTION_NAMES.UPDATE:
      const _itemsUpdated = items.map((item) =>
        item.id !== itemSelected?.id ? item : itemSelector
      );
      return { ...state, items: _itemsUpdated, itemSelected: itemSelector };

    default:
      throw new Error("Something went wrong");
  }
};

export const DataProvider = ({ children }: TDataProvider) => {
  const [dataContext, dispatchData] = useReducer(reducer, initialValue);

  const value = { dataContext, dispatchData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const DataContext: any = createContext({});

export default DataProvider;
