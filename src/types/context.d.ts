type TDataProvider = {
  children: React.ReactNode;
};

type TWidget = {
  id: string;
  type: string;
  content: string;
  actionContent?: string;
};

type TStateReducer = {
  isHolding: boolean;
  itemSelected: TWidget | null;
  items: TWidget[];
};

type TActionReducer = {
  typeAction: string;
  itemSelector: TWidget;
};
